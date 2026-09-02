import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from './Navbar'
import { ScrollProgress } from '../ui/ScrollProgress'
import { NeuralScrollBackground } from '../ui/NeuralScrollBackground'

export function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? saved === 'true' : true
  })

  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const action = darkMode ? 'add' : 'remove'
    document.documentElement.classList[action]('dark-mode')
    document.body.classList[action]('dark-mode')
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  // AOS observer — re-run on every route change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('aos-animate')
      }),
      { threshold: 0.08 }
    )
    // Small delay so new page DOM is ready
    const t = setTimeout(() => {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.remove('aos-animate')
        observer.observe(el)
      })
    }, 60)
    return () => { clearTimeout(t); observer.disconnect() }
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      {/* Neural background only on homepage */}
      {isHome && <NeuralScrollBackground />}

      <div id="app">
        <Nav darkMode={darkMode} onToggleTheme={() => setDarkMode(v => !v)} />
        <Outlet />
      </div>
    </>
  )
}
