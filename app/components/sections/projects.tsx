import { caseStudies } from 'app/data/portfolio'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Projects() {
  return (
    <Section
      id="work"
      index="04"
      title="Case studies"
      description="Selected SEO projects — the challenge, the approach and the outcome."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <Reveal key={`${cs.title}-${i}`} delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-30px_rgb(61_255_143_/_0.5)]">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent">{cs.category}</span>
                <span className="text-muted">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {cs.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{cs.client}</p>

              <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                    Challenge
                  </h4>
                  <p className="mt-1 text-muted">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                    Approach
                  </h4>
                  <ul className="mt-1 flex flex-col gap-1 text-muted">
                    {cs.approach.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-accent" aria-hidden="true">▹</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                    Outcome
                  </h4>
                  <p className="mt-1 text-muted">{cs.outcome}</p>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="bg-surface-2 p-3">
                    <dt className="font-mono text-[11px] text-muted">{m.label}</dt>
                    <dd className="mt-1 text-lg font-semibold text-accent">{m.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tags">
                {cs.tags.map((t) => (
                  <li key={t} className="font-mono text-xs text-muted">
                    #{t}
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
