import { useState, useCallback } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useToast } from '@chakra-ui/react';
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { console } from 'inspector';
import { MBTIPoints } from '../types/mbti';

const config = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(config);

export function useWalletIntegration() {
  const { connect, account, connected, disconnect, signAndSubmitTransaction } = useWallet();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const toast = useToast();

  const handleWalletConnection = useCallback(async () => {
    if (connected) {
      await disconnect();
      toast({
        title: '钱包已断开连接',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } else {
      try {
        await connect('petra');
        toast({
          title: '钱包连接成功',
          description: '现在你可以铸造你的 MBTI SBT 了',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: '连接失败',
          description: '请确保已安装 Petra 钱包并解锁',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.error('Wallet connection error:', error);
      }
    }
  }, [connect, connected, disconnect, toast]);

  const handleMint = useCallback(async (
    mbtiType: string,
    timestamp: string,
    points: MBTIPoints
  ) => {
    if (!connected || !account) {
      toast({
        title: '请先连接钱包',
        description: '铸造 SBT 需要连接钱包',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsProcessing(true);
    try {
      toast({
        title: '准备铸造',
        description: '请在钱包中确认交易',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });

      console.log('Minting SBT with type:', mbtiType);

      const response = await signAndSubmitTransaction({
        data: {
          typeArguments: [],
          function:"0x8005443d3f7c08e080aa0a69f8a04c19847824f748c1d15669151ed28823ec60::MinDao::mint_minDao_token_by_user",
          functionArguments:[
            mbtiType
          ]
        },
      });
      
      toast({
        title: '交易已提交',
        description: '正在等待确认...',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });

      const txn = await aptos.waitForTransaction({
        transactionHash: response.hash,
      });

      setIsMinted(true);
      toast({
        title: 'MinDAO SBT 铸造成功！',
        description: '你的 MBTI SBT 已经铸造完成',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      return txn;
    } catch (error: any) {
      console.error('Mint error:', error);
      toast({
        title: '铸造失败',
        description: error.message || '请稍后重试',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      throw error;
    } finally {
      setIsProcessing(false);
    }
  }, [account, connected, signAndSubmitTransaction, toast]);

  const resetMintStatus = () => {
    setIsMinted(false);
  };

  return {
    connected,
    account,
    isProcessing,
    isMinted,
    handleWalletConnection,
    handleMint,
    resetMintStatus,
    disconnect,
  };
} 