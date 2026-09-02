import { TiltCard } from '../ui/TiltCard'

const skillCategories = [
  {
    title: 'Languages',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    skills: ['LLMs', 'RAG', 'Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Frameworks',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    skills: ['LangChain', 'CrewAI', 'PyTorch', 'FastAPI', 'Hugging Face', 'React'],
  },
  {
    title: 'Tools & Infra',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    skills: ['Docker', 'Kafka', 'PostgreSQL', 'ChromaDB', 'Git', 'Vercel'],
  },
]

export function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">

        <div className="section-heading" data-aos="fade-up" data-aos-duration="700">
          <span className="overline">Expertise</span>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div
          className="skills-grid"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {skillCategories.map((cat) => (
            <TiltCard key={cat.title} maxDeg={5}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
                <div className="card-icon" style={{ width:40, height:40, borderRadius:12, margin:0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={cat.icon} />
                  </svg>
                </div>
                <div className="skill-card-title">{cat.title}</div>
              </div>
              <div className="skill-chips">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  )
}
