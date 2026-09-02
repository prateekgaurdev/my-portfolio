import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import './NeuralScrollBackground.css'

const TOKENS = [
    'Transformer', 'Attention', 'RAG', 'LLM', 'Context', 'Embedding', 'Neural',
    'Vector', 'Weights', 'Fine-tune', 'Token', 'Inference', 'GPT', 'Claude', 'Mistral'
]

class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number

    constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
    }

    update(width: number, height: number, speedMultiplier: number) {
        this.x += this.speedX * speedMultiplier
        this.y += this.speedY * speedMultiplier

        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
    }

    draw(ctx: CanvasRenderingContext2D, h: number) {
        // Very low opacity — subtle, not distracting
        ctx.fillStyle = `hsla(${h}, 60%, 50%, ${this.opacity * 0.18})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

export function NeuralScrollBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { scrollYProgress } = useScroll()

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    const hue = useTransform(smoothProgress, [0, 0.5, 1], [150, 210, 270])
    const gridOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 0.5, 0.5, 0.3])
    const flowSpeed = useTransform(smoothProgress, [0, 1], [0.8, 3.5])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            init()
        }

        const init = () => {
            particles = []
            // Fewer particles for a cleaner, subtle look
            const particleCount = Math.floor((canvas.width * canvas.height) / 38000)
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height))
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const currentHue = hue.get()
            const currentSpeed = flowSpeed.get()

            particles.forEach((p, i) => {
                p.update(canvas.width, canvas.height, currentSpeed)
                p.draw(ctx, currentHue)

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x
                    const dy = p.y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 100) {
                        ctx.strokeStyle = `hsla(${currentHue}, 60%, 50%, ${0.04 * (1 - dist / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener('resize', resize)
        resize()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [hue, flowSpeed])

    return (
        <div className="neural-scroll-bg">
            <motion.div
                className="neural-base-grid"
                style={{
                    opacity: gridOpacity,
                    backgroundImage: useTransform(hue, (h) =>
                        `linear-gradient(hsla(${h}, 70%, 50%, 0.1) 1px, transparent 1px), 
                         linear-gradient(90deg, hsla(${h}, 70%, 50%, 0.1) 1px, transparent 1px)`
                    )
                }}
            />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            <div className="absolute inset-0">
                {TOKENS.map((token, i) => (
                    <TokenNode key={i} token={token} index={i} smoothProgress={smoothProgress} />
                ))}
            </div>
        </div>
    )
}

interface TokenNodeProps {
    token: string
    index: number
    smoothProgress: MotionValue<number>
}

function TokenNode({ token, index, smoothProgress }: TokenNodeProps) {
    const startY = (index * 153) % 80 + 10
    const startX = (index * 277) % 80 + 10

    const y = useTransform(smoothProgress, [0, 1], [`${startY}%`, `${startY - 20}%`])
    const opacity = useTransform(smoothProgress,
        [index / TOKENS.length - 0.1, index / TOKENS.length, index / TOKENS.length + 0.1],
        [0, 0.2, 0]
    )

    return (
        <motion.div
            className="llm-token"
            style={{
                left: `${startX}%`,
                top: y as any,
                opacity: opacity
            }}
        >
            {token}
        </motion.div>
    )
}
