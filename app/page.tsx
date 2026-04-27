'use client';

import Link from 'next/link';
import { PHASES, getTotalLessons } from '@/data/phases';
import { useProgress } from '@/components/ProgressProvider';
import { useEffect, useState } from 'react';
import { Rocket, BookOpen, Wrench, Pencil, Video, DollarSign, TrendingUp, Users, Smartphone, Zap, Trophy, CheckCircle2, ArrowRight, Flame } from 'lucide-react';

export default function Home() {
  const { completedLessons } = useProgress();
  const [counter, setCounter] = useState(0);
  const totalLessons = getTotalLessons();

  useEffect(() => {
    if (counter < completedLessons.size) {
      const timer = setTimeout(() => setCounter(counter + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [counter, completedLessons.size]);

  const completionPercentage = Math.round(((counter) / totalLessons) * 100);

  const moduleIcons: { [key: number]: React.ReactNode } = {
    0: <Rocket size={40} />,
    1: <BookOpen size={40} />,
    2: <Wrench size={40} />,
    3: <Pencil size={40} />,
    4: <Video size={40} />,
    5: <DollarSign size={40} />,
    6: <TrendingUp size={40} />,
    7: <Users size={40} />,
    8: <Smartphone size={40} />,
    9: <Zap size={40} />,
    10: <Trophy size={40} />,
  };

  return (
    <div style={{
      paddingTop: '68px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 44, 44, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 44, 44, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(32px, 5vw, 64px) 1.5rem', position: 'relative', zIndex: 1 }}>
        <section style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
            <Flame size={32} color="#ff2c2c" />
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 800, margin: 0, background: 'linear-gradient(135deg, #ff2c2c 0%, #ff6b6b 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Faceless Video Mastery
            </h1>
          </div>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '16px', maxWidth: '600px', margin: '0 auto 16px' }}>
            Master the complete system for building an automated video empire
          </p>
          <p style={{ fontSize: '14px', color: '#999', marginBottom: '56px' }}>
            11 Modules • 66 Lessons • <span style={{ color: '#ff2c2c', fontWeight: 600 }}>{counter}</span> Completed
          </p>

          {/* Enhanced Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}>
            <div style={{
              padding: '28px 20px',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 44, 44, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(255, 44, 44, 0.1)',
              transition: 'all 0.3s ease',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(255, 44, 44, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 44, 44, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 44, 44, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 44, 44, 0.2)';
            }}>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#ff2c2c', marginBottom: '8px' }}>{counter}</div>
              <div style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Completed</div>
            </div>
            <div style={{
              padding: '28px 20px',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid #e0e0e0',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s ease',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#1a1a1a', marginBottom: '8px' }}>{totalLessons}</div>
              <div style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Total</div>
            </div>
            <div style={{
              padding: '28px 20px',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(52, 168, 224, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(52, 168, 224, 0.1)',
              transition: 'all 0.3s ease',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(52, 168, 224, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(52, 168, 224, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(52, 168, 224, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(52, 168, 224, 0.2)';
            }}>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#34a8e0', marginBottom: '8px' }}>{completionPercentage}%</div>
              <div style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Progress</div>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.6)',
              height: '16px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 44, 44, 0.1)',
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(10px)',
            }}>
              <div
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)`,
                  width: `${completionPercentage}%`,
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 0 20px rgba(255, 44, 44, 0.6)',
                }}
              />
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 48px 0', color: '#1a1a1a', textAlign: 'center' }}>
            Master All 11 Modules <span style={{ fontSize: '16px', color: '#999', fontWeight: 400 }}>(全てのモジュール)</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {PHASES.map((phase) => {
              const phaseProgress = Array.from(completedLessons).filter((lessonId) =>
                lessonId.startsWith(`${phase.id}:`)
              ).length;
              const totalInPhase = phase.lessons.length;
              const isComplete = phaseProgress === totalInPhase && totalInPhase > 0;
              const firstLessonPath = phase.lessons[0].path?.split('/');

              return (
                <Link
                  key={phase.id}
                  href={`/lessons/${firstLessonPath?.[1]}/${firstLessonPath?.[2]}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      padding: '32px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: `1px solid ${isComplete ? 'rgba(34, 177, 76, 0.3)' : 'rgba(255, 44, 44, 0.1)'}`,
                      borderRadius: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      backgroundColor: '#ffffff',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      backdropFilter: 'blur(10px)',
                      boxShadow: isComplete
                        ? '0 12px 32px rgba(34, 177, 76, 0.15)'
                        : '0 4px 16px rgba(0, 0, 0, 0.05)',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLDivElement;
                      target.style.transform = 'translateY(-8px)';
                      target.style.boxShadow = isComplete
                        ? '0 20px 48px rgba(34, 177, 76, 0.25)'
                        : '0 20px 48px rgba(255, 44, 44, 0.2)';
                      target.style.borderColor = isComplete ? 'rgba(34, 177, 76, 0.6)' : 'rgba(255, 44, 44, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLDivElement;
                      target.style.transform = 'translateY(0)';
                      target.style.boxShadow = isComplete
                        ? '0 12px 32px rgba(34, 177, 76, 0.15)'
                        : '0 4px 16px rgba(0, 0, 0, 0.05)';
                      target.style.borderColor = isComplete ? 'rgba(34, 177, 76, 0.3)' : 'rgba(255, 44, 44, 0.1)';
                    }}
                  >
                    {/* Completion Badge */}
                    {isComplete && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          background: 'linear-gradient(135deg, #22b14c 0%, #34c759 100%)',
                          color: 'white',
                          borderRadius: '12px',
                          width: '44px',
                          height: '44px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 24px rgba(34, 177, 76, 0.3)',
                        }}
                      >
                        <CheckCircle2 size={24} />
                      </div>
                    )}

                    {/* Module Number */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      background: isComplete
                        ? 'linear-gradient(135deg, rgba(34, 177, 76, 0.1) 0%, rgba(34, 177, 76, 0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 44, 44, 0.1) 0%, rgba(255, 44, 44, 0.05) 100%)',
                      border: `2px solid ${isComplete ? '#22b14c' : '#ff2c2c'}`,
                      borderRadius: '16px',
                      color: isComplete ? '#22b14c' : '#ff2c2c',
                      fontWeight: 800,
                      fontSize: '28px',
                      marginBottom: '20px',
                      boxShadow: isComplete
                        ? '0 0 24px rgba(34, 177, 76, 0.3)'
                        : '0 0 24px rgba(255, 44, 44, 0.3)',
                    }}>
                      {String(phase.id).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div style={{ color: isComplete ? '#22b14c' : '#ff2c2c', marginBottom: '20px', opacity: 0.8 }}>
                      {moduleIcons[phase.id]}
                    </div>

                    {/* Title & Kanji */}
                    <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 4px 0', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      MODULE {String(phase.id + 1).padStart(2, '0')}
                    </h3>
                    <h4 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 12px 0', color: '#1a1a1a' }}>
                      {phase.name}
                    </h4>
                    <p style={{ fontSize: '13px', fontWeight: 600, margin: '0 0 16px 0', color: isComplete ? '#22b14c' : '#ff2c2c', letterSpacing: '0.5px' }}>
                      {phase.kanji}
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: '15px', color: '#666', margin: '0 0 20px 0', lineHeight: '1.7', flex: 1 }}>
                      {phase.desc}
                    </p>

                    {/* Progress Bar */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '12px', color: '#999', fontWeight: 500 }}>
                        <span>Progress</span>
                        <span>{phaseProgress}/{totalInPhase}</span>
                      </div>
                      <div style={{
                        background: 'rgba(0, 0, 0, 0.04)',
                        height: '8px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                      }}>
                        <div
                          style={{
                            height: '100%',
                            background: isComplete
                              ? 'linear-gradient(90deg, #22b14c 0%, #34c759 100%)'
                              : 'linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)',
                            width: `${totalInPhase > 0 ? (phaseProgress / totalInPhase) * 100 : 0}%`,
                            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: isComplete
                              ? '0 0 16px rgba(34, 177, 76, 0.5)'
                              : '0 0 16px rgba(255, 44, 44, 0.5)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ marginTop: '96px', textAlign: 'center', paddingTop: '64px', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 24px 0', color: '#1a1a1a' }}>
            Begin Your Journey Today <span style={{ fontSize: '14px', color: '#999', fontWeight: 400 }}>(今から始めましょう)</span>
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/lessons/${PHASES[0].lessons[0].path?.split('/')[1]}/${PHASES[0].lessons[0].path?.split('/')[2]}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #ff2c2c 0%, #ff6b6b 100%)',
                color: 'white',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 12px 32px rgba(255, 44, 44, 0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(255, 44, 44, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 44, 44, 0.3)';
              }}
            >
              <Flame size={20} />
              Start Learning Now
            </Link>
            <Link
              href="/roadmap"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 40px',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#1a1a1a',
                border: '1px solid rgba(255, 44, 44, 0.2)',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 44, 44, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 44, 44, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 44, 44, 0.2)';
              }}
            >
              <ArrowRight size={20} />
              View Roadmap
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
