'use client';

import Link from 'next/link';
import { PHASES, getTotalLessons } from '@/data/phases';
import { useProgress } from '@/components/ProgressProvider';
import { useEffect, useState } from 'react';
import { Rocket, BookOpen, Wrench, Pencil, Video, DollarSign, TrendingUp, Users, Smartphone, Zap, Trophy, CheckCircle2, ArrowRight, Sword, Sparkles } from 'lucide-react';

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
      background: 'linear-gradient(135deg, #ffffff 0%, #fcfcfc 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Kanji Watermarks */}
      <div className="kanji-watermark" style={{ top: '10%', left: '-5%', opacity: 0.03 }}>極</div>
      <div className="kanji-watermark" style={{ bottom: '5%', right: '-5%', opacity: 0.02 }}>力</div>
      <div className="kanji-watermark" style={{ top: '40%', right: '10%', fontSize: '15vw', opacity: 0.01 }}>富</div>

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
          top: '15%',
          right: '15%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(255, 44, 44, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle, rgba(255, 44, 44, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite alternate-reverse',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(32px, 8vw, 80px) 1.5rem', position: 'relative', zIndex: 1 }}>
        <section style={{ marginBottom: '100px', textAlign: 'center', animation: 'fadeIn 1s ease-out' }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
            <div className="animate-float" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sword size={44} color="#ff2c2c" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 44, 44, 0.5))', transform: 'rotate(-45deg)' }} />
            </div>
            <h1 style={{ 
              fontWeight: 900, 
              margin: 0, 
              background: 'linear-gradient(135deg, #ff2c2c 0%, #ff6b6b 100%)', 
              backgroundClip: 'text', 
              WebkitBackgroundClip: 'text', 
              color: 'transparent',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
            }}>
              Faceless Video Mastery
            </h1>
          </div>
          <p style={{ fontSize: '20px', color: '#444', marginBottom: '16px', maxWidth: '650px', margin: '0 auto 16px', fontWeight: 500 }}>
            Master the complete system for building an automated video empire
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#999', fontSize: '14px', marginBottom: '64px' }}>
            <span>11 Modules</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span>66 Lessons</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ color: '#ff2c2c', fontWeight: 700, letterSpacing: '0.05em' }}>{counter.toString().padStart(2, '0')}</span>
            <span style={{ color: '#ff2c2c', fontWeight: 600 }}>COMPLETED</span>
          </div>

          {/* Enhanced Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px' }}>
            <div className="glass-card" style={{ padding: '32px 24px', border: '1px solid rgba(255, 44, 44, 0.2)' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#ff2c2c', marginBottom: '4px', letterSpacing: '-0.02em' }}>{counter}</div>
              <div style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Lessons Done</div>
            </div>
            <div className="glass-card" style={{ padding: '32px 24px' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#1a1a1a', marginBottom: '4px', letterSpacing: '-0.02em' }}>{totalLessons}</div>
              <div style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Total Content</div>
            </div>
            <div className="glass-card" style={{ padding: '32px 24px', border: '1px solid rgba(52, 168, 224, 0.2)' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#34a8e0', marginBottom: '4px', letterSpacing: '-0.02em' }}>{completionPercentage}%</div>
              <div style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Mastery Level</div>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.03)',
              height: '12px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              padding: '2px',
            }}>
              <div
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)`,
                  width: `${completionPercentage}%`,
                  transition: 'width 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
                  borderRadius: '20px',
                  boxShadow: '0 0 15px rgba(255, 44, 44, 0.4)',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                  animation: 'slideInRight 2s linear infinite',
                  width: '50%',
                }} />
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section style={{ animation: 'fadeIn 1s ease-out 0.2s both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: 900, margin: '0 0 8px 0', color: '#1a1a1a' }}>
                Course Curriculum
              </h2>
              <p style={{ color: '#999', fontWeight: 500 }}>カリキュラム • {PHASES.length} Strategic Phases</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Sparkles size={18} color="#ff2c2c" className="animate-float" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {PHASES.map((phase, index) => {
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
                  style={{ textDecoration: 'none', animation: `fadeIn 0.6s ease-out ${0.1 * index}s both` }}
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: '40px 32px',
                      border: `1px solid ${isComplete ? 'rgba(34, 177, 76, 0.3)' : 'rgba(255, 44, 44, 0.1)'}`,
                      backgroundColor: isComplete ? 'rgba(34, 177, 76, 0.02)' : 'rgba(255, 255, 255, 0.8)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      boxShadow: isComplete
                        ? '0 12px 32px rgba(34, 177, 76, 0.1)'
                        : '0 4px 20px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    {/* Completion Badge */}
                    {isComplete && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '24px',
                          right: '24px',
                          background: 'linear-gradient(135deg, #22b14c 0%, #34c759 100%)',
                          color: 'white',
                          borderRadius: '10px',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 16px rgba(34, 177, 76, 0.3)',
                          animation: 'fadeIn 0.5s ease-out'
                        }}
                      >
                        <CheckCircle2 size={20} />
                      </div>
                    )}

                    {/* Phase Identifier */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      right: '32px',
                      fontSize: '40px',
                      fontWeight: 900,
                      color: isComplete ? 'rgba(34, 177, 76, 0.05)' : 'rgba(255, 44, 44, 0.05)',
                      fontFamily: 'monospace',
                      pointerEvents: 'none'
                    }}>
                      {String(phase.id).padStart(2, '0')}
                    </div>

                    {/* Icon Container */}
                    <div style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '16px', 
                      background: isComplete ? 'rgba(34, 177, 76, 0.1)' : 'rgba(255, 44, 44, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isComplete ? '#22b14c' : '#ff2c2c',
                      marginBottom: '28px',
                      border: `1px solid ${isComplete ? 'rgba(34, 177, 76, 0.2)' : 'rgba(255, 44, 44, 0.1)'}`
                    }}>
                      {moduleIcons[phase.id]}
                    </div>

                    {/* Title Area */}
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ 
                        fontSize: '11px', 
                        fontWeight: 800, 
                        color: isComplete ? '#22b14c' : '#ff2c2c', 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        PHASE {String(phase.id).padStart(2, '0')}
                        <span style={{ width: '20px', height: '1px', background: 'currentColor', opacity: 0.3 }}></span>
                        {phase.kanji}
                      </div>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2 }}>
                        {phase.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '15px', color: '#666', margin: '0 0 32px 0', lineHeight: '1.6', flex: 1 }}>
                      {phase.desc}
                    </p>

                    {/* Footer Info */}
                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '12px', color: '#999', fontWeight: 600 }}>{phase.lessons.length} LESSONS</span>
                        <span style={{ fontSize: '12px', color: isComplete ? '#22b14c' : '#1a1a1a', fontWeight: 700 }}>
                          {isComplete ? 'COMPLETED' : `${Math.round((phaseProgress / totalInPhase) * 100)}% DONE`}
                        </span>
                      </div>
                      <div style={{
                        background: 'rgba(0, 0, 0, 0.04)',
                        height: '6px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                      }}>
                        <div
                          style={{
                            height: '100%',
                            background: isComplete
                              ? 'linear-gradient(90deg, #22b14c 0%, #34c759 100%)'
                              : 'linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)',
                            width: `${totalInPhase > 0 ? (phaseProgress / totalInPhase) * 100 : 0}%`,
                            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
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
        <section style={{ 
          marginTop: '120px', 
          textAlign: 'center', 
          padding: '80px 40px', 
          background: 'rgba(255, 44, 44, 0.03)',
          borderRadius: '32px',
          border: '1px solid rgba(255, 44, 44, 0.05)',
          animation: 'fadeIn 1s ease-out 0.4s both'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, margin: '0 0 16px 0', color: '#1a1a1a' }}>
            Ready to Build Your Empire?
          </h2>
          <p style={{ color: '#666', marginBottom: '40px', fontSize: '18px' }}>
            Join 5,000+ students mastering the art of faceless automation.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/lessons/${PHASES[0].lessons[0].path?.split('/')[1]}/${PHASES[0].lessons[0].path?.split('/')[2]}`}
              className="samurai-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 48px',
                background: 'linear-gradient(135deg, #ff2c2c 0%, #ff6b6b 100%)',
                color: 'white',
                borderRadius: '14px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '16px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 12px 32px rgba(255, 44, 44, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(255, 44, 44, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 44, 44, 0.3)';
              }}
            >
              <Sword size={20} />
              Start Empire Building
            </Link>
            <Link
              href="/roadmap"
              className="glass-card"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 48px',
                color: '#1a1a1a',
                borderRadius: '14px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '16px',
              }}
            >
              <ArrowRight size={20} />
              The Strategy Map
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
