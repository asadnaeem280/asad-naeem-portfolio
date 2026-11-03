import Link from 'next/link'
import { profile } from 'app/data/portfolio'
import { Reveal } from '../reveal'
import { Terminal } from './terminal'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 md:pt-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-mono text-sm text-muted">Hi, my name is</p>
            <h1
              id="hero-title"
              className="mt-2 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-balance text-2xl font-medium tracking-tight text-muted sm:text-3xl">
              {profile.role}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#work"
                className="rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-background transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgb(61_255_143_/_0.6)]"
              >
                View case studies
              </Link>
              <Link
                href="/#contact"
                className="rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.25} y={32}>
          <Terminal />
        </Reveal>
      </div>
    </section>
  )
}
