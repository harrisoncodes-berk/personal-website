import { forwardRef } from 'react'
import { cn } from '@/lib/cn.js'

const variantClasses = {
  primary:
    'bg-amber-600 text-white hover:bg-amber-500 active:translate-y-px dark:bg-violet-500 dark:text-white dark:hover:bg-violet-400',
  secondary:
    'bg-white text-zinc-900 border border-zinc-200 hover:bg-amber-50 active:translate-y-px dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-violet-900/30',
  ghost:
    'bg-transparent text-zinc-700 hover:bg-amber-50 active:translate-y-px dark:text-zinc-300 dark:hover:bg-violet-900/30',
}

const sizeClasses = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', asChild = false, ...props },
  ref,
) {
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium tracking-tight transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
})

export default Button


