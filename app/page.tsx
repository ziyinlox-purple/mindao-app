'use client';

import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Box 
      minH="100vh" 
      bgImage="url('/images/pencils-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="center">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color="gray.800"
            fontFamily="'Comic Sans MS', cursive"
          >
            MINDAO
          </Heading>
          
          <Text
            fontSize="xl"
            textAlign="center"
            color="gray.700"
            fontFamily="'Comic Sans MS', cursive"
          >
            DAO system based on personality type
          </Text>
          
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            mb={8}
            fontFamily="'Comic Sans MS', cursive"
          >
            Having fun and opportunities by your unique mind
          </Text>

          <Flex gap={8} mt={8}>
            <Link href="/become-mbtier" passHref>
              <Button
                as="a"
                size="lg"
                colorScheme="purple"
                rounded="xl"
                px={8}
                py={6}
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Becoming a MBTIer
              </Button>
            </Link>

            <Link href="/find-mbtier" passHref>
              <Button
                as="a"
                size="lg"
                colorScheme="pink"
                rounded="xl"
                px={8}
                py={6}
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Looking for MBTIer
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
} 