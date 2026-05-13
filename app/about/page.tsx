'use client';

import Image from 'next/image';
import { MapPin, Calendar, Heart } from 'lucide-react';

const timeline = [
  {
    year: '2020 – Present',
    title: 'Institute of Technology and Design',
    desc: 'Specializing in graphic design and digital innovation. Developed a deep understanding of visual communication, typography, and user-centered design principles.',
    type: 'Education',
  },
  {
    year: '2022',
    title: 'BEM Communication Member',
    desc: 'Led design and communication initiatives for the student body. Developed branding strategies, managed social media visuals, and directed creative campaigns.',
    type: 'Experience',
  },
  {
    year: '2021 – 2022',
    title: 'One Day One Story — Creative Volunteer',
    desc: 'Contributed to editing and content creation for creative storytelling. Designed visual narratives and collaborated with a diverse creative team.',
    type: 'Volunteer',
  },
];

const interests = [
  { emoji: '🎨', label: 'Digital Art'   },
  { emoji: '📷', label: 'Photography'   },
  { emoji: '🌿', label: 'Nature'        },
  { emoji: '✈️', label: 'Travel'        },
  { emoji: '🎵', label: 'Music'         },
  { emoji: '📚', label: 'Reading'       },
  { emoji: '🍃', label: 'Minimalism'    },
  { emoji: '🌙', label: 'Night Sky'     },
];

const languages = [
  { name: 'English',    level: 'Advanced',     pct: 90 },
  { name: 'Japanese',   level: 'Intermediate', pct: 60 },
  { name: 'Indonesian', level: 'Native',       pct: 100 },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#083848', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg" />
      <div className="mesh-orb" style={{ width: 500, height: 500, top: 0, right: -100, background: 'radial-gradient(circle, rgba(155, 127, 196,0.1) 0%, transparent 70%)' }} />
      <div className="mesh-orb" style={{ width: 350, height: 350, bottom: 200, left: -50, background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 100px' }}>

        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="section-label">Get to know me</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#E8F6FA', marginTop: 8, letterSpacing: '-0.02em' }}>
            About <span className="gradient-text">Me</span>
          </h1>
        </div>

        {/* Profile + Bio Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 64, alignItems: 'start' }}>

          {/* Profile Card */}
          <div className="glass card-hover" style={{ borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
            <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(108,99,255,0.4)', boxShadow: '0 0 30px rgba(42, 191, 204, 0.2)', position: 'relative', flexShrink: 0 }}>
              <Image src="/profile.jpg" alt="Sarah — Creative Designer" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Sarah</h2>
              <p style={{ color: '#9B7FC4', fontWeight: 500, fontSize: '0.9rem', marginTop: 4 }}>Creative Designer &amp; Developer</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
              {[
                { icon: <MapPin size={14} />, text: 'Jakarta, Indonesia' },
                { icon: <Calendar size={14} />, text: 'Available for projects' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#8ECFD8', fontSize: '0.85rem', justifyContent: 'center' }}>
                  {item.icon}{item.text}
                </div>
              ))}
            </div>
            <div style={{ width: '100%', height: 1, background: 'rgba(42, 191, 204, 0.15)' }} />
            {/* Languages */}
            <div style={{ width: '100%' }}>
              <p style={{ color: '#8ECFD8', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Languages</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#E8F6FA', fontSize: '0.85rem', fontWeight: 500 }}>{lang.name}</span>
                      <span style={{ color: '#8ECFD8', fontSize: '0.75rem' }}>{lang.level}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${lang.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="glass" style={{ borderRadius: 20, padding: 32 }}>
              <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.3rem', marginBottom: 16 }}>
                Who Am I?
              </h3>
              <p style={{ color: '#8ECFD8', lineHeight: 1.8, marginBottom: 14, fontSize: '0.95rem' }}>
                I&apos;m a passionate creative designer and developer with a deep love for crafting beautiful digital experiences. With a background spanning graphic design, UI/UX, and front-end development, I bridge the gap between aesthetics and functionality.
              </p>
              <p style={{ color: '#8ECFD8', lineHeight: 1.8, marginBottom: 14, fontSize: '0.95rem' }}>
                My journey started with a fascination for visual storytelling — how shapes, colors, and typography can evoke emotion and communicate ideas without words. Over the years, I&apos;ve evolved into a versatile creative professional comfortable across the full design-to-code workflow.
              </p>
              <p style={{ color: '#8ECFD8', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                I believe great design is invisible — it works so naturally that users never notice the craft behind it. That&apos;s the standard I hold myself to in every project.
              </p>
            </div>

            {/* Interests */}
            <div className="glass" style={{ borderRadius: 20, padding: 32 }}>
              <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Heart size={18} style={{ color: '#9B7FC4' }} /> Interests &amp; Passions
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {interests.map((item, i) => (
                  <span key={i} className="skill-tag">
                    {item.emoji} {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="section-label">My Journey</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#E8F6FA', marginTop: 8 }}>
              Education &amp; <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 760, margin: '0 auto' }}>
            {timeline.map((item, i) => (
              <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: '28px 32px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="timeline-dot" />
                  {i < timeline.length - 1 && <div style={{ width: 2, flexGrow: 1, minHeight: 40, background: 'linear-gradient(to bottom, rgba(108,99,255,0.3), transparent)', marginTop: 4 }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 99, background: 'rgba(108,99,255,0.12)', color: '#2ABFCC', border: '1px solid rgba(42, 191, 204, 0.2)' }}>
                      {item.type}
                    </span>
                    <span style={{ color: '#8ECFD8', fontSize: '0.8rem' }}>{item.year}</span>
                  </div>
                  <h4 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1rem', margin: '0 0 8px 0' }}>{item.title}</h4>
                  <p style={{ color: '#8ECFD8', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
