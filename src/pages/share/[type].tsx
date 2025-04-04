import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Container,
  VStack,
  Card,
  Heading,
  Text,
  Box,
  Button,
  useToast,
} from '@chakra-ui/react';
import { mbtiDescriptions } from '../../data/mbti-descriptions';
import { MBTIDescription } from '../../types/mbti';

export default function SharePage() {
  const router = useRouter();
  const { type } = router.query;
  const toast = useToast();
  const [typeInfo, setTypeInfo] = useState<MBTIDescription | null>(null);

  useEffect(() => {
    if (type && typeof type === 'string') {
      const mbtiType = type.toUpperCase();
      const info = mbtiDescriptions[mbtiType];
      if (info) {
        setTypeInfo(info);
      } else {
        toast({
          title: '无效的MBTI类型',
          description: '请检查链接是否正确',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }, [type, toast]);

  const handleStartTest = () => {
    router.push('/');
  };

  if (!typeInfo) {
    return (
      <Container maxW="container.md" py={10}>
        <Card p={6} bg="white" boxShadow="md">
          <VStack spacing={4} align="center">
            <Heading size="lg" color="purple.600">
              加载中...
            </Heading>
          </VStack>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Card p={6} bg="white" boxShadow="md">
          <VStack spacing={4} align="center">
            <Heading size="lg" color="purple.600">
              发现一个有趣的MBTI类型：{type}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" color="purple.500">
              {typeInfo.title}
            </Text>
            <Text textAlign="center" color="gray.600">
              {typeInfo.description}
            </Text>
            {typeInfo.imageUrl && (
              <Box position="relative" width="300px" height="300px" my={4}>
                <img
                  src={typeInfo.imageUrl}
                  alt={`${type} 性格类型图`}
                  style={{ 
                    width: '300px',
                    height: '300px',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            )}
          </VStack>
        </Card>

        <Card p={6} bg="white" boxShadow="md">
          <VStack spacing={4} align="stretch">
            <Heading size="md" color="purple.500">
              性格特点
            </Heading>
            <VStack spacing={2} align="stretch">
              {typeInfo.characteristics.map((trait, index) => (
                <Text key={index}>• {trait}</Text>
              ))}
            </VStack>
          </VStack>
        </Card>

        <Card p={6} bg="white" boxShadow="md">
          <VStack spacing={4} align="stretch">
            <Heading size="md" color="purple.500">
              想知道你的MBTI类型吗？
            </Heading>
            <Text>
              参与测试，发现属于你的独特性格类型！完成测试后，你还可以获得一个专属的MBTI SBT。
            </Text>
            <Button
              colorScheme="purple"
              size="lg"
              onClick={handleStartTest}
            >
              开始测试
            </Button>
          </VStack>
        </Card>
      </VStack>
    </Container>
  );
} 