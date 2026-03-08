import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT | FR0M CREATE',
  description: 'FR0M CREATEのミッション・理念・会社概要。',
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section style={{ padding: '0 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>About</h1>
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Mission</h2>
          <p style={{ fontSize: '16px', lineHeight: 2, opacity: 0.85, maxWidth: '800px' }}>
            FR0M CREATEは、「やりたい」「こうなりたい」という理想を映像と仕組みの力で、現実に変えていくクリエイティブチームです。映像・SNS・コミュニティを通して人と企業の可能性を最大化することを使命としています。
          </p>
        </div>
        <div style={{ marginBottom: '96px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>会社概要</h2>
          <table style={{ fontSize: '15px', lineHeight: 2 }}>
            <tbody>
              {[
                ['会社名', '株式会社FR0M CREATE'],
                ['事業形態', '映像制作・SNS運用・コミュニティ運営・AEスクール'],
                ['拠点', '東京都'],
              ].map(([l, v]) => (
                <tr key={l}><td style={{ padding: '8px 32px 8px 0', opacity: 0.5 }}>{l}</td><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
