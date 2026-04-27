'use client';

import { useRouter } from 'next/navigation';
import { useProgress } from '@/components/ProgressProvider';
import { PHASES } from '@/data/phases';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import { ChevronLeft, CheckCircle2, ArrowRight, BookOpen, Clock, Tag, Share2, Printer } from 'lucide-react';

interface Props {
  phaseSlug: string;
  lessonSlug: string;
  initialContent: string;
}

function SectionCard({ icon, title, subtitle, children, color = '#ff2c2c' }: { icon: React.ReactNode; title: string; subtitle?: string; children: React.ReactNode; color?: string }) {
  return (
    <div className="glass-card" style={{
      marginTop: '48px',
      overflow: 'hidden',
      borderLeft: `4px solid ${color}`,
    }}>
      <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ color: color }}>{icon}</div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: color, letterSpacing: '2px', textTransform: 'uppercase' }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginTop: '2px' }}>{subtitle}</div>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: '32px' }}>{children}</div>
    </div>
  );
}

function LearningPathSection({ phaseSlug, lessonSlug }: { phaseSlug: string; lessonSlug: string }) {
  const router = useRouter();
  const { isComplete } = useProgress();
  const currentPath = `phases/${phaseSlug}/${lessonSlug}`;

  const phase = PHASES.find(p => p.lessons.some(l => l.path === currentPath));
  if (!phase) return null;

  const completedCount = phase.lessons.filter(l => l.path && isComplete(l.path)).length;

  return (
    <SectionCard icon={<BookOpen size={24} />} title="Learning Journey" subtitle={`${phase.name} (${phase.kanji})`}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {phase.lessons.map((lesson, i) => {
          const isCurrent = lesson.path === currentPath;
          const isDone    = lesson.path ? isComplete(lesson.path) : false;
          const parts     = lesson.path?.split('/');
          const canNav    = parts?.length === 3;

          return (
            <button key={i}
              onClick={() => { if (canNav && parts) router.push(`/lessons/${parts[1]}/${parts[2]}`); }}
              disabled={!canNav}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px',
                background: isCurrent ? 'rgba(255,44,44,0.05)' : isDone ? 'rgba(34,177,76,0.03)' : 'rgba(0,0,0,0.02)',
                border: `1px solid ${isCurrent ? '#ff2c2c' : isDone ? 'rgba(34,177,76,0.2)' : 'rgba(0,0,0,0.05)'}`,
                borderRadius: '12px',
                cursor: canNav ? 'pointer' : 'default',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (canNav && !isCurrent) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = isDone ? '#22b14c' : '#ff2c2c';
                }
              }}
              onMouseLeave={(e) => {
                if (canNav && !isCurrent) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = isDone ? 'rgba(34,177,76,0.2)' : 'rgba(0,0,0,0.05)';
                }
              }}
            >
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isCurrent ? '#ff2c2c' : isDone ? '#22b14c' : '#ddd',
                color: 'white', fontSize: '10px', fontWeight: 900, flexShrink: 0
              }}>
                {isDone ? '✓' : i + 1}
              </div>
              <div style={{ 
                fontSize: '13px', 
                color: isCurrent ? '#1a1a1a' : '#666', 
                fontWeight: isCurrent ? 700 : 500,
                lineHeight: 1.3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>
                {lesson.name}
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ flex: 1, height: '4px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ 
            width: `${(completedCount / phase.lessons.length) * 100}%`, 
            height: '100%', 
            background: completedCount === phase.lessons.length ? '#22b14c' : '#ff2c2c',
            transition: 'width 1s ease-out'
          }} />
        </div>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#999', fontFamily: 'monospace' }}>
          {completedCount}/{phase.lessons.length} COMPLETE
        </span>
      </div>
    </SectionCard>
  );
}

const mdComponents: Components = {
  code({ className, children }) {
    return (
      <code style={{
        fontFamily: 'monospace',
        fontSize: '14px',
        padding: '3px 8px',
        background: 'rgba(255, 44, 44, 0.05)',
        border: '1px solid rgba(255, 44, 44, 0.1)',
        borderRadius: '6px',
        color: '#ff2c2c',
        fontWeight: 600,
      }}>
        {children}
      </code>
    );
  },
  h1: ({children}) => <h1 style={{ fontSize: '40px', fontWeight: 900, marginTop: '48px', marginBottom: '24px', color: '#1a1a1a', letterSpacing: '-0.02em' }}>{children}</h1>,
  h2: ({children}) => <h2 style={{ fontSize: '28px', fontWeight: 800, marginTop: '40px', marginBottom: '20px', color: '#1a1a1a', borderBottom: '2px solid rgba(255, 44, 44, 0.1)', paddingBottom: '12px' }}>{children}</h2>,
  h3: ({children}) => <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '16px', color: '#ff2c2c' }}>{children}</h3>,
  p: ({children}) => <p style={{ fontSize: '17px', lineHeight: '1.8', marginBottom: '20px', color: '#444' }}>{children}</p>,
  ul: ({children}) => <ul style={{ marginLeft: '24px', marginBottom: '20px', fontSize: '17px', lineHeight: '1.8', color: '#444' }}>{children}</ul>,
  li: ({children}) => <li style={{ marginBottom: '8px' }}>{children}</li>,
  blockquote: ({children}) => (
    <blockquote style={{ 
      borderLeft: '4px solid #ff2c2c', 
      padding: '24px 32px', 
      margin: '32px 0', 
      background: 'rgba(255, 44, 44, 0.03)', 
      borderRadius: '0 16px 16px 0',
      fontStyle: 'italic',
      color: '#1a1a1a',
      fontSize: '18px'
    }}>
      {children}
    </blockquote>
  ),
  a: ({href, children}) => <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#ff2c2c', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid rgba(255, 44, 44, 0.2)', transition: 'all 0.2s' }}>{children}</a>,
};

export default function LessonViewer({ phaseSlug, lessonSlug, initialContent }: Props) {
  const router = useRouter();
  const { isComplete, markComplete, markIncomplete } = useProgress();

  const lessonPath = `phases/${phaseSlug}/${lessonSlug}`;
  const done       = isComplete(lessonPath);

  const phase = PHASES.find(p => p.lessons.some(l => l.path === lessonPath));
  const lesson = phase?.lessons.find(l => l.path === lessonPath);

  if (!phase || !lesson) return null;

  const all: typeof PHASES[0]['lessons'] = [];
  PHASES.forEach(p => p.lessons.forEach(l => { if (l.path) all.push(l); }));
  const idx = all.findIndex(l => l.path === lessonPath);
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '68px' }}>
      {/* Sticky Top Progress Bar */}
      <div style={{
        position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 900,
        background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)', height: '64px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <button onClick={() => router.back()} style={{ 
            display: 'flex', alignItems: 'center', gap: '8px', 
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '14px', fontWeight: 700, color: '#666',
            transition: 'color 0.2s'
          }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff2c2c'} onMouseLeave={(e) => e.currentTarget.style.color = '#666'}>
            <ChevronLeft size={20} /> Back
          </button>

          <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#ff2c2c', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>
              PHASE {String(phase.id).padStart(2,'0')} • {phase.kanji}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {lesson.name}
            </div>
          </div>

          <button
            onClick={() => done ? markIncomplete(lessonPath) : markComplete(lessonPath)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '10px', border: 'none',
              background: done ? 'linear-gradient(135deg, #22b14c 0%, #34c759 100%)' : '#1a1a1a',
              color: 'white', fontWeight: 800, fontSize: '13px', cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: done ? '0 8px 16px rgba(34, 177, 76, 0.3)' : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {done ? <CheckCircle2 size={16} /> : null}
            {done ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 1.5rem 80px' }}>
        {initialContent && (
          <>
            {/* Lesson Meta Header */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '48px', padding: '32px', background: '#fafafa', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
              {[
                { icon: <Clock size={16} />, label: 'ESTIMATED TIME', val: '15-20 Minutes' },
                { icon: <Tag size={16} />, label: 'LESSON TYPE',  val: lesson.type || 'Educational' },
                { icon: <Share2 size={16} />, label: 'PLATFORM',  val: 'YouTube / TikTok' },
              ].map(item => (
                <div key={item.label} style={{ flex: 1, minWidth: '150px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 800, color: '#999', letterSpacing: '1px', marginBottom: '8px' }}>
                    {item.icon} {item.label}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>{item.val}</div>
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="lesson-prose" style={{ position: 'relative' }}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                {initialContent}
              </ReactMarkdown>
              
              <div style={{ 
                position: 'absolute', 
                top: '100px', 
                right: '-120px', 
                fontSize: '12vw', 
                fontWeight: 900, 
                color: 'rgba(255, 44, 44, 0.02)', 
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: -1
              }}>
                学
              </div>
            </div>

            <LearningPathSection phaseSlug={phaseSlug} lessonSlug={lessonSlug} />

            {/* Bottom Actions */}
            <div style={{ 
              marginTop: '64px', 
              padding: '48px', 
              background: done ? 'rgba(34,177,76,0.03)' : 'rgba(255, 44, 44, 0.03)', 
              borderRadius: '32px', 
              textAlign: 'center',
              border: `1px solid ${done ? 'rgba(34,177,76,0.1)' : 'rgba(255, 44, 44, 0.1)'}`
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 900, margin: '0 0 12px 0', color: '#1a1a1a' }}>
                {done ? 'Lesson Completed! 🎉' : 'Ready for the next step?'}
              </h3>
              <p style={{ color: '#666', marginBottom: '32px' }}>
                {done ? 'You\'ve mastered this section. Move forward to build your empire.' : 'Mark this lesson as complete to track your progress.'}
              </p>
              
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {!done && (
                  <button onClick={() => markComplete(lessonPath)} style={{ 
                    padding: '16px 32px', background: '#ff2c2c', color: 'white', 
                    borderRadius: '12px', fontWeight: 800, border: 'none', cursor: 'pointer',
                    boxShadow: '0 12px 24px rgba(255, 44, 44, 0.3)',
                    transition: 'all 0.2s'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    Mark as Complete
                  </button>
                )}
                
                {next && (
                  <button
                    onClick={() => {
                      const parts = next.path?.split('/');
                      if (parts && parts.length === 3) router.push(`/lessons/${parts[1]}/${parts[2]}`);
                    }}
                    style={{
                      padding: '16px 32px', background: 'white', color: '#1a1a1a', 
                      borderRadius: '12px', fontWeight: 800, border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '10px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Next Lesson: {next.name} <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </div>

            <div style={{ marginTop: '48px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <button style={{ background: 'none', border: 'none', color: '#999', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Printer size={14} /> PRINT LESSON
              </button>
              <button style={{ background: 'none', border: 'none', color: '#999', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Share2 size={14} /> SHARE PROGRESS
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
