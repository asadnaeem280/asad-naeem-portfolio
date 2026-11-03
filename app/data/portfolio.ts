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
  email: 'asadnaeem280@gmail.com',
  resumeUrl: 'https://www.fiverr.com/asadnaeem961',
  socials: [
    { label: 'LinkedIn', href: 'https://pk.linkedin.com/in/asad-naeem-seo-expert' },
    { label: 'GitHub', href: 'https://github.com/asadnaeem280' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=HKBbx3gAAAAJ' },
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
    role: 'SEO Team Lead',
    company: 'Techsa',
    period: 'Mar 2023 – Present',
    location: 'Pakistan · On-site',
    summary:
      'Leading SEO strategies and organic growth initiatives for businesses across healthcare, eCommerce, local services, and international markets. Specializing in technical SEO, AI-powered search optimization, GEO, and data-driven digital marketing.',
    points: [
      'Lead SEO strategy, planning, and execution across multiple client websites and industries.',
      'Conduct technical SEO audits covering crawlability, indexability, canonicalization, structured data, and Core Web Vitals.',
      'Develop AI SEO and Generative Engine Optimization (GEO) strategies for emerging search experiences.',
      'Manage local SEO, Google Business Profile optimization, and multi-location SEO campaigns.',
      'Oversee eCommerce SEO, keyword research, competitor analysis, content optimization, and internal linking.',
      'Analyze organic performance using Google Search Console, GA4, and technical SEO tools.',
      'Collaborate with development, content, and marketing teams to implement SEO improvements.',
    ],
    tags: [
      'SEO Leadership',
      'AI SEO',
      'GEO',
      'Technical SEO',
      'Local SEO',
      'eCommerce SEO',
      'GSC',
      'GA4',
    ],
  },
  {
    role: 'Search Engine Optimization Specialist',
    company: 'Claws Custom Boxes',
    period: 'Jun 2022 – May 2023',
    location: 'Lahore, Pakistan · On-site · Part-time',
    summary:
      'Worked on SEO for a US-focused custom packaging business, supporting eCommerce optimization, organic search visibility, and keyword-driven content strategies.',
    points: [
      'Conducted keyword research targeting custom packaging products and relevant searches in the US market.',
      'Optimized website content, metadata, headings, and internal linking.',
      'Worked on eCommerce SEO for product and category pages.',
      'Supported website architecture and technical SEO improvements.',
      'Identified search opportunities using competitor research and search intent analysis.',
    ],
    tags: [
      'eCommerce SEO',
      'Technical SEO',
      'On-Page SEO',
      'Keyword Research',
      'USA Market',
    ],
  },
  {
    role: 'Search Engine Optimization Specialist',
    company: 'Telelinks',
    period: 'Oct 2022 – Mar 2023',
    location: 'Lahore, Pakistan · On-site · Contract',
    summary:
      'Provided SEO services for a cleaning and moving business targeting Sweden, focusing on local search visibility, website optimization, and relevant service-related keywords.',
    points: [
      'Conducted keyword research for cleaning and moving services targeting the Swedish market.',
      'Worked on website content, metadata, headings, and internal linking.',
      'Supported local SEO optimization for relevant service areas.',
      'Identified technical SEO issues and website optimization opportunities.',
      'Worked with WordPress and on-page search engine optimization.',
    ],
    tags: [
      'Local SEO',
      'WordPress',
      'Keyword Research',
      'On-Page SEO',
      'Sweden Market',
    ],
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
    title: 'UniVapez — eCommerce SEO Growth',
    client: 'UniVapez | United Kingdom | Apr–Dec 2023',
    category: 'eCommerce SEO',
    challenge:
      'Improve the organic visibility, website structure, and customer reach of a UK-based online retail business in a competitive search environment.',
    approach: [
      'Conducted keyword research and competitor analysis.',
      'Optimized website content, metadata, and on-page SEO elements.',
      'Improved site structure and internal linking.',
      'Supported authority-building and off-page SEO activities.',
      'Monitored organic traffic and search performance.',
    ],
    outcome:
      'Reported a 50% increase in organic traffic and a 35% increase in sales within six months, as documented in my LinkedIn project summary.',
    metrics: [
      { label: 'Organic traffic growth', value: '+50%' },
      { label: 'Reported sales growth', value: '+35%' },
    ],
    tags: [
      'eCommerce SEO',
      'On-Page SEO',
      'Keyword Research',
      'UK Market',
    ],
  },
  {
    title: 'Mission Refill — Organic Search Optimization',
    client: 'Mission Refill | May 2024–Present',
    category: 'eCommerce SEO',
    challenge:
      'Strengthen organic search visibility, improve website optimization, and attract relevant customers through a structured SEO strategy.',
    approach: [
      'Conducted keyword research and search intent analysis.',
      'Implemented on-page SEO and content optimization.',
      'Reviewed technical SEO and website architecture.',
      'Supported internal linking and relevant keyword targeting.',
      'Monitored organic performance and optimization opportunities.',
    ],
    outcome:
      'Managed an ongoing SEO strategy covering keyword research, on-page improvements, technical optimization, and link-building activities.',
    metrics: [
      { label: 'Project started', value: 'May 2024' },
      { label: 'Project status', value: 'Ongoing' },
    ],
    tags: [
      'eCommerce SEO',
      'Technical SEO',
      'Content Optimization',
      'Keyword Research',
    ],
  },
  {
    title: 'Bin Blasters — Local SEO Strategy',
    client: 'Bin Blasters | May 2024–Present',
    category: 'Local SEO',
    challenge:
      'Improve the online visibility of a professional garbage bin cleaning service and attract relevant local search traffic and customer inquiries.',
    approach: [
      'Performed keyword research for local cleaning services.',
      'Optimized website content, metadata, and on-page elements.',
      'Developed SEO-focused content and internal linking strategies.',
      'Supported link-building and search visibility initiatives.',
      'Tracked SEO performance and identified improvement opportunities.',
    ],
    outcome:
      'Led an ongoing SEO project focused on strengthening local search visibility, organic traffic acquisition, and conversion opportunities.',
    metrics: [
      { label: 'Project started', value: 'May 2024' },
      { label: 'Project status', value: 'Ongoing' },
    ],
    tags: [
      'Local SEO',
      'Technical SEO',
      'On-Page SEO',
      'Content Strategy',
    ],
  },
];

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
    title: 'Why is my Google Business Profile not ranking in Maps?',
    venue: 'LinkedIn · Local SEO & Google Business Profile',
    year: '2026',
    authors: 'Asad Naeem',
    abstract:
      'A practical guide exploring why businesses struggle to rank in Google Maps, covering Google Business Profile optimization, customer reviews, local SEO, website optimization, citations, and strategies for improving local search visibility.',
    href: 'https://www.linkedin.com/pulse/why-my-google-business-profile-ranking-maps-asad-naeem-zmbuf/',
  },
  {
    title: 'SEO Is Dead… Again?',
    venue: 'LinkedIn · SEO & Digital Marketing',
    year: '2025',
    authors: 'Asad Naeem',
    abstract:
      'An exploration of how SEO continues to evolve alongside artificial intelligence, changing search behavior, and emerging digital marketing technologies.',
    href: 'https://www.linkedin.com/posts/asad-naeem-seo-expert_seo-digitalmarketing-searchengineoptimization-activity-7368850087118135296-gUdQ',
  },
];

export const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#work', label: 'Work' },
  { href: '/#research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
]
