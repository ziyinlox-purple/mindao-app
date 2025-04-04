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
  useToast,
} from '@chakra-ui/react';
import { useWallet, AccountInfo } from '@aptos-labs/wallet-adapter-react';
import { MBTIPoints, MBTIDescription } from '../types/mbti';
import { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';

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
  isMinted: boolean;
  isProcessing: boolean;
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
  isMinted,
  isProcessing,
}: ResultsProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isSharing, setIsSharing] = useState(false);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  useEffect(() => {
    if (isMinted) {
      const generateQRCode = async () => {
        try {
          const shareUrl = `${window.location.origin}/share/${mbtiType}`;
          const qrCode = await QRCode.toDataURL(shareUrl);
          setQrCodeUrl(qrCode);
        } catch (err) {
          console.error('QR Code generation failed:', err);
        }
      };
      generateQRCode();
    }
  }, [isMinted, mbtiType]);

  const handleShare = async () => {
    if (!shareCardRef.current) return;
    
    setIsSharing(true);
    try {
      const canvas = await html2canvas(shareCardRef.current, {
        scale: 2,
        backgroundColor: null,
      });
      
      const imageUrl = canvas.toDataURL('image/png');
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.download = `MBTI-${mbtiType}-${timestamp}.png`;
      link.href = imageUrl;
      link.click();
      
      toast({
        title: '分享图片已保存',
        description: '你可以将图片分享给朋友们',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.error('Share image generation failed:', err);
      toast({
        title: '生成分享图片失败',
        description: '请稍后重试',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSharing(false);
    }
  };

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
        <div ref={shareCardRef}>
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
                  <img
                    src={typeInfo.imageUrl}
                    alt={`${mbtiType} 性格类型图`}
                    style={{ 
                      width: '300px',
                      height: '300px',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              )}
              {isMinted && qrCodeUrl && (
                <Box mt={4}>
                  <img
                    src={qrCodeUrl}
                    alt="Share QR Code"
                    style={{
                      width: '200px',
                      height: '200px',
                    }}
                  />
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    扫描二维码，开始你的MBTI之旅
                  </Text>
                </Box>
              )}
              <Text fontSize="sm" color="gray.500">
                生成时间：{timestamp}
              </Text>
            </VStack>
          </Card>
        </div>
        
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
                {typeInfo.characteristics.map((trait: string, index: number) => (
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
                {typeInfo.careerSuggestions.map((career: string, index: number) => (
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
                {typeInfo.interactionTips.tips.map((tip: string, index: number) => (
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
                  {typeInfo.developmentAreas.strengths.map((strength: string, index: number) => (
                    <ListItem key={index}>{strength}</ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>需要改进：</Text>
                <UnorderedList spacing={2}>
                  {typeInfo.developmentAreas.improvements.map((improvement: string, index: number) => (
                    <ListItem key={index}>{improvement}</ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box>
                <Text fontWeight="semibold" mb={2}>发展建议：</Text>
                <UnorderedList spacing={2}>
                  {typeInfo.developmentAreas.suggestions.map((suggestion: string, index: number) => (
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
            onClick={isMinted ? handleShare : onMint}
            isLoading={isProcessing || isSharing}
            loadingText={isSharing ? "生成分享图片中..." : "铸造中..."}
          >
            {isMinted ? 'Share' : 'Mint your MinDAO SBT'}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onRetakeTest}
            isDisabled={isProcessing}
          >
            重新测试
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
} 