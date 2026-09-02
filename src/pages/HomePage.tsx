import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Summary }     from '../components/sections/Summary'
import { ResumeViewer } from '../components/resume/ResumeViewer'
import { TiltCard }    from '../components/ui/TiltCard'

// ── Stats bar ─────────────────────────────────────────────────────────────────
const stats = [
  { value: '2+',   label: 'Years Experience' },
  { value: '10+',  label: 'AI Projects Built' },
  { value: '95%',  label: 'Doc-Gen Accuracy'  },
  { value: '8.8',  label: 'CGPA (B.Tech)'     },
]

// ── What I Build cards ────────────────────────────────────────────────────────
const services = [
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Generative AI Systems',
    desc:  'LLM-powered applications, RAG pipelines, multi-agent workflows, and intelligent automation — built for production scale.',
    tags:  ['LangChain', 'CrewAI', 'OpenAI', 'Gemini'],
  },
  {
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    title: 'Scalable Backend APIs',
    desc:  'High-performance REST APIs with FastAPI, event-driven microservices with Kafka, and containerised deployments with Docker.',
    tags:  ['FastAPI', 'Python', 'Kafka', 'Docker'],
  },
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'Full Stack Development',
    desc:  'End-to-end web applications combining modern React frontends with robust Python backends — from concept to deployment.',
    tags:  ['React', 'TypeScript', 'PostgreSQL', 'Vercel'],
  },
]

// ── Featured project previews ─────────────────────────────────────────────────
const featured = [
  {
    num: '01',
    title: 'GitHub Code Documentation Generator',
    desc:  'AI-powered system that automates code documentation extraction and summarisation with 95% accuracy — reducing manual effort by 70%.',
    tags:  ['Python', 'LangChain', 'FastAPI'],
    icon:  'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  },
  {
    num: '02',
    title: 'AI Mock Interview Platform',
    desc:  'Full-stack interview simulation with real-time AI feedback, performance analytics, and dynamic LLM-based question generation.',
    tags:  ['React', 'FastAPI', 'LangChain'],
    icon:  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    num: '03',
    title: 'Medical Chatbot + EHR',
    desc:  'Context-aware medical chatbot handling 1,000+ simulated patient interactions with integrated Electronic Health Records management.',
    tags:  ['Python', 'Flask', 'LLMs'],
    icon:  'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]

// ── How I work steps ──────────────────────────────────────────────────────────
const process = [
  { step: '01', title: 'Understand',  desc: 'Deep-dive into the problem space, domain requirements, and technical constraints before writing a single line.' },
  { step: '02', title: 'Design',      desc: 'Architect scalable solutions — data pipelines, API contracts, model selection — before any implementation.' },
  { step: '03', title: 'Build',       desc: 'Iterative development with modular, testable code. Continuous integration from day one.' },
  { step: '04', title: 'Deploy',      desc: 'Production-grade deployment with monitoring, logging, and the ability to scale horizontally.' },
]

function Icon({ d }: { d: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

export function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const navigate = useNavigate()

  const sec: React.CSSProperties = { padding: '100px 0', position: 'relative', zIndex: 1 }
  const inner: React.CSSProperties = { maxWidth: 1280, margin: '0 auto', padding: '0 max(32px,4vw)' }

  return (
    <>
      {/* ── Hero ── */}
      <Summary onOpenResume={() => setIsResumeOpen(true)} />

      {/* ── Stats bar ── */}
      <div style={{ ...sec, padding: '60px 0', background: 'var(--bg2)' }}>
        <div style={{ ...inner, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1 }}>
          {stats.map((s, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 80}
              style={{ textAlign: 'center', padding: '32px 20px', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text2)', marginTop: 6, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── What I Build ── */}
      <div style={sec}>
        <div style={inner}>
          <div style={{ marginBottom: 56 }} data-aos="fade-up">
            <span className="overline">Services</span>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginTop: 12 }}>
              What I <span style={{ color: 'var(--primary)' }}>build</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{ height: '100%' }}>
                <TiltCard maxDeg={5}>
                  <div className="card-icon"><Icon d={s.icon} /></div>
                  <div className="card-title">{s.title}</div>
                  <p className="card-desc" style={{ WebkitLineClamp: 'unset' }}>{s.desc}</p>
                  <div className="tech-tags" style={{ marginTop: 'auto', paddingTop: 16 }}>
                    {s.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Projects ── */}
      <div style={{ ...sec, background: 'var(--bg2)' }}>
        <div style={inner}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 16 }} data-aos="fade-up">
            <div>
              <span className="overline">Featured Work</span>
              <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginTop: 12 }}>
                Recent <span style={{ color: 'var(--primary)' }}>projects</span>
              </h2>
            </div>
            <button onClick={() => navigate('/projects')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', borderRadius: '999px', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'Poppins,sans-serif', backdropFilter: 'blur(12px)', transition: 'all 0.2s', flexShrink: 0 }}>
              View all →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {featured.map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{ height: '100%' }}>
                <TiltCard>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <div className="card-icon" style={{ margin: 0 }}><Icon d={p.icon} /></div>
                    <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--border)', letterSpacing: '-0.04em' }}>{p.num}</span>
                  </div>
                  <div className="card-title">{p.title}</div>
                  <p className="card-desc" style={{ WebkitLineClamp: 'unset' }}>{p.desc}</p>
                  <div className="tech-tags" style={{ marginTop: 'auto', paddingTop: 16 }}>
                    {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div className="card-footer">
                    <span className="card-footer-label">View project</span>
                    <svg className="card-footer-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How I Work ── */}
      <div style={sec}>
        <div style={inner}>
          <div style={{ marginBottom: 56 }} data-aos="fade-up">
            <span className="overline">Process</span>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginTop: 12 }}>
              How I <span style={{ color: 'var(--primary)' }}>work</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {process.map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: '1px solid rgba(255,255,255,0.10)', borderRadius: 20, padding: '28px 24px', backdropFilter: 'blur(14px)', boxShadow: 'var(--card-shadow)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.04em', marginBottom: 14, lineHeight: 1 }}>
                  {p.step}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{p.title}</div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text2)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div style={{ ...sec, padding: '80px 0', background: 'var(--bg2)' }}>
        <div style={{ ...inner, textAlign: 'center' }} data-aos="fade-up">
          <span className="overline">Open to work</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', marginTop: 12, marginBottom: 16 }}>
            Ready to build something <span style={{ color: 'var(--primary)' }}>intelligent?</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: '50ch', margin: '0 auto 36px', lineHeight: 1.75 }}>
            I'm currently open to full-time AI Engineer roles, freelance projects,
            and interesting conversations. Let's build together.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Get in Touch →
            </button>
            <a href="https://github.com/prateekgaurdev" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: '999px', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(12px)', transition: 'all 0.2s', fontFamily: 'Poppins,sans-serif' }}>
              View GitHub
            </a>
          </div>
        </div>
      </div>

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  )
}
