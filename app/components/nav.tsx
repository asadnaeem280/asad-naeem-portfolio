'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks, profile } from 'app/data/portfolio'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent" aria-hidden="true">
            {'>'}
          </span>
          <span>asad.naeem</span>
          <span
            className="h-4 w-2 animate-blink bg-accent"
            aria-hidden="true"
          />
          <span className="sr-only">{profile.name} — home</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 font-mono text-[13px] text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent/60">0{i + 1}.</span> {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/#contact"
              className="rounded-md border border-accent/60 px-4 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent/10"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="relative flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {[...navLinks, { href: '/#contact', label: 'Contact' }].map(
                (link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md px-2 py-3 font-mono text-base text-foreground transition-colors hover:text-accent"
                    >
                      <span className="text-sm text-accent/70">0{i + 1}.</span>
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
