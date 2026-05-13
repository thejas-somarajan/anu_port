'use client';

import { useState } from 'react';
import { Mail, Instagram, Pin, Send, CheckCircle } from 'lucide-react';

const contactItems = [
  { icon: <Mail size={22} />, label: 'Email', value: 'hello@sarah.design', href: 'mailto:hello@sarah.design', color: '#2ABFCC' },
  { icon: <Instagram size={22} />, label: 'Instagram', value: '@creative_sarah', href: 'https://instagram.com', color: '#9B7FC4' },
  { icon: <Pin size={22} />, label: 'Pinterest', value: 'creative_hub', href: 'https://pinterest.com', color: '#06B6D4' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    setErrors({});
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#083848', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg" />
      <div className="mesh-orb" style={{ width: 500, height: 500, top: -50, left: -100, background: 'radial-gradient(circle, rgba(42, 191, 204, 0.1) 0%, transparent 70%)' }} />
      <div className="mesh-orb" style={{ width: 400, height: 400, bottom: 50, right: -80, background: 'radial-gradient(circle, rgba(155, 127, 196,0.09) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px 100px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="section-label">Get in Touch</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#E8F6FA', marginTop: 8, letterSpacing: '-0.02em' }}>
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h1>
          <p style={{ color: '#8ECFD8', fontSize: '1rem', maxWidth: 480, margin: '14px auto 0' }}>
            Have a project in mind or just want to say hi? My inbox is always open — I&apos;ll get back to you promptly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="glass" style={{ borderRadius: 20, padding: 32 }}>
              <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.1rem', marginBottom: 24 }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {contactItems.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    id={`contact-${item.label.toLowerCase()}`}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', padding: '14px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(42, 191, 204, 0.1)', transition: 'all 0.2s ease' }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(108,99,255,0.08)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,99,255,0.3)'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(42, 191, 204, 0.1)'; }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ color: '#8ECFD8', fontSize: '0.75rem', fontWeight: 500, margin: 0 }}>{item.label}</p>
                      <p style={{ color: '#E8F6FA', fontSize: '0.9rem', fontWeight: 600, margin: '2px 0 0 0' }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass" style={{ borderRadius: 20, padding: 28 }}>
              <p style={{ color: '#8ECFD8', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                💡 I&apos;m currently available for <strong style={{ color: '#2ABFCC' }}>freelance projects</strong>, creative collaborations, and full-time opportunities. Response time is typically within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass" style={{ borderRadius: 24, padding: 36 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(42, 191, 204, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={32} style={{ color: '#2ABFCC' }} />
                </div>
                <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.3rem', marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: '#8ECFD8', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 24px' }}>
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-outline-gradient"
                  style={{ padding: '10px 24px', borderRadius: 99, border: '1px solid rgba(108,99,255,0.4)', background: 'transparent', color: '#8ECFD8', fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h3 style={{ color: '#E8F6FA', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 8px' }}>Send a Message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ color: '#8ECFD8', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6 }}>Name *</label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                    {errors.name && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ color: '#8ECFD8', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6 }}>Email *</label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                    {errors.email && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label style={{ color: '#8ECFD8', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6 }}>Subject</label>
                  <input
                    id="contact-subject"
                    className="form-input"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  />
                </div>

                <div>
                  <label style={{ color: '#8ECFD8', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6 }}>Message *</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                  {errors.message && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.message}</p>}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-gradient"
                  style={{ padding: '14px 28px', borderRadius: 12, border: 'none', fontSize: '0.95rem', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: loading ? 0.7 : 1, fontFamily: 'Inter, sans-serif' }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
