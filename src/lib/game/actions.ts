"use server";

import { generateGameWithAI } from "@/lib/ai/generate-game";
import { insertGame } from "@/lib/db/games";
import { redirect } from "next/navigation";
import { z } from "zod";

const NewGameFormSchema = z.object({
  activity_type: z.enum(["reading", "writing", "maths"], {
    invalid_type_error: "Please select an activity type.",
  }),
  age_group: z.enum(["3-5", "6-8", "9-12"], {
    invalid_type_error: "Please select your child's age group.",
  }),
  energy_level: z.enum(["low", "medium", "high"], {
    invalid_type_error: "Please select an energy level.",
  }),
  number_of_kids: z.enum(["1", "2", "3", "4+"], {
    invalid_type_error: "Please select the number of kids participating.",
  }),
  number_of_adults: z.enum(["1", "2", "3+"], {
    invalid_type_error: "Please select the number of adults participating.",
  }),
});

export type NewGameForm = z.infer<typeof NewGameFormSchema>;

export type NewGameFormState = {
  message?: string | null;
  errors?: {
    activity_type?: string[];
    age_group?: string[];
    energy_level?: string[];
    number_of_kids?: string[];
    number_of_adults?: string[];
  };
  values?: {
    activity_type?: string;
    age_group?: string;
    energy_level?: string;
    number_of_kids?: string;
    number_of_adults?: string;
  };
};

export async function createGame(
  prevState: NewGameFormState,
  formData: FormData,
): Promise<NewGameFormState> {
  const validatedFields = NewGameFormSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!validatedFields.success) {
    return {
      message: "Looks like you missed something. Please check the form.",
      errors: validatedFields.error.flatten().fieldErrors,
      values: validatedFields.data,
    };
  }

  const {
    activity_type,
    age_group,
    energy_level,
    number_of_kids,
    number_of_adults,
  } = validatedFields.data;

  const game = await generateGameWithAI({
    activityType: activity_type,
    ageGroup: age_group,
    energyLevel: energy_level,
    numberOfKids: number_of_kids,
    numberOfAdults: number_of_adults,
  });

  const savedGameId = await insertGame(game);

  return redirect(`/games/${savedGameId}`);
}
