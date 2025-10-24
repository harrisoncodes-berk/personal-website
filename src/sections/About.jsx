import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge.jsx'
import Button from '@/components/ui/Button.jsx'
import profilePic from '@/assets/profile_pic.jpg'
import { highlights, interests } from '@/data/about.js'
import { BookOpenText, Gamepad2, Heart } from 'lucide-react'

function About() {
  return (
    <section className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[.9fr_1.1fr]">
      <motion.div
        className="order-2 sm:order-1"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          B.A. in Data Science (Economics emphasis) from UC Berkeley (May 2021). I’m a product‑minded engineer who blends data, backend, and UI to ship durable systems.
        </p>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">
          Recently: PySpark pipelines at scale, LLM classification, analytics dashboards, and full‑stack projects in Go and React.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <Badge key={h}>{h}</Badge>
          ))}
        </div>
        <div className="mt-6">
          <Button size="md" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </div>

        <div className="mt-10 space-y-4">
          <h3 className="text-lg font-medium inline-flex items-center gap-2"><Heart size={16} /> Interests</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 inline-flex items-center gap-2"><Gamepad2 size={14} /> Board Games</p>
              <ul className="mt-2 space-y-1 text-sm">
                {interests.boardGames.map((g) => (
                  <li key={g.label}>
                    <a className="text-amber-700 hover:underline dark:text-violet-300" href={g.href} target="_blank" rel="noopener noreferrer">{g.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 inline-flex items-center gap-2"><BookOpenText size={14} /> Reading</p>
              <ul className="mt-2 space-y-1 text-sm">
                {interests.reading.map((r) => (
                  <li key={r.label}>
                    <a className="text-amber-700 hover:underline dark:text-violet-300" href={r.href} target="_blank" rel="noopener noreferrer">{r.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 inline-flex items-center gap-2"><Heart size={14} /> Hobbies</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {interests.hobbies.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="order-1 justify-self-center sm:order-2"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="relative">
          <img
            src={profilePic}
            alt="Profile"
            className="h-56 w-56 rounded-2xl border border-zinc-200/60 object-cover shadow-lg ring-1 ring-black/5 dark:border-zinc-800 sm:h-64 sm:w-64"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </motion.div>
    </section>
  )
}

export default About


