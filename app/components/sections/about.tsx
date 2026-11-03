import { about, profile } from 'app/data/portfolio'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-5 text-pretty leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-mono text-sm">
            <span className="text-accent">location:</span> {profile.location}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-1">
            {about.highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-1 bg-surface p-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {h.label}
                </dt>
                <dd className="text-3xl font-semibold text-accent">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
