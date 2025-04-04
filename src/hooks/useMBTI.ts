import { useState, useCallback } from 'react';
import { MBTIPoints } from '../types/mbti';
import { questions } from '../data/mbti-questions';

export const initialPoints: MBTIPoints = {
  first: { I: 0, E: 0 },
  second: { N: 0, S: 0 },
  third: { T: 0, F: 0 },
  fourth: { J: 0, P: 0 },
};

export function useMBTI() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(new Array(questions.length).fill(null));
  const [points, setPoints] = useState<MBTIPoints>(initialPoints);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = useCallback((questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    const oldAnswerIndex = newAnswers[questionIndex];
    
    // Remove point from old answer if exists
    if (oldAnswerIndex !== null) {
      const oldAnswer = questions[questionIndex].answer[oldAnswerIndex];
      setPoints(prev => ({
        ...prev,
        [oldAnswer.key]: {
          ...prev[oldAnswer.key as keyof MBTIPoints],
          [oldAnswer.point]: prev[oldAnswer.key as keyof MBTIPoints][oldAnswer.point as keyof MBTIPoints[keyof MBTIPoints]] - 1
        }
      }));
    }
    
    // Add point for new answer
    const newAnswer = questions[questionIndex].answer[answerIndex];
    setPoints(prev => ({
      ...prev,
      [newAnswer.key]: {
        ...prev[newAnswer.key as keyof MBTIPoints],
        [newAnswer.point]: prev[newAnswer.key as keyof MBTIPoints][newAnswer.point as keyof MBTIPoints[keyof MBTIPoints]] + 1
      }
    }));
    
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);

    // Auto move to next question or show result
    if (questionIndex < questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  }, [answers]);

  const calculateMBTIType = useCallback(() => {
    return [
      points.first.E > points.first.I ? 'E' : 'I',
      points.second.S > points.second.N ? 'S' : 'N',
      points.third.T > points.third.F ? 'T' : 'F',
      points.fourth.J > points.fourth.P ? 'J' : 'P',
    ].join('');
  }, [points]);

  const handlePrevious = useCallback(() => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  }, []);

  const handleRetakeTest = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setPoints(initialPoints);
    setShowResult(false);
  }, []);

  const calculatePercentage = useCallback((value1: number, value2: number) => {
    const total = value1 + value2;
    return total === 0 ? 50 : Math.round((value1 / total) * 100);
  }, []);

  return {
    currentQuestion,
    answers,
    points,
    showResult,
    handleAnswer,
    calculateMBTIType,
    handlePrevious,
    handleRetakeTest,
    calculatePercentage,
    totalQuestions: questions.length,
  };
} 