import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '@/components/layout/ThemeToggle.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
]

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md dark:border-zinc-800 dark:from-violet-950/60 dark:to-fuchsia-950/40">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-semibold tracking-tight text-amber-600 dark:text-violet-400">Harry</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-amber-600 dark:hover:text-violet-400 ${
                  isActive ? 'text-amber-600 dark:text-violet-400' : 'text-zinc-500 dark:text-zinc-400'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default NavBar


