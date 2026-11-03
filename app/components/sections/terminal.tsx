'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

type Line = { cmd: string; output: string[] }

const script: Line[] = [
  { cmd: 'whoami', output: ['Asad Naeem — SEO Specialist & Digital Marketer'] },
  {
    cmd: 'seo audit --scope full',
    output: [
      '✓ crawlability ........ checked',
      '✓ indexation .......... checked',
      '✓ core web vitals ..... checked',
      '✓ structured data ..... checked',
    ],
  },
  {
    cmd: 'cat focus.txt',
    output: ['technical seo · content strategy · analytics · growth'],
  },
]

export function Terminal() {
  const reduce = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (reduce) {
      setLineIndex(script.length)
      return
    }
    if (lineIndex >= script.length) return
    const { cmd } = script[lineIndex]

    if (typed.length < cmd.length) {
      const t = setTimeout(() => setTyped(cmd.slice(0, typed.length + 1)), 55)
      return () => clearTimeout(t)
    }
    if (!showOutput) {
      const t = setTimeout(() => setShowOutput(true), 250)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1)
      setTyped('')
      setShowOutput(false)
    }, 700)
    return () => clearTimeout(t)
  }, [lineIndex, typed, showOutput, reduce])

  const done = script.slice(0, lineIndex)
  const active = lineIndex < script.length ? script[lineIndex] : null

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/90 shadow-[0_0_80px_-20px_rgb(61_255_143_/_0.25)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <p className="ml-3 font-mono text-xs text-muted">asad@portfolio: ~</p>
      </div>
      <div
        className="min-h-[300px] p-5 font-mono text-[13px] leading-relaxed md:text-sm"
        role="log"
        aria-label="Terminal introduction"
      >
        {done.map((line) => (
          <TerminalLine key={line.cmd} cmd={line.cmd} output={line.output} />
        ))}
        {active && (
          <div>
            <p className="text-foreground">
              <span className="text-accent">❯</span> {typed}
              {!showOutput && (
                <span
                  className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent"
                  aria-hidden="true"
                />
              )}
            </p>
            {showOutput && <Output lines={active.output} />}
          </div>
        )}
        {!active && (
          <p className="text-foreground">
            <span className="text-accent">❯</span>{' '}
            <span
              className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent"
              aria-hidden="true"
            />
          </p>
        )}
      </div>
    </div>
  )
}

function TerminalLine({ cmd, output }: Line) {
  return (
    <div className="mb-3">
      <p className="text-foreground">
        <span className="text-accent">❯</span> {cmd}
      </p>
      <Output lines={output} />
    </div>
  )
}

function Output({ lines }: { lines: string[] }) {
  return (
    <div className="mt-1 text-muted">
      {lines.map((l) => (
        <p key={l} className={l.startsWith('✓') ? 'text-accent/90' : undefined}>
          {l}
        </p>
      ))}
    </div>
  )
}
