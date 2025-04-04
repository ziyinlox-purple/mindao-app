'use client';

import {
  Container,
  VStack,
  Card,
  Heading,
  Text,
  Box,
  Button,
  Progress,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import { MBTIPoints, MBTIDescription } from '../types/mbti';
import { AccountInfo } from '@aptos-labs/wallet-adapter-core';

interface ResultsProps {
  mbtiType: string;
  typeInfo: MBTIDescription;
  points: MBTIPoints;
  timestamp: string;
  calculatePercentage: (value1: number, value2: number) => number;
  connected: boolean;
  account: AccountInfo | null;
  onMint: () => void;
  onRetakeTest: () => void;
}

export function Results({
  mbtiType,
  typeInfo,
  points,
  timestamp,
  calculatePercentage,
  connected,
  account,
  onMint,
  onRetakeTest,
}: ResultsProps) {
  const renderProgressBar = (
    dimension: string,
    value1: number,
    value2: number,
    label1: string,
    label2: string
  ) => {
    const percentage = calculatePercentage(value1, value2);

    return (
      <Box w="100%" mb={6}>
        <Flex justify="space-between" mb={2}>
          <Text fontWeight="bold">{label1}</Text>
          <Text fontWeight="bold">{percentage}%</Text>
          <Text fontWeight="bold">{label2}</Text>
        </Flex>
        <Progress 
          value={percentage} 
          colorScheme="purple" 
          borderRadius="full"
          height="12px"
          bg="gray.200"
        />
      </Box>
    );
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Card p={6} bg="white" boxShadow="md">
          <VStack spacing={4} align="center">
            <Heading size="lg" color="purple.600">
              你的MBTI类型是：{mbtiType}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" color="purple.500">
              {typeInfo.title}
            </Text>
            <Text textAlign="center" color="gray.600">
              {typeInfo.description}
            </Text>
            {typeInfo.imageUrl && (
              <Box position="relative" width="300px" height="300px" my={4}>
                <Image
                  src={typeInfo.imageUrl}
                  alt={`${mbtiType} 性格类型图`}
                  width={300}
                  height={300}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            )}
            <Text fontSize="sm" color="gray.500">
              生成时间：{timestamp}
            </Text>
          </VStack>
        </Card>
        
        <Card p={6} bg="white" boxShadow="md">
          <VStack spacing={4} align="stretch">
            {renderProgressBar(
              'EI',
              points.first.I,
              points.first.E,
              '精力方向（内向）',
              '（外向）'
            )}
            {renderProgressBar(
              'SN',
              points.second.N,
              points.second.S,
              '信息获取（直觉）',
              '（感知）'
            )}
            {renderProgressBar(
              'TF',
              points.third.F,
              points.third.T,
              '决策方式（情感）',
              '（思维）'
            )}
            {renderProgressBar(
              'JP',
              points.fourth.P,
              points.fourth.J,
              '生活方式（知觉）',
              '（判断）'
            )}
          </VStack>
        </Card>

        {typeInfo.characteristics && (
          <Card p={6} bg="white" boxShadow="md">
            <VStack spacing={4} align="stretch">
              <Heading size="md" color="purple.500">
                性格特点
              </Heading>
              <UnorderedList spacing={2}>
                {typeInfo.characteristics.map((trait, index) => (
                  <ListItem key={index}>{trait}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </Card>
        )}

        {typeInfo.careerSuggestions && (
          <Card p={6} bg="white" boxShadow="md">
            <VStack spacing={4} align="stretch">
              <Heading size="md" color="purple.500">
                职业建议
              </Heading>
              <UnorderedList spacing={2}>
                {typeInfo.careerSuggestions.map((career, index) => (
                  <ListItem key={index}>{career}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </Card>
        )}

        {typeInfo.interactionTips && (
          <Card p={6} bg="white" boxShadow="md">
            <VStack spacing={4} align="stretch">
              <Heading size="md" color="purple.500">
                互动建议
              </Heading>
              <Text fontWeight="semibold">
                最佳互动类型：{typeInfo.interactionTips.bestTypes.join(', ')}
              </Text>
              <UnorderedList spacing={2}>
                {typeInfo.interactionTips.tips.map((tip, index) => (
                  <ListItem key={index}>{tip}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </Card>
        )}

        {typeInfo.developmentAreas && (
          <Card p={6} bg="white" boxShadow="md">
            <VStack spacing={6} align="stretch">
              <Heading size="md" color="purple.500">
                个人发展建议
              </Heading>
              
              <Box>
                <Text fontWeight="semibold" mb={2}>优势特点：</Text>
                <UnorderedList spacing={2}>
                  {typeInfo.developmentAreas.strengths.map((strength, index) => (
                    <ListItem key={index}>{strength}</ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>需要改进：</Text>
                <UnorderedList spacing={2}>
                  {typeInfo.developmentAreas.improvements.map((improvement, index) => (
                    <ListItem key={index}>{improvement}</ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>发展建议：</Text>
                <UnorderedList spacing={2}>
                  {typeInfo.developmentAreas.suggestions.map((suggestion, index) => (
                    <ListItem key={index}>{suggestion}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </VStack>
          </Card>
        )}
        
        <VStack spacing={4} mt={6}>
          <Button
            colorScheme="purple"
            size="lg"
            width="full"
            onClick={onMint}
            isLoading={false}
            loadingText="铸造中..."
          >
            Mint your MinDAO SBT
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onRetakeTest}
          >
            重新测试
          </Button>
          
          {connected && account && (
            <Text fontSize="sm" color="gray.500">
              当前钱包地址: {account.address.toString().slice(0, 6)}...{account.address.toString().slice(-4)}
            </Text>
          )}
        </VStack>
      </VStack>
    </Container>
  );
} 