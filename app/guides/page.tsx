'use client';

import { useProgress } from '@/components/ProgressProvider';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function GuidesIndex() {
  const { isComplete } = useProgress();
  const [guides, setGuides] = useState<{slug: string, title: string, excerpt: string}[]>([]);

  useEffect(() => {
    // This is a client-side version of the logic since we moved to client component
    // In a real app we'd fetch an API or use static data
    // For now I'll hardcode the known list based on previous research
    const guideSlugs = [
      'workflows/ulog-workflow', 'workflows/multi-channel', 'platforms/youtube-guide', 
      'niches/top-paying-niches', 'monetization/complete-guide'
    ];
    
    setGuides(guideSlugs.map(slug => ({
      slug: `/${slug}`,
      title: slug.split('/').pop()?.replace(/-/g, ' ') || 'Guide',
      excerpt: 'Master advanced automation workflows and strategic content systems for this category...'
    })));
  }, []);

  return (
    <div className="kanji-tech-bg" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="scanline" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', background: '#ff2c2c' }} />
          <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#1a1a1a', fontFamily: '"Yu Mincho", serif' }}>GUIDES_LIBRARY.lib</h1>
        </div>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '48px' }}>Explore in-depth workflows, platform strategies, and monetization methods.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {guides.map(guide => {
            const done = isComplete(`guides${guide.slug}`);
            return (
              <Link key={guide.slug} href={`/guides${guide.slug}`} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ 
                  padding: '24px', height: '100%', display: 'flex', flexDirection: 'column',
                  borderLeft: done ? '4px solid #22b14c' : '1px solid var(--glass-border)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', textTransform: 'uppercase' }}>{guide.title}</h3>
                    {done && <CheckCircle2 size={18} color="#22b14c" />}
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', flex: 1, lineHeight: '1.6' }}>{guide.excerpt}</p>
                  <div style={{ fontSize: '11px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '2px' }}>
                    ACCESS_SYSTEM_DATA.exe <span style={{ fontSize: '16px' }}>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
