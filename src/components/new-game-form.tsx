"use client";

import { Button } from "@/components/catalyst/button";
import { ErrorMessage, Field, Label } from "@/components/catalyst/fieldset";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Select } from "@/components/catalyst/select";
import { Text } from "@/components/catalyst/text";
import { type NewGameFormState, createGame } from "@/lib/game/actions";
import { useActionState, useEffect, useState } from "react";

const INITIAL_STATE: NewGameFormState = {
  message: null,
  errors: {},
  values: {},
};

export function NewGameForm() {
  const [state, formAction] = useActionState(createGame, INITIAL_STATE);
  const [isSaving, setIsSaving] = useState(false);

  function handleSubmit() {
    setIsSaving(true);
  }

  useEffect(() => {
    if (!!state?.message || !!state.errors || !!state.game) {
      setIsSaving(false);
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-4">
      <form
        action={formAction}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <Field>
          <Label>The learning area you'd like to focus on</Label>
          <Select name="activity_type">
            <option value="reading">Reading</option>
            <option value="writing">Writing</option>
            <option value="maths">Maths</option>
          </Select>
          {!!state.errors?.activity_type && (
            <ErrorMessage>{state.errors.activity_type}</ErrorMessage>
          )}
        </Field>

        <Field>
          <Label>Your child's age group (in years)</Label>
          <Select name="age_group" defaultValue="6-8">
            <option value="3-5">3-5</option>
            <option value="6-8">6-8</option>
            <option value="9-12">9-12</option>
          </Select>
          {!!state.errors?.age_group && (
            <ErrorMessage>{state.errors.age_group}</ErrorMessage>
          )}
        </Field>

        <Field>
          <Label>What energy level would you like the activity to be?</Label>
          <Select name="energy_level" defaultValue="medium">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
          {!!state.errors?.energy_level && (
            <ErrorMessage>{state.errors.energy_level}</ErrorMessage>
          )}
        </Field>

        <Field>
          <Label>Number of kids participating</Label>
          <Select name="number_of_kids" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 or more</option>
          </Select>
          {!!state.errors?.number_of_kids && (
            <ErrorMessage>{state.errors.number_of_kids}</ErrorMessage>
          )}
        </Field>

        <Field>
          <Label>Number of adults participating</Label>
          <Select name="number_of_adults" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 or more</option>
          </Select>
          {!!state.errors?.number_of_adults && (
            <ErrorMessage>{state.errors.number_of_adults}</ErrorMessage>
          )}
        </Field>

        <Button color="indigo" type="submit" disabled={isSaving}>
          {isSaving ? "Generating activity..." : "Generate activity"}
        </Button>
      </form>

      {state.message && <div>{state.message}</div>}

      {state.game && (
        <div className="flex flex-col gap-4 rounded-xl border-4 border-purple-200 bg-gray-50 bg-purple-100 p-4 md:p-8">
          <Heading level={2}>{state.game.title}</Heading>
          <Text>{state.game.description}</Text>

          <Subheading level={3}>Instructions</Subheading>

          <ol className="flex list-decimal flex-col gap-4 pl-8">
            {state.game.instructions.map((instruction) => {
              return (
                <li className="space-y-2" key={instruction}>
                  <Text>{instruction}</Text>
                </li>
              );
            })}
          </ol>

          <Subheading level={3}>Tips</Subheading>

          <ul className="flex list-disc flex-col gap-2 pl-8 text-sm">
            {state.game.tips.map((tip) => {
              return (
                <li key={tip}>
                  <Text>{tip}</Text>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
