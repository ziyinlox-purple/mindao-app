'use client';

import { PetraWallet } from 'petra-plugin-wallet-adapter';
import {
  AptosWalletAdapterProvider,
  NetworkName,
} from '@aptos-labs/wallet-adapter-react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const wallets = [new PetraWallet()];
  return (
    <AptosWalletAdapterProvider 
      // @ts-ignore
      wallets={[]} 
      autoConnect={false}
      networkName={NetworkName.Testnet}
    >
      <WalletSelector />
      {children}
    </AptosWalletAdapterProvider>
  );
} 