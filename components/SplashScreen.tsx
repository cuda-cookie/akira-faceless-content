'use client';

import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1)' : 'scale(1.2)',
      filter: visible ? 'blur(0)' : 'blur(40px)',
    }}>
      <div style={{ position: 'relative', marginBottom: '40px', transform: visible ? 'translateY(0)' : 'translateY(-20px)', transition: 'transform 1s ease' }}>
        <div style={{
          fontSize: '120px',
          fontWeight: 900,
          color: 'rgba(255, 44, 44, 0.08)',
          fontFamily: '"Yu Mincho", "MS Mincho", serif',
          lineHeight: 1,
          animation: 'float 4s ease-in-out infinite',
        }}>
          明
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '28px',
          fontWeight: 900,
          letterSpacing: '12px',
          color: '#1a1a1a',
          whiteSpace: 'nowrap',
          textShadow: '0 0 20px rgba(0,0,0,0.1)',
        }}>
          AKIRA
        </div>
      </div>

      <div style={{ width: '240px', height: '2px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden', position: 'relative', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #ff2c2c, #ff6b6b)',
          transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 15px rgba(255, 44, 44, 0.6)',
        }} />
      </div>

      <div style={{ marginTop: '24px', fontSize: '11px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase' }}>
        INITIALIZING SYSTEM // {progress}%
      </div>
      
      <div style={{ position: 'absolute', bottom: '60px', fontSize: '12px', color: '#999', letterSpacing: '2px', fontWeight: 600, textTransform: 'uppercase' }}>
        akirafaceless-content
      </div>
    </div>
  );
}
