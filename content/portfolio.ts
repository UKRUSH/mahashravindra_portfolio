/**
 * Single source of truth for all public portfolio copy.
 * Content follows docs/portfolio-brief.md §1–§2. Career and project
 * statements come from the owner's profile documents and are not
 * independently verified; do not add claims that are not in the brief.
 */

import type { IconName } from "@/components/Icon";

export type ProjectCategory = "AI & Enterprise" | "Engagement" | "Partnership" | "Sustainable Venture";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Source-reported stage, shown as a text badge. */
  stage: string;
  summary: string;
  /** Longer focus statement for the detail page, limited to supplied information. */
  focus: string;
  /** What the source documents say about Mahesh's role, if anything. */
  involvement: string | null;
  /** Related AI products or capabilities; not a claim that integrations are deployed. */
  capabilities: string[];
  /** Which supplied document the record comes from. */
  source: "Full profile" | "Short biography";
  featured: boolean;
  icon: IconName;
};

export const profile = {
  name: "Mahesh Ravindra",
  initials: "MR",
  role: "Founder & CEO",
  company: "BIZmaster Solutions",
  title: "Founder & CEO, BIZmaster Solutions",
  positioning: ["Strategic Business Architect", "AI Technology Leader", "Corporate Growth Specialist"],
  location: "Colombo, Sri Lanka",
  nationality: "Sri Lankan",
  languages: ["English", "Sinhala"],
  email: "mahesh.rajasinha22@gmail.com",
  companyUrl: "https://bizmastersolutions.lk/",
  companyUrlLabel: "bizmastersolutions.lk",
  phones: [
    { label: "+94 777 960 231", href: "tel:+94777960231", kind: "Primary" },
    { label: "+94 77 960 1192", href: "tel:+94779601192", kind: "Secondary" },
  ],
  // Hidden until the owner supplies real values (brief §1.3, §6).
  linkedinUrl: null as string | null,
  // Confirmed by the owner as WhatsApp-enabled (9 October 2026).
  whatsappNumber: "+94 777 960 231" as string | null,
  portrait: null as string | null,
  profilePdf: null as string | null,
  speakerSheet: null as string | null,
  companyLogo: null as { src: string; width: number; height: number } | null,
  heroEyebrow: "Founder & CEO · BIZmaster Solutions",
  heroHeadline: "Business strategy. AI execution. Sustainable growth.",
  heroSummary:
    "I connect corporate experience, business architecture, and AI automation to help SMEs, startups, and established organisations move from ideas to execution.",
  heroMeta: "Colombo, Sri Lanka · English & Sinhala",
  portraitCaption: "Strategic Business Architect · AI Technology Leader",
  industryFocus: "AI technology, business automation, enterprise software, SME growth",
  coreExpertise: "AI strategy, business architecture, sales and marketing, corporate management",
  references: "Professional references available on request",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Speaking", href: "/#speaking" },
  { label: "Contact", href: "/#contact" },
] as const;

export const bio = {
  /** Brief §2.2 — About section and media kit. */
  long: [
    "Mahesh Ravindra is a strategic business architect, AI technology leader, and corporate growth specialist with more than 18 years of experience in sales, marketing, and corporate management. His work connects business strategy with practical execution, team development, and technology adoption.",
    "As Founder and CEO of BIZmaster Solutions, he has developed a six-pillar business ecosystem bringing together technology, branding, growth strategy, business support, investment, and education. The ecosystem helps entrepreneurs and organisations develop ideas into structured, scalable ventures by coordinating capital, talent, operations, and market access.",
    "His current focus includes an AI Workforce Platform, agentic AI for enterprise and ERP workflows, AI-to-AI communication, and business automation for SMEs, startups, and corporate organisations. His profile also describes an EV-focused cafe concept and Green Miracle Engineering, a green-energy and multibrand EV repair hub.",
    "Mahesh holds an MBA from Cardiff Metropolitan University in the UK and is a Certified Professional Marketer through the Asia Marketing Federation. His profile also lists CIM UK and Financial Management qualifications from the University of Kelaniya. His recognition includes SLIM national awards, international awards, and more than 15 years of continuous corporate awards in sales and marketing management.",
    "His mission is to help position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses that create shared value for investors, entrepreneurs, and the nation.",
  ],
  /** Brief §2.3 — media and founder introductions. */
  short:
    "Mahesh Ravindra is the Founder and CEO of BIZmaster Solutions and a strategic business architect with more than 18 years of experience in sales, marketing, and corporate management. He combines AI adoption, business architecture, and strategy execution to support SMEs, startups, and corporate organisations. He holds an MBA from Cardiff Metropolitan University and is a Certified Professional Marketer through the Asia Marketing Federation. His work includes a six-pillar business ecosystem, an AI Workforce Platform, and ventures focused on sustainable business growth in Sri Lanka.",
};

/** Brief §2.17 — adapted prose, not presented as a verbatim quotation. */
export const founderStory = {
  title: "Why I built BIZmaster",
  body: "Businesses were losing opportunities through missed calls, missed messages, and missed follow-ups. That experience shaped my focus on AI-powered business automation.",
};

export const credentialsShort = [
  "MBA — Cardiff Metropolitan University",
  "CPM — Asia Marketing Federation",
];

export const stats = [
  { value: "18+", label: "Years of corporate experience" },
  { value: "15+", label: "Years of corporate awards" },
  { value: "6", label: "Business ecosystem pillars" },
  { value: "6", label: "AI product offerings" },
];

export const qualifications = [
  { title: "Master of Business Administration", short: "MBA", institution: "Cardiff Metropolitan University, UK", field: "Strategic Marketing & Leadership" },
  { title: "Certified Professional Marketer", short: "CPM", institution: "Asia Marketing Federation", field: "Advanced Marketing Strategy" },
  { title: "CIM Qualification", short: "CIM", institution: "Chartered Institute of Marketing, UK", field: "Professional Marketing" },
  { title: "Financial Management", short: "FM", institution: "University of Kelaniya, Sri Lanka", field: "Corporate Finance & Management Accounting" },
];

/** Brief §2.1 core expertise and experience, as one introductory line. */
export const expertiseIntro =
  "Core expertise in AI strategy, business architecture, sales and marketing, and corporate management, grounded in more than 18 years of corporate experience.";

export const expertise: { title: string; icon: IconName; items: { area: string; detail: string }[] }[] = [
  {
    title: "AI & Technology",
    icon: "chip",
    items: [
      { area: "AI strategy", detail: "Business AI adoption, agentic AI, AI workforce design" },
      { area: "Agentic solutions", detail: "AI agents for sales, service, back-office operations, and ERP" },
      { area: "AI-to-AI communication", detail: "B2B agent interoperability and autonomous business networks" },
      { area: "ERP and enterprise systems", detail: "AI-integrated ERP and touchless ERP automation" },
      { area: "Digital transformation", detail: "Legacy modernisation and cloud adoption, including AWS" },
    ],
  },
  {
    title: "Business & Strategy",
    icon: "compass",
    items: [
      { area: "Business architecture", detail: "Venture structuring, revenue modelling, and scaling strategies" },
      { area: "Strategy execution", detail: "Turning ideas and plans into implementation" },
      { area: "Corporate management", detail: "P&L responsibility, team leadership, and stakeholder management" },
      { area: "Financial oversight", detail: "Budgeting, investor relations, and ROI analysis" },
      { area: "Team development", detail: "Recruiting, training, and mentoring high-performance teams" },
    ],
  },
  {
    title: "Sales & Marketing",
    icon: "trend",
    items: [
      { area: "Sales strategy", detail: "B2B and B2C strategy, pipeline management, and closing" },
      { area: "Marketing strategy", detail: "Brand building, digital marketing, and lead generation" },
      { area: "Customer experience", detail: "CRM, retention, loyalty, and churn reduction" },
      { area: "Partnership development", detail: "Channel partnerships, strategic alliances, and joint ventures" },
    ],
  },
];

export const experience = [
  {
    title: "Founder & CEO",
    organisation: "BIZmaster Solutions",
    dates: "July 2023 – Present",
    location: "Colombo, Sri Lanka",
    summary:
      "Leading a six-pillar business ecosystem focused on AI-powered automation, business growth, and execution. Current responsibilities include development of the Tech Hub's AI Workforce Platform and agentic solutions for enterprise systems.",
    highlightsLabel: "Milestones",
    highlights: [
      "Built an AI Workforce Platform with six product entry points",
      "Selected for an AI Expo described as government-organised and Mobitel-sponsored",
      "Onboarding government-sector and corporate clients",
      "Developing agentic AI solutions for ERP and enterprise systems",
    ],
    note: null as string | null,
  },
  {
    title: "Senior Corporate Roles",
    organisation: "Multiple leading companies",
    dates: "2005 – 2023",
    location: "Colombo, Sri Lanka",
    summary:
      "More than 18 years of experience in sales, marketing, and corporate management across leading Sri Lankan and multinational corporations.",
    highlightsLabel: "Responsibilities",
    highlights: [
      "Led teams of more than 50 professionals",
      "Held P&L responsibility for business units",
      "Consistently exceeded sales targets",
      "Implemented strategic initiatives across multiple industries",
      "Received corporate, SLIM national, and international recognition in sales and marketing management",
    ],
    note: "Full corporate history available on request.",
  },
];

export const ecosystem = {
  intro:
    "BIZmaster Solutions brings technology, branding, strategy, business support, investment, and education into one coordinated approach to venture development and growth.",
  positioning: "AI workforce for repetitive work. Humans handle exceptions, relationships, and approvals.",
};

export const pillars: { title: string; scope: string; icon: IconName }[] = [
  { title: "BIZ Tech Hub", scope: "AI, ERP, software, web and mobile apps, cloud, and e-commerce", icon: "chip" },
  { title: "BIZ Creative Forge", scope: "Branding, digital marketing, social media, and graphic design", icon: "palette" },
  { title: "BIZ Strategic Growth", scope: "Sales and marketing strategy, execution, and government liaison", icon: "trend" },
  { title: "BIZ Advisor", scope: "Legal, accounting, tax, HR, compliance, and asset management", icon: "shield" },
  { title: "BIZ Investor & Venture Hub", scope: "Investor matchmaking, venture management, and ROI oversight", icon: "handshake" },
  { title: "BIZ Academy & Forum", scope: "Training, networking, business education, and events", icon: "academy" },
];

export const productsIntro =
  "The product portfolio focuses on repetitive calls, messages, follow-ups, administrative tasks, and enterprise workflows, with people handling exceptions, relationships, and approvals.";

/**
 * Brief §2.10 positioning and §5.9 intro, split into the two sides of the
 * handoff: repetitive work for the AI workforce, judgement work for people.
 */
export const productsHandoff = {
  ai: ["Repetitive calls", "Messages", "Follow-ups", "Administrative tasks", "Enterprise workflows"],
  people: ["Exceptions", "Relationships", "Approvals"],
};

export const productsCta = {
  title: "Not sure which solution fits?",
  body: "Share the calls, messages, or workflows you would like to automate, and Mahesh can talk through the options.",
  message: "Hello Mahesh, I would like to discuss automating some of my business workflows.",
};

export const products: { title: string; description: string; stage: string | null; icon: IconName }[] = [
  { title: "AI Sales Agent", description: "Supports sales conversations, qualification, follow-up, and meeting booking.", stage: null, icon: "target" },
  { title: "AI Call Operator", description: "Handles incoming calls, routing, bookings, and escalation.", stage: null, icon: "phone" },
  { title: "WhatsApp Commerce AI", description: "Supports WhatsApp commerce, order capture, customer replies, and customer management.", stage: null, icon: "chat" },
  { title: "Touchless ERP Bot Suite", description: "Helps automate repetitive back-office tasks inside ERP workflows, across finance, HR, procurement, and inventory.", stage: null, icon: "layers" },
  { title: "AI Personal Assistant", description: "Supports administrative work, email, calls, back-office tasks, and research.", stage: null, icon: "assistant" },
  { title: "AI-to-AI Communication Hub", description: "Explores interoperable business-to-business communication between AI agents.", stage: "In Development", icon: "network" },
];

export const projectCategories: ProjectCategory[] = ["AI & Enterprise", "Engagement", "Partnership", "Sustainable Venture"];

export const projects: Project[] = [
  {
    slug: "ai-workforce-platform",
    title: "AI Workforce Platform",
    category: "AI & Enterprise",
    stage: "Active Deployment",
    summary: "A business automation platform with six AI product offerings for SMEs, startups, and corporate organisations.",
    focus: "Business automation for SMEs, startups, and corporate organisations, delivered through six AI product offerings within BIZmaster's Tech Hub.",
    involvement: "Led by Mahesh as Founder & CEO of BIZmaster Solutions.",
    capabilities: ["AI Sales Agent", "AI Call Operator", "WhatsApp Commerce AI", "Touchless ERP Bot Suite", "AI Personal Assistant", "AI-to-AI Communication Hub"],
    source: "Full profile",
    featured: true,
    icon: "layers",
  },
  {
    slug: "agentic-erp-solutions",
    title: "Agentic ERP Solutions",
    category: "AI & Enterprise",
    stage: "In Progress with Clients",
    summary: "AI agents for enterprise and ERP workflows, including repetitive back-office processes.",
    focus: "AI agents for ERP and enterprise systems, focused on repetitive back-office processes such as finance, HR, procurement, and inventory.",
    involvement: "Part of the agentic AI development Mahesh leads at BIZmaster Solutions.",
    capabilities: ["Touchless ERP Bot Suite", "Agentic AI", "AI-integrated ERP"],
    source: "Full profile",
    featured: true,
    icon: "chip",
  },
  {
    slug: "ai-to-ai-communication-hub",
    title: "AI-to-AI Communication Hub",
    category: "AI & Enterprise",
    stage: "In Development",
    summary: "Development focused on business-to-business agent interoperability.",
    focus: "Research and development into business-to-business agent interoperability, where one company's AI agents communicate with another company's agents.",
    involvement: null,
    capabilities: ["AI-to-AI communication", "B2B agent interoperability"],
    source: "Full profile",
    featured: true,
    icon: "network",
  },
  {
    slug: "government-sector-ai",
    title: "Government Sector AI Projects",
    category: "Engagement",
    stage: "In Progress",
    summary: "AI automation work in the public sector. Client details are not published.",
    focus: "AI automation for public-sector work.",
    involvement: null,
    capabilities: ["Business automation", "Agentic AI"],
    source: "Full profile",
    featured: false,
    icon: "building",
  },
  {
    slug: "corporate-ai-projects",
    title: "Corporate-Level Projects",
    category: "Engagement",
    stage: "In Progress",
    summary: "AI work with leading private companies. Client names and outcomes are not published.",
    focus: "AI projects with leading private-sector companies.",
    involvement: null,
    capabilities: ["Business automation", "AI-integrated ERP"],
    source: "Full profile",
    featured: false,
    icon: "briefcase",
  },
  {
    slug: "sme-startup-onboarding",
    title: "SME & Startup AI Onboarding",
    category: "Engagement",
    stage: "Active",
    summary: "Supporting SMEs and startups as they adopt AI automation.",
    focus: "Helping SMEs and startups adopt AI automation in their day-to-day operations.",
    involvement: null,
    capabilities: ["AI Sales Agent", "AI Call Operator", "WhatsApp Commerce AI", "AI Personal Assistant"],
    source: "Full profile",
    featured: false,
    icon: "rocket",
  },
  {
    slug: "agent-dilu-partnership",
    title: "Agent Dilu Partnership",
    category: "Partnership",
    stage: "Partnership Reported",
    summary: "A WhatsApp AI automation partnership.",
    focus: "A partnership focused on WhatsApp AI automation.",
    involvement: null,
    capabilities: ["WhatsApp Commerce AI"],
    source: "Full profile",
    featured: false,
    icon: "handshake",
  },
  {
    slug: "ev-cafe-concept",
    title: "EV-Focused Cafe Concept",
    category: "Sustainable Venture",
    stage: "Concept in Development",
    summary: "A sustainable cafe venture concept centred on electric vehicles.",
    focus: "A sustainable venture concept centred on electric vehicles, currently being developed.",
    involvement: "Described as one of the ventures Mahesh is developing.",
    capabilities: [],
    source: "Short biography",
    featured: false,
    icon: "cup",
  },
  {
    slug: "green-miracle-engineering",
    title: "Green Miracle Engineering",
    category: "Sustainable Venture",
    stage: "In Development",
    summary: "A green-energy and multibrand EV repair hub.",
    focus: "A green-energy and multibrand electric-vehicle repair hub, currently being developed.",
    involvement: "Described as one of the ventures Mahesh is developing.",
    capabilities: [],
    source: "Short biography",
    featured: true,
    icon: "leaf",
  },
];

/**
 * Brief §2.9: the three principal categories, ordered by widening scope
 * (matching the section title). No award names, years, or certificates.
 */
export const recognition: { title: string; scope: string; level: string; detail: string; icon: IconName }[] = [
  { title: "15+ Years of Corporate Awards", scope: "Corporate", level: "Corporate", detail: "Continuous corporate awards for more than 15 years in sales and marketing management.", icon: "trophy" },
  { title: "SLIM National Recognition", scope: "National", level: "National · Sri Lanka", detail: "Recognised at SLIM national level for sales and marketing management.", icon: "award" },
  { title: "International Recognition", scope: "International", level: "International", detail: "International-level recognition in sales and marketing management.", icon: "globe" },
];

export const recognitionNote =
  "Recognition described in Mahesh's professional profile; detailed award history is available on request.";

export const purpose = {
  vision:
    "To position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses, powered by AI, that create shared value for investors, entrepreneurs, and the nation.",
  mission:
    "To empower businesses at every stage—SME, startup, and corporate—with AI-powered automation, strategic execution, and comprehensive management, supporting continuous growth and market leadership.",
  values: [
    { title: "Collaboration", detail: "Partnering for mutual success" },
    { title: "Innovation", detail: "Using technology to build scalable solutions" },
    { title: "Integrity", detail: "Transparent, ethical, client-centred operations" },
  ],
};

/** Brief §2.14 — phrased without guarantees or invented endorsements. */
export const differentiators = [
  "Corporate experience across sales, marketing, and management",
  "National, international, and continuous corporate recognition",
  "Venture architecture covering funding, operations, talent, scaling, and exit planning",
  "A practical focus on task completion and measurable outcomes",
  "Creative thinking combined with strategy execution",
  "Leadership in agentic AI, ERP automation, and AI-to-AI communication",
  "Partnership development, deal structuring, and capital coordination",
  "Multilingual AI capability across English, Sinhala, and Tamil",
];

export const speakingIntro = "Available for keynotes, panels, workshops, corporate training, interviews, and podcasts.";

export const speakingFormats: { title: string; focus: string; icon: IconName }[] = [
  { title: "Keynote speaking", focus: "AI for business, digital transformation, SME growth", icon: "mic" },
  { title: "Panel discussions", focus: "AI adoption, business automation, the future of work", icon: "users" },
  { title: "Workshops", focus: "AI strategy, agentic AI, ERP integration", icon: "compass" },
  { title: "Corporate training", focus: "Sales excellence, marketing strategy, leadership", icon: "academy" },
  { title: "Media interviews", focus: "AI trends and the Sri Lankan business landscape", icon: "chat" },
  { title: "Podcast appearances", focus: "Entrepreneurship, AI, business growth", icon: "headphones" },
];

export const speakingTopics = [
  "AI Is Not the Future of Business — It Is the Present",
  "Why SMEs and Startups Are Moving Faster Than Corporates in AI",
  "Agentic AI: The Next Evolution of Business Automation",
  "AI-to-AI Communication: Business at the Speed of Thought",
  "From Corporate Leader to Founder: Lessons Learned",
];

export const speakingCta = {
  title: "Planning an event?",
  body: "Send the date, audience, and preferred format on WhatsApp, or review the media kit first.",
};

/** Brief §11.2 enquiry types, used as one-tap email subjects in Contact. */
export const enquiryTypes = ["Business Project", "AI Solution", "Partnership", "Investment Discussion", "Speaking", "General Enquiry"];

export const contact = {
  heading: "Let's discuss what your business needs next",
  body: "For business projects, AI adoption, partnerships, investment discussions, or speaking enquiries, contact Mahesh directly.",
};

export function emailFor(subject: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
}

/** WhatsApp chat link, optionally with a prefilled message; null while no number is set. */
export function whatsappFor(message?: string) {
  if (!profile.whatsappNumber) return null;
  const chat = `https://wa.me/${profile.whatsappNumber.replace(/\D/g, "")}`;
  return message ? `${chat}?text=${encodeURIComponent(message)}` : chat;
}

export const speakingInviteMessage = "Hello Mahesh, I would like to invite you to speak at an event.";

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
