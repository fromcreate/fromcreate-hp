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
      <section
        className="pixel-grid"
        style={{
          padding: '0 80px 100px',
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div className="nebula nebula--purple" style={{ width: 300, height: 300, top: '5%', left: '-5%' }} />
        <div className="nebula nebula--blue" style={{ width: 250, height: 250, bottom: '10%', right: '10%' }} />
        <div className="accent-line" />
        <p style={{ fontFamily: 'var(--font-en)', fontSize: '13px', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: '8px' }}>STUDIO</p>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>Studio</h1>

        {/* Team */}
        <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
          {members.map((m) => (
            <div
              key={m.name}
              style={{
                padding: '32px',
                textAlign: 'center',
                background: 'var(--color-card-bg)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-accent), #00bfff)',
                margin: '0 auto 16px',
                opacity: 0.6,
              }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{m.name}</h3>
              <p style={{ fontSize: '13px', fontFamily: 'var(--font-en)', opacity: 0.6 }}>{m.role}</p>
            </div>
          ))}
        </div>

        {/* Environment */}
        <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>制作環境</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', position: 'relative', zIndex: 1 }}>
          {[
            { label: '編集ソフト', items: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'] },
            { label: 'ツール', items: ['Figma', 'Notion', 'Slack', 'Google Workspace'] },
          ].map((env) => (
            <div key={env.label} style={{ padding: '32px', background: 'var(--color-card-bg)', borderLeft: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: 'var(--color-accent)' }}>{env.label}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {env.items.map((item) => (
                  <li key={item} style={{ fontSize: '14px', opacity: 0.8, lineHeight: 2, paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
