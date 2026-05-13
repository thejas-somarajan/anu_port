'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Mail, Instagram, Pin, Send, CheckCircle, Star, MapPin } from 'lucide-react';

/* ── data ── */
const skills = [
  { name: 'Adobe Photoshop', pct: 90 }, { name: 'Adobe Illustrator', pct: 85 },
  { name: 'Figma', pct: 80 }, { name: 'Canva', pct: 95 },
  { name: 'HTML / CSS', pct: 85 }, { name: 'JavaScript', pct: 70 },
];
const tools = ['🎨 Photoshop','✏️ Illustrator','🖼️ Figma','📐 InDesign','🌐 HTML/CSS','⚛️ React','🎞️ Procreate','📸 Lightroom'];
const projects = [
  { id:'p1', title:'Aurora Branding', desc:'Full brand identity for a tech startup.', img:'/project-branding.png', tags:['Branding','Logo'], cat:'Design' },
  { id:'p2', title:'Analytics Dashboard', desc:'Mobile app UI with data visualisation.', img:'/project-ui.png', tags:['UI/UX','Figma'], cat:'UI/UX' },
  { id:'p3', title:'Portfolio Website', desc:'Animated portfolio for a creative agency.', img:'/project-web.png', tags:['Web','Dev'], cat:'Dev' },
  { id:'p4', title:'Social Campaign', desc:'Visual content strategy over 3 months.', img:'/project-branding.png', tags:['Social','Content'], cat:'Design' },
];
const timeline = [
  { year:'2020 – Present', title:'Indragiri Institute of Technology and Business', type:'Education', desc:'Majoring in Human Resource Management while specialising in graphic design and digital innovation.' },
  { year:'2022', title:'BEM Communication Member', type:'Experience', desc:'Led design initiatives, developed branding strategies and managed creative campaigns.' },
  { year:'2021–22', title:'One Day One Story — Volunteer', type:'Volunteer', desc:'Editing and content creation for creative storytelling projects.' },
];
const langs = [
  { name:'Indonesian', level:'Native', pct:100 },
  { name:'English',   level:'Advanced', pct:85 },
  { name:'Japanese',  level:'Intermediate', pct:55 },
];
const cats = ['All','Design','UI/UX','Dev'];

/* ── page ── */
export default function Page() {
  const [activeCat, setActiveCat] = useState('All');
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const filtered = activeCat === 'All' ? projects : projects.filter(p => p.cat === activeCat);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  }

  /* shared heading style */
  const H2 = (text: string, accent: string) => (
    <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:800, color:'#E8F6FA', margin:0, letterSpacing:'-0.02em' }}>
      {text} <span className="gradient-text">{accent}</span>
    </h2>
  );

  return (
    <div style={{ background:'#083848', minHeight:'100vh', position:'relative', overflowX:'hidden' }}>
      {/* ambient orbs */}
      <div className="mesh-bg" />
      <div className="mesh-orb" style={{ width:600,height:600,top:-100,left:-200, background:'radial-gradient(circle,rgba(42,191,204,0.12) 0%,transparent 70%)' }}/>
      <div className="mesh-orb" style={{ width:450,height:450,top:'40vh',right:-150, background:'radial-gradient(circle,rgba(155,127,196,0.1) 0%,transparent 70%)' }}/>
      <div className="mesh-orb" style={{ width:350,height:350,top:'80vh',left:'30%', background:'radial-gradient(circle,rgba(42,191,204,0.07) 0%,transparent 70%)' }}/>
      <div className="mesh-orb" style={{ width:500,height:500,top:'130vh',right:-100, background:'radial-gradient(circle,rgba(212,119,154,0.08) 0%,transparent 70%)' }}/>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>

        {/* ══ HERO ══ */}
        <section id="home" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', flexDirection:'column', gap:24, paddingTop:80, paddingBottom:80 }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'6px 18px',borderRadius:99, background:'rgba(42,191,204,0.08)',border:'1px solid rgba(42,191,204,0.2)', color:'#8ECFD8',fontSize:'0.8rem',fontWeight:500 }}>
            <Star size={12} style={{ color:'#2ABFCC' }}/> Available for Freelance Work
          </div>
          <div>
            <p style={{ color:'#8ECFD8',fontSize:'1.1rem',margin:'0 0 12px' }}>Hi, I&apos;m Ine Herlina 👋</p>
            <h1 style={{ fontSize:'clamp(3rem,8vw,6rem)',fontWeight:900,lineHeight:1.05,letterSpacing:'-0.03em',color:'#E8F6FA',margin:0 }}>
              Creative <span className="shimmer">Designer</span>
              <br />& Developer
            </h1>
          </div>
          <p style={{ color:'#8ECFD8',fontSize:'1.05rem',maxWidth:520,lineHeight:1.75,margin:0 }}>
            Crafting beautiful digital experiences that merge aesthetics with functionality. I turn complex ideas into elegant, user-centric designs.
          </p>
          <div style={{ display:'flex',gap:14,flexWrap:'wrap',justifyContent:'center' }}>
            <a href="#projects" style={{ textDecoration:'none' }}>
              <button className="btn-gradient" style={{ padding:'13px 28px',borderRadius:99,border:'none',fontSize:'0.95rem',cursor:'pointer',display:'flex',alignItems:'center',gap:8 }}>
                View Projects <ArrowRight size={16}/>
              </button>
            </a>
            <a href="#contact" style={{ textDecoration:'none' }}>
              <button className="btn-outline-gradient" style={{ padding:'13px 28px',borderRadius:99,fontSize:'0.95rem',cursor:'pointer',display:'flex',alignItems:'center',gap:8 }}>
                Let&apos;s Talk
              </button>
            </a>
          </div>
          <div style={{ display:'flex',gap:40,flexWrap:'wrap',justifyContent:'center',padding:'24px 40px',borderRadius:20, background:'rgba(42,191,204,0.04)',border:'1px solid rgba(42,191,204,0.1)' }}>
            {[['3+','Years Exp'],['20+','Projects'],['15+','Skills']].map(([v,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ fontSize:'2rem',fontWeight:800,background:'linear-gradient(135deg,#2ABFCC,#9B7FC4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>{v}</div>
                <div style={{ color:'#8ECFD8',fontSize:'0.8rem',fontWeight:500,marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* divider */}
        <div style={{ height:1,background:'linear-gradient(90deg,transparent,rgba(42,191,204,0.2),transparent)',marginBottom:100 }}/>

        {/* ══ ABOUT ══ */}
        <section id="about" style={{ paddingBottom:100 }}>
          <div style={{ textAlign:'center',marginBottom:56 }}>
            <p className="section-label">About Me</p>
            {H2('Who', 'Am I?')}
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:32,alignItems:'start' }}>
            {/* profile card */}
            <div className="glass card-hover" style={{ borderRadius:24,padding:32,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:16 }}>
              <div style={{ width:140,height:140,borderRadius:'50%',overflow:'hidden',border:'3px solid rgba(42,191,204,0.35)',boxShadow:'0 0 30px rgba(42,191,204,0.18)',position:'relative',flexShrink:0 }}>
                <Image src="/profile.jpg" alt="Ine Herlina" fill style={{ objectFit:'cover' }}/>
              </div>
              <div>
                <h3 style={{ color:'#E8F6FA',fontWeight:700,fontSize:'1.4rem',margin:0 }}>Ine Herlina</h3>
                <p style={{ color:'#2ABFCC',fontWeight:500,fontSize:'0.88rem',marginTop:4 }}>Graphic Designer · Creative Enthusiast</p>
              </div>
              <div style={{ display:'flex',alignItems:'center',gap:6,color:'#8ECFD8',fontSize:'0.85rem' }}>
                <MapPin size={13}/> Riau, Indonesia
              </div>
              <div style={{ width:'100%',height:1,background:'rgba(42,191,204,0.1)' }}/>
              {/* languages */}
              <div style={{ width:'100%' }}>
                <p style={{ color:'#8ECFD8',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:14 }}>Languages</p>
                {langs.map(l => (
                  <div key={l.name} style={{ marginBottom:12 }}>
                    <div style={{ display:'flex',justifyContent:'space-between',marginBottom:6 }}>
                      <span style={{ color:'#E8F6FA',fontSize:'0.82rem',fontWeight:500 }}>{l.name}</span>
                      <span style={{ color:'#8ECFD8',fontSize:'0.72rem' }}>{l.level}</span>
                    </div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width:`${l.pct}%` }}/></div>
                  </div>
                ))}
              </div>
            </div>
            {/* bio + timeline */}
            <div style={{ display:'flex',flexDirection:'column',gap:24 }}>
              <div className="glass" style={{ borderRadius:20,padding:32 }}>
                <p style={{ color:'#8ECFD8',lineHeight:1.8,fontSize:'0.95rem',margin:'0 0 12px' }}>
                  I am a student majoring in Human Resource Management, graphic designer, and creative enthusiast who is ready to work hard.
                </p>
                <p style={{ color:'#8ECFD8',lineHeight:1.8,fontSize:'0.95rem',margin:0 }}>
                  My passion lies in visual storytelling — turning ideas into stunning designs using Canva, PicsArt, CapCut, and more. I believe great design is invisible, working so naturally that users never notice the craft behind it.
                </p>
              </div>
              {timeline.map((t, i) => (
                <div key={i} className="glass card-hover" style={{ borderRadius:18,padding:'24px 28px',display:'flex',gap:16,alignItems:'flex-start' }}>
                  <div className="timeline-dot" style={{ marginTop:4 }}/>
                  <div>
                    <div style={{ display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginBottom:6 }}>
                      <span style={{ fontSize:'0.7rem',fontWeight:700,padding:'3px 10px',borderRadius:99, background:'rgba(42,191,204,0.1)',color:'#2ABFCC',border:'1px solid rgba(42,191,204,0.2)' }}>{t.type}</span>
                      <span style={{ color:'#8ECFD8',fontSize:'0.78rem' }}>{t.year}</span>
                    </div>
                    <h4 style={{ color:'#E8F6FA',fontWeight:700,fontSize:'0.95rem',margin:'0 0 6px' }}>{t.title}</h4>
                    <p style={{ color:'#8ECFD8',fontSize:'0.85rem',lineHeight:1.65,margin:0 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height:1,background:'linear-gradient(90deg,transparent,rgba(42,191,204,0.2),transparent)',marginBottom:100 }}/>

        {/* ══ PROJECTS ══ */}
        <section id="projects" style={{ paddingBottom:100 }}>
          <div style={{ textAlign:'center',marginBottom:40 }}>
            <p className="section-label">My Work</p>
            {H2('My', 'Projects')}
            <p style={{ color:'#8ECFD8',marginTop:14,fontSize:'0.95rem' }}>Branding, UI/UX design, and web development</p>
          </div>
          {/* filter tabs */}
          <div style={{ display:'flex',justifyContent:'center',gap:10,marginBottom:48,flexWrap:'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActiveCat(c)} style={{
                padding:'8px 22px',borderRadius:99,border:activeCat===c?'none':'1px solid rgba(42,191,204,0.2)',
                background:activeCat===c?'linear-gradient(135deg,#1A8090,#2ABFCC)':'rgba(255,255,255,0.03)',
                color:activeCat===c?'#fff':'#8ECFD8',fontWeight:600,fontSize:'0.85rem',cursor:'pointer',
                fontFamily:'Inter,sans-serif',boxShadow:activeCat===c?'0 4px 16px rgba(42,191,204,0.3)':'none',
                transition:'all 0.2s ease',
              }}>{c}</button>
            ))}
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:28 }}>
            {filtered.map(p => (
              <article key={p.id} className="glass card-hover" style={{ borderRadius:20,overflow:'hidden',display:'flex',flexDirection:'column' }}>
                <div style={{ position:'relative',width:'100%',aspectRatio:'16/9',overflow:'hidden' }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit:'cover' }}/>
                  <div style={{ position:'absolute',inset:0,background:'linear-gradient(to top,rgba(8,56,72,0.65) 0%,transparent 60%)' }}/>
                  <span style={{ position:'absolute',top:12,right:12,fontSize:'0.72rem',fontWeight:600,padding:'4px 12px',borderRadius:99,background:'rgba(42,191,204,0.75)',color:'#083848',backdropFilter:'blur(8px)' }}>{p.cat}</span>
                </div>
                <div style={{ padding:'22px 24px 26px',flex:1,display:'flex',flexDirection:'column',gap:10 }}>
                  <h3 style={{ color:'#E8F6FA',fontWeight:700,fontSize:'1rem',margin:0 }}>{p.title}</h3>
                  <p style={{ color:'#8ECFD8',fontSize:'0.85rem',lineHeight:1.65,margin:0 }}>{p.desc}</p>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginTop:4 }}>
                    {p.tags.map(t => <span key={t} className="skill-tag" style={{ fontSize:'0.75rem',padding:'3px 10px' }}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div style={{ height:1,background:'linear-gradient(90deg,transparent,rgba(42,191,204,0.2),transparent)',marginBottom:100 }}/>

        {/* ══ SKILLS ══ */}
        <section id="skills" style={{ paddingBottom:100 }}>
          <div style={{ textAlign:'center',marginBottom:56 }}>
            <p className="section-label">What I Know</p>
            {H2('Technical', 'Skills')}
          </div>
          {/* tool bubbles */}
          <div style={{ display:'flex',flexWrap:'wrap',gap:14,justifyContent:'center',marginBottom:64 }}>
            {tools.map(t => (
              <span key={t} className="skill-tag" style={{ fontSize:'0.9rem',padding:'10px 18px' }}>{t}</span>
            ))}
          </div>
          {/* progress bars */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:32 }}>
            {[
              { cat:'Design Tools', emoji:'🎨', color:'#2ABFCC', items: skills.slice(0,4) },
              { cat:'Development', emoji:'💻', color:'#9B7FC4', items: skills.slice(4) },
            ].map(g => (
              <div key={g.cat} className="glass card-hover" style={{ borderRadius:24,padding:32 }}>
                <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:28 }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:`${g.color}18`,border:`1px solid ${g.color}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.3rem' }}>{g.emoji}</div>
                  <h3 style={{ color:'#E8F6FA',fontWeight:700,fontSize:'1.05rem',margin:0 }}>{g.cat}</h3>
                </div>
                {g.items.map(s => (
                  <div key={s.name} style={{ marginBottom:18 }}>
                    <div style={{ display:'flex',justifyContent:'space-between',marginBottom:7 }}>
                      <span style={{ color:'#D0E8EE',fontSize:'0.875rem',fontWeight:500 }}>{s.name}</span>
                      <span style={{ color:g.color,fontSize:'0.8rem',fontWeight:700 }}>{s.pct}%</span>
                    </div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width:`${s.pct}%`,background:`linear-gradient(90deg,${g.color}99,${g.color})` }}/></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div style={{ height:1,background:'linear-gradient(90deg,transparent,rgba(42,191,204,0.2),transparent)',marginBottom:100 }}/>

        {/* ══ CONTACT ══ */}
        <section id="contact" style={{ paddingBottom:120 }}>
          <div style={{ textAlign:'center',marginBottom:56 }}>
            <p className="section-label">Get in Touch</p>
            {H2("Let's Work", 'Together')}
            <p style={{ color:'#8ECFD8',marginTop:14,fontSize:'0.95rem',maxWidth:440,margin:'14px auto 0' }}>
              Have a project in mind? My inbox is always open — I&apos;ll reply promptly.
            </p>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:32,maxWidth:900,margin:'0 auto' }}>
            {/* info */}
            <div style={{ display:'flex',flexDirection:'column',gap:16 }}>
              {[
                { icon:<Mail size={20}/>, label:'Email', value:'ineherlina219@gmail.com', href:'mailto:ineherlina219@gmail.com', color:'#2ABFCC' },
                { icon:<Instagram size={20}/>, label:'Instagram', value:'@ineherlinaa_', href:'https://instagram.com/ineherlinaa_', color:'#9B7FC4' },
                { icon:<Pin size={20}/>, label:'Pinterest', value:'ineherlina', href:'https://pinterest.com', color:'#D4779A' },
              ].map(c => (
                <a key={c.label} href={c.href} style={{ display:'flex',alignItems:'center',gap:14,textDecoration:'none',padding:'16px 18px',borderRadius:16, background:'rgba(255,255,255,0.03)',border:'1px solid rgba(42,191,204,0.1)',transition:'all 0.2s ease' }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.background='rgba(42,191,204,0.07)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(42,191,204,0.3)'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(42,191,204,0.1)'; }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:`${c.color}15`,border:`1px solid ${c.color}30`,display:'flex',alignItems:'center',justifyContent:'center',color:c.color,flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <p style={{ color:'#8ECFD8',fontSize:'0.72rem',fontWeight:600,margin:0 }}>{c.label}</p>
                    <p style={{ color:'#E8F6FA',fontSize:'0.88rem',fontWeight:600,margin:'2px 0 0' }}>{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="glass" style={{ borderRadius:16,padding:22,marginTop:4 }}>
                <p style={{ color:'#8ECFD8',fontSize:'0.85rem',lineHeight:1.7,margin:0 }}>
                  💡 Currently available for <strong style={{ color:'#2ABFCC' }}>freelance projects</strong> and creative collaborations. Response within 24 hours.
                </p>
              </div>
            </div>
            {/* form */}
            <div className="glass" style={{ borderRadius:24,padding:36 }}>
              {sent ? (
                <div style={{ textAlign:'center',padding:'40px 0' }}>
                  <div style={{ width:64,height:64,borderRadius:'50%',background:'rgba(42,191,204,0.12)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px' }}>
                    <CheckCircle size={32} style={{ color:'#2ABFCC' }}/>
                  </div>
                  <h3 style={{ color:'#E8F6FA',fontWeight:700,fontSize:'1.25rem',marginBottom:10 }}>Message Sent!</h3>
                  <p style={{ color:'#8ECFD8',fontSize:'0.88rem',marginBottom:24 }}>Thanks! I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'',email:'',message:'' }); }}
                    style={{ padding:'10px 24px',borderRadius:99,border:'1px solid rgba(42,191,204,0.3)',background:'transparent',color:'#8ECFD8',fontSize:'0.88rem',cursor:'pointer',fontFamily:'Inter,sans-serif' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display:'flex',flexDirection:'column',gap:18 }}>
                  <h3 style={{ color:'#E8F6FA',fontWeight:700,fontSize:'1.05rem',margin:'0 0 4px' }}>Send a Message</h3>
                  {[
                    { key:'name',   label:'Name',    type:'text',  ph:'Your name' },
                    { key:'email',  label:'Email',   type:'email', ph:'your@email.com' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ color:'#8ECFD8',fontSize:'0.78rem',fontWeight:600,display:'block',marginBottom:6 }}>{f.label} *</label>
                      <input className="form-input" type={f.type} placeholder={f.ph}
                        value={form[f.key as 'name'|'email']}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}/>
                    </div>
                  ))}
                  <div>
                    <label style={{ color:'#8ECFD8',fontSize:'0.78rem',fontWeight:600,display:'block',marginBottom:6 }}>Message *</label>
                    <textarea className="form-input" placeholder="Tell me about your project..." rows={4}
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}/>
                  </div>
                  <button type="submit" className="btn-gradient" disabled={loading}
                    style={{ padding:'13px',borderRadius:12,border:'none',fontSize:'0.95rem',cursor:loading?'not-allowed':'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,opacity:loading?0.7:1,fontFamily:'Inter,sans-serif' }}>
                    {loading ? (
                      <><div style={{ width:16,height:16,border:'2px solid rgba(255,255,255,0.3)',borderTopColor:'#fff',borderRadius:'50%',animation:'spin 0.7s linear infinite' }}/> Sending...</>
                    ) : <><Send size={15}/> Send Message</>}
                  </button>
                  <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>

      {/* footer */}
      <div style={{ borderTop:'1px solid rgba(42,191,204,0.1)',padding:'28px 24px',textAlign:'center' }}>
        <p style={{ color:'#8ECFD8',fontSize:'0.82rem',margin:0 }}>
          © 2024 Ine Herlina &nbsp;·&nbsp; Crafted with 💙 &nbsp;·&nbsp;
          <a href="#home" style={{ color:'#2ABFCC',textDecoration:'none',fontWeight:600 }}>Back to top ↑</a>
        </p>
      </div>
    </div>
  );
}
