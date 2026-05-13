'use client';

import { useState } from 'react';

const skillGroups = [
  {
    category: 'Design Tools',
    emoji: '🎨',
    color: '#2ABFCC',
    skills: [
      { name: 'Adobe Photoshop',   pct: 90 },
      { name: 'Adobe Illustrator', pct: 85 },
      { name: 'Figma',             pct: 80 },
      { name: 'Adobe InDesign',    pct: 78 },
      { name: 'Canva',             pct: 95 },
      { name: 'Procreate',         pct: 75 },
    ],
  },
  {
    category: 'Development',
    emoji: '💻',
    color: '#06B6D4',
    skills: [
      { name: 'HTML / CSS',      pct: 85 },
      { name: 'JavaScript',      pct: 70 },
      { name: 'React / Next.js', pct: 65 },
      { name: 'Tailwind CSS',    pct: 75 },
      { name: 'Git & GitHub',    pct: 68 },
      { name: 'WordPress',       pct: 80 },
    ],
  },
  {
    category: 'Soft Skills',
    emoji: '🌟',
    color: '#9B7FC4',
    skills: [
      { name: 'Creative Thinking',  pct: 95 },
      { name: 'Communication',      pct: 90 },
      { name: 'Problem Solving',    pct: 88 },
      { name: 'Time Management',    pct: 82 },
      { name: 'Team Collaboration', pct: 92 },
      { name: 'Adaptability',       pct: 88 },
    ],
  },
];

const toolBubbles = [
  { emoji: '🎨', name: 'Photoshop'   },
  { emoji: '✏️', name: 'Illustrator' },
  { emoji: '🖼️', name: 'Figma'       },
  { emoji: '📐', name: 'InDesign'    },
  { emoji: '🌐', name: 'HTML/CSS'    },
  { emoji: '⚛️', name: 'React'       },
  { emoji: '🎞️', name: 'Procreate'  },
  { emoji: '📸', name: 'Lightroom'   },
  { emoji: '🎬', name: 'Premiere'    },
  { emoji: '🗂️', name: 'Notion'      },
  { emoji: '🔗', name: 'GitHub'      },
  { emoji: '📊', name: 'Analytics'   },
];

export default function SkillsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ minHeight: '100vh', background: '#083848', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg" />
      <div className="mesh-orb" style={{ width: 600, height: 600, top: -50, right: -150, background: 'radial-gradient(circle, rgba(42, 191, 204,0.08) 0%, transparent 70%)' }} />
      <div className="mesh-orb" style={{ width: 400, height: 400, bottom: 0, left: -80, background: 'radial-gradient(circle, rgba(155, 127, 196,0.09) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 100px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="section-label">What I Know</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#E8F6FA', marginTop: 8, letterSpacing: '-0.02em' }}>
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p style={{ color: '#8ECFD8', fontSize: '1rem', maxWidth: 500, margin: '14px auto 0' }}>
            A blend of design expertise and technical know-how, developed through hands-on practice.
          </p>
        </div>

        {/* Tool Bubbles */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ color: '#8ECFD8', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 24 }}>
            Tools &amp; Technologies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {toolBubbles.map(tool => (
              <div
                key={tool.name}
                onMouseEnter={() => setHovered(tool.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'default', transition: 'transform 0.2s ease', transform: hovered === tool.name ? 'translateY(-6px)' : 'none' }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: hovered === tool.name ? 'rgba(42, 191, 204, 0.2)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${hovered === tool.name ? 'rgba(108,99,255,0.5)' : 'rgba(108,99,255,0.12)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                  transition: 'all 0.2s ease',
                  boxShadow: hovered === tool.name ? '0 8px 24px rgba(42, 191, 204, 0.2)' : 'none',
                }}>
                  {tool.emoji}
                </div>
                <span style={{ color: '#8ECFD8', fontSize: '0.72rem', fontWeight: 500 }}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {skillGroups.map(group => (
            <div key={group.category} className="glass card-hover" style={{ borderRadius: 24, padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${group.color}18`, border: `1px solid ${group.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                  {group.emoji}
                </div>
                <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{group.category}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ color: '#D0D8F0', fontSize: '0.875rem', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ color: group.color, fontSize: '0.8rem', fontWeight: 700 }}>{skill.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${skill.pct}%`, background: `linear-gradient(90deg, ${group.color}, ${group.color}bb)` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div style={{ textAlign: 'center', marginTop: 72 }}>
          <div className="glass" style={{ display: 'inline-block', padding: '32px 48px', borderRadius: 24 }}>
            <p style={{ color: '#8ECFD8', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Always learning and growing</p>
            <p className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
              Continuously expanding my skillset ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
