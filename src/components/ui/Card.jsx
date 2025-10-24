import { cn } from '@/lib/cn.js'

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn('rounded-xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('text-base font-medium', className)}>{children}</h3>
}

export function CardDescription({ className, children }) {
  return <p className={cn('mt-1 text-sm text-zinc-600 dark:text-zinc-400', className)}>{children}</p>
}

export default Card


