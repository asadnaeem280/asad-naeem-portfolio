import { skillGroups } from 'app/data/portfolio'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      title="Technical SEO skills"
      description="The toolkit I use to diagnose, optimize and measure search performance."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <article className="group h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
              <p className="font-mono text-xs text-muted">
                <span className="text-accent">$</span> seo {group.command}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-colors group-hover:border-accent/20"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
