import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import './ChatLoader.css'

interface HeroRobotProps {
    size?: number
}

// Prateek's context for the AI
const PRATEEK_CONTEXT = `You are a helpful AI assistant on Prateek Gaur's portfolio.

Current State: The user is visiting Prateek's portfolio.

CRITICAL INSTRUCTION:
- If the user says "Hi", "Hello", "Hey": JUST say "Hello! How can I help you today?" or "Hi there! What's on your mind?". DO NOT mention Prateek's name, role, or skills.
- ONLY talk about Prateek if the user EXPLICITLY asks (e.g., "Who is he?", "What does he do?", "Skills?", "Projects?").
- If asked about Prateek, give a short 1-2 sentence summary.

Reference Material (Use ONLY when asked):
Name: Prateek Gaur
Role: AI Engineer & Full Stack Developer
Skills: LLMs, RAG, Langchain, CrewAI, Python, FastAPI, React
Contact: github.com/prateekgaurdev, linkedin.com/in/prateekgaur1609`

export function HeroRobot({ size = 280 }: HeroRobotProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // Smooth spring-based eye movement
    const eyeX = useSpring(0, { stiffness: 150, damping: 12 })
    const eyeY = useSpring(0, { stiffness: 150, damping: 12 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const normalizedX = Math.max(-1, Math.min(1, (e.clientX - centerX) / 250))
            const normalizedY = Math.max(-1, Math.min(1, (e.clientY - centerY) / 250))

            eyeX.set(normalizedX * 5)
            eyeY.set(normalizedY * 4)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [eyeX, eyeY])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const question = input.trim()
        setInput('')
        setIsLoading(true)
        setResponse('') // Clear previous response

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'system', content: PRATEEK_CONTEXT },
                        { role: 'user', content: question }
                    ]
                })
            })

            if (!res.ok) throw new Error('Failed')
            const data = await res.json()
            setResponse(data.message)
        } catch {
            setResponse("Oops! I'm having trouble. Try again! 🤖")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <motion.div
                ref={containerRef}
                className="cursor-pointer select-none relative z-10"
                style={{ width: size, height: size }}
                onClick={() => setIsChatOpen(!isChatOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(16, 185, 129, 0.4))' }}
                >
                    {/* Antenna */}
                    <motion.g
                        animate={{ rotate: isChatOpen ? [-10, 10, -10] : [-3, 3, -3] }}
                        transition={{ duration: isChatOpen ? 0.5 : 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transformOrigin: '50px 25px' }}
                    >
                        <line x1="50" y1="25" x2="50" y2="8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="50" cy="6" r="5" fill="#10b981">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                        </circle>
                    </motion.g>

                    {/* Robot head */}
                    <rect x="20" y="25" width="60" height="50" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="3" />

                    {/* Face plate */}
                    <rect x="28" y="32" width="44" height="36" rx="8" fill="#0f172a" />

                    {/* Eye sockets */}
                    <rect x="32" y="38" width="14" height="14" rx="4" fill="#1e3a5f" />
                    <rect x="54" y="38" width="14" height="14" rx="4" fill="#1e3a5f" />

                    {/* Left pupil */}
                    <motion.g style={{ x: eyeX, y: eyeY }}>
                        <circle cx="39" cy="45" r="5" fill={isChatOpen ? "#fbbf24" : "#10b981"} />
                        <circle cx="41" cy="43" r="2" fill="white" opacity="0.8" />
                    </motion.g>

                    {/* Right pupil */}
                    <motion.g style={{ x: eyeX, y: eyeY }}>
                        <circle cx="61" cy="45" r="5" fill={isChatOpen ? "#fbbf24" : "#10b981"} />
                        <circle cx="63" cy="43" r="2" fill="white" opacity="0.8" />
                    </motion.g>

                    {/* Mouth */}
                    {isChatOpen ? (
                        <path d="M 38 58 Q 50 68 62 58" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    ) : (
                        <path d="M 40 60 Q 50 66 60 60" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    )}

                    {/* Ears */}
                    <rect x="12" y="40" width="8" height="20" rx="3" fill="#10b981" />
                    <rect x="80" y="40" width="8" height="20" rx="3" fill="#10b981" />

                    {/* Body */}
                    <rect x="30" y="75" width="40" height="20" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="2" />

                    {/* Body lights */}
                    <circle cx="42" cy="85" r="3" fill="#fbbf24">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="85" r="3" fill="#10b981">
                        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="58" cy="85" r="3" fill="#ef4444">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </motion.div>

            {/* Click hint - Only visible when chat is closed */}
            <AnimatePresence>
                {!isChatOpen && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-emerald-400 transition-colors"
                        onClick={() => setIsChatOpen(true)}
                    >
                        Click to chat with me! 💬
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Chat Container - Synced Animations */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute top-full mt-8 w-[280px] flex flex-col items-center gap-4 z-50"
                    >
                        {/* Compact Pill Input */}
                        <div className="w-full relative shadow-xl rounded-full bg-white">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder=""
                                className="w-full bg-transparent text-slate-800 text-sm px-5 py-3 rounded-full border-2 border-transparent focus:border-white focus:ring-0 placeholder-slate-400 outline-none"
                                autoFocus
                            />
                        </div>

                        {/* Dots Loader - Appears when loading */}
                        <AnimatePresence>
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    className="w-full flex justify-center py-4"
                                >
                                    <div className="dots-container scale-75">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Response Bubble - Centered */}
                        <AnimatePresence>
                            {!isLoading && response && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="w-[110%] -ml-[5%] bg-white p-6 rounded-[24px] rounded-tl-sm shadow-xl text-slate-700 text-sm leading-relaxed border border-white/50 relative break-words text-center"
                                >
                                    {response}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HeroRobot
