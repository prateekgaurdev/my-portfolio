import { TiltCard } from '../ui/TiltCard'

// ── Inline SVG brand icons ─────────────────────────────────────
const icons: Record<string, string> = {
  Python:    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.96 0 1.87.19 2.7.52L8.52 11.7C8.19 10.87 8 9.96 8 9c0-2.21 1.79-4 4-4zm0 14c-.96 0-1.87-.19-2.7-.52l6.18-6.18c.33.83.52 1.74.52 2.7 0 2.21-1.79 4-4 4z',
  FastAPI:   'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  LangChain: 'M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  Docker:    'M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186',
  React:     'M12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  default:   'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
}

function TechIcon({ name }: { name: string }) {
  const d = icons[name] ?? icons.default
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
      <path d={d} />
    </svg>
  )
}

// ── Project data ──────────────────────────────────────────────
const projects = [
  {
    title: 'GitHub Code Documentation Generator',
    description: 'AI-powered system that automates code documentation extraction and summarisation with 95% accuracy — reducing manual effort by 70%.',
    category: 'AI Infrastructure',
    featured: true,
    tags: ['Python', 'LangChain', 'FastAPI', 'Docker'],
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    github: 'https://github.com/prateekgaurdev',
  },
  {
    title: 'AI Mock Interview Platform',
    description: 'Full-stack interview simulation with real-time AI feedback, performance analytics, and LLM-based question generation via FastAPI.',
    category: 'AI SaaS',
    featured: true,
    tags: ['React', 'FastAPI', 'LangChain', 'Python'],
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    github: 'https://github.com/prateekgaurdev',
  },
  {
    title: 'Medical Chatbot + EHR',
    description: 'Context-aware medical chatbot handling 1,000+ patient interactions with integrated Electronic Health Records management.',
    category: 'Healthcare AI',
    featured: true,
    tags: ['Python', 'FastAPI', 'LangChain'],
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    github: 'https://github.com/prateekgaurdev',
  },
  {
    title: 'Virtual Avatar System',
    description: 'Realistic AI-generated video avatars with 90%+ lip-sync accuracy powered by Wav2Lip and SadTalker for production video content.',
    category: 'Computer Vision',
    featured: true,
    tags: ['Python', 'React', 'Docker'],
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.876V15.12a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
    github: 'https://github.com/prateekgaurdev',
  },
  {
    title: 'RAG Chatbot System',
    description: 'Retrieval-Augmented Generation pipeline using LangChain, ChromaDB, and OpenAI for intelligent multi-document Q&A at scale.',
    category: 'AI Infrastructure',
    featured: false,
    tags: ['LangChain', 'Python', 'FastAPI'],
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    github: 'https://github.com/prateekgaurdev',
  },
  {
    title: 'Lung Cancer Prediction',
    description: 'Deep learning CNN model for lung cancer diagnosis from medical imaging data — high accuracy, production-grade pipeline.',
    category: 'Healthcare AI',
    featured: false,
    tags: ['Python', 'Docker'],
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    github: 'https://github.com/prateekgaurdev',
  },
]

export function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: 1280 }}>

        {/* Heading */}
        <div
          className="section-heading"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="overline">Portfolio</span>
          <h2>
            Production-focused <span>projects</span>
          </h2>
          <p className="sub">
            A curated selection of AI systems, backend pipelines, and full-stack
            applications built for real-world scale.
          </p>
        </div>

        {/* 3-col glass tilt card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              style={{ height: '100%' }}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 60}
            >
              <TiltCard>
                {/* Icon */}
                <div className="card-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
                </div>

                {/* Badges */}
                <div className="badge-row">
                  <span className="badge-category">{p.category}</span>
                  {p.featured && <span className="badge-featured">Featured</span>}
                </div>

                {/* Title */}
                <div className="card-title">{p.title}</div>

                {/* Description */}
                <p className="card-desc">{p.description}</p>

                {/* Tech tags */}
                <div className="tech-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      <TechIcon name={t} />
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="card-footer">
                  <span className="card-footer-label">View on GitHub</span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
                  >
                    <svg
                      className="card-footer-arrow"
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}
          data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"
        >
          <a
            href="https://github.com/prateekgaurdev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline glass hairline-t"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: '999px',
              color: 'var(--text)', fontSize: '0.88rem', fontWeight: 600,
              textDecoration: 'none', transition: 'color 0.2s',
              border: '1px solid var(--border)',
            }}
          >
            View all projects on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
