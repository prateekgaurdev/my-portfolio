import { useRef, type ReactNode, type MouseEvent } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxDeg?: number
  glowColor?: string
}

/**
 * 3D perspective tilt card with a mouse-tracked radial glow overlay.
 * Inspired by ali-ch.dev's card interaction pattern.
 */
export function TiltCard({
  children,
  className = '',
  maxDeg = 7,
  glowColor = 'rgba(16,185,129,0.14)',
}: TiltCardProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const glowRef  = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotX = ((rect.height / 2 - y) / (rect.height / 2)) * maxDeg
    const rotY = ((x - rect.width  / 2) / (rect.width  / 2)) * maxDeg
    el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
    el.classList.remove('resetting')

    // Track glow to cursor
    if (glowRef.current) {
      const px = (x / rect.width)  * 100
      const py = (y / rect.height) * 100
      glowRef.current.style.background =
        `radial-gradient(circle at ${px}% ${py}%, ${glowColor}, transparent 60%)`
      glowRef.current.style.opacity = '1'
    }
  }

  const onLeave = () => {
    const el = innerRef.current
    if (!el) return
    el.classList.add('resetting')
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <div className="tilt-outer" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={innerRef} className="tilt-inner">
        <div className={`glass-card glass hairline-t ${className}`}>
          {/* Glow overlay */}
          <div ref={glowRef} className="card-glow" aria-hidden />
          {/* Actual content */}
          <div className="card-content">{children}</div>
        </div>
      </div>
    </div>
  )
}
