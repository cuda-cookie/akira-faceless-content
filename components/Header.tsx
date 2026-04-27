'use client';
import Link from 'next/link';
import { Film, Grid3x3, BookMarked, MessageCircle, RotateCcw, Map } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid #e0e0e0',
      padding: '0 1.5rem', height: '68px',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        height: '100%', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <Film size={24} color="#ff2c2c" />
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
            Faceless<span style={{ fontSize: '12px', color: '#999', fontWeight: 400, marginLeft: '4px' }}>フェイスレス</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/roadmap" style={{
            fontSize: '13px', color: '#666', padding: '8px 14px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ff2c2c';
            e.currentTarget.style.background = 'rgba(255, 44, 44, 0.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.background = 'transparent';
          }}>
            <Map size={16} /> Roadmap
          </Link>
          <Link href="/catalog" style={{
            fontSize: '13px', color: '#666', padding: '8px 14px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ff2c2c';
            e.currentTarget.style.background = 'rgba(255, 44, 44, 0.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.background = 'transparent';
          }}>
            <Grid3x3 size={16} /> Catalog
          </Link>
          <Link href="/glossary" style={{
            fontSize: '13px', color: '#666', padding: '8px 14px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ff2c2c';
            e.currentTarget.style.background = 'rgba(255, 44, 44, 0.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.background = 'transparent';
          }}>
            <BookMarked size={16} /> Glossary
          </Link>
          <Link href="/ai" style={{
            fontSize: '13px', color: '#666', padding: '8px 14px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ff2c2c';
            e.currentTarget.style.background = 'rgba(255, 44, 44, 0.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.background = 'transparent';
          }}>
            <MessageCircle size={16} /> Help
          </Link>
          <button onClick={() => {
            if (confirm('Reset your progress? This cannot be undone.')) {
              localStorage.removeItem('faceless-progress');
              location.reload();
            }
          }} style={{
            fontSize: '13px', color: '#666', background: 'transparent',
            border: '1px solid #e0e0e0', padding: '8px 14px',
            cursor: 'pointer', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: '6px',
            borderRadius: '4px',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ff2c2c';
            e.currentTarget.style.borderColor = '#ff2c2c';
            e.currentTarget.style.background = 'rgba(255, 44, 44, 0.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.borderColor = '#e0e0e0';
            e.currentTarget.style.background = 'transparent';
          }}>
            <RotateCcw size={16} /> Reset
          </button>
        </nav>
      </div>
    </header>
  );
}
