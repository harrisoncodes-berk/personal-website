import { cn } from '@/lib/cn.js'

function SectionHeader({ title, subtitle, className }) {
  return (
    <div className={cn('space-y-2', className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="max-w-prose text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader


