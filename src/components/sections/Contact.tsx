import { useState, type FormEvent } from 'react'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name:'', email:'', message:'' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" style={{ padding:'100px 0' }}>
      <div className="container">

        <div className="section-heading" data-aos="fade-up" data-aos-duration="700">
          <span className="overline">Let's talk</span>
          <h2>Get in <span>Touch</span></h2>
          <p className="sub">
            Open to full-time roles, freelance projects, and conversations about AI.
            My inbox is always open.
          </p>
        </div>

        <div className="contact-wrapper">

          {/* Info */}
          <div className="contact-info-block" data-aos="fade-right" data-aos-duration="800">
            <div
              style={{
                background:'var(--surface)', backdropFilter:'blur(14px)',
                WebkitBackdropFilter:'blur(14px)', border:'1px solid var(--border)',
                borderTop:'1px solid rgba(255,255,255,0.10)',
                borderRadius:20, padding:'28px 24px',
              }}
            >
              <h3 style={{ fontSize:'1.5rem', fontWeight:700, color:'var(--text)', marginBottom:10, letterSpacing:'-0.01em', lineHeight:1.25 }}>
                Open to new<br /><span style={{ color:'var(--primary)' }}>opportunities.</span>
              </h3>
              <p style={{ fontSize:'0.88rem', color:'var(--text2)', lineHeight:1.75 }}>
                Whether it's building AI infrastructure, designing scalable APIs,
                or just a conversation — reach out.
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box glass hairline-t">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">gaur.prateek.1609@gmail.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box glass hairline-t">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Greater Noida, India</div>
              </div>
            </div>

            <div style={{ display:'flex', gap:10 }}>
              <a href="https://www.linkedin.com/in/prateekgaur1609/" target="_blank" rel="noopener noreferrer"
                className="hero-social-link glass hairline-t" title="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/prateekgaurdev" target="_blank" rel="noopener noreferrer"
                className="hero-social-link glass hairline-t" title="GitHub">
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className="contact-form glass hairline-t"
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              <input className="form-input" type="text" placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name:e.target.value})} required />
              <input className="form-input" type="email" placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email:e.target.value})} required />
            </div>
            <textarea className="form-input" placeholder="Your Message" rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message:e.target.value})}
              required style={{ resize:'vertical', minHeight:130 }} />
            <button type="submit" disabled={status==='sending'} className="btn-primary"
              style={{ alignSelf:'flex-start' }}>
              {status==='sending' ? 'Sending…'
                : status==='success' ? 'Message Sent ✓'
                : status==='error'   ? 'Failed — Retry'
                : 'Send Message →'}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
