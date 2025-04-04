export interface MBTIPoints {
  first: {
    I: number;
    E: number;
  };
  second: {
    N: number;
    S: number;
  };
  third: {
    T: number;
    F: number;
  };
  fourth: {
    J: number;
    P: number;
  };
}

export interface Answer {
  description: string;
  key: string;
  point: string;
}

export interface Question {
  question: string;
  answer: Answer[];
}

export interface InteractionTips {
  bestTypes: string[];
  tips: string[];
}

export interface DevelopmentAreas {
  strengths: string[];
  improvements: string[];
  suggestions: string[];
}

export interface MBTIDescription {
  title: string;
  description: string;
  characteristics: string[];
  careerSuggestions?: string[];
  interactionTips?: InteractionTips;
  developmentAreas?: DevelopmentAreas;
  imageUrl?: string;
}

export interface MBTIDescriptions {
  [key: string]: MBTIDescription;
} 