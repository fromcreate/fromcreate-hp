import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WORKS | FR0M CREATE',
  description: 'FR0M CREATEの制作実績。',
};

const categories = ['ALL', 'YouTube', 'SNS', 'PR', 'Animation', 'MV', 'AD'];

export default function WorksPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section style={{ padding: '0 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>Works</h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {categories.map((c) => (
            <button key={c} style={{
              padding: '8px 20px', fontSize: '13px', borderRadius: '20px',
              background: c === 'ALL' ? '#7b5cff' : 'rgba(255,255,255,0.08)',
              color: '#fff', border: 'none', cursor: 'pointer',
            }}>{c}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '96px' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{
              aspectRatio: '16/9', background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '14px',
            }}>
              Coming Soon
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
