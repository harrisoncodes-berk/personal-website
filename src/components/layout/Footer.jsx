import { socials } from '@/data/socials.js'

function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Harry de Boer</p>
        <nav className="hidden items-center gap-6 sm:flex">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer


