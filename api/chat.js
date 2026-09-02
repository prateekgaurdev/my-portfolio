// Vercel Serverless Function — AI Chat
// Model: Google Gemini 1.5 Flash

export const config = { maxDuration: 60 }

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Allow', 'GET, POST, OPTIONS')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        return res.status(200).end()
    }

    if (req.method === 'GET') {
        return res.status(200).json({ status: 'ok', message: 'Chat API (Gemini) is running.' })
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { messages } = req.body

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array required' })
        }

        const GEMINI_API_KEY = process.env.GEMINI_API_KEY
        if (!GEMINI_API_KEY) {
            return res.status(500).json({ error: 'GEMINI_API_KEY not configured' })
        }

        // Separate system message from conversation history
        const systemMsg = messages.find(m => m.role === 'system')
        const chatMessages = messages.filter(m => m.role !== 'system')

        // Build Gemini contents array — roles must alternate user/model
        const contents = chatMessages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
        }))

        const body = {
            contents,
            generationConfig: {
                maxOutputTokens: 600,
                temperature: 0.7,
            },
        }

        // Attach system instruction if present
        if (systemMsg) {
            body.systemInstruction = {
                parts: [{ text: systemMsg.content }],
            }
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${GEMINI_API_KEY}`

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            const error = await response.text()
            console.error('Gemini API error:', error)
            return res.status(500).json({ error: 'AI service error: ' + error })
        }

        const data = await response.json()
        const aiMessage =
            data.candidates?.[0]?.content?.parts?.[0]?.text ??
            "I couldn't generate a response."

        return res.status(200).json({ message: aiMessage })

    } catch (error) {
        console.error('Chat API error:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
}
