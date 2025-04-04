import { Box, Button, Flex } from '@chakra-ui/react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

interface HeaderProps {
  onConnect: () => void;
}

export function Header({ onConnect }: HeaderProps) {
  const { connected, account } = useWallet();

  return (
    <Flex 
      as="header" 
      width="100%" 
      py={4} 
      px={8} 
      justifyContent="flex-end"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="white"
      boxShadow="sm"
    >
      <Button
        onClick={onConnect}
        colorScheme="purple"
        variant="outline"
        size="sm"
      >
        {connected && account
          ? `${account.address?.toString().slice(0, 6)}...${account.address?.toString().slice(-4)}`
          : 'Connect Wallet'}
      </Button>
    </Flex>
  );
} 