import { useState } from 'react'
import { ReactTyped } from 'react-typed'
import { motion, AnimatePresence } from 'framer-motion'
import { SplineRobot } from '../ui/SplineRobot'
import '../ui/ChatLoader.css'

interface SummaryProps {
  onOpenResume?: () => void
}

const PRATEEK_CONTEXT = `You are a helpful AI assistant embedded in Prateek Gaur's personal portfolio website.

RULES:
- For greetings ("Hi", "Hello", "Hey") reply warmly — do NOT mention Prateek unprompted.
- Only talk about Prateek when the user explicitly asks (e.g. "Who is he?", "Tell me about Prateek", "What does he do?", "What are his skills?").
- ALWAYS write complete sentences. NEVER stop in the middle of a sentence. Finish every thought fully.
- Keep answers to 2–3 complete sentences.

ABOUT PRATEEK (use only when asked):
Prateek Gaur is an AI Engineer and Full Stack Developer based in Greater Noida, India.
He specialises in Generative AI, LLMs, RAG, and building production-grade AI systems.
His stack: Python, FastAPI, LangChain, CrewAI, PyTorch, React, Docker, Kafka.
Currently an AI Engineer at DataAlchemy.AI — built code documentation tools, mock interview platforms, and event-driven microservices.
Previously interned at Otomashen — built a Medical Chatbot and a Virtual Avatar system with 90%+ lip-sync accuracy.
B.Tech in AI & Data Science from MAIT Delhi, CGPA 8.8.
GitHub: github.com/prateekgaurdev | LinkedIn: linkedin.com/in/prateekgaur1609`

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
})

// ── Inline SVG icons (no Font Awesome dependency) ─────────────────────────────
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function Summary({ onOpenResume }: SummaryProps) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    const question = input.trim()
    setInput('')
    setIsLoading(true)
    setResponse('')
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: PRATEEK_CONTEXT },
            { role: 'user', content: question },
          ],
        }),
      })
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData?.error ?? `HTTP ${res.status}`)
      }
      const data = await res.json()
      setResponse(data.message ?? "No response received.")
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : ''
      if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('ECONNREFUSED')) {
        setResponse("⚠️ Backend offline. Run: node --env-file=.env server.js")
      } else if (msg.includes('GEMINI_API_KEY')) {
        setResponse("⚠️ GEMINI_API_KEY not set. Add it to your .env file.")
      } else {
        setResponse(`Error: ${msg || 'Something went wrong. Try again.'}`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="summary" className="hero">
      {/* Centered max-width container */}
      <div className="hero-inner">

      {/* ══════════════════════════════════
          LEFT — text
          ══════════════════════════════════ */}
      <div className="hero-text">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Open to opportunities
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.08)} className="hero-greeting">
          Hey there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1 {...fadeUp(0.15)} className="hero-name">
          Prateek <span>Gaur</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div {...fadeUp(0.22)} className="hero-typewriter">
          <ReactTyped
            strings={['AI Engineer', 'GenAI Specialist', 'Full Stack Developer']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        {/* Description */}
        <motion.p {...fadeUp(0.3)} className="hero-desc">
          I build intelligent systems at the intersection of Generative AI
          and full-stack engineering — from LLM-powered applications and RAG
          pipelines to production-ready APIs and scalable microservices.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.37)} className="hero-btns">
          <button
            className="btn-primary"
            onClick={onOpenResume ?? (() => window.open('/resume.pdf', '_blank'))}
          >
            View Resume
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
        </motion.div>

        {/* Social links — inline SVG, no FA dependency */}
        <motion.div {...fadeUp(0.44)} className="hero-socials">
          <a
            className="hero-social-link"
            href="https://www.linkedin.com/in/prateekgaur1609/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="hero-social-link"
            href="https://github.com/prateekgaurdev"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </motion.div>
      </div>

      {/* ══════════════════════════════════
          RIGHT — 3D robot + AI chat
          ══════════════════════════════════ */}
      <div className="hero-robot">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="hero-robot-scene"
        >
          <SplineRobot onClick={() => setIsChatOpen((v) => !v)} />
        </motion.div>

        {/* ── AI Chat panel ── */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              className="robot-chat-panel"
            >
              {/* Input pill */}
              <div style={{
                display: 'flex',
                borderRadius: '999px',
                border: '1.5px solid var(--primary)',
                overflow: 'hidden',
                background: 'var(--surface)',
                boxShadow: 'var(--chat-shadow)',
              }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything…"
                  autoFocus
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    padding: '11px 16px',
                    fontSize: '0.85rem',
                    color: 'var(--text)',
                    outline: 'none',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  style={{
                    background: 'var(--primary)',
                    border: 'none',
                    color: '#fff',
                    padding: '0 18px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    fontFamily: 'Poppins, sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  Send
                </button>
              </div>

              {/* Loading dots */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}
                  >
                    <div className="dots-container" style={{ transform: 'scale(0.7)' }}>
                      <div className="dot" /><div className="dot" /><div className="dot" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Response bubble */}
              <AnimatePresence>
                {!isLoading && response && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 360, damping: 26 }}
                    style={{
                      marginTop: 10,
                      padding: '14px 16px',
                      borderRadius: '16px',
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      fontSize: '0.85rem',
                      color: 'var(--text)',
                      lineHeight: 1.65,
                      wordBreak: 'break-word',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                    }}
                  >
                    {response}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => { setIsChatOpen(false); setResponse('') }}
                style={{
                  display: 'block', margin: '8px auto 0',
                  background: 'none', border: 'none',
                  color: 'var(--text2)', fontSize: '0.75rem',
                  cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
                }}
              >
                Close ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      </div>{/* end hero-inner */}
    </section>
  )
}
