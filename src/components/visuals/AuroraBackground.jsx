import { memo } from 'react'
import { motion } from 'framer-motion'

function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.35),rgba(245,158,11,0)_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),rgba(139,92,246,0)_60%)]"
        initial={{ x: -80, y: -20, opacity: 0.6 }}
        animate={{ x: 80, y: 10, opacity: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.35),rgba(251,146,60,0)_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.22),rgba(217,70,239,0)_60%)]"
        initial={{ x: -50, y: 40, opacity: 0.6 }}
        animate={{ x: 60, y: -20, opacity: 1 }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-[26rem] w-[26rem] translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.28),rgba(244,63,94,0)_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),rgba(168,85,247,0)_60%)]"
        initial={{ x: 40, y: -40, opacity: 0.6 }}
        animate={{ x: -40, y: 40, opacity: 1 }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute left-8 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(248,113,113,0.24),rgba(248,113,113,0)_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.18),rgba(192,132,252,0)_60%)]"
        initial={{ x: -20, y: 0, opacity: 0.6 }}
        animate={{ x: 20, y: 0, opacity: 1 }}
        transition={{ duration: 26, repeat: Infinity, repeatType: 'mirror' }}
      />
    </div>
  )
}

export default memo(AuroraBackground)


