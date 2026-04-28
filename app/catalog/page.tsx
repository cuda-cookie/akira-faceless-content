'use client';
import { PHASES } from '@/data/phases';
import { BookOpen, Rocket, Wrench, Pencil, Video, DollarSign, TrendingUp, Users, Smartphone, Zap, Trophy } from 'lucide-react';
import { useState } from 'react';

const iconMap = [
  <Rocket key="0" size={28} />,
  <BookOpen key="1" size={28} />,
  <Wrench key="2" size={28} />,
  <Pencil key="3" size={28} />,
  <Video key="4" size={28} />,
  <DollarSign key="5" size={28} />,
  <TrendingUp key="6" size={28} />,
  <Users key="7" size={28} />,
  <Smartphone key="8" size={28} />,
  <Zap key="9" size={28} />,
  <Trophy key="10" size={28} />,
];

export default function CatalogPage() {
  const [query, setQuery] = useState('');

  return (
    <div className="kanji-tech-bg" style={{ paddingTop: '68px', minHeight: '100vh' }}>
      <div className="scanline" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'clamp(32px, 5vw, 64px) 1.5rem', position: 'relative', zIndex: 1 }}>
        <h1 style={{ marginBottom: '12px', fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>
          Course Catalog <span style={{ fontSize: '16px', color: '#999', fontWeight: 400, marginLeft: '8px' }}>(コースカタログ)</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '32px' }}>Complete overview of all modules, lessons, and resources</p>

        <div style={{ position: 'relative', marginBottom: '48px' }}>
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#ff2c2c', fontSize: '18px', pointerEvents: 'none' }}>⌕</span>
          <input 
            type="text" 
            placeholder="Search lessons..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px 12px 8px 36px', 
              border: '1px solid rgba(255,44,44,0.3)', 
              borderRadius: '8px', 
              fontSize: '14px',
              outline: 'none',
              transition: 'border-color 0.2s',
              background: '#fff'
            }}
            onFocus={(e) => e.target.style.borderColor = '#ff2c2c'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,44,44,0.3)'}
          />
        </div>

        {PHASES.map((phase) => {
          const filteredLessons = phase.lessons.filter(lesson => 
            lesson.name.toLowerCase().includes(query.toLowerCase()) || 
            phase.name.toLowerCase().includes(query.toLowerCase()) ||
            (lesson.type && lesson.type.toLowerCase().includes(query.toLowerCase()))
          );

          if (filteredLessons.length === 0 && query !== '') return null;

          return (
            <div key={phase.id} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #ff2c2c' }}>
                <div style={{ color: '#ff2c2c', marginTop: '4px', flexShrink: 0 }}>
                  {iconMap[phase.id]}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                    Module {String(phase.id).padStart(2, '0')} · {phase.name}
                  </h2>
                  <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#999' }}>
                    <span style={{ color: '#ff2c2c', fontWeight: 500 }}>{phase.kanji}</span> · {phase.desc}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginLeft: '44px' }}>
                {filteredLessons.map((lesson, idx) => (
                  <div key={idx} style={{ padding: '14px', background: '#f8f8f8', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '14px', transition: 'all 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ff2c2c';
                      e.currentTarget.style.background = 'rgba(255, 44, 44, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.background = '#f8f8f8';
                    }}
                  >
                    <div style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>{lesson.name}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>
                      <span style={{ color: '#ff2c2c', fontWeight: 500 }}>{lesson.type}</span> · English
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {PHASES.every(phase => 
          phase.lessons.filter(lesson => 
            lesson.name.toLowerCase().includes(query.toLowerCase()) || 
            phase.name.toLowerCase().includes(query.toLowerCase()) ||
            (lesson.type && lesson.type.toLowerCase().includes(query.toLowerCase()))
          ).length === 0
        ) && query !== '' && (
          <div style={{ textAlign: 'center', color: '#999', fontSize: '14px', padding: '40px 0' }}>
            No lessons found
          </div>
        )}
      </div>
    </div>
  );
}
