import Link from 'next/link';

const S = {
  icon: {fontSize:'32px',display:'block',marginBottom:'8px',color:'var(--color-accent)'},
  card: {background:'var(--color-card-bg)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 24px'},
  num: {fontFamily:'var(--font-en)',fontSize:'48px',fontWeight:700,color:'var(--color-accent)',opacity:0.3,display:'block',marginBottom:'8px'},
  bl: {borderLeft:'3px solid var(--color-accent)',padding:'32px',background:'var(--color-card-bg)'},
};

const services = [
  {title:'映像制作',desc:'PR・YouTube・SNS・MV・広告動画を企画から編集までワンストップで。',href:'/services',icon:'▶'},
  {title:'SNS運用代行',desc:'企画・台本・撮影・編集・投稿・分析まで一貫対応。',href:'/services',icon:'◆'},
  {title:'コミュニティ',desc:'動画編集者向けコミュニティ。案件・スキル・交流を一体化。',href:'/services',icon:'●'},
  {title:'AEスクール',desc:'After Effectsを未経験から実務レベルまで習得。',href:'/services',icon:'★'},
];

const strengths = [
  {title:'実務に強い映像制作チーム',desc:'目的・ターゲット・活用シーンを踏まえた提案型の制作。'},
  {title:'100名超のネットワーク',desc:'案件規模やジャンルに応じて最適なチームを柔軟に編成。'},
  {title:'クリエイターコミュニティ',desc:'教育・仕事・交流が循環するエコシステム。'},
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="pixel-grid" style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'220px 24px 80px',position:'relative',overflow:'hidden'}}>
        {/* Nebula */}
        <div className="nebula nebula--orange" style={{width:500,height:500,top:'-10%',left:'-10%',opacity:0.2}} />
        <div className="nebula nebula--orange" style={{width:400,height:400,top:'-5%',right:'-5%',opacity:0.15}} />
        <div className="nebula nebula--teal" style={{width:300,height:300,bottom:'10%',right:'5%',opacity:0.1}} />
        {/* Pixel Planet */}
        <div className="float" style={{position:'absolute',top:'8%',left:'50%',transform:'translateX(-50%)'}}>
          <div className="pixel-planet" style={{width:160,height:160}} />
        </div>
        {/* Rocket */}
        <div className="pixel-rocket" style={{position:'absolute',bottom:'15%',left:'8%',fontSize:'40px'}}>🚀</div>
        {/* Space Stations */}
        <div style={{position:'absolute',top:'30%',left:'5%',fontSize:'48px',animation:'float 5s ease-in-out infinite',filter:'drop-shadow(0 0 12px rgba(0,200,160,0.4))'}}>🛸</div>
        <div style={{position:'absolute',top:'35%',right:'5%',fontSize:'44px',animation:'float 7s ease-in-out infinite 1s',filter:'drop-shadow(0 0 12px rgba(123,92,255,0.4))'}}>🛸</div>
        {/* Asteroids */}
        <div className="pixel-asteroid" style={{position:'absolute',top:'20%',right:'12%',fontSize:'24px'}}>🪨</div>
        <div className="pixel-asteroid" style={{position:'absolute',top:'25%',right:'8%',fontSize:'18px',animationDelay:'2s'}}>🪨</div>
        <div className="pixel-asteroid" style={{position:'absolute',top:'15%',right:'18%',fontSize:'20px',animationDelay:'4s'}}>🪨</div>
        <div className="pixel-asteroid" style={{position:'absolute',bottom:'20%',right:'3%',fontSize:'22px',animationDelay:'1s'}}>🪨</div>
        {/* Shooting star */}
        <div className="shooting-star" style={{top:'30%',left:'10%'}} />
        <div className="shooting-star" style={{top:'60%',left:'20%',animationDelay:'5s'}} />
        {/* Text */}
        <p style={{fontFamily:'var(--font-pixel)',fontSize:'clamp(8px,1.2vw,12px)',letterSpacing:'4px',color:'var(--color-teal)',marginBottom:'20px'}}>FR0M CREATE</p>
        <h1 className="glitch" data-text="理想を、現実に。" style={{fontSize:'clamp(32px,6vw,72px)',fontWeight:700,letterSpacing:'0.05em',lineHeight:1.2,marginBottom:'24px'}}>理想を、現実に。</h1>
        <p style={{fontSize:'16px',maxWidth:'600px',opacity:0.7,marginBottom:'40px',lineHeight:1.8}}>映像制作×SNS運用×クリエイターコミュニティで、あなたのビジョンを形に。</p>
        <Link href="/contact" className="pixel-border" style={{display:'inline-block',padding:'14px 40px',background:'var(--color-accent)',color:'#fff',fontWeight:700,fontSize:'15px',letterSpacing:'0.1em'}}>お問い合わせ</Link>
      </section>

      {/* SERVICES */}
      <section style={{padding:'100px 24px',maxWidth:'1200px',margin:'0 auto',position:'relative'}}>
        <div className="nebula nebula--teal" style={{width:300,height:300,top:'0',right:'-5%',opacity:0.1}} />
        <div className="accent-line" />
        <p style={{fontFamily:'var(--font-pixel)',fontSize:'10px',letterSpacing:'3px',color:'var(--color-accent)',marginBottom:'12px'}}>SERVICES</p>
        <h2 style={{fontSize:'28px',fontWeight:700,marginBottom:'48px'}}>事業内容</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'24px',position:'relative',zIndex:1}}>
          {services.map((s)=>(
            <Link key={s.title} href={s.href} style={S.card}>
              <span style={S.icon}>{s.icon}</span>
              <h3 style={{fontSize:'18px',fontWeight:700,marginBottom:'8px'}}>{s.title}</h3>
              <p style={{fontSize:'14px',opacity:0.7,lineHeight:1.7}}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="pixel-grid" style={{padding:'100px 24px',position:'relative'}}>
        <div className="nebula nebula--purple" style={{width:350,height:350,top:'20%',left:'-5%',opacity:0.12}} />
        <div style={{maxWidth:'1200px',margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="accent-line" />
          <p style={{fontFamily:'var(--font-pixel)',fontSize:'10px',letterSpacing:'3px',color:'var(--color-accent)',marginBottom:'12px'}}>STRENGTHS</p>
          <h2 style={{fontSize:'28px',fontWeight:700,marginBottom:'48px'}}>FR0M CREATEの強み</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'32px'}}>
            {strengths.map((s,i)=>(
              <div key={s.title} style={S.bl}>
                <span style={S.num}>0{i+1}</span>
                <h3 style={{fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>{s.title}</h3>
                <p style={{fontSize:'14px',opacity:0.7,lineHeight:1.7}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'100px 24px',textAlign:'center',position:'relative'}}>
        <div className="nebula nebula--orange" style={{width:300,height:300,top:'20%',right:'10%',opacity:0.1}} />
        <div style={{position:'relative',zIndex:1}}>
          <h2 style={{fontSize:'28px',fontWeight:700,marginBottom:'16px'}}>お気軽にご相談ください</h2>
          <p style={{fontSize:'15px',opacity:0.7,margin:'0 auto 32px',maxWidth:'500px'}}>映像制作・コミュニティ・スクールについて、まずはお話をお聞かせください。</p>
          <Link href="/contact" className="pixel-border" style={{display:'inline-block',padding:'14px 40px',background:'var(--color-accent)',color:'#fff',fontWeight:700,fontSize:'15px',letterSpacing:'0.1em'}}>お問い合わせはこちら</Link>
        </div>
      </section>
    </main>
  );
}
