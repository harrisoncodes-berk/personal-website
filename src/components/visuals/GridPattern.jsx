import { memo } from 'react'

function GridPattern({ className }) {
  return (
    <svg className={className} aria-hidden>
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" className="stroke-zinc-200 dark:stroke-zinc-800" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

export default memo(GridPattern)


