import Link from 'next/link'
import { profile } from 'app/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          <span className="text-accent">$</span> echo &quot;&copy;{' '}
          {new Date().getFullYear()} {profile.name}&quot;
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/rss" className="transition-colors hover:text-accent">
              RSS
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
