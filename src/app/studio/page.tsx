import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'STUDIO | FR0M CREATE',
  description: 'FR0M CREATEのチーム紹介・拠点情報。',
};

const members = [
  { name: 'Member 1', role: 'Director / Producer' },
  { name: 'Member 2', role: 'Video Editor' },
  { name: 'Member 3', role: 'Motion Designer' },
  { name: 'Member 4', role: 'SNS Strategist' },
];

export default function StudioPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section style={{ padding: '0 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>Studio</h1>
        <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          {members.map((m) => (
            <div key={m.name} style={{
              padding: '32px', textAlign: 'center',
              background: 'rgba(255,255,255,0.03)', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'rgba(123,92,255,0.2)', margin: '0 auto 16px',
              }} />
              <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{m.name}</h3>
              <p style={{ fontSize: '13px', opacity: 0.5 }}>{m.role}</p>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Location</h2>
        <p style={{ fontSize: '16px', opacity: 0.7, marginBottom: '96px' }}>拠点：東京都</p>
      </section>
    </main>
  );
}
