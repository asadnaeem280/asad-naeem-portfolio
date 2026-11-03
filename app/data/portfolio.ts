// Central, editable content for the portfolio.
// Values wrapped in [square brackets] are placeholders — replace them with real details.

export const profile = {
  name: 'Asad Naeem',
  role: 'AI SEO Specialist & Digital Marketing Strategist',
  shortRole: 'AI SEO Specialist',
  tagline:
    'I help local businesses, eCommerce brands and companies across industries improve search visibility, adapt to AI-driven search and achieve sustainable organic growth.',
  location: 'Lahore, Pakistan',
  availability: 'Open to new projects & collaborations',
  email: '[your.email@example.com]',
  resumeUrl: '#',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: 'https://github.com/asadnaeem280' },
    { label: 'Google Scholar', href: '#' },
  ],
}

export const about = {
  paragraphs: [
    'With over 7 years of experience, I specialize in AI-powered SEO, Generative Engine Optimization (GEO), and data-driven digital strategies.',
    'I help local businesses, eCommerce brands, and companies across multiple industries improve search visibility, adapt to AI-driven search, and achieve sustainable organic growth.',
    'My expertise includes Technical SEO, AI Search Optimization, Local SEO, eCommerce SEO, Google Business Profile optimization, content strategy, and performance analytics. I combine technical expertise with emerging AI search technologies to develop scalable SEO strategies that deliver measurable business growth.',
  ],
  highlights: [
    { label: 'Years of experience', value: '7+' },
    { label: 'Projects delivered', value: '100+' },
    { label: 'Industries served', value: '10+' },
  ],
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  points: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'SEO Specialist',
    company: '[Company Name]',
    period: '[Start] — Present',
    location: '[Remote / City]',
    summary: '[Describe your current role and the scope of your responsibilities.]',
    points: [
      'Plan and execute technical SEO audits covering crawlability, indexation and Core Web Vitals.',
      'Build keyword and topic-cluster strategies aligned with search intent.',
      '[Add a responsibility or verified achievement.]',
    ],
    tags: ['Technical SEO', 'Content Strategy', 'GA4'],
  },
  {
    role: 'Digital Marketing Executive',
    company: '[Company Name]',
    period: '[Start] — [End]',
    location: '[Remote / City]',
    summary: '[Describe this role and the channels you managed.]',
    points: [
      'Managed on-page optimization, metadata and internal linking across key landing pages.',
      'Reported on organic performance using Google Search Console and analytics dashboards.',
      '[Add a responsibility or verified achievement.]',
    ],
    tags: ['On-Page SEO', 'Search Console', 'Reporting'],
  },
  {
    role: '[Earlier Role]',
    company: '[Company / Freelance]',
    period: '[Start] — [End]',
    location: '[Remote / City]',
    summary: '[Describe how you started in SEO and digital marketing.]',
    points: ['[Add a responsibility or verified achievement.]'],
    tags: ['Keyword Research', 'Link Building'],
  },
]

export const skillGroups = [
  {
    title: 'Technical SEO',
    command: 'crawl',
    skills: [
      'Site audits',
      'Crawl budget',
      'Indexation control',
      'XML sitemaps & robots.txt',
      'Canonicalization',
      'Core Web Vitals',
      'JavaScript SEO',
      'Structured data',
    ],
  },
  {
    title: 'On-Page & Content',
    command: 'optimize',
    skills: [
      'Keyword research',
      'Search intent mapping',
      'Topic clusters',
      'Content briefs',
      'Internal linking',
      'Metadata optimization',
      'E-E-A-T signals',
    ],
  },
  {
    title: 'Off-Page & Local',
    command: 'authority',
    skills: [
      'Link building strategy',
      'Digital PR',
      'Backlink audits',
      'Google Business Profile',
      'Local citations',
    ],
  },
  {
    title: 'Analytics & Tools',
    command: 'measure',
    skills: [
      'Google Search Console',
      'Google Analytics 4',
      'Looker Studio',
      'Screaming Frog',
      'Ahrefs',
      'Semrush',
      'Google Tag Manager',
    ],
  },
]

export type CaseStudy = {
  title: string
  client: string
  category: string
  challenge: string
  approach: string[]
  outcome: string
  metrics: { label: string; value: string }[]
  tags: string[]
  href?: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: '[Technical SEO Overhaul]',
    client: '[Client or Industry]',
    category: 'Technical SEO',
    challenge: '[Describe the problem — e.g. indexation issues, slow pages, migration risk.]',
    approach: [
      'Full crawl and log-based technical audit',
      'Prioritized fix roadmap with dev team',
      'Structured data and Core Web Vitals improvements',
    ],
    outcome: '[Summarize the verified outcome of the project.]',
    metrics: [
      { label: 'Organic traffic', value: '[+X%]' },
      { label: 'Indexed pages', value: '[X]' },
    ],
    tags: ['Audit', 'Schema', 'CWV'],
  },
  {
    title: '[Content & Topic Cluster Strategy]',
    client: '[Client or Industry]',
    category: 'Content SEO',
    challenge: '[Describe the content gap or ranking challenge.]',
    approach: [
      'Keyword and SERP intent analysis',
      'Pillar and cluster content architecture',
      'Internal linking and on-page optimization',
    ],
    outcome: '[Summarize the verified outcome of the project.]',
    metrics: [
      { label: 'Keywords in top 10', value: '[X]' },
      { label: 'Engagement', value: '[+X%]' },
    ],
    tags: ['Content', 'Keywords', 'Internal links'],
  },
  {
    title: '[Local SEO Growth]',
    client: '[Client or Industry]',
    category: 'Local SEO',
    challenge: '[Describe the local visibility challenge.]',
    approach: [
      'Google Business Profile optimization',
      'Citation cleanup and consistency',
      'Location landing page strategy',
    ],
    outcome: '[Summarize the verified outcome of the project.]',
    metrics: [
      { label: 'Map pack visibility', value: '[+X%]' },
      { label: 'Calls / leads', value: '[X]' },
    ],
    tags: ['GBP', 'Citations', 'Local'],
  },
]

export type Publication = {
  title: string
  venue: string
  year: string
  authors: string
  abstract: string
  href?: string
}

export const publications: Publication[] = [
  {
    title: '[Publication Title]',
    venue: '[Journal / Conference Name]',
    year: '[Year]',
    authors: 'Asad Naeem, [Co-authors]',
    abstract: '[Add a one or two sentence summary of the research and its contribution.]',
    href: '#',
  },
  {
    title: '[Publication Title]',
    venue: '[Journal / Conference Name]',
    year: '[Year]',
    authors: 'Asad Naeem, [Co-authors]',
    abstract: '[Add a one or two sentence summary of the research and its contribution.]',
    href: '#',
  },
]

export const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#work', label: 'Work' },
  { href: '/#research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
]
