import { motion } from 'framer-motion'
import AuroraBackground from '@/components/visuals/AuroraBackground.jsx'
import GridPattern from '@/components/visuals/GridPattern.jsx'
import profilePic from '@/assets/profile_pic.jpg'
import Button from '@/components/ui/Button.jsx'

function Home() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <GridPattern className="pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 sm:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-semibold tracking-tight sm:text-5xl bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-purple-400"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Harrison (Harry) deBoer
          </motion.h1>
          <motion.p
            className="max-w-prose text-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Data‑oriented software engineer shipping reliable systems and polished UIs. I enjoy building scalable data pipelines, LLM‑powered features, and thoughtful product experiences.
          </motion.p>
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Button size="md" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button variant="secondary" size="md" asChild>
              <a href="/projects">See Projects</a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="justify-self-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="h-48 w-48 rounded-2xl border border-zinc-200/60 object-cover shadow-lg dark:border-zinc-800 sm:h-56 sm:w-56"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home


