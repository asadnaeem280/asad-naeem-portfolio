import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function Section({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string
  index: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <Reveal className="mb-12 md:mb-16">
        <p className="mb-3 font-mono text-sm text-accent">
          <span aria-hidden="true">{index}.</span> ~/{id}
        </p>
        <div className="flex items-center gap-6">
          <h2
            id={`${id}-title`}
            className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            {title}
          </h2>
          <span
            className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block"
            aria-hidden="true"
          />
        </div>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Reveal>
      {children}
    </section>
  )
}
