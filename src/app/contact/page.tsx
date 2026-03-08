import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CONTACT | FR0M CREATE',
  description: 'FR0M CREATEへのお問い合わせ。',
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '15px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '8px',
  color: '#fff',
  outline: 'none',
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section style={{ padding: '0 80px', maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>Contact</h1>
        <p style={{ fontSize: '15px', opacity: 0.7, marginBottom: '48px' }}>
          企画段階のご相談でもOKです。お気軽にご連絡ください。
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '96px' }}>
          <div>
            <label style={{ fontSize: '13px', opacity: 0.6, display: 'block', marginBottom: '8px' }}>お名前 *</label>
            <input type="text" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '13px', opacity: 0.6, display: 'block', marginBottom: '8px' }}>会社名</label>
            <input type="text" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '13px', opacity: 0.6, display: 'block', marginBottom: '8px' }}>メールアドレス *</label>
            <input type="email" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '13px', opacity: 0.6, display: 'block', marginBottom: '8px' }}>相談内容</label>
            <select style={{ ...inputStyle, appearance: 'none' } as React.CSSProperties}>
              <option value="">選択してください</option>
              <option>映像制作</option>
              <option>SNS運用</option>
              <option>コミュニティ</option>
              <option>スクール</option>
              <option>その他</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '13px', opacity: 0.6, display: 'block', marginBottom: '8px' }}>お問い合わせ内容 *</label>
            <textarea rows={6} style={{ ...inputStyle, resize: 'vertical' } as React.CSSProperties} />
          </div>
          <button type="submit" style={{
            padding: '16px', background: '#7b5cff', color: '#fff',
            border: 'none', borderRadius: '8px', fontSize: '16px',
            fontWeight: 600, cursor: 'pointer', marginTop: '8px',
          }}>送信する</button>
        </form>
      </section>
    </main>
  );
}
