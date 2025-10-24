import Card, { CardTitle, CardDescription } from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import SectionHeader from '@/components/ui/SectionHeader.jsx'
import Button from '@/components/ui/Button.jsx'
import { projects } from '@/data/projects.js'

function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <SectionHeader title="Projects" subtitle="Selected work and experiments." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardTitle>{p.title}</CardTitle>
            <p className="mt-1 text-xs text-zinc-500">{p.period}</p>
            <CardDescription>{p.summary}</CardDescription>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              {p.frontend ? (
                <Button asChild variant="secondary" size="sm">
                  <a href={p.frontend} target="_blank" rel="noopener noreferrer">Frontend</a>
                </Button>
              ) : null}
              {p.backend ? (
                <Button asChild size="sm">
                  <a href={p.backend} target="_blank" rel="noopener noreferrer">Backend</a>
                </Button>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects


