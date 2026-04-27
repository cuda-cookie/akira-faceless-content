'use client';

import Link from 'next/link';
import { PHASES, getTotalLessons } from '@/data/phases';
import { useProgress } from '@/components/ProgressProvider';
import { useState, useEffect } from 'react';
import { CheckCircle2, Zap, TrendingUp } from 'lucide-react';

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
    <div style={{ paddingTop: '68px', minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(32px, 5vw, 64px) 1.5rem' }}>
        {/* Header */}
        <section style={{ marginBottom: '64px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, margin: '0 0 16px 0', color: '#1a1a1a' }}>
            Your Learning Journey
            <span style={{ fontSize: '0.5em', color: '#ff2c2c', marginLeft: '12px', fontWeight: 400 }}>道</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '48px', maxWidth: '500px', margin: '0 auto' }}>
            Track your progress through all 11 modules and 66 lessons. Each completed lesson unlocks your path forward.
          </p>

          {/* Progress Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            <div style={{
              padding: '24px',
              background: 'rgba(255,44,44,0.08)',
              border: '1px solid rgba(255,44,44,0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(255,44,44,0.1)',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ff2c2c', marginBottom: '8px' }}>{counter}</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Lessons Completed</div>
            </div>
            <div style={{
              padding: '24px',
              background: 'rgba(34,177,76,0.08)',
              border: '1px solid rgba(34,177,76,0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(34,177,76,0.1)',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#22b14c', marginBottom: '8px' }}>{totalLessons}</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Total Lessons</div>
            </div>
            <div style={{
              padding: '24px',
              background: 'rgba(52,168,224,0.08)',
              border: '1px solid rgba(52,168,224,0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(52,168,224,0.1)',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#34a8e0', marginBottom: '8px' }}>{completionPercentage}%</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Progress</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{
              background: '#e0e0e0',
              height: '12px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
            }}>
              <div
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)`,
                  width: `${completionPercentage}%`,
                  transition: 'width 0.4s ease',
                  boxShadow: '0 0 20px rgba(255, 44, 44, 0.6)',
                }}
              />
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section>
          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 40px 0', color: '#1a1a1a', textAlign: 'center' }}>
            Mastery Pathway <span style={{ fontSize: '16px', color: '#999', fontWeight: 400 }}>(学習パス)</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            {PHASES.map((phase, idx) => {
              const phaseProgress = Array.from(completedLessons).filter((lessonId) =>
                lessonId.startsWith(`${phase.id}:`)
              ).length;
              const totalInPhase = phase.lessons.length;
              const isPhaseComplete = phaseProgress === totalInPhase && totalInPhase > 0;
              const firstLessonPath = phase.lessons[0].path?.split('/');

              return (
                <div key={phase.id} style={{
                  position: 'relative',
                  padding: '28px',
                  background: 'rgba(255,255,255,0.8)',
                  border: `1px solid ${isPhaseComplete ? 'rgba(34,177,76,0.3)' : 'rgba(224,224,224,0.5)'}`,
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: isPhaseComplete
                    ? '0 8px 32px rgba(34,177,76,0.15)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 44, 44, 0.15)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isPhaseComplete
                    ? '0 8px 32px rgba(34,177,76,0.15)'
                    : '0 2px 8px rgba(0,0,0,0.04)';
                }}>
                  {/* Phase Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '56px',
                      height: '56px',
                      background: isPhaseComplete
                        ? 'linear-gradient(135deg, rgba(34,177,76,0.1) 0%, rgba(34,177,76,0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(255,44,44,0.1) 0%, rgba(255,44,44,0.05) 100%)',
                      border: `2px solid ${isPhaseComplete ? '#22b14c' : '#ff2c2c'}`,
                      borderRadius: '12px',
                      color: isPhaseComplete ? '#22b14c' : '#ff2c2c',
                      fontWeight: 700,
                      fontSize: '24px',
                      flexShrink: 0,
                      boxShadow: isPhaseComplete
                        ? '0 0 20px rgba(34,177,76,0.3)'
                        : '0 0 20px rgba(255,44,44,0.3)',
                    }}>
                      {String(phase.id).padStart(2, '0')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                          {phase.name}
                        </h3>
                        {isPhaseComplete && (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            background: 'rgba(34,177,76,0.1)',
                            color: '#22b14c',
                            padding: '4px 12px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: 500,
                          }}>
                            <CheckCircle2 size={14} /> Complete
                          </div>
                        )}
                      </div>
                      <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#999', fontWeight: 500 }}>
                        {phase.kanji}
                      </p>
                      <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px', color: '#666' }}>
                      <span>Progress</span>
                      <span style={{ fontWeight: 600, color: isPhaseComplete ? '#22b14c' : '#ff2c2c' }}>
                        {phaseProgress}/{totalInPhase} lessons
                      </span>
                    </div>
                    <div style={{
                      background: '#e0e0e0',
                      height: '6px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
                    }}>
                      <div
                        style={{
                          height: '100%',
                          background: isPhaseComplete
                            ? 'linear-gradient(90deg, #22b14c 0%, #34c759 100%)'
                            : 'linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)',
                          width: `${totalInPhase > 0 ? (phaseProgress / totalInPhase) * 100 : 0}%`,
                          transition: 'width 0.3s ease',
                          boxShadow: isPhaseComplete
                            ? '0 0 12px rgba(34,177,76,0.5)'
                            : '0 0 12px rgba(255,44,44,0.5)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Lessons Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                    {phase.lessons.map((lesson, lessonIdx) => {
                      const isLessonComplete = completedLessons.has(lesson.path || '');
                      return (
                        <Link
                          key={lessonIdx}
                          href={`/lessons/${lesson.path?.split('/')[1]}/${lesson.path?.split('/')[2]}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <div style={{
                            padding: '12px',
                            background: isLessonComplete ? 'rgba(34,177,76,0.08)' : 'rgba(255,44,44,0.04)',
                            border: `1px solid ${isLessonComplete ? 'rgba(34,177,76,0.2)' : 'rgba(224,224,224,0.5)'}`,
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            overflow: 'hidden',
                          }} onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#ff2c2c';
                            e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 44, 44, 0.2)';
                          }} onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = isLessonComplete ? 'rgba(34,177,76,0.2)' : 'rgba(224,224,224,0.5)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}>
                            <div style={{ fontSize: '11px', fontFamily: 'monospace', color: isLessonComplete ? '#22b14c' : '#999', marginBottom: '6px', fontWeight: 600, letterSpacing: '0.5px' }}>
                              {isLessonComplete ? '✓ DONE' : `${String(lessonIdx + 1).padStart(2, '0')}`}
                            </div>
                            <div style={{ fontSize: '12px', color: '#1a1a1a', fontWeight: 500, lineHeight: '1.4' }}>
                              {lesson.name}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Start Button */}
                  <Link
                    href={`/lessons/${firstLessonPath?.[1]}/${firstLessonPath?.[2]}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      background: isPhaseComplete
                        ? 'rgba(34,177,76,0.08)'
                        : 'rgba(255,44,44,0.08)',
                      color: isPhaseComplete ? '#22b14c' : '#ff2c2c',
                      border: `1px solid ${isPhaseComplete ? 'rgba(34,177,76,0.3)' : 'rgba(255,44,44,0.3)'}`,
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = isPhaseComplete
                        ? '0 0 16px rgba(34,177,76,0.3)'
                        : '0 0 16px rgba(255,44,44,0.3)';
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                    <Zap size={14} />
                    {isPhaseComplete ? 'Review Module' : 'Start Module'}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ marginTop: '80px', textAlign: 'center', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 16px 0', color: '#1a1a1a' }}>
            Ready to level up? <span style={{ fontSize: '14px', color: '#999', fontWeight: 400 }}>(レベルアップ準備完了？)</span>
          </h2>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #ff2c2c 0%, #ff6b6b 100%)',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            boxShadow: '0 8px 24px rgba(255, 44, 44, 0.3)',
            transition: 'all 0.3s ease',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 44, 44, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 44, 44, 0.3)';
          }}>
            <TrendingUp size={18} />
            Back to Dashboard
          </Link>
        </section>
      </div>
    </div>
  );
}
