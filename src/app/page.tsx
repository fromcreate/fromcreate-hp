export default function Home() {
  return (
    <main>
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
          FR0M CREATE
        </h1>
        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          opacity: 0.8,
          maxWidth: '640px',
        }}>
          Coming Soon...
        </p>
      </section>
    </main>
  );
}
