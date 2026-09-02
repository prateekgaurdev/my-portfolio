// Local dev server — mirrors the Vercel API routes
// Run with: node --env-file=.env server.js

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'gaur.prateek.1609@gmail.com'

if (!GEMINI_API_KEY) {
    console.error('❌  GEMINI_API_KEY is not set. Get a free key at https://aistudio.google.com/app/apikey')
    process.exit(1)
}

// ── GET /api/chat ─────────────────────────────────────────────
app.get('/api/chat', (_req, res) => {
    res.json({ status: 'ok', message: 'Chat API (Gemini 2.5 Flash) is running.' })
})

// ── POST /api/chat ────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array required' })
        }

        // Separate system prompt from chat history
        const systemMsg = messages.find(m => m.role === 'system')
        const chatMessages = messages.filter(m => m.role !== 'system')

        const contents = chatMessages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
        }))

        const body = {
            contents,
            generationConfig: {
                maxOutputTokens: 1024,
                temperature: 0.4,
            },
        }

        if (systemMsg) {
            body.systemInstruction = { parts: [{ text: systemMsg.content }] }
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

        console.log('→ Gemini 2.5 Flash request...')

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            const err = await response.text()
            console.error('Gemini error:', err)
            return res.status(500).json({ error: 'Gemini API error: ' + err })
        }

        const data = await response.json()

        // Log finish reason to detect truncation
        const candidate  = data.candidates?.[0]
        const finishReason = candidate?.finishReason ?? 'UNKNOWN'
        const aiMessage  = candidate?.content?.parts?.[0]?.text ?? "Couldn't generate a response."

        console.log(`← AI [${finishReason}]: ${aiMessage.slice(0, 120)}${aiMessage.length > 120 ? '…' : ''}`)

        if (finishReason === 'MAX_TOKENS') {
            console.warn('⚠️  Response hit token limit — consider raising maxOutputTokens further')
        }

        res.json({ message: aiMessage })

    } catch (error) {
        console.error('Server error:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

// ── POST /api/contact ─────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields' })
    }

    try {
        console.log(`📧 Contact from ${name} <${email}>`)

        if (!RESEND_API_KEY) {
            console.warn('RESEND_API_KEY not set — skipping email send')
            return res.status(200).json({ success: true, id: 'dev-no-email' })
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: CONTACT_EMAIL,
                subject: `New message from ${name}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background:#f9f9f9;padding:10px;border-left:3px solid #ccc">
                        ${message}
                    </blockquote>
                `,
            }),
        })

        if (!response.ok) {
            const err = await response.text()
            console.error('Resend error:', err)
            return res.status(500).json({ error: 'Failed to send email' })
        }

        const data = await response.json()
        console.log('✅ Email sent:', data.id)
        return res.status(200).json({ success: true, id: data.id })

    } catch (error) {
        console.error('Contact error:', error)
        return res.status(500).json({ error: 'Server error' })
    }
})

app.listen(3001, () => {
    console.log('🤖  API server running on http://localhost:3001')
    console.log('   Model: Gemini 2.5 Flash')
    console.log('   Proxy: npm run dev → Vite forwards /api/* here')
})
