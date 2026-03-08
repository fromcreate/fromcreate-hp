import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SERVICES | FR0M CREATE',
  description: '映像制作・SNS運用代行・クリエイターコミュニティ・AEスクール',
};

const serviceList = [
  {
    title: '映像制作事業',
    items: ['PR動画', 'アニメーション(2D/3DCG)', 'YouTube動画', 'SNS縦型動画', 'MV制作', '広告動画'],
    features: ['企画～編集までワンストップ対応', '継続制作 / スポット案件どちらも可能', 'SNS運用視点を踏まえた構成提案'],
  },
  {
    title: 'SNS運用代行',
    items: ['企画・台本制作', '撮影・編集', '投稿代行', '分析・改善提案'],
    features: ['企画から分析まで一貫対応'],
  },
  {
    title: 'クリエイターコミュニティ',
    items: ['案件獲得', '有料級素材利用', '勉強会参加', '交流会', '部活', '就職・仕事探し', '各種割引'],
    features: ['動画編集者向けコミュニティ', '教育・仕事・交流を一体化'],
  },
  {
    title: 'AEスクール',
    items: ['After Effects習得', '未経験から実務レベルへ'],
    features: ['制作に直結するカリキュラム'],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section style={{ padding: '0 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '48px' }}>Services</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {serviceList.map((s) => (
            <div key={s.title} style={{
              padding: '40px', background: 'rgba(255,255,255,0.03)',
              borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>{s.title}</h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {s.items.map((item) => (
                  <span key={item} style={{
                    padding: '6px 16px', fontSize: '13px', borderRadius: '20px',
                    background: 'rgba(123,92,255,0.15)', color: '#b8a4ff',
                  }}>{item}</span>
                ))}
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {s.features.map((f) => (
                  <li key={f} style={{ fontSize: '14px', opacity: 0.7, lineHeight: 2 }}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '64px', marginBottom: '96px' }}>
          <Link href="/contact" style={{
            padding: '16px 48px', background: '#7b5cff', color: '#fff',
            borderRadius: '8px', fontSize: '16px', fontWeight: 600,
          }}>まずは相談する</Link>
        </div>
      </section>
    </main>
  );
}
