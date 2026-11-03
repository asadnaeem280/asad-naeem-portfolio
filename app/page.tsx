import { profile } from './data/portfolio'
import { baseUrl } from './sitemap'
import { Hero } from './components/sections/hero'
import { About } from './components/sections/about'
import { Experience } from './components/sections/experience'
import { Skills } from './components/sections/skills'
import { Projects } from './components/sections/projects'
import { Publications } from './components/sections/publications'
import { Contact } from './components/sections/contact'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  url: baseUrl,
  knowsAbout: [
    'Search Engine Optimization',
    'Technical SEO',
    'Content Strategy',
    'Digital Marketing',
    'Web Analytics',
  ],
  sameAs: profile.socials.map((s) => s.href).filter((h) => h.startsWith('http')),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </>
  )
}
