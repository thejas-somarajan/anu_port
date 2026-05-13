'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '/',         label: 'Home'      },
  { href: '/about',    label: 'About'     },
  { href: '/projects', label: 'Projects'  },
  { href: '/skills',   label: 'Skills'    },
  { href: '/contact',  label: 'Contact'   },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        id="main-navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(8, 56, 72, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(42, 191, 204, 0.15)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #1A8090, #2ABFCC)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Sparkles size={16} color="white" />
            </div>
            <span style={{
              fontWeight: 700,
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #2ABFCC, #9B7FC4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter, sans-serif',
            }}>
              Portfolio
            </span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${isActive ? ' active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              id="navbar-cta"
              style={{
                padding: '8px 20px',
                borderRadius: 99,
                background: 'linear-gradient(135deg, #1A8090, #2ABFCC)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                boxShadow: '0 4px 16px rgba(42, 191, 204, 0.3)',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#8ECFD8',
              padding: 4,
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div style={{
            padding: '16px 24px 24px',
            borderTop: '1px solid rgba(42, 191, 204, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}>
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    textDecoration: 'none',
                    padding: '12px 16px',
                    borderRadius: 10,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif',
                    color: isActive ? '#E8F6FA' : '#8ECFD8',
                    background: isActive ? 'rgba(42, 191, 204, 0.12)' : 'transparent',
                    display: 'block',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
