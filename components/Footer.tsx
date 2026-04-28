'use client';

import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      padding: '80px 0 40px',
      background: 'linear-gradient(to bottom, transparent, #fafafa)',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      marginTop: '100px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="tech-border" style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              overflow: 'hidden'
            }}>
              <img src="/logo.jpeg" alt="AKIRA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '16px', fontWeight: 900, letterSpacing: '-0.02em' }}>
              AKIRA<span style={{ color: '#ff2c2c' }}>FACELESS-CONTENT</span>
            </span>
          </div>
          
          <div style={{ fontSize: '14px', color: '#999', fontWeight: 500, maxWidth: '500px' }}>
            The ultimate blueprint for building neural video empires with AKIRA-class AI automation.
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '32px', 
            fontSize: '12px', 
            fontWeight: 800, 
            color: '#1a1a1a', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            marginTop: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/ai" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff2c2c'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>AI Generator</Link>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff2c2c'} onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}>Community</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff2c2c'} onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}>Twitter</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff2c2c'} onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}>YouTube</span>
          </div>

          <div style={{ marginTop: '32px', fontSize: '12px', color: '#ccc' }}>
            &copy; {new Date().getFullYear()} akirafacelesscontent • 準備 基礎 成功
          </div>
        </div>
      </div>
    </footer>
  );
}
