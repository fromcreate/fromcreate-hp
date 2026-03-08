import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CONTACT | FR0M CREATE',
  description: 'FR0M CREATEへのお問い合わせ。',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '15px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: '#fff',
  outline: 'none',
  fontFamily: 'inherit',
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section
        className="pixel-grid"
        style={{
          padding: '0 80px 100px',
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div className="nebula nebula--purple" style={{ width: 300, height: 300, top: '-10%', right: '-20%' }} />
        <div className="nebula nebula--blue" style={{ width: 200, height: 200, bottom: '10%', left: '-15%' }} />
        <div className="accent-line" />
        <p style={{ fontFamily: 'var(--font-en)', fontSize: '13px', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: '8px' }}>CONTACT</p>
        <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>Contact</h1>
        <p style={{ fontSize: '15px', opacity: 0.7, marginBottom: '48px' }}>
          下記フォームよりお気軽にご連絡ください。
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>お名前 <span style={{ color: 'var(--color-accent)' }}>*</span></label>
            <input type="text" style={inputStyle} placeholder="例）山田 太郎" />
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>メールアドレス <span style={{ color: 'var(--color-accent)' }}>*</span></label>
            <input type="email" style={inputStyle} placeholder="example@email.com" />
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>会社名</label>
            <input type="text" style={inputStyle} placeholder="株式会社○○" />
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>お問い合わせ内容 <span style={{ color: 'var(--color-accent)' }}>*</span></label>
            <textarea rows={6} style={{ ...inputStyle, resize: 'vertical' }} placeholder="お問い合わせ内容をご記入ください" />
          </div>
          <button
            type="submit"
            className="pixel-border"
            style={{
              padding: '14px 40px',
              background: 'var(--color-accent)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '0.1em',
              border: 'none',
              cursor: 'pointer',
              alignSelf: 'center',
              fontFamily: 'inherit',
            }}
          >
            送信する
          </button>
        </form>
      </section>
    </main>
  );
}
