import SectionHeader from '@/components/ui/SectionHeader.jsx'
import { experience } from '@/data/experience.js'

function Experience() {
  return (
    <section className="space-y-6">
      <SectionHeader title="Experience" subtitle="Roles, teams, and impact." />
      <ul className="divide-y divide-zinc-200/60 rounded-lg border border-zinc-200/60 dark:divide-zinc-800 dark:border-zinc-800">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-medium">
                {item.company} · {item.role}
                {item.location ? <span className="text-sm text-zinc-500"> · {item.location}</span> : null}
              </p>
              <span className="text-xs text-zinc-500 whitespace-nowrap">{item.period}</span>
            </div>
            {Array.isArray(item.highlights) ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {item.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience


