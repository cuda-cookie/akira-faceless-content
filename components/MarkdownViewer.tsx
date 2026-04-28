'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface Props {
  title?: string;
  initialContent: string;
  backHref?: string;
  backLabel?: string;
}

let lastHeading = '';

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
  img: ({src, alt}) => (
    <div className="tech-border" style={{ margin: '32px 0' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  ),
  h1: ({children}) => <h1 style={{ fontSize: '40px', fontWeight: 900, marginTop: '48px', marginBottom: '24px', color: '#1a1a1a', letterSpacing: '-0.02em' }}>{children}</h1>,
  h2: ({children, ...props}) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
    lastHeading = children?.toString() || 'Section';
    return <h2 id={id} {...props} style={{ fontSize: '28px', fontWeight: 800, marginTop: '40px', marginBottom: '20px', color: '#1a1a1a', borderBottom: '2px solid rgba(255, 44, 44, 0.1)', paddingBottom: '12px' }}>{children}</h2>;
  },
  h3: ({children, ...props}) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
    lastHeading = children?.toString() || 'Section';
    return <h3 id={id} {...props} style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '16px', color: '#ff2c2c' }}>{children}</h3>;
  },
  p: ({children}) => <p style={{ fontSize: '17px', lineHeight: '1.8', marginBottom: '20px', color: '#444' }}>{children}</p>,
  ul: ({children, ...props}) => {
    const listItems = React.Children.toArray(children).filter(
      (child: any) => child && child.type === 'li'
    );
    const content = <ul {...props} style={{ marginLeft: '24px', marginBottom: '20px', fontSize: '17px', lineHeight: '1.8', color: '#444' }}>{children}</ul>;
    
    if (listItems.length > 5) {
      return (
        <details>
          <summary>{lastHeading || 'Extended List'}</summary>
          <div style={{ marginTop: '12px' }}>{content}</div>
        </details>
      );
    }
    return content;
  },
  li: ({children}) => <li style={{ marginBottom: '8px' }}>{children}</li>,
  table: ({children, ...props}) => {
    return (
      <details>
        <summary>{lastHeading || 'Comparison Table'}</summary>
        <div style={{ overflowX: 'auto' }}>
          <table {...props} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>{children}</table>
        </div>
      </details>
    );
  },
  th: ({children}) => <th style={{ borderBottom: '2px solid #ff2c2c', padding: '12px', textAlign: 'left' }}>{children}</th>,
  td: ({children}) => <td style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '12px' }}>{children}</td>,
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

export default function MarkdownViewer({ initialContent, title, backHref, backLabel }: Props) {
  const [headings, setHeadings] = useState<{id: string, text: string, level: number}[]>([]);
  const [activeId, setActiveId] = useState('');

  // Extract frontmatter
  const takeawayMatch = initialContent.match(/takeaway:\s*(.*)/i);
  const takeaway = takeawayMatch ? takeawayMatch[1].replace(/^["']|["']$/g, '') : null;
  const cleanContent = initialContent.replace(/---[\s\S]*?---/, '');

  useEffect(() => {
    const lines = cleanContent.split('\n');
    const h = lines
      .filter(line => line.startsWith('## ') || line.startsWith('### '))
      .map(line => {
        const level = line.startsWith('### ') ? 3 : 2;
        const text = line.replace(/^###?\s+/, '').replace(/[\[\]*`]/g, '');
        const id = text.toLowerCase().replace(/\s+/g, '-');
        return { id, text, level };
      });
    setHeadings(h);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    h.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cleanContent]);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingTop: '68px' }}>
      {(backHref || title) && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 900,
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)', height: '64px',
          display: 'flex', alignItems: 'center',
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            {backHref ? (
              <Link href={backHref} style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '14px', fontWeight: 700, color: '#666',
                transition: 'color 0.2s', textDecoration: 'none'
              }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff2c2c'} onMouseLeave={(e) => e.currentTarget.style.color = '#666'}>
                <ChevronLeft size={20} /> {backLabel || 'Back'}
              </Link>
            ) : <div />}

            {title && (
              <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {title}
                </div>
              </div>
            )}
            <div style={{ width: '60px' }} />
          </div>
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', padding: '100px 1.5rem 80px' }}>
        <div style={{ flex: 1, maxWidth: '800px' }}>
          {takeaway && (
            <div style={{
              borderLeft: '3px solid #ff2c2c',
              background: '#fff0f0',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '32px'
            }}>
              <div style={{ fontWeight: 'bold', color: '#ff2c2c', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Key takeaway</div>
              <div style={{ color: '#333', fontSize: '14px', lineHeight: '1.6' }}>{takeaway}</div>
            </div>
          )}

          <div className="lesson-prose" style={{ position: 'relative' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {cleanContent}
            </ReactMarkdown>
          </div>
        </div>

        {headings.length > 0 && (
          <aside className="minimap lg:block" style={{ display: 'none', width: '250px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: '#ff2c2c', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>On this page</div>
            {headings.map(h => (
              <a 
                key={h.id} 
                href={`#${h.id}`} 
                className={`minimap-link ${activeId === h.id ? 'active' : ''}`}
                style={{ paddingLeft: h.level === 3 ? '16px' : '0' }}
              >
                {h.text}
              </a>
            ))}
          </aside>
        )}
      </div>
      
      <style jsx global>{`
        @media (min-width: 1024px) {
          .lg\:block { display: block !important; }
        }
      `}</style>
    </div>
  );
}
