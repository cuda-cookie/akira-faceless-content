'use client';

import '../app/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ProgressProvider } from '@/components/ProgressProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('akira_splash_seen');
    if (!hasSeenSplash) {
      setShowSplash(true);
      sessionStorage.setItem('akira_splash_seen', 'true');
    } else {
      setIsReady(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsReady(true);
  };

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <title>AKIRA | akirafacelesscontent</title>
        <meta name="description" content="11 Strategic Phases. Master the art of faceless content automation." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0 }}>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        
        {/* Tech Wipe Animation Element */}
        <div key={`wipe-${pathname}`} className="tech-page-wipe" />

        <ThemeProvider>
          <ProgressProvider>
            <div key={`layout-${pathname}`} className={isReady ? 'is-ready' : 'is-loading'}>
              <Header />
              <main 
                style={{ flex: 1 }} 
                className="page-transition-wrapper"
              >
                {children}
              </main>
              <Footer />
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
