import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

import { Welcome } from './components/Welcome';
import { Question } from './components/Question';
import { Results } from './components/Results';
import { useMBTI } from './hooks/useMBTI';
import { useWalletIntegration } from './hooks/useWalletIntegration';
import { questions } from './data/mbti-questions';
import { mbtiDescriptions } from './data/mbti-descriptions';

const wallets = [new PetraWallet()];

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [timestamp, setTimestamp] = useState('');

  const {
    currentQuestion,
    answers,
    points,
    showResult,
    handleAnswer,
    calculateMBTIType,
    handlePrevious,
    handleRetakeTest,
    calculatePercentage,
    totalQuestions,
  } = useMBTI();

  const {
    connected,
    account,
    handleWalletConnection,
    handleMint,
  } = useWalletIntegration();

  useEffect(() => {
    if (showResult) {
      const now = new Date();
      setTimestamp(format(now, 'yyyy年MM月dd日 HH:mm:ss', { locale: zhCN }));
    }
  }, [showResult]);

  const handleStartTest = () => {
    setShowWelcome(false);
  };

  const handleMintClick = async () => {
    if (!connected) {
      await handleWalletConnection();
    } else {
      console.log('minting...');
      const mbtiType = calculateMBTIType();
      await handleMint(mbtiType, timestamp, points);
    }
  };

  const content = () => {
    if (showWelcome) {
      return <Welcome onStart={handleStartTest} />;
    }

    if (showResult) {
      const mbtiType = calculateMBTIType();
      const typeInfo = mbtiDescriptions[mbtiType];

      return (
        <Results
          mbtiType={mbtiType}
          typeInfo={typeInfo}
          points={points}
          timestamp={timestamp}
          calculatePercentage={calculatePercentage}
          connected={connected}
          account={account}
          onMint={handleMintClick}
          onRetakeTest={handleRetakeTest}
        />
      );
    }

    return (
      <Question
        question={questions[currentQuestion]}
        currentQuestionIndex={currentQuestion}
        totalQuestions={totalQuestions}
        selectedAnswer={answers[currentQuestion]}
        onAnswer={handleAnswer}
        onPrevious={handlePrevious}
      />
    );
  };

  return (
    <ChakraProvider>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={false}>
        {content()}
      </AptosWalletAdapterProvider>
    </ChakraProvider>
  );
}

export default App; 