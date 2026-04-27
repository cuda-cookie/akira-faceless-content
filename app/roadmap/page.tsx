'use client';

import Link from 'next/link';
import { PHASES, getTotalLessons } from '@/data/phases';
import { useProgress } from '@/components/ProgressProvider';
import { useState, useEffect } from 'react';
import { CheckCircle2, Zap, TrendingUp, Sparkles, Flag, ArrowRight, Rocket } from 'lucide-react';

export default function RoadmapPage() {
  const { completedLessons } = useProgress();
  const [counter, setCounter] = useState(0);
  const totalLessons = getTotalLessons();

  useEffect(() => {
    if (counter < completedLessons.size) {
      const timer = setTimeout(() => setCounter(counter + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [counter, completedLessons.size]);

  const completionPercentage = Math.round((counter / totalLessons) * 100);

  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #fcfcfc 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Kanji Watermarks */}
      <div className="kanji-watermark" style={{ top: '5%', left: '-5%', opacity: 0.02 }}>道</div>
      <div className="kanji-watermark" style={{ bottom: '10%', right: '-5%', opacity: 0.02 }}>進</div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'clamp(32px, 8vw, 80px) 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <section style={{ marginBottom: '80px', textAlign: 'center', animation: 'fadeIn 1s ease-out' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255, 44, 44, 0.05)', borderRadius: '20px', color: '#ff2c2c', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '24px' }}>
            <Flag size={14} /> YOUR STRATEGIC ROADMAP
          </div>
          <h1 style={{ fontWeight: 900, marginBottom: '16px', color: '#1a1a1a', letterSpacing: '-0.03em' }}>
            The Path to Mastery
          </h1>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}>
            Track your evolution from an observer to a master of automated faceless content empires.
          </p>

          {/* Progress Overview Card */}
          <div className="glass-card" style={{ padding: '40px', marginBottom: '80px', border: '1px solid rgba(255, 44, 44, 0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#999', letterSpacing: '1px', marginBottom: '8px' }}>OVERALL PROGRESS</div>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#ff2c2c', lineHeight: 1 }}>{completionPercentage}%</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#666', marginTop: '8px' }}>Mastery Achieved</div>
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '13px', fontWeight: 700 }}>
                  <span style={{ color: '#1a1a1a' }}>Milestones Unlocked</span>
                  <span style={{ color: '#ff2c2c' }}>{counter} / {totalLessons}</span>
                </div>
                <div style={{ height: '12px', background: 'rgba(0,0,0,0.04)', borderRadius: '10px', overflow: 'hidden', padding: '2px' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${completionPercentage}%`, 
                    background: 'linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)',
                    borderRadius: '10px',
                    transition: 'width 1s cubic-bezier(0.65, 0, 0.35, 1)',
                    boxShadow: '0 0 15px rgba(255, 44, 44, 0.4)'
                  }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255, 44, 44, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff2c2c' }}>
                  <Rocket size={32} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section style={{ animation: 'fadeIn 1s ease-out 0.2s both' }}>
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              bottom: '40px', 
              left: '40px', 
              width: '2px', 
              background: 'linear-gradient(to bottom, #ff2c2c, #f0f0f0)',
              opacity: 0.2,
              zIndex: 0
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
              {PHASES.map((phase, idx) => {
                const phaseProgress = Array.from(completedLessons).filter((lessonId) =>
                  lessonId.startsWith(`${phase.id}:`)
                ).length;
                const totalInPhase = phase.lessons.length;
                const isPhaseComplete = phaseProgress === totalInPhase && totalInPhase > 0;
                const firstLessonPath = phase.lessons[0].path?.split('/');

                return (
                  <div key={phase.id} style={{ position: 'relative', paddingLeft: '80px' }}>
                    {/* Timeline Node */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '20px', 
                      left: '26px', 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                      background: isPhaseComplete ? '#22b14c' : (phaseProgress > 0 ? '#ff2c2c' : '#fff'),
                      border: `3px solid ${isPhaseComplete ? '#22b14c' : '#ff2c2c'}`,
                      boxShadow: isPhaseComplete ? '0 0 15px rgba(34, 177, 76, 0.4)' : '0 0 15px rgba(255, 44, 44, 0.2)',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isPhaseComplete ? 'white' : (phaseProgress > 0 ? 'white' : '#ff2c2c'),
                      fontSize: '12px',
                      fontWeight: 900
                    }}>
                      {isPhaseComplete ? <CheckCircle2 size={16} /> : idx + 1}
                    </div>

                    <div 
                      className="glass-card" 
                      style={{ 
                        padding: '40px', 
                        border: `1px solid ${isPhaseComplete ? 'rgba(34, 177, 76, 0.2)' : 'rgba(255, 44, 44, 0.1)'}`,
                        backgroundColor: isPhaseComplete ? 'rgba(34, 177, 76, 0.02)' : 'rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 800, color: isPhaseComplete ? '#22b14c' : '#ff2c2c', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                            PHASE {String(phase.id).padStart(2, '0')} • {phase.kanji}
                          </div>
                          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
                            {phase.name}
                          </h3>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '18px', fontWeight: 900, color: isPhaseComplete ? '#22b14c' : '#1a1a1a' }}>
                            {phaseProgress} / {totalInPhase}
                          </div>
                          <div style={{ fontSize: '10px', fontWeight: 700, color: '#999' }}>LESSONS MASTERED</div>
                        </div>
                      </div>

                      <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '600px' }}>
                        {phase.desc}
                      </p>

                      {/* Lesson Progress Dots */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                        {phase.lessons.map((lesson, lIdx) => {
                          const isDone = completedLessons.has(lesson.path || '');
                          return (
                            <Link 
                              key={lIdx} 
                              href={`/lessons/${lesson.path?.split('/')[1]}/${lesson.path?.split('/')[2]}`}
                              style={{ 
                                width: '12px', 
                                height: '12px', 
                                borderRadius: '3px', 
                                background: isDone ? '#22b14c' : 'rgba(0,0,0,0.05)',
                                border: isDone ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.2s'
                              }}
                              title={lesson.name}
                              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'}
                              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                          );
                        })}
                      </div>

                      <Link
                        href={`/lessons/${firstLessonPath?.[1]}/${firstLessonPath?.[2]}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 24px',
                          background: isPhaseComplete ? 'rgba(34, 177, 76, 0.05)' : 'rgba(255, 44, 44, 0.05)',
                          color: isPhaseComplete ? '#22b14c' : '#ff2c2c',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: 800,
                          transition: 'all 0.2s',
                          border: `1px solid ${isPhaseComplete ? 'rgba(34, 177, 76, 0.1)' : 'rgba(255, 44, 44, 0.1)'}`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = isPhaseComplete ? 'rgba(34, 177, 76, 0.1)' : 'rgba(255, 44, 44, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = isPhaseComplete ? 'rgba(34, 177, 76, 0.05)' : 'rgba(255, 44, 44, 0.05)';
                        }}
                      >
                        {isPhaseComplete ? 'Review Phase' : 'Continue Evolution'} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Motivation */}
        <section style={{ marginTop: '100px', textAlign: 'center', animation: 'fadeIn 1s ease-out 0.4s both' }}>
          <div style={{ display: 'inline-block', padding: '48px', borderRadius: '32px', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
            <Sparkles size={32} color="#ff2c2c" style={{ marginBottom: '24px' }} className="animate-float" />
            <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px' }}>The Journey Never Ends</h2>
            <p style={{ color: '#666', marginBottom: '32px', maxWidth: '450px' }}>
              Every lesson is a brick in your empire. Stay disciplined. Stay focused. Stay faceless.
            </p>
            <Link href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #ff2c2c 0%, #ff6b6b 100%)',
              color: 'white',
              borderRadius: '14px',
              textDecoration: 'none',
              fontWeight: 800,
              boxShadow: '0 12px 32px rgba(255, 44, 44, 0.3)',
            }}>
              <TrendingUp size={20} /> Back to Command Center
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
