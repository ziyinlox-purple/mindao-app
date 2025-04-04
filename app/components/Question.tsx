'use client';

import {
  Container,
  VStack,
  Heading,
  Progress,
  Text,
  Grid,
  Card,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Question as QuestionType } from '../types/mbti';

interface QuestionProps {
  question: QuestionType;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswer: (questionIndex: number, answerIndex: number) => void;
  onPrevious: () => void;
}

export function Question({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onPrevious,
}: QuestionProps) {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading size="lg" textAlign="center">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </Heading>
        <Progress 
          value={(currentQuestionIndex / totalQuestions) * 100} 
          w="100%" 
          colorScheme="purple"
        />
        
        <Text fontSize="xl" textAlign="center">
          {question.question}
        </Text>

        <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} w="100%">
          {question.answer.map((answer, index) => (
            <Card
              key={index}
              p={4}
              cursor="pointer"
              onClick={() => onAnswer(currentQuestionIndex, index)}
              bg={selectedAnswer === index ? 'purple.100' : 'white'}
              _hover={{ bg: 'purple.50' }}
              transition="all 0.2s"
            >
              <Text>{answer.description}</Text>
            </Card>
          ))}
        </Grid>

        <Flex justify="flex-start" w="100%" mt={6}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onClick={onPrevious}
            isDisabled={currentQuestionIndex === 0}
            colorScheme="purple"
            variant="ghost"
          >
            Previous
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
} 