import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SERVICES | FR0M CREATE',
  description: '映像制作・SNS運用代行・クリエイターコミュニティ・AEスクール。',
};

const serviceList = [
  {
    title: '映像制作事業',
    items: ['PR動画', 'アニメーション(2D/3DCG)', 'YouTube動画', 'SNS縦型動画', 'MV制作'],
    features: ['企画～編集までワンストップ対応', '継続制作 / スポット案件どちらも可能'],
    icon: '▶',
  },
  {
    title: 'SNS運用代行',
    items: ['企画・台本制作', '撮影・編集', '投稿代行', '分析・改善提案'],
    features: ['企画から分析まで一貫対応'],
    icon: '◆',
  },
  {
    title: 'クリエイターコミュニティ',
    items: ['案件獲得', '有料級素材利用', '勉強会参加', '交流会', '部活', '就職・仕事探し'],
    features: ['動画編集者向けコミュニティ', '教育・仕事・交流を一体化'],
    icon: '●',
  },
  {
    title: 'AEスクール',
    items: ['未経験から実務レベルまで', 'オンライン完結', 'マンツーマンサポート'],
    features: ['After Effectsを未経験から実務レベルまで習得'],
    icon: '★',
  },
];

export default function ServicesPage() {
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
        <div className="nebula nebula--blue" style={{ width: 400, height: 400, top: '5%', right: '-10%' }} />
        <div className="accent-line" />
        <p style={{ fontFamily: 'var(--font-en)', fontSize: '13px', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: '8px' }}>SERVICES</p>
        <h1 style={{ fontSize: '40px', marginBottom: '64px' }}>Services</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {serviceList.map((service, i) => (
            <div
              key={service.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                padding: '40px',
                background: 'var(--color-card-bg)',
                borderLeft: '3px solid var(--color-accent)',
                position: 'relative',
              }}
            >
              {i % 2 === 0 && (
                <div className={`nebula nebula--${i === 0 ? 'pink' : 'purple'}`} style={{ width: 200, height: 200, top: '-20%', right: '-5%' }} />
              )}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '28px', color: 'var(--color-accent)', display: 'block', marginBottom: '8px' }}>{service.icon}</span>
                <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>{service.title}</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {service.items.map((item) => (
                    <span key={item} style={{ padding: '4px 12px', fontSize: '13px', background: 'rgba(123,92,255,0.15)', border: '1px solid rgba(123,92,255,0.3)', color: 'var(--color-accent)' }}>{item}</span>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: 'var(--color-accent)' }}>特徴</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ fontSize: '14px', opacity: 0.8, lineHeight: 2, paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '80px', position: 'relative', zIndex: 1 }}>
          <div className="nebula nebula--purple" style={{ width: 250, height: 250, top: '-50%', left: '30%' }} />
          <p style={{ fontSize: '16px', opacity: 0.7, marginBottom: '24px' }}>各サービスの詳細やお見積りはお気軽にご相談ください。</p>
          <Link
            href="/contact"
            className="pixel-border"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              background: 'var(--color-accent)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '0.1em',
            }}
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </main>
  );
}
