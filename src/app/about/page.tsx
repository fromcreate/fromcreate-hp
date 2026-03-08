import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT | FR0M CREATE',
  description: 'FR0M CREATEのミッション・理念・会社概要。',
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      {/* HERO */}
      <section
        className="pixel-grid"
        style={{
          padding: '0 80px',
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div className="nebula nebula--purple" style={{ width: 350, height: 350, top: '-10%', right: '5%' }} />
        <div className="accent-line" />
        <p style={{ fontFamily: 'var(--font-en)', fontSize: '13px', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: '8px' }}>ABOUT</p>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>About</h1>

        {/* Mission */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Mission</h2>
          <p style={{ fontSize: '16px', lineHeight: 2, opacity: 0.85, maxWidth: '800px' }}>
            FR0M CREATEは、「やりたい」「こうなりたい」という理想を映像と仕組みの力で、現実にする会社です。
          </p>
        </div>

        {/* Company Info */}
        <div style={{ marginBottom: '96px', position: 'relative' }}>
          <div className="nebula nebula--blue" style={{ width: 250, height: 250, bottom: '-20%', left: '60%' }} />
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>会社概要</h2>
          <table style={{ fontSize: '15px', lineHeight: 2, borderCollapse: 'collapse', position: 'relative', zIndex: 1 }}>
            <tbody>
              {[
                ['会社名', '株式会社FR0M CREATE'],
                ['事業内容', '映像制作 / SNS運用 / コミュニティ / AEスクール'],
                ['所在地', '栃木県宇都宮市'],
                ['代表', '代表取締役'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td style={{ padding: '8px 32px 8px 0', color: 'var(--color-accent)', fontWeight: 700, whiteSpace: 'nowrap' }}>{label}</td>
                  <td style={{ padding: '8px 0', opacity: 0.8 }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
