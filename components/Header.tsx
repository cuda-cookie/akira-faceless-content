'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PHASES, getTotalLessons } from '@/data/phases';
import { useProgress } from '@/components/ProgressProvider';
import { Home, Map, Grid3x3, BookMarked, Flame, Wrench, Video, BookOpen, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const { completedLessons } = useProgress();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const totalLessons = getTotalLessons();
  const progress = Math.round((completedLessons.size / totalLessons) * 100);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={18} /> },
    { name: 'Catalog', path: '/catalog', icon: <Grid3x3 size={18} /> },
    { name: 'Roadmap', path: '/roadmap', icon: <Map size={18} /> },
    { name: 'Profile', path: '/profile', icon: <User size={18} /> },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: isScrolled ? '1px solid rgba(255, 44, 44, 0.1)' : '1px solid transparent',
      padding: isScrolled ? '10px 0' : '16px 0',
      height: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="tech-border" style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            overflow: 'hidden'
          }}>
            <img src="/logo.jpeg" alt="AKIRA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em', lineHeight: 1 }}>
              AKIRA<span style={{ color: '#ff2c2c' }}>FACELESS</span>
            </div>
            <div style={{ fontSize: '10px', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
              AKIRAFACELESS-CONTENT // OS
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  color: isActive ? '#ff2c2c' : '#666',
                  background: isActive ? 'rgba(255, 44, 44, 0.05)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ff2c2c';
                    e.currentTarget.style.background = 'rgba(255, 44, 44, 0.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#666';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.icon}
                <span style={{ display: 'none' }} className="lg:block">{item.name}</span>
              </Link>
            );
          })}
          
          <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.05)', margin: '0 8px' }} />

          {/* Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '8px' }}>
            <div style={{ textAlign: 'right', display: 'none' }} className="md:block">
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1 }}>{progress}%</div>
              <div style={{ fontSize: '9px', color: '#999', fontWeight: 600, marginTop: '2px' }}>MASTERED</div>
            </div>
            <div style={{ position: 'relative', width: '32px', height: '32px' }}>
              <svg viewBox="0 0 36 36" style={{ width: '32px', height: '32px', transform: 'rotate(-90deg)' }}>
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#ff2c2c" strokeWidth="3" 
                  strokeDasharray={`${progress}, 100`} strokeLinecap="round" 
                  style={{ transition: 'stroke-dasharray 1s ease-out', filter: 'drop-shadow(0 0 4px rgba(255, 44, 44, 0.4))' }}
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .lg\:block { display: block !important; }
        }
        @media (min-width: 768px) {
          .md\:block { display: block !important; }
        }
      `}</style>
    </header>
  );
}
