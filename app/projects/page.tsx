'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'p1',
    title: 'Aurora Branding Identity',
    desc: 'Full brand identity design including logo, color palette, typography system, and stationery for a technology startup.',
    image: '/project-branding.png',
    tags: ['Branding', 'Logo Design', 'Typography'],
    category: 'Design',
    year: '2023',
  },
  {
    id: 'p2',
    title: 'Analytics Dashboard App',
    desc: 'Mobile app UI/UX design for a financial analytics dashboard with real-time data visualization and glassmorphic components.',
    image: '/project-ui.png',
    tags: ['UI/UX', 'Mobile', 'Figma'],
    category: 'UI/UX',
    year: '2023',
  },
  {
    id: 'p3',
    title: 'Creative Portfolio Website',
    desc: 'Design and development of a modern, animated portfolio website for a creative agency with dark aesthetics and fluid animations.',
    image: '/project-web.png',
    tags: ['Web Design', 'Development', 'Animation'],
    category: 'Dev',
    year: '2024',
  },
  {
    id: 'p4',
    title: 'Social Media Campaign',
    desc: 'Visual content strategy and design for a 3-month social media campaign. Created templates, infographics, and promotional materials.',
    image: '/project-branding.png',
    tags: ['Social Media', 'Content Design', 'Strategy'],
    category: 'Design',
    year: '2022',
  },
  {
    id: 'p5',
    title: 'E-commerce UX Redesign',
    desc: 'Complete UX research and redesign of an e-commerce platform, improving conversion rate through improved information architecture.',
    image: '/project-ui.png',
    tags: ['UX Research', 'Wireframing', 'Prototyping'],
    category: 'UI/UX',
    year: '2022',
  },
  {
    id: 'p6',
    title: 'Editorial Illustrations',
    desc: 'Series of digital illustrations created for an online publication covering technology and culture topics.',
    image: '/project-web.png',
    tags: ['Illustration', 'Editorial', 'Digital Art'],
    category: 'Design',
    year: '2021',
  },
];

const categories = ['All', 'Design', 'UI/UX', 'Dev'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div style={{ minHeight: '100vh', background: '#083848', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg" />
      <div className="mesh-orb" style={{ width: 500, height: 500, top: 0, left: -100, background: 'radial-gradient(circle, rgba(42, 191, 204, 0.1) 0%, transparent 70%)' }} />
      <div className="mesh-orb" style={{ width: 400, height: 400, bottom: 100, right: -80, background: 'radial-gradient(circle, rgba(42, 191, 204,0.07) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 100px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="section-label">My Work</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#E8F6FA', marginTop: 8, letterSpacing: '-0.02em' }}>
            My <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: '#8ECFD8', marginTop: 14, fontSize: '1rem', maxWidth: 500, margin: '14px auto 0' }}>
            A collection of work spanning branding, UI/UX design, and web development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 22px',
                borderRadius: 99,
                border: active === cat ? 'none' : '1px solid rgba(42, 191, 204, 0.2)',
                background: active === cat ? 'linear-gradient(135deg, #2ABFCC, #9B7FC4)' : 'rgba(255,255,255,0.03)',
                color: active === cat ? '#fff' : '#8ECFD8',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif',
                boxShadow: active === cat ? '0 4px 16px rgba(108,99,255,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {filtered.map(project => (
            <article key={project.id} id={project.id} className="glass card-hover" style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Cover Image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)' }} />
                <span style={{
                  position: 'absolute', top: 12, right: 12,
                  fontSize: '0.72rem', fontWeight: 600, padding: '4px 12px', borderRadius: 99,
                  background: 'rgba(108,99,255,0.8)', color: 'white', backdropFilter: 'blur(8px)',
                }}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.05rem', margin: 0, lineHeight: 1.3 }}>{project.title}</h3>
                  <span style={{ color: '#8ECFD8', fontSize: '0.8rem', flexShrink: 0, marginLeft: 8 }}>{project.year}</span>
                </div>
                <p style={{ color: '#8ECFD8', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-tag" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>{tag}</span>
                  ))}
                </div>
                <button
                  style={{
                    marginTop: 8,
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#2ABFCC', fontWeight: 600, fontSize: '0.85rem',
                    fontFamily: 'Inter, sans-serif', padding: 0,
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.gap = '10px'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.gap = '6px'; }}
                >
                  View Project <ExternalLink size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
