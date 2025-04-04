import { Providers } from './providers';
import './globals.css';
import type { Metadata } from 'next';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

export const metadata: Metadata = {
  title: 'MINDAO - DAO System Based on Personality Type',
  description: 'Having fun and opportunities by your unique mind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 