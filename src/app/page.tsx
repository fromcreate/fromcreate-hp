import Link from 'next/link';

const services = [
  { title: '映像制作', desc: 'PR・YouTube・SNS・MV・広告動画を企画から編集までワンストップで。', href: '/services' },
  { title: 'SNS運用代行', desc: '企画・台本・撮影・編集・投稿・分析まで一貫対応。', href: '/services' },
  { title: 'コミュニティ', desc: '動画編集者向けコミュニティ。案件・スキル・交流を一体化。', href: '/services' },
  { title: 'AEスクール', desc: 'After Effectsを未経験から実務レベルまで習得。', href: '/services' },
];

const strengths = [
  { title: '実務に強い映像制作チーム', desc: '目的・ターゲット・活用シーンを踏まえた提案型の制作。' },
  { title: '100名超のネットワーク', desc: '案件規模やジャンルに応じて最適なチームを柔軟に編成。' },
  { title: 'クリエイターコミュニティ', desc: '教育・仕事・交流が循環するエコシステム。' },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <h1 style={{
          fontSize: 'clamp(26px, 4vw, 44px)',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          理想を、現実にする映像・SNSクリエイティブチーム。
        </h1>
        <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', opacity: 0.7, maxWidth: '640px', marginBottom: '32px' }}>
          映像制作／SNS運用／クリエイターコミュニティ／AEスクールで、あなたの「やりたい」を現実に変えるパートナーです。
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/contact" style={{
            padding: '16px 40px', background: '#7b5cff', color: '#fff',
            borderRadius: '8px', fontSize: '16px', fontWeight: 600,
          }}>無料相談してみる</Link>
          <Link href="/works" style={{
            padding: '16px 40px', border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px', fontSize: '16px', color: '#fff',
          }}>実績を見てみる</Link>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '96px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Mission — 理想を、現実に。</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.8, maxWidth: '720px' }}>
          理想は、形にして届けてこそ価値になる。映像と仕組みで、人と企業の可能性を最大化する。
        </p>
        <Link href="/about" style={{ display: 'inline-block', marginTop: '24px', color: '#7b5cff', fontSize: '14px' }}>
          私たちの想いを見る &rarr;
        </Link>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '96px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '48px' }}>Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {services.map((s) => (
            <Link key={s.title} href={s.href} style={{
              padding: '32px', background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: 1.6 }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WORKS HIGHLIGHT */}
      <section style={{ padding: '96px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Works — Selected Missions</h2>
        <p style={{ fontSize: '14px', opacity: 0.6, marginBottom: '48px' }}>
          YouTube、広告動画、MVなど、多様なジャンルの実績から一部を紹介。
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              aspectRatio: '16/9', background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'rgba(255,255,255,0.3)',
            }}>
              Coming Soon
            </div>
          ))}
        </div>
        <Link href="/works" style={{ display: 'inline-block', marginTop: '32px', color: '#7b5cff', fontSize: '14px' }}>
          すべての実績を見る &rarr;
        </Link>
      </section>

      {/* STRENGTHS */}
      <section style={{ padding: '96px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '48px' }}>Why FR0M CREATE?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {strengths.map((s) => (
            <div key={s.title} style={{ padding: '24px 0' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', opacity: 0.7, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '96px 80px', textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>映像やSNSのことで相談してみたい方へ。</h2>
        <p style={{ fontSize: '15px', opacity: 0.7, marginBottom: '32px' }}>
          企画段階の相談でもOKです。まずはお気軽にご連絡ください。
        </p>
        <Link href="/contact" style={{
          padding: '16px 48px', background: '#7b5cff', color: '#fff',
          borderRadius: '8px', fontSize: '16px', fontWeight: 600,
        }}>問い合わせページへ</Link>
      </section>
    </main>
  );
}
