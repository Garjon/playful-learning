import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const OPEN_AI_MODEL = "gpt-4o-mini";

const PROMPT_TEMPLATE = `
I want to create a fun, age-appropriate learning game for kids that helps with {activityType}. 

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

export type Game = z.infer<typeof gameSchema>;

export interface GameRequest {
  activityType: string;
  ageGroup: string;
  energyLevel: string;
  numberOfKids: string;
  numberOfAdults: string;
}

export async function generateGameWithAI(
  gameRequest: GameRequest,
): Promise<Game> {
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

  const result = await runnableRagChain.invoke({
    activityType: gameRequest.activityType,
    ageGroup: gameRequest.ageGroup,
    energyLevel: gameRequest.energyLevel,
    numberOfKids: gameRequest.numberOfKids,
    numberOfAdults: gameRequest.numberOfAdults,
  });

  return result;
}
