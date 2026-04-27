'use client';
import { BookMarked } from 'lucide-react';

const GLOSSARY_TERMS = [
  { term: 'Faceless Video', jp: 'フェイスレスビデオ', def: 'A YouTube video format that doesn\'t show the creator\'s face. Often uses voiceovers, screenshots, or animations to deliver content.' },
  { term: 'Syllaby', jp: 'シラビ', def: 'An automated faceless video generation platform that streamlines script creation, narration, and video editing.' },
  { term: 'Niche', jp: 'ニッチ', def: 'A specific field or category focused on a particular audience group. Examples: cryptocurrency, finance, self-improvement.' },
  { term: 'AdSense', jp: 'アドセンス', def: 'Google\'s advertising program for earning revenue on YouTube. Payments are based on video views and watch time.' },
  { term: 'Monetization', jp: 'マネタイゼーション', def: 'The process of earning money from YouTube videos. Multiple revenue streams exist: ads, affiliate marketing, sponsorships.' },
  { term: 'Content Calendar', jp: 'コンテンツカレンダー', def: 'A strategic planning tool to organize and schedule video releases, topics, and publication dates.' },
  { term: 'SEO', jp: 'エスイーオー', def: 'Search Engine Optimization. A set of practices designed to rank your videos higher in YouTube search results.' },
  { term: 'Shorts', jp: 'ショート', def: 'Short-form YouTube videos up to 60 seconds long. Similar to TikTok and Instagram Reels.' },
  { term: 'Long-Form Content', jp: 'ロングフォーム', def: 'YouTube videos longer than 10 minutes. Allows for more detailed content and additional ad opportunities.' },
  { term: 'Affiliate Marketing', jp: 'アフィリエイト', def: 'Earning commissions by recommending products or services. You earn a percentage from referred sales.' },
];

export default function GlossaryPage() {
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', background: '#ffffff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(32px, 5vw, 64px) 1.5rem' }}>
        <h1 style={{ marginBottom: '12px', fontSize: '32px', fontWeight: 700, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BookMarked size={32} color="#ff2c2c" />
          Glossary <span style={{ fontSize: '16px', color: '#999', fontWeight: 400, marginLeft: '8px' }}>(用語集)</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '48px' }}>Key terms and concepts used in the faceless video business.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '28px' }}>
          {GLOSSARY_TERMS.map((item, idx) => (
            <div key={idx} style={{ paddingBottom: '28px', borderBottom: idx < GLOSSARY_TERMS.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
                {item.term}
              </h3>
              <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#ff2c2c', fontWeight: 500 }}>
                {item.jp}
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#666', lineHeight: '1.7' }}>{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
