import { motion } from 'framer-motion'
import { TiltCard } from '../components/ui/TiltCard'

const icons: Record<string, string> = {
  Python:    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.96 0 1.87.19 2.7.52L8.52 11.7C8.19 10.87 8 9.96 8 9c0-2.21 1.79-4 4-4zm0 14c-.96 0-1.87-.19-2.7-.52l6.18-6.18c.33.83.52 1.74.52 2.7 0 2.21-1.79 4-4 4z',
  FastAPI:   'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  LangChain: 'M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  Docker:    'M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185',
  React:     'M12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  default:   'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
}

function TechIcon({ name }: { name: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
      <path d={icons[name] ?? icons.default} />
    </svg>
  )
}

const projects = [
  { title: 'GitHub Code Documentation Generator', description: 'AI-powered system that automates extraction and summarisation of code documentation with 95% accuracy — reducing manual effort by 70%. Supports Python, JS, and TypeScript repos.', category: 'AI Infrastructure', featured: true, tags: ['Python', 'LangChain', 'FastAPI', 'Docker'], icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', github: 'https://github.com/prateekgaurdev' },
  { title: 'AI Mock Interview Platform', description: 'Full-stack interview simulation with LLM-powered real-time feedback, performance analytics, role-specific question banks, and multi-round interview support.', category: 'AI SaaS', featured: true, tags: ['React', 'FastAPI', 'LangChain', 'Python'], icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', github: 'https://github.com/prateekgaurdev' },
  { title: 'Medical Chatbot + EHR Integration', description: 'Context-aware medical chatbot handling 1,000+ simulated patient interactions. Integrated with Electronic Health Records for personalised symptom assessment and triage.', category: 'Healthcare AI', featured: true, tags: ['Python', 'FastAPI', 'LangChain', 'SQLite'], icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', github: 'https://github.com/prateekgaurdev' },
  { title: 'Virtual Avatar System', description: 'AI-generated video avatars with 90%+ lip-sync accuracy using Wav2Lip and SadTalker. Supports custom voice cloning and real-time facial animation for content creators.', category: 'Computer Vision', featured: true, tags: ['Python', 'Wav2Lip', 'SadTalker', 'React'], icon: 'M15 10l4.553-2.069A1 1 0 0121 8.876V15.12a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z', github: 'https://github.com/prateekgaurdev' },
  { title: 'RAG Chatbot System', description: 'Enterprise-grade Retrieval-Augmented Generation pipeline using LangChain, ChromaDB, and OpenAI. Supports multi-document Q&A, source attribution, and hybrid dense-sparse retrieval.', category: 'AI Infrastructure', featured: false, tags: ['LangChain', 'ChromaDB', 'Python', 'FastAPI'], icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', github: 'https://github.com/prateekgaurdev' },
  { title: 'Lung Cancer Prediction CNN', description: 'Deep learning model for early lung cancer detection from CT scan imaging. Achieves high diagnostic accuracy using a custom CNN architecture trained on medical imaging datasets.', category: 'Healthcare AI', featured: false, tags: ['PyTorch', 'Python', 'CNN', 'Docker'], icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', github: 'https://github.com/prateekgaurdev' },
  { title: 'Event-Driven Microservices Platform', description: 'Modular microservices architecture using Kafka for event-driven automation. Handles asynchronous task queues, real-time data pipelines, and inter-service communication at scale.', category: 'Backend / Infra', featured: false, tags: ['Python', 'Kafka', 'FastAPI', 'Docker'], icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', github: 'https://github.com/prateekgaurdev' },
  { title: 'AI Content Summariser API', description: 'REST API service that ingests long-form documents (PDFs, URLs, text) and returns structured summaries with key points, entities, and sentiment — powered by Gemini Flash.', category: 'AI Infrastructure', featured: false, tags: ['Python', 'FastAPI', 'Gemini', 'Docker'], icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', github: 'https://github.com/prateekgaurdev' },
  { title: 'Portfolio AI Assistant', description: 'This very website — built with React, TypeScript, Framer Motion, and a Gemini-powered AI chatbot. Features a 3D Spline robot, multi-page routing, glass morphism, and 3D tilt cards.', category: 'Full Stack', featured: false, tags: ['React', 'TypeScript', 'Gemini', 'Spline'], icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', github: 'https://github.com/prateekgaurdev' },
]

export function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">AI Systems Portfolio</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em', marginTop: 12 }}>
            Production-focused <span style={{ color: 'var(--primary)' }}>projects</span>
          </h1>
          <p style={{ marginTop: 12, fontSize: '1rem', color: 'var(--text2)', maxWidth: '65ch', lineHeight: 1.75 }}>
            A curated selection of AI systems, backend pipelines, and full-stack
            applications built for real-world scale.
          </p>
        </motion.div>
      </div>

      {/* 3-col project grid */}
      <div className="page-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            style={{ height: '100%' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
          >
            <TiltCard>
              <div className="card-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.icon} />
                </svg>
              </div>

              <div className="badge-row">
                <span className="badge-category">{p.category}</span>
                {p.featured && <span className="badge-featured">Featured</span>}
              </div>

              <div className="card-title">{p.title}</div>
              <p className="card-desc">{p.description}</p>

              <div className="tech-tags">
                {p.tags.map(t => (
                  <span key={t} className="tech-tag">
                    <TechIcon name={t} />{t}
                  </span>
                ))}
              </div>

              <div className="card-footer">
                <span className="card-footer-label">View on GitHub</span>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <svg className="card-footer-arrow" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 80 }}>
        <a href="https://github.com/prateekgaurdev" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: '999px', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)', color: 'var(--text)', background: 'var(--surface)', transition: 'all 0.2s', fontFamily: 'Poppins,sans-serif', backdropFilter: 'blur(12px)' }}>
          View all on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
        </a>
      </div>
    </div>
  )
}
