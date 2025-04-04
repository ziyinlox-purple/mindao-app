'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);
      
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return <Text fontSize="xl" fontFamily="handwriting">{displayText}</Text>;
};

const MotionBox = motion(Box);

interface WelcomeProps {
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <Container maxW="container.lg" h="100vh" py={10}>
      <Box
        position="relative"
        bg="white"
        borderRadius="xl"
        boxShadow="lg"
        p={8}
        minH="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border="2px solid black"
        overflow="hidden"
      >
        <VStack spacing={6} align="stretch" maxW="600px" mx="auto">
          <TypingText text="Hey, fren!" delay={500} />
          <TypingText 
            text="I'm the ferryman of MINDAO, welcome here."
            delay={1500}
          />
          <TypingText 
            text="Are you ready to start your journey?"
            delay={3000}
          />
          
          <Box position="relative" mt={8} textAlign="center" h="400px">
            <motion.div
              initial={{ 
                x: "-100%",
                y: "100%",
                scale: 0.2,
                opacity: 0 
              }}
              animate={{ 
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
              }}
              transition={{ 
                duration: 1.5,
                delay: 4,
                ease: "easeOut"
              }}
            >
              <Image
                src="/images/ferryman.png"
                alt="Ferryman"
                width={300}
                height={400}
                style={{ margin: 'auto', objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </Box>
          
          <Flex justify="flex-end" mt={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5 }}
            >
              <Button
                onClick={onStart}
                variant="outline"
                size="lg"
              >
                Confirm
              </Button>
            </motion.div>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
} 