import { experience } from 'app/data/portfolio'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      description="Roles where I've shaped search strategy, technical foundations and organic growth."
    >
      <ol className="relative border-l border-border pl-8 md:ml-4 md:pl-12">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="relative pb-14 last:pb-0">
            <span
              className="absolute -left-[37px] top-1.5 flex size-[10px] items-center justify-center md:-left-[53px]"
              aria-hidden="true"
            >
              <span className="absolute size-5 rounded-full bg-accent/15" />
              <span className="relative size-[10px] rounded-full bg-accent shadow-[0_0_12px_rgb(61_255_143)]" />
            </span>
            <Reveal delay={i * 0.05}>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-semibold text-foreground">
                  {job.role}{' '}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted">
                  {job.period} · {job.location}
                </p>
              </div>
              <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">
                {job.summary}
              </p>
              <ul className="mt-4 flex max-w-3xl flex-col gap-2">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-0.5 font-mono text-accent" aria-hidden="true">
                      ▹
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
                {job.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
