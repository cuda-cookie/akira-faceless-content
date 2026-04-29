'use client';

import Link from 'next/link';
import { PHASES, getTotalLessons } from '@/data/phases';
import { useProgress } from '@/components/ProgressProvider';
import { useEffect, useState } from 'react';
import { Rocket, BookOpen, Wrench, Pencil, Video, DollarSign, TrendingUp, Users, Smartphone, Zap, Trophy, CheckCircle2, ArrowRight, Sword, Sparkles, Home as HomeIcon, Map, Grid3x3, Brain, Waves, UserRound, Mic2, Database, Lightbulb } from 'lucide-react';

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
    <div className="kanji-tech-bg page-entry" style={{
      paddingTop: '68px',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="scanline" />
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
          top: '10%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 44, 44, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 12s ease-in-out infinite alternate',
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(32px, 8vw, 80px) 1.5rem', position: 'relative', zIndex: 1 }}>
        
        {/* Hero Section */}
        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center', textAlign: 'left', animation: 'fadeIn 1s ease-out' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '2px', background: '#ff2c2c' }} />
              <div style={{ fontSize: '14px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase' }}>
                Project AKIRA // System v2.5
              </div>
            </div>
            
            <h1 style={{ 
              fontWeight: 900, 
              margin: 0, 
              fontSize: 'clamp(40px, 6vw, 72px)',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #444 100%)', 
              backgroundClip: 'text', 
              WebkitBackgroundClip: 'text', 
              color: 'transparent',
              lineHeight: 1.1,
              fontFamily: '"Yu Mincho", serif'
            }}>
              Master the Art of <span style={{ color: '#ff2c2c', position: 'relative' }}>
                Automation
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '4px', background: 'rgba(255,44,44,0.1)' }} />
              </span>
              <div style={{ fontSize: '24px', color: '#ff2c2c', opacity: 0.8, marginTop: '8px', letterSpacing: '2px' }}>
                あかり • 自動化の習得
              </div>
            </h1>

            <p style={{ fontSize: '18px', color: '#666', maxWidth: '550px', fontWeight: 500, lineHeight: 1.6 }}>
              The definitive blueprint for building a high-revenue video empire using advanced AI systems and neural content generation.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
              <Link
                href={`/lessons/${PHASES[0].lessons[0].path?.split('/')[1]}/${PHASES[0].lessons[0].path?.split('/')[2]}`}
                className="samurai-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 40px',
                  background: '#ff2c2c',
                  color: 'white',
                  borderRadius: '0',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '15px',
                  boxShadow: '4px 4px 0px #000',
                  border: '1px solid #000'
                }}
              >
                Get Started
              </Link>
              <Link
                href="/roadmap"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 40px',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '15px',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                View Roadmap <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-right-col">
            <div className="tech-border animate-float" style={{ width: '100%', maxWidth: '450px' }}>
              <img src="/logo.jpeg" alt="AKIRA Mascot" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,44,44,0.9)', color: 'white', padding: '4px 12px', fontSize: '10px', fontWeight: 900 }}>Akira Unit 01</div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#ff2c2c', fontSize: '40px', fontWeight: 900, opacity: 0.2 }}>明</div>
              {/* Floating Hiragana */}
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '32px', color: '#ff2c2c', opacity: 0.3, fontWeight: 900 }}>あ</div>
              <div style={{ position: 'absolute', bottom: '40px', left: '-30px', fontSize: '24px', color: '#ff2c2c', opacity: 0.2, fontWeight: 900 }}>かり</div>
            </div>
          </div>
        </section>

        {/* Explorer Section - Feature Descriptions */}
        <section style={{ marginBottom: '120px', padding: '60px', background: 'rgba(0,0,0,0.02)', borderRadius: '40px', border: '1px solid rgba(0,0,0,0.03)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Operational Hub</div>
            <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#1a1a1a' }}>System Modules</h2>
            <div style={{ width: '60px', height: '4px', background: '#ff2c2c', margin: '16px auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Dashboard', desc: 'Your central command for progress and quick access to modules.', icon: <HomeIcon size={24} />, path: '/' },
              { title: 'Catalog', desc: 'Browse the complete library of 60+ neural automation lessons.', icon: <Grid3x3 size={24} />, path: '/catalog' },
              { title: 'Roadmap', desc: 'Strategic timeline from absolute zero to content mastery.', icon: <Map size={24} />, path: '/roadmap' },
              { title: 'Tools', desc: 'The AKIRA-curated stack of AI tools for rapid production.', icon: <Wrench size={24} />, path: '/tools' },
              { title: 'Ideas', desc: 'Infinite database of high-retention faceless video concepts.', icon: <Video size={24} />, path: '/ideas' },
              { title: 'Guides', desc: 'Deep-dive technical documentation and platform strategies.', icon: <BookOpen size={24} />, path: '/guides' },
            ].map((feature, i) => (
              <Link key={i} href={feature.path} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: '32px', height: '100%' }}>
                  <div style={{ color: '#ff2c2c', marginBottom: '20px' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '12px', color: '#1a1a1a' }}>{feature.title}</h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>{feature.desc}</p>
                  <div style={{ marginTop: '20px', fontSize: '11px', fontWeight: 800, color: '#ff2c2c', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Enter Module <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Neural Tools Spotlight */}
        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div className="tech-border animate-float" style={{ padding: '40px', background: 'rgba(255,44,44,0.02)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ height: '120px', background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '10px' }}>
                <Brain size={32} color="#ff2c2c" strokeWidth={1.5} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '1px' }}>SYLLABY</span>
              </div>
              <div style={{ height: '120px', background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '10px' }}>
                <Waves size={32} color="#1a1a1a" strokeWidth={1.5} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '1px' }}>VIRALWAVE</span>
              </div>
              <div style={{ height: '120px', background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '10px' }}>
                <UserRound size={32} color="#1a1a1a" strokeWidth={1.5} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '1px' }}>HEYGEN</span>
              </div>
              <div style={{ height: '120px', background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '10px' }}>
                <Mic2 size={32} color="#ff2c2c" strokeWidth={1.5} />
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '1px' }}>ELEVENLABS</span>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Neural Stack</div>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>Best Automating Tools Blueprint</h2>
            <p style={{ color: '#666', marginBottom: '32px', fontSize: '18px', lineHeight: 1.6 }}>
              Access our curated directory of high-performance AI tools. From script generation to neural voiceovers, master the stack that powers 6-figure faceless channels.
            </p>
            <Link href="/tools" className="samurai-button" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', 
              background: '#1a1a1a', color: 'white', fontWeight: 800, textDecoration: 'none' 
            }}>
              Explore Tools <Wrench size={18} />
            </Link>
          </div>
        </section>

        {/* Video Ideas Hook Section */}
        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div style={{ order: 2 }}>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Content Intelligence</div>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>2,700+ Video Ideas Database</h2>
            <p style={{ color: '#666', marginBottom: '32px', fontSize: '18px', lineHeight: 1.6 }}>
              Never run out of content again. Access our high-retention video idea database categorized by niche, difficulty, and monetization potential.
            </p>
            <Link href="/ideas" className="samurai-button" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', 
              background: '#ff2c2c', color: 'white', fontWeight: 800, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(255, 44, 44, 0.2)'
            }}>
              Access Ideas <Video size={18} />
            </Link>
          </div>
          <div className="tech-border animate-float" style={{ order: 1, padding: '60px', background: 'rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '24px' }}>
             <Database size={80} color="#1a1a1a" strokeWidth={1} style={{ opacity: 0.8 }} />
             <div style={{ fontSize: '24px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '8px' }}>IDEA BANK</div>
             <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '80px', opacity: 0.05, fontWeight: 900 }}>想</div>
             <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <Lightbulb size={24} color="#ff2c2c" className="animate-pulse" />
             </div>
          </div>
        </section>

        {/* Guides Library Hook Section */}
        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div className="tech-border" style={{ padding: '40px', background: 'rgba(255,44,44,0.01)', borderLeft: '4px solid #ff2c2c' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Workflows: ULOG System',
                  'Platforms: YouTube Dominance',
                  'Niches: High CPM Analysis',
                  'Monetization: Scaling Adsense'
                ].map((item, i) => (
                  <div key={i} style={{ padding: '12px', background: 'white', fontSize: '13px', fontWeight: 700, border: '1px solid rgba(0,0,0,0.03)', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#ff2c2c', borderRadius: '50%' }} />
                    {item}
                  </div>
                ))}
             </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Knowledge Base</div>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>Strategy Guides & Workflows</h2>
            <p style={{ color: '#666', marginBottom: '32px', fontSize: '18px', lineHeight: 1.6 }}>
              Deep-dive technical documentation on advanced automation workflows, specific platform algorithms, and complex monetization scaling strategies.
            </p>
            <Link href="/guides" className="samurai-button" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', 
              background: '#1a1a1a', color: 'white', fontWeight: 800, textDecoration: 'none' 
            }}>
              Open Library <BookOpen size={18} />
            </Link>
          </div>
        </section>

        {/* Strategy Roadmap Section */}
        <section style={{ marginBottom: '120px', padding: '80px 40px', background: '#1a1a1a', borderRadius: '40px', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '20%', right: '10%', fontSize: '200px', fontWeight: 900 }}>戦</div>
          </div>
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>System Architecture</div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '24px' }}>The 11-Phase Empire Blueprint</h2>
            <p style={{ color: '#aaa', marginBottom: '48px', fontSize: '18px', lineHeight: 1.6 }}>
              Follow a proven technical roadmap from your first niche analysis to a fully automated, multi-channel revenue machine.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px', padding: '0 40px' }}>
              {[0, 1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: i === 0 ? '#ff2c2c' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>{i}</div>
                  <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.1)' }}></div>
                </div>
              ))}
            </div>

            <Link href="/roadmap" className="samurai-button" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 48px', 
              background: '#ff2c2c', color: 'white', fontWeight: 900, textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(255, 44, 44, 0.4)'
            }}>
              LAUNCH_ROADMAP <Map size={20} />
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ marginBottom: '120px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#999', fontSize: '14px', marginBottom: '64px' }}>
            <span>11 Modules</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span>66 Lessons</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ color: '#ff2c2c', fontWeight: 700, letterSpacing: '0.05em' }}>{counter.toString().padStart(2, '0')}</span>
            <span style={{ color: '#ff2c2c', fontWeight: 600 }}>COMPLETED</span>
          </div>

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

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(0, 0, 0, 0.03)', height: '12px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0, 0, 0, 0.05)', padding: '2px' }}>
              <div style={{ height: '100%', background: `linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)`, width: `${completionPercentage}%`, transition: 'width 0.8s cubic-bezier(0.65, 0, 0.35, 1)', borderRadius: '20px', boxShadow: '0 0 15px rgba(255, 44, 44, 0.4)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)', animation: 'slideInRight 2s linear infinite', width: '50%' }} />
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
              const phaseProgress = phase.lessons.filter(lesson => 
                lesson.path && completedLessons.has(lesson.path)
              ).length;
              const totalInPhase = phase.lessons.length;
              const isComplete = phaseProgress === totalInPhase && totalInPhase > 0;
              const firstLessonPath = phase.lessons[0].path?.split('/');

              const phaseConfig: Record<number, { kanji: string; meaning: string; bg: string }> = {
                0: { kanji: '準', meaning: 'Preparation', bg: '#ffffff' },
                1: { kanji: '基', meaning: 'Foundation', bg: '#fffafa' },
                2: { kanji: '具', meaning: 'Tools', bg: '#ffffff' },
                3: { kanji: '戦', meaning: 'Strategy', bg: '#fffafa' },
                4: { kanji: '益', meaning: 'Revenue', bg: '#ffffff' },
                5: { kanji: '収', meaning: 'Growth', bg: '#fffafa' },
                6: { kanji: '展', meaning: 'Expansion', bg: '#ffffff' },
                7: { kanji: '衆', meaning: 'Community', bg: '#fffafa' },
                8: { kanji: '機', meaning: 'Platform', bg: '#ffffff' },
                9: { kanji: '解', meaning: 'Solutions', bg: '#fffafa' },
                10: { kanji: '極', meaning: 'Mastery', bg: '#ffffff' },
              };
              const config = phaseConfig[phase.id] || { kanji: phase.kanji, meaning: phase.name, bg: '#ffffff' };

              return (
                <Link
                  key={phase.id}
                  href={`/lessons/${firstLessonPath?.[1]}/${firstLessonPath?.[2]}`}
                  style={{ textDecoration: 'none', animation: `fadeIn 0.6s ease-out ${0.1 * index}s both` }}
                >
                  <div
                    className="glass-card phase-card"
                    title={`${config.meaning} — ${phase.desc}`}
                    data-kanji={config.kanji}
                    data-meaning={config.meaning}
                    style={{
                      padding: '40px 32px',
                      border: `1px solid ${isComplete ? 'rgba(34, 177, 76, 0.3)' : 'rgba(255, 44, 44, 0.1)'}`,
                      backgroundColor: isComplete ? 'rgba(34, 177, 76, 0.02)' : config.bg,
                      position: 'relative',
                      overflow: 'hidden',
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
                    <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: isComplete ? 'rgba(34, 177, 76, 0.1)' : 'rgba(255, 44, 44, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isComplete ? '#22b14c' : '#ff2c2c', marginBottom: '28px', border: `1px solid ${isComplete ? 'rgba(34, 177, 76, 0.2)' : 'rgba(255, 44, 44, 0.1)'}` }}>
                      {moduleIcons[phase.id]}
                    </div>

                    {/* Title Area */}
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: isComplete ? '#22b14c' : '#ff2c2c', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        PHASE {String(phase.id).padStart(2, '0')}
                        <span style={{ width: '20px', height: '1px', background: 'currentColor', opacity: 0.3 }}></span>
                        {phase.kanji}
                      </div>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2 }}>
                        {phase.name}
                      </h3>
                    </div>

                    <p style={{ fontSize: '15px', color: '#666', margin: '0 0 32px 0', lineHeight: '1.6', flex: 1 }}>
                      {phase.desc}
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '12px', color: '#999', fontWeight: 600 }}>{phase.lessons.length} LESSONS</span>
                        <span style={{ fontSize: '12px', color: isComplete ? '#22b14c' : '#1a1a1a', fontWeight: 700 }}>
                          {isComplete ? 'COMPLETED' : `${Math.round((phaseProgress / totalInPhase) * 100)}% DONE`}
                        </span>
                      </div>
                      <div style={{ background: 'rgba(0, 0, 0, 0.04)', height: '6px', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: isComplete ? 'linear-gradient(90deg, #22b14c 0%, #34c759 100%)' : 'linear-gradient(90deg, #ff2c2c 0%, #ff6b6b 100%)', width: `${totalInPhase > 0 ? (phaseProgress / totalInPhase) * 100 : 0}%`, transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ marginTop: '120px', textAlign: 'center', padding: '80px 40px', background: 'rgba(255, 44, 44, 0.03)', borderRadius: '32px', border: '1px solid rgba(255, 44, 44, 0.05)', animation: 'fadeIn 1s ease-out 0.4s both' }}>
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
