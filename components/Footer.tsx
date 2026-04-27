import { Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e0e0e0',
      background: '#f8f8f8',
      padding: '40px 1.5rem',
      textAlign: 'center',
      color: '#666',
      fontSize: '14px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
        <Film size={20} color="#ff2c2c" />
        <p style={{ margin: '0' }}>Faceless Video Mastery <span style={{ fontSize: '12px', color: '#999' }}>フェイスレス</span></p>
      </div>
      <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>© 2026. Learn. Build. Dominate.</p>
    </footer>
  );
}
