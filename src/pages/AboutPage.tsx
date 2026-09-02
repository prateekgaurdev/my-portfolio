import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const achievements = [
  { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', label: '95% accuracy on code documentation AI' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Built 10+ production-grade AI systems' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'Collaborated with 4+ cross-functional teams' },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: '1,000+ patient interactions via Medical Chatbot' },
  { icon: 'M15 10l4.553-2.069A1 1 0 0121 8.876V15.12a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z', label: '90%+ lip-sync accuracy in Virtual Avatar System' },
  { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', label: 'Microservices with Kafka for event-driven automation' },
]

export function AboutPage() {
  const navigate = useNavigate()
  const expYears = new Date().getFullYear() - 2024

  const glass: React.CSSProperties = {
    background: 'var(--surface)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    border: '1px solid var(--border)',
    borderTop: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 20,
    padding: '32px 36px',
    marginBottom: 20,
    boxShadow: 'var(--card-shadow)',
  }

  const inner: React.CSSProperties = {
    maxWidth: 1280, margin: '0 auto', padding: '0 max(32px,4vw)',
  }

  return (
    <div className="page-wrapper">

      {/* ── Page header ── */}
      <div className="page-header">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
          <span className="overline">Background</span>
          <h1 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, color:'var(--text)', letterSpacing:'-0.02em', marginTop:12 }}>
            Experience &amp; <span style={{ color:'var(--primary)' }}>Education</span>
          </h1>
          <p style={{ marginTop:12, fontSize:'1rem', color:'var(--text2)', maxWidth:'60ch', lineHeight:1.75 }}>
            AI Engineer with a passion for building intelligent systems that solve real problems.
            Here's my journey so far.
          </p>
        </motion.div>
      </div>

      <div style={inner}>

        {/* ── Personal intro ── */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
          style={{ ...glass, display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, marginBottom:20 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <div className="card-icon" style={{ margin:0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Who I am</h3>
            </div>
            <p style={{ fontSize:'0.9rem', color:'var(--text2)', lineHeight:1.8, marginBottom:16 }}>
              I'm <strong style={{ color:'var(--text)' }}>Prateek Gaur</strong> — an AI Engineer and Full Stack Developer based in Greater Noida, India. I specialise in building production-grade AI systems that bridge the gap between cutting-edge research and real-world applications.
            </p>
            <p style={{ fontSize:'0.9rem', color:'var(--text2)', lineHeight:1.8 }}>
              My work spans Generative AI, Retrieval-Augmented Generation, multi-agent systems, and scalable backend infrastructure. I care deeply about code quality, system design, and shipping things that actually work in production.
            </p>
          </div>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <div className="card-icon" style={{ margin:0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Quick facts</h3>
            </div>
            {[
              ['Location',    'Greater Noida, India'],
              ['Current Role','AI Engineer @ DataAlchemy.AI'],
              ['Education',   'B.Tech AI & DS — MAIT Delhi'],
              ['CGPA',        '8.8 / 10'],
              ['GitHub',      'github.com/prateekgaurdev'],
              ['Email',       'gaur.prateek.1609@gmail.com'],
            ].map(([k, v]) => (
              <div key={k} style={{ display:'flex', gap:12, marginBottom:10, fontSize:'0.85rem' }}>
                <span style={{ color:'var(--text2)', fontWeight:500, minWidth:100, flexShrink:0 }}>{k}</span>
                <span style={{ color:'var(--text)', fontWeight:600 }}>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Experience ── */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }} style={glass}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:32 }}>
            <div className="card-icon" style={{ margin:0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Work Experience</h3>
              <p style={{ fontSize:'0.78rem', color:'var(--text2)' }}>{expYears}+ year(s) in the industry</p>
            </div>
          </div>

          <div style={{ display:'grid', gap:28 }}>
            <div className="timeline-entry">
              <div className="timeline-meta"><div className="timeline-date">Jul 2025<br/>Present</div></div>
              <div className="timeline-dot"/>
              <div className="timeline-body">
                <div className="timeline-role">AI Engineer</div>
                <div className="timeline-company"><a href="https://dataalchemy.ai" target="_blank" rel="noopener noreferrer">DataAlchemy.AI</a> — Noida</div>
                <ul className="timeline-list">
                  <li>Developed automated GitHub code documentation generator achieving 95% extraction accuracy, cutting manual documentation time by 70%</li>
                  <li>Architected and deployed a full-stack AI-driven mock interview platform with LLM-powered real-time feedback and performance analytics</li>
                  <li>Designed modular event-driven microservices architecture using Kafka for asynchronous automation workflows</li>
                  <li>Integrated vector databases (ChromaDB, Qdrant) for semantic search in RAG-based applications</li>
                </ul>
                <div className="skill-chips">{['Python','FastAPI','LangChain','Kafka','Docker','ChromaDB'].map(s=><span key={s} className="chip">{s}</span>)}</div>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-meta"><div className="timeline-date">Feb 2025<br/>Jun 2025</div></div>
              <div className="timeline-dot"/>
              <div className="timeline-body">
                <div className="timeline-role">Generative AI Intern</div>
                <div className="timeline-company"><a href="https://otomashen.com" target="_blank" rel="noopener noreferrer">Otomashen</a> — Noida</div>
                <ul className="timeline-list">
                  <li>Collaborated with 4+ cross-functional teams on 6+ AI-driven client projects across healthcare and enterprise domains</li>
                  <li>Engineered a context-aware Medical Chatbot capable of handling 1,000+ simulated patient interactions with integrated EHR management</li>
                  <li>Designed and deployed a Virtual Avatar system achieving 90%+ lip-sync accuracy using Wav2Lip and SadTalker models</li>
                  <li>Implemented LLM-based document summarisation and classification pipelines using LangChain and custom prompt engineering</li>
                </ul>
                <div className="skill-chips">{['Flask','SQLite','Wav2Lip','SadTalker','LLMs','LangChain'].map(s=><span key={s} className="chip">{s}</span>)}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Education ── */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.15 }} style={glass}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:28 }}>
            <div className="card-icon" style={{ margin:0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Education</h3>
          </div>
          <div className="timeline-entry">
            <div className="timeline-meta"><div className="timeline-date">2021<br/>2025</div></div>
            <div className="timeline-dot"/>
            <div className="timeline-body">
              <div className="timeline-role">B.Tech — Artificial Intelligence &amp; Data Science</div>
              <div className="timeline-company">Maharaja Agrasen Institute of Technology (MAIT), Delhi</div>
              <p style={{ fontSize:'0.85rem', color:'var(--text2)', marginBottom:10, lineHeight:1.7 }}>
                Specialised in machine learning, deep learning, natural language processing, computer vision, and data engineering. Completed capstone project on lung cancer prediction using CNN-based medical imaging.
              </p>
              <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                <span style={{ fontSize:'0.85rem', color:'var(--primary)', fontWeight:700 }}>CGPA: 8.8 / 10</span>
                <span style={{ fontSize:'0.85rem', color:'var(--text2)', fontWeight:500 }}>Batch of 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Achievements ── */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }} style={glass}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:28 }}>
            <div className="card-icon" style={{ margin:0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Key Achievements</h3>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12 }}>
            {achievements.map((a, i) => (
              <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, padding:'14px 16px', background:'var(--bg)', borderRadius:12, border:'1px solid var(--border)' }}>
                <div               style={{ width:32, height:32, borderRadius:8, background:'rgba(var(--primary-rgb),0.10)', border:'1px solid rgba(var(--primary-rgb),0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--primary)', flexShrink:0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={a.icon}/>
                  </svg>
                </div>
                <span style={{ fontSize:'0.83rem', color:'var(--text2)', lineHeight:1.55 }}>{a.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div style={{ display:'flex', gap:12, marginTop:8, marginBottom:40, flexWrap:'wrap' }}>
          <button className="btn-primary" onClick={() => navigate('/projects')}>See my projects →</button>
          <button onClick={() => navigate('/contact')}
            style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 28px', borderRadius:'999px', border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text)', fontSize:'0.88rem', fontWeight:600, cursor:'pointer', fontFamily:'Poppins,sans-serif', backdropFilter:'blur(12px)', transition:'all 0.2s' }}>
            Contact me
          </button>
        </div>

      </div>
    </div>
  )
}
