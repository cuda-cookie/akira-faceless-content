'use client';

import { useRouter } from 'next/navigation';
import { useProgress } from '@/components/ProgressProvider';
import { PHASES } from '@/data/phases';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface Props {
  phaseSlug: string;
  lessonSlug: string;
  initialContent: string;
}

function SectionCard({ icon, title, subtitle, children }: { icon: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div style={{
      marginTop: '40px',
      border: '1px solid #e0e0e0',
      borderTop: '3px solid #ff2c2c',
      background: '#f8f8f8',
      boxShadow: '0 0 12px rgba(255,44,44,0.1)',
    }}>
      <div style={{ padding: '18px 20px 14px', borderBottom: '1px solid #e8e8e8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px' }}>{icon}</span>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#ff2c2c', letterSpacing: '0.5px' }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ fontSize: '13px', color: '#666', marginTop: '3px' }}>{subtitle}</div>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: '16px 20px 20px' }}>{children}</div>
    </div>
  );
}

function LearningPathSection({ phaseSlug, lessonSlug }: { phaseSlug: string; lessonSlug: string }) {
  const router = useRouter();
  const { isComplete } = useProgress();
  const currentPath = `phases/${phaseSlug}/${lessonSlug}`;

  const phase = PHASES.find(p => p.lessons.some(l => l.path === currentPath));
  if (!phase) return null;

  const completed = phase.lessons.filter(l => l.path && isComplete(l.path)).length;

  return (
    <SectionCard icon="📍" title="Learning Path" subtitle={`${phase.kanji} Phase ${String(phase.id).padStart(2,'0')}: ${phase.name}`}>
      <div style={{ overflowX: 'auto', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', gap: '6px', minWidth: 'max-content' }}>
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
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  padding: '10px 12px', minWidth: '140px', maxWidth: '160px',
                  background: isCurrent ? 'rgba(255,44,44,0.08)' : isDone ? 'rgba(34,177,76,0.08)' : '#f3f3f3',
                  border: `1px solid ${isCurrent ? '#ff2c2c' : isDone ? 'rgba(34,177,76,0.4)' : '#e0e0e0'}`,
                  borderTop: isCurrent ? '2px solid #ff2c2c' : isDone ? '2px solid #22b14c' : '1px solid #e0e0e0',
                  cursor: canNav ? 'pointer' : 'default',
                  boxShadow: isCurrent ? '0 0 10px rgba(255,44,44,0.15)' : isDone ? '0 0 6px rgba(34,177,76,0.2)' : 'none',
                  transition: 'all 0.12s',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '7px', color: isCurrent ? '#ff2c2c' : isDone ? '#22b14c' : '#999', marginBottom: '5px', letterSpacing: '0.3px' }}>
                  {isDone ? '✓' : isCurrent ? '▶' : String(i + 1).padStart(2,'0')}
                </div>
                <div style={{ fontSize: '12px', color: isCurrent ? '#1a1a1a' : '#666', lineHeight: 1.4, fontWeight: isCurrent ? 600 : 400 }}>
                  {lesson.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '12px', fontFamily: 'monospace', fontSize: '8px', color: '#999', letterSpacing: '0.3px' }}>
        {completed}/{phase.lessons.length} LESSONS COMPLETE
      </div>
    </SectionCard>
  );
}

const mdComponents: Components = {
  code({ className, children }) {
    const lang = /language-(\w+)/.exec(className ?? '')?.[1];
    const code = String(children).replace(/\n$/, '');

    return (
      <code style={{
        fontFamily: 'monospace',
        fontSize: '13px',
        padding: '2px 6px',
        background: '#f5f5f5',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        color: '#ff2c2c',
      }}>
        {children}
      </code>
    );
  },
  h1: ({children}) => <h1 style={{ fontSize: '32px', fontWeight: 700, marginTop: '24px', marginBottom: '16px' }}>{children}</h1>,
  h2: ({children}) => <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '20px', marginBottom: '14px', borderBottom: '2px solid #ff2c2c', paddingBottom: '8px' }}>{children}</h2>,
  h3: ({children}) => <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '16px', marginBottom: '12px', color: '#ff2c2c' }}>{children}</h3>,
  p: ({children}) => <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#666' }}>{children}</p>,
  ul: ({children}) => <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '16px', lineHeight: '1.7', color: '#666' }}>{children}</ul>,
  ol: ({children}) => <ol style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '16px', lineHeight: '1.7', color: '#666' }}>{children}</ol>,
  blockquote: ({children}) => <blockquote style={{ borderLeft: '4px solid #ff2c2c', paddingLeft: '16px', marginLeft: '0', marginBottom: '16px', fontStyle: 'italic', color: '#666' }}>{children}</blockquote>,
  a: ({href, children}) => <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#ff2c2c', textDecoration: 'none', borderBottom: '1px solid #ff2c2c' }}>{children}</a>,
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

  const iconBtn: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '7px',
    fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.3px',
    color: '#666', background: '#f8f8f8',
    border: '1px solid #e0e0e0', padding: '9px 16px',
    cursor: 'pointer', textDecoration: 'none',
    transition: 'border-color 0.15s, color 0.15s, box-shadow 0.15s',
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '68px' }}>
      <div style={{
        position: 'sticky', top: '68px', zIndex: 40,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 1.5rem', height: '58px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: '860px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button onClick={() => router.back()} style={{ ...iconBtn, flexShrink: 0 }}>
            ← Back
          </button>

          {phase && (
            <div style={{ flex: 1, textAlign: 'center', overflow: 'hidden' }}>
              <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#ff2c2c', letterSpacing: '0.3px' }}>
                PH{String(phase.id).padStart(2,'0')}
              </span>
              <span style={{ fontSize: '9px', color: '#999', margin: '0 6px' }}>›</span>
              <span style={{ fontSize: '13px', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {lesson.name}
              </span>
            </div>
          )}

          <button
            onClick={() => done ? markIncomplete(lessonPath) : markComplete(lessonPath)}
            style={{ ...iconBtn, borderColor: done ? '#22b14c' : '#e0e0e0', color: done ? '#22b14c' : '#666', background: done ? 'rgba(34,177,76,0.08)' : '#f8f8f8', boxShadow: done ? '0 0 8px rgba(34,177,76,0.15)' : 'none' }}
          >
            {done ? '✓ Complete' : '□ Mark'}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '36px 1.5rem 80px' }}>
        {!initialContent && (
          <div style={{ background: '#f8f8f8', border: '1px solid #e0e0e0', borderTop: '2px solid #ff2c2c', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#ff2c2c', textShadow: '0 0 10px rgba(255,44,44,0.2)', marginBottom: '12px' }}>
              Content not found
            </div>
          </div>
        )}

        {initialContent && (
          <>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid #e0e0e0' }}>
              {[
                { label: 'PHASE', val: `${String(phase.id).padStart(2,'0')} · ${phase.name}` },
                { label: 'TYPE',  val: lesson.type },
                { label: 'LANG',  val: lesson.lang },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '8px', fontFamily: 'monospace', color: '#999', letterSpacing: '0.5px', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '13px', color: '#666', fontFamily: 'monospace' }}>{item.val}</div>
                </div>
              ))}
              {done && (
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '8px', color: '#22b14c', letterSpacing: '0.5px', background: 'rgba(34,177,76,0.08)', border: '1px solid rgba(34,177,76,0.3)', padding: '4px 10px', boxShadow: '0 0 8px rgba(34,177,76,0.15)' }}>
                    ✓ COMPLETE
                  </span>
                </div>
              )}
            </div>

            <div className="lesson-prose" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                {initialContent}
              </ReactMarkdown>
            </div>

            <LearningPathSection phaseSlug={phaseSlug} lessonSlug={lessonSlug} />

            {!done && (
              <div style={{ marginTop: '40px', padding: '20px 24px', background: 'rgba(255,44,44,0.08)', border: '1px solid rgba(255,44,44,0.3)', borderLeft: '3px solid #ff2c2c', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Finished this lesson? <span style={{ fontSize: '12px', color: '#999' }}>(完了しましたか？)</span></span>
                <button onClick={() => markComplete(lessonPath)} style={{ fontSize: '11px', padding: '8px 18px', background: '#ff2c2c', color: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 0 8px rgba(255,44,44,0.3)' }}>
                  ✓ Mark Complete
                </button>
              </div>
            )}

            {next && (
              <button
                onClick={() => {
                  const parts = next.path?.split('/');
                  if (parts && parts.length === 3) {
                    router.push(`/lessons/${parts[1]}/${parts[2]}`);
                  }
                }}
                style={{
                  marginTop: '16px', width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 24px',
                  background: '#f8f8f8',
                  border: '1px solid #e0e0e0',
                  borderLeft: '3px solid #ff2c2c',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  textAlign: 'left',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: '8px', color: '#999', marginBottom: '6px', letterSpacing: '0.3px' }}>
                    NEXT MODULE ▶
                  </div>
                  <div style={{ fontSize: '15px', color: '#1a1a1a', fontWeight: 500 }}>
                    {next.name}
                  </div>
                </div>
                <span style={{ fontSize: '20px', color: '#ff2c2c', textShadow: '0 0 8px rgba(255,44,44,0.2)', flexShrink: 0 }}>→</span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
