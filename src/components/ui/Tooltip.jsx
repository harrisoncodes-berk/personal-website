import { useState } from 'react'

function Tooltip({ content, children }) {
  const [open, setOpen] = useState(false)
  return (
    <span className="relative inline-flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open ? (
        <span className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-md border border-zinc-200/60 bg-white px-2 py-1 text-xs text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          {content}
        </span>
      ) : null}
    </span>
  )
}

export default Tooltip


