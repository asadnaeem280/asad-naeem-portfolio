import { profile } from 'app/data/portfolio'
import { Reveal } from '../reveal'

export function Contact() {
  const hasEmail = !profile.email.startsWith('[')

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]"
            aria-hidden="true"
          />
          <p className="relative font-mono text-sm text-accent">06. ~/contact</p>
          <h2
            id="contact-title"
            className="relative mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
          >
            {"Let's grow your organic presence"}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted">
            {"Whether you need a technical SEO audit, a content strategy or a long-term search partner, I'd be glad to hear about your project."}
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={hasEmail ? `mailto:${profile.email}` : '#contact'}
              className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-background transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgb(61_255_143_/_0.6)]"
            >
              Say hello
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Download résumé
            </a>
          </div>
          <p className="relative mt-8 font-mono text-xs text-muted">
            <span className="text-accent">email:</span> {profile.email}
          </p>
          <ul className="relative mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
