import type { Game, NewGame } from "@/lib/game/types";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const OPEN_AI_MODEL = "gpt-4o-mini";

const PROMPT_TEMPLATE = `
I want to create a fun, age-appropriate learning game for kids that helps with {activityType}. 

Please avoid repeating any of the following games:
{recentGames}

Details about the child:
- Age group: {ageGroup}.
- Energy level: {energyLevel}.
- Number of kids: {numberOfKids}.
- Number of adults: {numberOfAdults}.

The game should:
1. Be simple and easy to set up.
2. Be fun and engaging for the child.
3. Focus on learning through play.
4. Only use simple materials that are easy to find.

Please provide:
1. A playful game title.
2. A short description of the game.
3. Step-by-step instructions on how to play.
4. Tips for making the game more engaging.
`;

const gameSchema = z.object({
  title: z.string().describe("A playful game title"),
  description: z
    .string()
    .describe("A short 1-2 sentence description of the game"),
  instructions: z
    .array(z.string())
    .describe("Step-by-step instructions on how to play"),
  tips: z.array(z.string()).describe("Tips for making the game more engaging"),
});

export type GeneratedGame = z.infer<typeof gameSchema>;

export interface GameRequest {
  activityType: "reading" | "writing" | "maths";
  ageGroup: "3-5" | "6-8" | "9-12";
  energyLevel: "low" | "medium" | "high";
  numberOfKids: "1" | "2" | "3" | "4+";
  numberOfAdults: "1" | "2" | "3+";
}

export async function generateGameWithAI(
  gameRequest: GameRequest,
  recentGames: Game[],
): Promise<NewGame> {
  const promptTemplate = PromptTemplate.fromTemplate(PROMPT_TEMPLATE);

  const llm = new ChatOpenAI({
    model: OPEN_AI_MODEL,
    temperature: 1.0,
  });

  const structuredLlm = llm.withStructuredOutput(gameSchema, {
    name: "game",
  });

  const runnableRagChain = RunnableSequence.from([
    promptTemplate,
    structuredLlm,
  ]);

  const recentGamesString = JSON.stringify(
    recentGames.map((game) => ({
      title: game.title,
      description: game.description,
    })),
  );

  const result = await runnableRagChain.invoke({
    activityType: gameRequest.activityType,
    ageGroup: gameRequest.ageGroup,
    energyLevel: gameRequest.energyLevel,
    numberOfKids: gameRequest.numberOfKids,
    numberOfAdults: gameRequest.numberOfAdults,
    recentGames: recentGamesString,
  });

  return {
    title: result.title,
    description: result.description,
    instructions: result.instructions,
    tips: result.tips,

    activityType: gameRequest.activityType,
    ageGroup: gameRequest.ageGroup,
    energyLevel: gameRequest.energyLevel,
    numberOfKids: gameRequest.numberOfKids,
    numberOfAdults: gameRequest.numberOfAdults,
  };
}
