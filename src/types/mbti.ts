export interface Question {
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  key: string;
  points: {
    EI?: number;
    SN?: number;
    TF?: number;
    JP?: number;
  };
}

export interface MBTIPoints {
  first: { I: number; E: number };
  second: { N: number; S: number };
  third: { T: number; F: number };
  fourth: { J: number; P: number };
}

export interface MBTIDescription {
  title: string;
  description: string;
  characteristics: string[];
  careerSuggestions: string[];
  interactionTips: {
    bestTypes: string[];
    tips: string[];
  };
  developmentAreas: {
    strengths: string[];
    improvements: string[];
    suggestions: string[];
  };
  imageUrl: string;
}

export interface MBTIDescriptions {
  [key: string]: MBTIDescription;
}

export interface MBTIResult {
  type: string;
  points: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  timestamp: number;
} 