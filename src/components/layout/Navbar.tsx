import { NavLink, useNavigate } from 'react-router-dom'

interface NavProps {
  darkMode: boolean
  onToggleTheme: () => void
}

const navItems = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Skills',   path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact',  path: '/contact' },
]

export function Nav({ darkMode, onToggleTheme }: NavProps) {
  const navigate = useNavigate()

  return (
    <header role="banner" className="nav-wrapper">
      <nav className="nav-pill glass-strong hairline-t">

        {/* Logo */}
        <div className="nav-logo" onClick={() => navigate('/')}>
          <span className="nav-logo-name" style={{ fontSize: '1.05rem' }}>Prateek Gaur</span>
        </div>

        {/* Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="nav-right">
          <input
            type="checkbox"
            id="theme-checkbox"
            className="checkbox"
            checked={darkMode}
            onChange={onToggleTheme}
          />
          <label htmlFor="theme-checkbox" className="checkbox-label">
            <i className="fas fa-moon" />
            <i className="fas fa-sun" />
            <span className="ball" />
          </label>

          <button
            className="nav-hire-btn"
            onClick={() => navigate('/contact')}
          >
            Hire Me
          </button>
        </div>

      </nav>
    </header>
  )
}
