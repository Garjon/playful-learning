export interface Game {
  id: string;

  title: string;
  description: string;
  instructions: string[];
  tips: string[];

  activityType: "reading" | "writing" | "maths";
  ageGroup: "3-5" | "6-8" | "9-12";
  energyLevel: "low" | "medium" | "high";
  numberOfKids: "1" | "2" | "3" | "4+";
  numberOfAdults: "1" | "2" | "3+";
}

export interface NewGame extends Omit<Game, "id"> {}
