import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WORKS | FR0M CREATE',
  description: 'FR0M CREATEの制作実績。',
};

const categories = ['ALL', 'YouTube', 'SNS', 'PR', 'Animation', 'MV', 'AD'];

export default function WorksPage() {
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
        <div className="nebula nebula--pink" style={{ width: 350, height: 350, top: '10%', left: '-5%' }} />
        <div className="nebula nebula--blue" style={{ width: 250, height: 250, bottom: '20%', right: '5%' }} />
        <div className="accent-line" />
        <p style={{ fontFamily: 'var(--font-en)', fontSize: '13px', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: '8px' }}>WORKS</p>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>Works</h1>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
          {categories.map((c) => (
            <button
              key={c}
              style={{
                padding: '8px 20px',
                fontSize: '13px',
                background: c === 'ALL' ? 'var(--color-accent)' : 'rgba(255,255,255,0.08)',
                color: '#fff',
                border: '1px solid rgba(123,92,255,0.3)',
                cursor: 'pointer',
                fontFamily: 'var(--font-en)',
                letterSpacing: '1px',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Works Grid - Placeholder */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', position: 'relative', zIndex: 1 }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                aspectRatio: '16/9',
                background: 'var(--color-card-bg)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                opacity: 0.5,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ fontFamily: 'var(--font-en)', color: 'var(--color-accent)' }}>COMING SOON</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
