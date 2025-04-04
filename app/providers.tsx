'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { WalletProvider } from './wallet/WalletProvider';
import theme from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider>
        {children}
      </WalletProvider>
    </ChakraProvider>
  );
} 