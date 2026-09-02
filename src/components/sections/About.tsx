export function About() {
  const expYears = new Date().getFullYear() - 2024

  const glassBox: React.CSSProperties = {
    background: 'var(--surface)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    border: '1px solid var(--border)',
    borderTop: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 20,
    padding: '32px 36px',
    marginBottom: 20,
  }

  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container">

        <div className="section-heading" data-aos="fade-up" data-aos-duration="700">
          <span className="overline">Background</span>
          <h2>About <span>Me</span></h2>
          <p className="sub">
            AI Engineer building production-grade intelligent systems — from LLMs
            and RAG pipelines to full-stack applications.
          </p>
        </div>

        {/* Experience block */}
        <div data-aos="fade-up" data-aos-duration="800" style={glassBox}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:32 }}>
            <div className="card-icon" style={{ margin:0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Experience</h3>
              <p style={{ fontSize:'0.78rem', color:'var(--text2)' }}>{expYears}+ year(s)</p>
            </div>
          </div>

          <div className="about-grid" style={{ display:'grid', gap:28 }}>
            {/* Role 1 */}
            <div className="timeline-entry">
              <div className="timeline-meta">
                <div className="timeline-date">Jul 2025<br/>Present</div>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-role">AI Engineer</div>
                <div className="timeline-company">
                  <a href="https://dataalchemy.ai" target="_blank" rel="noopener noreferrer">
                    DataAlchemy.AI
                  </a> — Noida
                </div>
                <ul className="timeline-list">
                  <li>Developed automated GitHub code documentation generator with 95% accuracy</li>
                  <li>Built full-stack AI-driven mock interview platform with real-time feedback</li>
                  <li>Architected modular microservices for event-driven automation with Kafka</li>
                </ul>
                <div className="skill-chips">
                  {['Python','FastAPI','LangChain','Kafka','Docker'].map(s=>(
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 2 */}
            <div className="timeline-entry">
              <div className="timeline-meta">
                <div className="timeline-date">Feb 2025<br/>Jun 2025</div>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-role">Generative AI Intern</div>
                <div className="timeline-company">
                  <a href="https://otomashen.com" target="_blank" rel="noopener noreferrer">
                    Otomashen
                  </a> — Noida
                </div>
                <ul className="timeline-list">
                  <li>Collaborated with 4+ cross-functional teams on 6+ AI-driven projects</li>
                  <li>Engineered Medical Chatbot handling 1,000+ simulated patient interactions</li>
                  <li>Designed Virtual Avatar system with 90%+ lip-sync accuracy using Wav2Lip</li>
                </ul>
                <div className="skill-chips">
                  {['Flask','SQLite','Wav2Lip','SadTalker','LLMs'].map(s=>(
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education block */}
        <div data-aos="fade-up" data-aos-duration="800" style={glassBox}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:28 }}>
            <div className="card-icon" style={{ margin:0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text)' }}>Education</h3>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-date">2021<br/>2025</div>
            </div>
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-role">B.Tech — Artificial Intelligence & Data Science</div>
              <div className="timeline-company">Maharaja Agrasen Institute of Technology, Delhi</div>
              <div style={{ fontSize:'0.85rem', color:'var(--primary)', fontWeight:600 }}>CGPA: 8.8</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
