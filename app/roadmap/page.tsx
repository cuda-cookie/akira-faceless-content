'use client';

import React from 'react';
import { useProgress } from '@/components/ProgressProvider';
import { PHASES } from '@/data/phases';
import Link from 'next/link';
import { Rocket, BookOpen, Wrench, Pencil, Video, DollarSign, CheckCircle2, Lock } from 'lucide-react';

const iconMap: { [key: number]: any } = {
  0: Rocket,
  1: BookOpen,
  2: Wrench,
  3: Pencil,
  4: Video,
  5: DollarSign,
};

export default function RoadmapPage() {
  const { isComplete } = useProgress();

  return (
    <div className="kanji-tech-bg" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="scanline" />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '12px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>Operational Blueprint</div>
          <h1 style={{ fontSize: '48px', fontWeight: 900, fontFamily: '"Yu Mincho", serif' }}>STRATEGIC_ROADMAP.map</h1>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #ff2c2c, rgba(255,44,44,0.1))', zIndex: 0 }} />

          {PHASES.map((phase, pIdx) => {
            const phaseIcon = iconMap[phase.id] || Rocket;
            const completedCount = phase.lessons.filter(l => l.path && isComplete(l.path)).length;
            const isPhaseStarted = completedCount > 0 || pIdx === 0;

            return (
              <div key={phase.id} style={{ marginBottom: '64px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', gap: '32px' }}>
                  <div style={{ 
                    width: '42px', height: '42px', borderRadius: '50%', background: isPhaseStarted ? '#ff2c2c' : '#f5f5f5', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: isPhaseStarted ? 'white' : '#ccc',
                    boxShadow: isPhaseStarted ? '0 0 20px rgba(255,44,44,0.4)' : 'none',
                    border: '2px solid white'
                  }}>
                    {completedCount === phase.lessons.length ? <CheckCircle2 size={24} /> : React.createElement(phaseIcon, { size: 20 })}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div className="glass-card" style={{ padding: '24px', opacity: isPhaseStarted ? 1 : 0.6 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 900, color: '#ff2c2c', textTransform: 'uppercase' }}>Phase {String(phase.id).padStart(2, '0')} // {phase.kanji}</div>
                          <h3 style={{ fontSize: '20px', fontWeight: 900 }}>{phase.name}</h3>
                        </div>
                        <div style={{ fontSize: '12px', fontWeight: 800, background: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px' }}>
                          {completedCount} / {phase.lessons.length} DONE
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {phase.lessons.map((lesson, lIdx) => {
                          const done = lesson.path ? isComplete(lesson.path) : false;
                          const pathParts = lesson.path?.split('/');
                          return (
                            <Link 
                              key={lIdx} 
                              href={pathParts ? `/lessons/${pathParts[1]}/${pathParts[2]}` : '#'}
                              style={{ 
                                display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', 
                                background: done ? 'rgba(34,177,76,0.05)' : 'rgba(0,0,0,0.02)',
                                borderRadius: '6px', textDecoration: 'none', color: '#1a1a1a',
                                borderLeft: `3px solid ${done ? '#22b14c' : 'transparent'}`
                              }}
                            >
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: done ? '#22b14c' : '#ddd' }} />
                              <span style={{ fontSize: '14px', fontWeight: 600, flex: 1 }}>{lesson.name}</span>
                              {done && <CheckCircle2 size={14} color="#22b14c" />}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
