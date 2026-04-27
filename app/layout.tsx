import type { Metadata } from 'next';
import '../app/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ProgressProvider } from '@/components/ProgressProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'フェイスレス | YouTube 自動化学習プラットフォーム',
  description: '11モジュール・完全ガイド。フェイスレスビデオで自動化した収入を生成する方法を学ぶ。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0 }}>
        <ThemeProvider>
          <ProgressProvider>
            <Header />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
