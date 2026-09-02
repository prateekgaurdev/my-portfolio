import { useRef, useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'

interface SplineRobotProps {
  onClick?: () => void
}

export function SplineRobot({ onClick }: SplineRobotProps) {
  const ref  = useRef<HTMLDivElement>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const eyeX = useSpring(0, { stiffness: 150, damping: 12 })
  const eyeY = useSpring(0, { stiffness: 150, damping: 12 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    eyeX.set(Math.max(-1, Math.min(1, (e.clientX - r.left - r.width  / 2) / 220)) * 5)
    eyeY.set(Math.max(-1, Math.min(1, (e.clientY - r.top  - r.height / 2) / 220)) * 4)
  }

  const handleClick = () => {
    setIsChatOpen(v => !v)
    onClick?.()
  }

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      onMouseMove={onMouseMove}
    >
      {/* ── Animated SVG Robot ── */}
      <motion.div
        ref={ref}
        onClick={handleClick}
        className="cursor-pointer select-none"
        style={{ width: 320, height: 320 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full"
          style={{ filter: 'var(--robot-glow)' }}>

          {/* Antenna */}
          <motion.g
            animate={{ rotate: isChatOpen ? [-10, 10, -10] : [-3, 3, -3] }}
            transition={{ duration: isChatOpen ? 0.4 : 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '50px 25px' }}
          >
            <line x1="50" y1="25" x2="50" y2="8"
              style={{ stroke: 'var(--primary)' }} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="6" r="4" style={{ fill: 'var(--primary)' }}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </motion.g>

          {/* Head */}
          <rect x="20" y="25" width="60" height="50" rx="12" fill="#111827"
            style={{ stroke: 'var(--primary)' }} strokeWidth="2.5" />
          {/* Face plate */}
          <rect x="28" y="32" width="44" height="36" rx="8" fill="#0a0f1e" />
          {/* Eye sockets */}
          <rect x="31" y="38" width="15" height="14" rx="4" fill="#0f2a4a" />
          <rect x="54" y="38" width="15" height="14" rx="4" fill="#0f2a4a" />

          {/* Left pupil — mouse tracking */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            <circle cx="38.5" cy="45" r="5.5"
              style={{ fill: isChatOpen ? '#fbbf24' : 'var(--primary)' }} />
            <circle cx="40"   cy="43" r="2" fill="white" opacity="0.9" />
          </motion.g>
          {/* Right pupil */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            <circle cx="61.5" cy="45" r="5.5"
              style={{ fill: isChatOpen ? '#fbbf24' : 'var(--primary)' }} />
            <circle cx="63"   cy="43" r="2" fill="white" opacity="0.9" />
          </motion.g>

          {/* Mouth */}
          {isChatOpen
            ? <path d="M37 57 Q50 70 63 57" fill="none"
                style={{ stroke: 'var(--primary)' }} strokeWidth="2.5" strokeLinecap="round" />
            : <path d="M39 60 Q50 67 61 60" fill="none"
                style={{ stroke: 'var(--primary)' }} strokeWidth="2.5" strokeLinecap="round" />
          }

          {/* Ears */}
          <rect x="11" y="40" width="9" height="20" rx="3"
            style={{ fill: 'var(--primary)' }} opacity="0.9" />
          <rect x="80" y="40" width="9" height="20" rx="3"
            style={{ fill: 'var(--primary)' }} opacity="0.9" />

          {/* Body */}
          <rect x="28" y="75" width="44" height="22" rx="7" fill="#111827"
            style={{ stroke: 'var(--primary)' }} strokeWidth="2" />
          {/* Body lights */}
          <circle cx="40" cy="86" r="3" fill="#fbbf24">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s"   repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="86" r="3" style={{ fill: 'var(--primary)' }}>
            <animate attributeName="opacity" values="1;0.4;1"   dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="86" r="3" fill="#ef4444">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>

      {/* ── Glowing "Click to chat" CTA button ── */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            key="chat-cta"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0,  scale: 1   }}
            exit={{    opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            onClick={handleClick}
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            8,
              padding:        '10px 22px',
              borderRadius:   '999px',
              background:     'var(--primary)',
              color:          '#fff',
              border:         'none',
              cursor:         'pointer',
              fontSize:       '0.82rem',
              fontWeight:     700,
              fontFamily:     'Poppins, sans-serif',
              letterSpacing:  '0.04em',
              boxShadow:      '0 0 0 0 rgba(var(--primary-rgb), 0.5)',
              animation:      'chat-pulse 2.2s ease-in-out infinite',
              position:       'relative',
              zIndex:         5,
              marginTop:      8,
            }}
          >
            {/* Pulsing dot */}
            <span style={{
              width:        8,
              height:       8,
              borderRadius: '50%',
              background:   'rgba(255,255,255,0.9)',
              display:      'inline-block',
              animation:    'dot-blink 1.4s ease-in-out infinite',
              flexShrink:   0,
            }} />
            Chat with me
            {/* Arrow */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SplineRobot
