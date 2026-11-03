import { publications } from 'app/data/portfolio'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Publications() {
  return (
    <Section
      id="research"
      index="05"
      title="Research publications"
      description="Academic and industry research on search, marketing and digital behavior."
    >
      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {publications.map((pub, i) => (
          <li key={`${pub.title}-${i}`}>
            <Reveal delay={i * 0.05}>
              <article className="group grid gap-3 py-7 md:grid-cols-[120px_1fr_auto] md:gap-8">
                <p className="font-mono text-sm text-accent">{pub.year}</p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {pub.href ? (
                      <a href={pub.href} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {pub.authors} · <em className="not-italic text-foreground/70">{pub.venue}</em>
                  </p>
                  <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted">
                    {pub.abstract}
                  </p>
                </div>
                {pub.href && (
                  <span
                    className="hidden self-start font-mono text-xs text-muted transition-colors group-hover:text-accent md:block"
                    aria-hidden="true"
                  >
                    read ↗
                  </span>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
