'use client';
import { HelpCircle, MessageSquare, Mail } from 'lucide-react';

export default function AIPage() {
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', background: '#ffffff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(32px, 5vw, 64px) 1.5rem' }}>
        <h1 style={{ marginBottom: '12px', fontSize: '32px', fontWeight: 700, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HelpCircle size={32} color="#ff2c2c" />
          Help & Support <span style={{ fontSize: '16px', color: '#999', fontWeight: 400, marginLeft: '8px' }}>(サポート)</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '48px' }}>Get answers to common questions about the faceless video business.</p>

        <div style={{
          padding: '32px',
          background: 'rgba(255, 44, 44, 0.05)',
          border: '1px solid rgba(255, 44, 44, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <MessageSquare size={48} color="#ff2c2c" style={{ margin: '0 auto 16px' }} />
          <p style={{ fontSize: '15px', color: '#666', margin: '0 0 12px 0' }}>
            Need personalized support? Reach out to our team
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', color: '#999' }}>
            <Mail size={16} />
            <a href="mailto:support@facelessvideo.com" style={{ color: '#ff2c2c', textDecoration: 'none', fontWeight: 500 }}>
              support@facelessvideo.com
            </a>
          </div>
        </div>

        <div style={{ marginTop: '48px', padding: '28px', background: '#f8f8f8', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>Frequently Asked Questions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {[
              { q: 'Which platform should I start with?', a: 'We recommend starting with YouTube. It offers the most stable monetization opportunities and the potential to reach a larger audience compared to other platforms.' },
              { q: 'How much can I earn?', a: 'Earnings depend on your niche, audience engagement, and monetization strategy. Realistically, expect $50-500/month in the first few months, scaling to $1,000+ after optimization.' },
              { q: 'Do I need initial investment?', a: 'Tools like Syllaby cost $10-50/month. Most other resources are free to start. Your main investment is time to learn and create content.' },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '16px',
                background: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ff2c2c';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 44, 44, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontWeight: 600, color: '#ff2c2c', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Q: {item.q}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>A: {item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
