'use client';

import MarkdownViewer from '@/components/MarkdownViewer';
import { useProgress } from '@/components/ProgressProvider';
import { useState, useEffect, use } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function GuidePage({ params: paramsPromise }: { params: Promise<{ slug: string[] }> }) {
  const params = use(paramsPromise);
  const { isComplete, markComplete, markIncomplete } = useProgress();
  const [content, setContent] = useState('');
  const slugPath = `guides/${params.slug.join('/')}`;
  const done = isComplete(slugPath);

  useEffect(() => {
    fetch(`/guides/${params.slug.join('/')}.md`)
      .then(res => res.text())
      .then(text => setContent(text));
  }, [params.slug]);

  if (!content) return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="kanji-tech-bg" style={{ minHeight: '100vh' }}>
      <MarkdownViewer 
        initialContent={content} 
        backHref="/guides" 
        backLabel="All Guides" 
        title={params.slug[params.slug.length - 1].replace(/-/g, ' ')}
      />
      
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 100px' }}>
        <button
          onClick={() => done ? markIncomplete(slugPath) : markComplete(slugPath)}
          style={{ 
            width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
            padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,44,44,0.1)',
            background: done ? 'rgba(34,177,76,0.05)' : 'white',
            color: done ? '#22b14c' : '#1a1a1a', fontWeight: 800, fontSize: '18px', cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: done ? '0 8px 32px rgba(34, 177, 76, 0.1)' : '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          {done ? <CheckCircle2 size={24} /> : null}
          {done ? 'Guide Mastered' : 'Mark Guide as Complete'}
        </button>
      </div>
    </div>
  );
}
