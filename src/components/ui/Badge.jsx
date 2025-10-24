import { cn } from '@/lib/cn.js'

function Badge({ children, className }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border border-amber-200/70 bg-amber-50 px-2.5 py-0.5 text-xs text-amber-800 dark:border-violet-900/40 dark:bg-violet-900/30 dark:text-violet-300', className)}>
      {children}
    </span>
  )
}

export default Badge


