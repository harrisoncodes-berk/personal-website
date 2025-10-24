import { memo } from 'react'

function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-violet-950 dark:via-fuchsia-950 dark:to-purple-950" />
      <div className="absolute inset-0 mix-blend-multiply opacity-40 blur-2xl [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-300/30 dark:bg-violet-500/10" />
        <div className="absolute right-[-10%] top-1/3 h-[34rem] w-[34rem] rounded-full bg-orange-300/30 dark:bg-fuchsia-500/10" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[38rem] w-[38rem] rounded-full bg-rose-300/30 dark:bg-purple-500/10" />
      </div>
    </div>
  )
}

export default memo(SiteBackground)


