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

export interface MBTIType {
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
  [key: string]: MBTIType;
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