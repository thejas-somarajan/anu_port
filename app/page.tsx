'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Star, Code2, Palette, Layers } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Done'   },
  { value: '15+', label: 'Skills Mastered' },
];

const featuredSkills = [
  { icon: '🎨', label: 'Graphic Design'  },
  { icon: '✏️', label: 'Illustration'    },
  { icon: '🖥️', label: 'UI/UX Design'    },
  { icon: '📐', label: 'Layout Design'   },
  { icon: '💻', label: 'Web Development' },
  { icon: '📸', label: 'Photography'     },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#083848', position: 'relative', overflow: 'hidden' }}>
      {/* Mesh background orbs */}
      <div className="mesh-bg" />
      <div className="mesh-orb" style={{ width: 600, height: 600, top: -100, left: -200, background: 'radial-gradient(circle, rgba(42, 191, 204, 0.12) 0%, transparent 70%)' }} />
      <div className="mesh-orb" style={{ width: 400, height: 400, top: 300, right: -100, background: 'radial-gradient(circle, rgba(155, 127, 196, 0.08) 0%, transparent 70%)' }} />
      <div className="mesh-orb" style={{ width: 300, height: 300, bottom: 100, left: '40%', background: 'radial-gradient(circle, rgba(42, 191, 204, 0.07) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Hero ── */}
        <section id="hero" style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', paddingTop: 60, paddingBottom: 80 }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>

            {/* Badge */}
            <div className="fade-in-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 18px', borderRadius: 99,
              background: 'rgba(42, 191, 204, 0.1)',
              border: '1px solid rgba(108, 99, 255, 0.25)',
              color: '#A8B4D8', fontSize: '0.8rem', fontWeight: 500,
            }}>
              <Star size={12} style={{ color: '#2ABFCC' }} />
              Available for Freelance Work
            </div>

            {/* Headline */}
            <div className="fade-in-up delay-100">
              <p style={{ color: '#8ECFD8', fontSize: '1.1rem', marginBottom: 12, fontWeight: 400 }}>
                Hi, I&apos;m Sarah 👋
              </p>
              <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#E8F6FA', margin: 0 }}>
                Creative{' '}
                <span className="shimmer">Designer</span>
                <br />& Developer
              </h1>
            </div>

            {/* Subheading */}
            <p className="fade-in-up delay-200" style={{ color: '#8ECFD8', fontSize: '1.1rem', maxWidth: 540, lineHeight: 1.7, margin: 0 }}>
              Crafting beautiful digital experiences that merge aesthetics with functionality.
              I turn complex ideas into elegant, user-centric designs.
            </p>

            {/* CTA Buttons */}
            <div className="fade-in-up delay-300" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/projects" id="hero-cta-projects" style={{ textDecoration: 'none' }}>
                <button className="btn-gradient" style={{ padding: '13px 28px', borderRadius: 99, border: 'none', fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  View My Projects <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact" id="hero-cta-contact" style={{ textDecoration: 'none' }}>
                <button className="btn-outline-gradient" style={{ padding: '13px 28px', borderRadius: 99, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Download size={16} /> Let&apos;s Talk
                </button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="fade-in-up delay-400" style={{
              display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginTop: 16,
              padding: '24px 40px', borderRadius: 20,
              background: 'rgba(42, 191, 204, 0.03)',
              border: '1px solid rgba(42, 191, 204, 0.1)',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, background: 'linear-gradient(135deg, #2ABFCC, #9B7FC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                  <div style={{ color: '#8ECFD8', fontSize: '0.82rem', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What I Do ── */}
        <section id="what-i-do" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="section-label">What I Do</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#E8F6FA', marginTop: 8 }}>
              My <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                icon: <Palette size={28} style={{ color: '#2ABFCC' }} />,
                title: 'Visual Design',
                desc: 'Creating stunning visuals, brand identities, and illustrations that communicate ideas with clarity and beauty.',
              },
              {
                icon: <Layers size={28} style={{ color: '#A855F7' }} />,
                title: 'UI/UX Design',
                desc: 'Designing intuitive user interfaces and seamless experiences that delight users and drive engagement.',
              },
              {
                icon: <Code2 size={28} style={{ color: '#06B6D4' }} />,
                title: 'Web Development',
                desc: 'Building responsive, performant websites and web apps using modern technologies and best practices.',
              },
            ].map((item, i) => (
              <div key={i} className="glass card-hover" style={{ padding: 32, borderRadius: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(42, 191, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: '#8ECFD8', lineHeight: 1.7, fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured Skills ── */}
        <section id="featured-skills" style={{ paddingBottom: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <p className="section-label">Toolkit</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#E8F6FA', marginTop: 8 }}>
              Core <span className="gradient-text">Skills</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
            {featuredSkills.map((s, i) => (
              <span key={i} className="skill-tag" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                {s.icon} {s.label}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/skills" style={{ textDecoration: 'none' }}>
              <button className="btn-outline-gradient" id="home-view-skills" style={{ padding: '11px 28px', borderRadius: 99, border: '1px solid rgba(108,99,255,0.4)', fontSize: '0.9rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#8ECFD8' }}>
                View All Skills <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
