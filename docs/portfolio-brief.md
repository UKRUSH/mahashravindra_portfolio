# Mahesh Ravindra Portfolio Design and Next.js Build Specification

Prepared from both supplied profile documents. Design reference: [BIZmaster Solutions](https://bizmastersolutions.lk/). Reference HTML and its linked stylesheet were inspected on 8 October 2026.

This file is a complete content and design brief for a personal portfolio, with implementation guidance, reusable CSS, structured content, and Next.js starter examples. It is a specification, not an already built or deployed website. The portfolio should make Mahesh's experience, ventures, AI work, and speaking availability easy to understand and provide a direct way to contact him.

## Contents

1. Project purpose and source decisions
2. Complete portfolio content
3. Pages and navigation
4. Visual direction and verified colours
5. Section designs and website copy
6. Assets and content preparation
7. Next.js architecture and setup
8. Structured content model
9. Complete CSS foundation
10. Next.js integration examples
11. Interactions and contact behaviour
12. SEO and structured data
13. Accessibility and performance
14. Testing and completion checklist
15. Build prompt
16. References and source archive

## 1. Project purpose and source decisions

### 1.1 Purpose

Build a polished personal portfolio for **Mahesh Ravindra**, Founder and CEO of **BIZmaster Solutions**. The intended visitors are business owners, SMEs, startup founders, corporate leaders, potential investors, partners, event organisers, and media professionals.

The primary action is **Discuss a Project**, leading to the contact section. Secondary actions are **Explore My Work**, **Invite Me to Speak**, and **View Company Website**. A visitor should understand Mahesh's role, areas of expertise, current projects, and contact options within the first screen and the following short introduction.

### 1.2 Source hierarchy

| Source | Use |
| --- | --- |
| `Mahesh Ravindra Full Profile(1).docx` | Main source for qualifications, experience, AI products, company pillars, achievements, current engagements, contact information, and speaking topics. |
| `Short Bio Mahesh Ravindra(1).docx` | Source for a concise biography and two additional ventures: an EV-focused cafe concept and Green Miracle Engineering. |
| `https://bizmastersolutions.lk/` | Colour and visual reference; company identity and existing logo location. It is not independent verification of the personal profile's career claims. |

### 1.3 Resolve these differences consistently

| Issue | Evidence | Build decision |
| --- | --- | --- |
| Name spelling | Full-profile heading and personal-details table use **Mahesh Ravindra**. Short bio and full-profile preparation labels use **Mahesh Ravinder**. | Use **Mahesh Ravindra** provisionally throughout the site. Have the owner confirm spelling before launch. Do not publish both as separate identities. |
| Company name | Documents use BIZ Master Solutions; the reference website uses BIZmaster Solutions. | Use **BIZmaster Solutions** in display copy. Keep the source wording in the archive. |
| Experience | Both documents state 18+ years. Corporate period is 2005–2023. | Keep **18+ years of corporate experience** as supplied. Do not automatically increase it based on today's date or invent additional corporate roles. |
| Awards | National, international, and 15+ years of corporate recognition are stated; individual award titles and dates are missing. | Use the broad supplied descriptions. Do not invent trophies, award years, categories, issuing bodies for international awards, or certificates. |
| Platform superlative | Full profile calls the platform Sri Lanka's first comprehensive AI Workforce Platform. | Use **AI Workforce Platform for business automation** in public copy. Keep the original claim in the archive pending evidence. |
| Agent Dilu | A partnership is stated; the source also claims it is first of its kind in Sri Lanka. | Mention the partnership as profile-supplied information. Omit the uniqueness claim until documented. |
| Current projects | Several are in development or in progress; platform is described as active deployment. | Show explicit source-reported status badges. Do not present every item as a completed case study. |
| LinkedIn | Both documents contain `[Insert LinkedIn URL]`. | Set LinkedIn to `null`; hide the link until the real profile URL is available. |
| Portrait and project images | Neither supplied DOCX contains embedded images. | Use a designed initials treatment during development. Replace with an owner-approved photograph; never use a stock person as Mahesh. |
| WhatsApp | Telephone numbers are supplied, but WhatsApp account status is not. | Show telephone and email links immediately. Enable WhatsApp only after the owner identifies a WhatsApp-enabled number. |
| Government and corporate work | Work is described without client names or measurable outcomes. | Use anonymous engagement descriptions. Add named clients, logos, and results only when supplied and approved. |

**Editorial rule:** career and project statements below come from the uploaded documents. They have not been independently verified. Keep this distinction in the build notes, rather than adding repeated disclaimers to visitor-facing sections. The source archive is for implementation reference and must not be rendered as a public page.

## 2. Complete portfolio content

### 2.1 Identity and professional snapshot

| Field | Portfolio value |
| --- | --- |
| Full name | Mahesh Ravindra, provisional canonical spelling |
| Main title | Founder & CEO, BIZmaster Solutions |
| Professional positioning | Strategic Business Architect · AI Technology Leader · Corporate Growth Specialist |
| Location | Colombo, Sri Lanka |
| Nationality | Sri Lankan |
| Corporate experience | 18+ years |
| Industry focus | AI technology, business automation, enterprise software, SME growth |
| Core expertise | AI strategy, business architecture, sales and marketing, corporate management |
| Spoken languages | English and Sinhala |
| AI language capability described in profile | English, Sinhala, and Tamil; this is a product capability, not a claim that Mahesh speaks Tamil. |
| Reference availability | Professional references available on request |

### 2.2 Long biography for the About section

Mahesh Ravindra is a strategic business architect, AI technology leader, and corporate growth specialist with more than 18 years of experience in sales, marketing, and corporate management. His work connects business strategy with practical execution, team development, and technology adoption.

As Founder and CEO of BIZmaster Solutions, he has developed a six-pillar business ecosystem bringing together technology, branding, growth strategy, business support, investment, and education. The ecosystem helps entrepreneurs and organisations develop ideas into structured, scalable ventures by coordinating capital, talent, operations, and market access.

His current focus includes an AI Workforce Platform, agentic AI for enterprise and ERP workflows, AI-to-AI communication, and business automation for SMEs, startups, and corporate organisations. His profile also describes an EV-focused cafe concept and Green Miracle Engineering, a green-energy and multibrand EV repair hub.

Mahesh holds an MBA from Cardiff Metropolitan University in the UK and is a Certified Professional Marketer through the Asia Marketing Federation. His profile also lists CIM UK and Financial Management qualifications from the University of Kelaniya. His recognition includes SLIM national awards, international awards, and more than 15 years of continuous corporate awards in sales and marketing management.

His mission is to help position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses that create shared value for investors, entrepreneurs, and the nation.

### 2.3 Short biography for media and founder introductions

Mahesh Ravindra is the Founder and CEO of BIZmaster Solutions and a strategic business architect with more than 18 years of experience in sales, marketing, and corporate management. He combines AI adoption, business architecture, and strategy execution to support SMEs, startups, and corporate organisations. He holds an MBA from Cardiff Metropolitan University and is a Certified Professional Marketer through the Asia Marketing Federation. His work includes a six-pillar business ecosystem, an AI Workforce Platform, and ventures focused on sustainable business growth in Sri Lanka.

This is edited portfolio copy combining both documents. The original supplied short biography is preserved in the source archive.

### 2.4 Qualifications

| Qualification | Institution | Field supplied in full profile |
| --- | --- | --- |
| Master of Business Administration | Cardiff Metropolitan University, UK | Strategic Marketing & Leadership |
| Certified Professional Marketer | Asia Marketing Federation | Advanced Marketing Strategy |
| CIM qualification | Chartered Institute of Marketing, UK | Professional Marketing |
| Financial Management qualification | University of Kelaniya, Sri Lanka | Corporate Finance & Management Accounting |

Do not add graduation years, degree classifications, CIM membership grades, or exact Financial Management award levels; these were not supplied.

### 2.5 AI and technology competencies

| Area | Detailed capability |
| --- | --- |
| AI strategy | Business AI adoption, agentic AI, AI workforce design |
| Agentic solutions | AI agents for sales, service, back-office operations, and ERP |
| AI-to-AI communication | B2B agent interoperability and autonomous business networks |
| ERP and enterprise systems | AI-integrated ERP and touchless ERP automation |
| Digital transformation | Legacy modernisation and cloud adoption, including AWS |

### 2.6 Business and strategy competencies

| Area | Detailed capability |
| --- | --- |
| Business architecture | Venture structuring, revenue modelling, and scaling strategies |
| Strategy execution | Turning ideas and plans into implementation |
| Corporate management | P&L responsibility, team leadership, and stakeholder management |
| Financial oversight | Budgeting, investor relations, and ROI analysis |
| Team development | Recruiting, training, and mentoring high-performance teams |

### 2.7 Sales and marketing competencies

| Area | Detailed capability |
| --- | --- |
| Sales strategy | B2B and B2C strategy, pipeline management, and closing |
| Marketing strategy | Brand building, digital marketing, and lead generation |
| Customer experience | CRM, retention, loyalty, and churn reduction |
| Partnership development | Channel partnerships, strategic alliances, and joint ventures |

### 2.8 Professional experience

**Founder & CEO — BIZmaster Solutions**  
July 2023–present, as reported in the profile · Colombo, Sri Lanka

Leading a six-pillar business ecosystem focused on AI-powered automation, business growth, and execution. Current responsibilities include development of the Tech Hub's AI Workforce Platform and agentic solutions for enterprise systems.

Profile-reported milestones:

- Built an AI Workforce Platform with six product entry points.
- Selected for an AI Expo described as government-organised and Mobitel-sponsored; event name and date were not supplied.
- Onboarding government-sector and corporate clients.
- Developing agentic AI solutions for ERP and enterprise systems.

**Senior Corporate Roles — Multiple Leading Companies**  
2005–2023 · Colombo, Sri Lanka

More than 18 years of experience in sales, marketing, and corporate management across leading Sri Lankan and multinational corporations. The full corporate history is available on request.

Profile-reported responsibilities:

- Led teams of more than 50 professionals.
- Held P&L responsibility for business units.
- Consistently exceeded sales targets.
- Implemented strategic initiatives across multiple industries.
- Received corporate, SLIM national, and international recognition in sales and marketing management.

Do not infer employers or individual job titles. Present this period as one consolidated timeline entry until the complete corporate history is supplied.

### 2.9 Awards and recognition

| Recognition | Level | Details available |
| --- | --- | --- |
| SLIM National Award Winner | National, Sri Lanka | Sales and marketing management; exact award name and year not supplied |
| International Level Award Winner | International | Sales and marketing management; event, awarding organisation, and year not supplied |
| Continuous Corporate Award Winner | Corporate | More than 15 years, according to the profile |
| Local and global recognition | Multiple | Excellence in sales and management; overlaps with the categories above |

Use three principal cards: **SLIM National Recognition**, **International Recognition**, and **15+ Years of Corporate Awards**. Treat the local/global row as a summary, not a fourth independent award count.

### 2.10 Six-pillar BIZmaster ecosystem

Positioning statement supplied in the profile: **“AI workforce for repetitive work. Humans handle exceptions, relationships, and approvals.”**

| Pillar | Full scope |
| --- | --- |
| BIZ Tech Hub | AI, ERP, software, web and mobile apps, cloud, e-commerce |
| BIZ Creative Forge | Branding, digital marketing, social media, graphic design |
| BIZ Strategic Growth | Sales and marketing strategy, execution, government liaison |
| BIZ Advisor | Legal, accounting, tax, HR, compliance, asset management |
| BIZ Investor & Venture Hub | Investor matchmaking, venture management, ROI oversight |
| BIZ Academy & Forum | Training, networking, business education, events |

Use the shorter **BIZ Strategic Growth** title from the profile. The reference website's navigation calls it **BIZ Strategic Growth Center**; this is a naming variation of the same pillar, not an extra pillar.

### 2.11 AI product portfolio

| Product | Profile-supplied role | Portfolio description |
| --- | --- | --- |
| AI Sales Agent | Calls, qualifies, follows up, books meetings; 24/7 capability stated | Supports sales conversations, qualification, follow-up, and meeting booking. |
| AI Call Operator | Answers, routes, books, escalates; “never misses a call” stated | Handles incoming calls, routing, bookings, and escalation. Avoid presenting missed-call elimination as an unconditional guarantee. |
| WhatsApp Commerce AI | Sells, takes orders, auto-replies, manages customers | Supports WhatsApp commerce, order capture, customer replies, and customer management. |
| Touchless ERP Bot Suite | Automates finance, HR, procurement, inventory | Helps automate repetitive back-office tasks inside ERP workflows. |
| AI Personal Assistant | Admin, email, calls, back-office, research | Supports administrative work, communications, and research. |
| AI-to-AI Communication Hub | Agents communicate with other companies' agents | Explores interoperable business-to-business agent communication. The associated project is in development. |

Human escalation and approval are central to the profile's stated approach. Describe specific integrations, operating hours, and automation limits only when implementation evidence is available.

### 2.12 Projects and current engagements

| Project or engagement | Focus | Source-reported stage | Display rule |
| --- | --- | --- | --- |
| AI Workforce Platform | Business automation for SMEs, startups, and corporates; six AI products | Active deployment | Featured project; do not invent adoption statistics. |
| Agentic ERP Solutions | AI agents for ERP systems, including back-office processes | In progress with clients | Active project, without customer names or unprovided outcomes. |
| AI-to-AI Communication Hub | B2B agent interoperability | In development | Future-facing research and development project. |
| Government Sector AI Projects | AI automation for public-sector work | In progress | Anonymised engagement card. |
| Corporate-Level Projects | AI work with leading private companies | In progress | Anonymised engagement card. |
| SME & Startup AI Onboarding | Adoption of AI automation | Active | Engagement list entry. |
| Agent Dilu Partnership | WhatsApp AI automation partnership | Partnership reported; lifecycle date and stage not supplied | Partnership item; add link or logo only when supplied. |
| EV-Focused Cafe Concept | Sustainable venture concept centred on EVs | Described as being developed in short bio | Concept-stage venture; no opening date or operating location supplied. |
| Green Miracle Engineering | Green energy and multibrand EV repair hub | Described as being developed in short bio | In-development venture; no technical partner, address, or launch date supplied. |

The documents do not provide completed case studies, revenue figures, named customers, testimonials, performance uplift percentages, or investor returns. Do not create fictitious examples to fill the design.

### 2.13 Vision, mission, and values

**Vision:** To position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses, powered by AI, that create shared value for investors, entrepreneurs, and the nation.

**Mission:** To empower businesses at every stage—SME, startup, and corporate—with AI-powered automation, strategic execution, and comprehensive management, supporting continuous growth and market leadership.

| Value | Meaning |
| --- | --- |
| Collaboration | Partnering for mutual success |
| Innovation | Using technology to build scalable solutions |
| Integrity | Transparent, ethical, client-centred operations |

### 2.14 Differentiators

- Corporate experience across sales, marketing, and management.
- National, international, and continuous corporate recognition, as reported in the profile.
- Venture architecture covering funding, operations, talent, scaling, and exit planning.
- A practical focus on task completion and measurable outcomes.
- Creative thinking combined with strategy execution.
- Leadership in agentic AI, ERP automation, and AI-to-AI communication.
- Partnership development, deal structuring, and capital coordination.
- Multilingual AI capability across English, Sinhala, and Tamil.

Avoid turning statements such as “delivered on time and on budget” or “trusted by partners” into unsupported service guarantees or invented endorsements.

### 2.15 Speaking and thought leadership

| Format | Topics or focus |
| --- | --- |
| Keynote speaking | AI for business, digital transformation, SME growth |
| Panel discussions | AI adoption, business automation, future of work |
| Workshops | AI strategy, agentic AI, ERP integration |
| Corporate training | Sales excellence, marketing strategy, leadership |
| Media interviews | AI trends and the Sri Lankan business landscape |
| Podcast appearances | Entrepreneurship, AI, business growth |

Supplied talk titles:

1. AI Is Not the Future of Business — It Is the Present
2. Why SMEs and Startups Are Moving Faster Than Corporates in AI
3. Agentic AI: The Next Evolution of Business Automation
4. AI-to-AI Communication: Business at the Speed of Thought
5. From Corporate Leader to Founder: Lessons Learned

These are offered topics, not a record of talks already delivered. Do not add event photos, audience numbers, recordings, or previous speaking venues without source material.

### 2.16 Contact information

| Channel | Display | Working target |
| --- | --- | --- |
| Primary telephone | +94 777 960 231 | `tel:+94777960231` |
| Secondary telephone | +94 77 960 1192 | `tel:+94779601192` |
| Email | mahesh.rajasinha22@gmail.com | `mailto:mahesh.rajasinha22@gmail.com` |
| Company website | bizmastersolutions.lk | `https://bizmastersolutions.lk/` |
| Location | Colombo, Sri Lanka | Plain text; a street address was not supplied |
| LinkedIn | Not supplied | Hide until confirmed |
| WhatsApp | Not confirmed | Hide until a number is confirmed |

### 2.17 Founder statement

Use an edited excerpt in the homepage quote section:

> Businesses were losing opportunities through missed calls, missed messages, and missed follow-ups. That experience shaped my focus on AI-powered business automation.

Attribute it as **“Adapted from Mahesh's supplied founder statement”** in the editorial notes. It is an adaptation, so public implementation should use ordinary prose headed **Why I built BIZmaster**, rather than present it as a verbatim quotation. If a quotation is preferred, use this exact original sentence:

> “But I saw a problem — businesses were losing money not because they were bad at what they do, but because they missed calls, missed messages, and missed follow-ups.”

The complete original founder statement is retained in the archive.

## 3. Pages and navigation

### 3.1 Required page structure

| Route | Purpose | Sections |
| --- | --- | --- |
| `/` | Main portfolio | Hero, snapshot, About, expertise, experience, qualifications, ecosystem, AI products, featured projects, recognition, vision and values, speaking, contact, footer |
| `/projects` | Complete work collection | Introduction and all nine project/engagement records, including ventures from the short bio |
| `/projects/[slug]` | Individual project context | Focus, source-reported stage, Mahesh's involvement where supplied, associated capabilities, enquiry link; only valid project slugs |
| `/media-kit` | Organiser and press information | Short bio, full bio, professional title, speaking formats, five topic titles, contact details, approved downloads if available |
| `/privacy` | Data-handling explanation | Actual contact form, email, analytics, and cookie practices used in the finished implementation |

The homepage must stand alone; visitors should not need to open another page to find essential information. Detailed product/venture narratives can expand on project pages after the owner provides more material.

### 3.2 Homepage anchors

| Navigation label | Target |
| --- | --- |
| About | `/#about` |
| Expertise | `/#expertise` |
| Experience | `/#experience` |
| Work | `/#work` |
| Speaking | `/#speaking` |
| Contact | `/#contact` |

The company logo or personal wordmark links to `/`. The main header action links to `/#contact`. Use real links for navigation and buttons only for actions such as menu and theme changes.

## 4. Visual direction and verified colours

### 4.1 Design concept

Create a personal executive portfolio with an editorial layout: large typography, a dark portrait-led hero, white content sections, soft grey cards, precise purple accents, a vertical career timeline, and a full-width purple contact panel. Mahesh's name should be the dominant identity. BIZmaster's logo supports the company affiliation without turning the personal site into a copy of the company homepage.

The reference source contains a fixed navigation bar, a dark hero treatment, large headings, purple accents, solution cards, a purple footer, and light/dark styling. Adapt these cues into a new portfolio composition. The layout described here is a proposed design, rather than a screenshot-perfect reproduction.

### 4.2 Exact colours found in the reference source

The linked reference stylesheet is `https://bizmastersolutions.lk/_next/static/chunks/434e841bf6041b35.css`. Its filename may change when the reference site is rebuilt. Colours below were read from the stylesheet's variables and the homepage's inline/component styling, rather than estimated from an image.

| Role | Hex value | Source evidence | Portfolio use |
| --- | --- | --- | --- |
| Main brand purple | `#5D0E8B` | `--primary`, `--accent`, `--ring`, homepage heading/footer | Buttons, links, section markers, footer |
| Deep purple hover | `#4A0B70` | Homepage button class | Main button hover |
| Hero purple | `#580088` | Homepage/hero source | Decorative hero glow |
| Dark hero base | `#050208` | Homepage/hero source | Hero background |
| Dark hero secondary | `#0D0614` | Homepage/hero source | Portrait surround and hero gradient |
| Light page background | `#FFFFFF` | `--background` | Main light theme |
| Light text foreground | `#000000` | `--foreground` | Main text |
| Light card | `#F8F9FA` | `--card` | Cards |
| Secondary light surface | `#F5F5F5` | `--secondary`, `--muted` | Alternating sections |
| Input/light hero surface | `#F9F9F9` | `--input`, hero variables | Form background |
| Light gradient end | `#F0F0F0` | `--hero-gradient-to` | Optional section gradient |
| Muted light text | `#666666` | `--muted-foreground` | Supporting copy |
| Light border | `#E5E5E5` | `--border` | Dividers and cards |
| Soft purple surface | `#F3E8FF` | `--sidebar-accent` | Tags and icon tiles |
| Dark page background | `#000000` | Dark `--background` | Dark theme |
| Dark cards | `#1A1A1A` | Dark `--card` | Dark theme cards |
| Dark muted surface/border | `#333333` | Dark `--secondary`, `--border` | Dark borders and panels |
| Dark muted text | `#CCCCCC` | Dark `--muted-foreground` | Supporting dark-theme text |
| Error red | `#DC2626` | `--destructive` | Form errors only in proposed design |

The reference CSS also contains a purple-to-red button gradient and yellow-tinted secondary effects. The proposed portfolio uses a solid purple primary action and a restrained purple glow for visual consistency. Pale purple text in dark mode is an accessibility adaptation, not a claimed exact source token.

### 4.3 Typography and proportions

- Body: Inter using `next/font`, falling back to system sans-serif.
- Display: the same font, weight 700–800, tight letter spacing.
- Hero title: responsive 48–88 px, line height 1.02.
- Section title: responsive 32–52 px, line height 1.12.
- Body: 16–18 px, line height 1.7.
- Eyebrows: 12 px uppercase, letter spacing 0.15em.
- Maximum content width: 1200 px.
- Content paragraph width: approximately 65 characters.
- Desktop section spacing: 96 px; tablet 72 px; mobile 56 px.
- Cards: 20 px corner radius, 28 px inner padding.
- Buttons: at least 48 px tall, 12 px radius.
- Header: approximately 80 px high, with a minimum of 44 px for each interactive target.

### 4.4 Composition rules

Use a split hero with text on the left and portrait on the right. Create depth using a subtle purple radial glow behind the image and a fine bordered frame. Keep the actual portrait clear; decorative shapes must not cover the face. Use white or pale purple text on the dark hero.

Use card grids only for genuinely parallel content: expertise groups, company pillars, products, qualifications, projects, and awards. Use paragraphs for biography, a vertical timeline for experience, and compact lists for talk topics. Keep one strong action per section.

Avoid floating metric bubbles that imply unsupported success, spinning 3D graphics, fake partner logos, exaggerated charts, or repeated generic stock photos. Product cards can use simple monochrome SVG icons chosen by the developer; use real project imagery when supplied.

## 5. Section designs and website copy

### 5.1 Header

Left: a compact **MR** monogram and “Mahesh Ravindra” wordmark, with “Founder & CEO” beneath. Desktop: six navigation links plus a purple **Let's Talk** button. Include a theme button with an accessible label. At widths below 1024 px, show a menu button and an expandable mobile link panel.

The desktop header is sticky, with a solid theme background and a thin bottom border. The hero begins below it. This avoids placing small navigation text over a portrait or an unpredictable gradient. The mobile menu is a disclosure, not a modal; it should close after selecting a link and on Escape.

### 5.2 Hero

Eyebrow: **FOUNDER & CEO · BIZMASTER SOLUTIONS**

H1: **Mahesh Ravindra**

Supporting headline: **Business strategy. AI execution. Sustainable growth.**

Body: “I connect corporate experience, business architecture, and AI automation to help SMEs, startups, and established organisations move from ideas to execution.” This is proposed first-person copy adapted from the profile and requires the owner's editorial approval.

Actions: **Discuss a Project** → `#contact`; **Explore My Work** → `#work`.

Small metadata: **Colombo, Sri Lanka · English & Sinhala**.

Image: owner-approved portrait, 4:5 ratio. Until supplied, render the initials **MR** as a typographic artwork, not a broken image or a stock person. Image card caption: **Strategic Business Architect · AI Technology Leader**.

### 5.3 Professional snapshot

Four static tiles:

| Value | Label |
| --- | --- |
| 18+ | Years of corporate experience |
| 15+ | Years of corporate awards |
| 6 | Business ecosystem pillars |
| 6 | AI product offerings |

Do not animate the numbers from zero, infer a client count, or imply every product is fully launched. The second tile refers specifically to corporate awards, not 15 years of SLIM wins.

### 5.4 About

Eyebrow: **ABOUT MAHESH**. Heading: **A corporate foundation. A founder's focus.**

Use the long biography from section 2.2 as four or five short paragraphs. The desktop layout has a narrow heading column and a wider text column; mobile stacks them. Put **MBA — Cardiff Metropolitan University** and **CPM — Asia Marketing Federation** in a small credentials row. Include a text link to `/media-kit`.

### 5.5 Expertise

Heading: **Where strategy meets implementation**.

Three equal cards: **AI & Technology**, **Business & Strategy**, **Sales & Marketing**. Include all competency lines from sections 2.5–2.7, not just three summary tags. Each card uses an SVG icon, title, and readable list. No percentage-based skill bars; the source provides no numerical proficiency ratings.

### 5.6 Experience

Heading: **Experience built through leadership and execution**.

Two timeline entries from section 2.8. Put dates and location above each title, followed by a short paragraph and responsibilities. Show the founder role first. Include “Full corporate history available on request” below the older entry. Do not create guessed intermediate employers.

### 5.7 Qualifications

Heading: **A foundation in marketing, leadership, and finance**.

Four credential cards, each with qualification, institution, and field. Show the exact institution names. Provide no university logos unless approved asset files are available. If displayed, logos supplement visible text and must not be the only way the credential is identified.

### 5.8 BIZmaster ecosystem

Heading: **Six pillars. One coordinated business ecosystem.**

Introduction: “BIZmaster Solutions brings technology, branding, strategy, business support, investment, and education into one coordinated approach to venture development and growth.”

Use six numbered cards in a three-column desktop grid, two-column tablet grid, and one-column mobile grid. Include the full scope of each pillar from section 2.10. Link the section-level action to the company homepage. A pillar should receive an individual external URL only after that URL is verified.

### 5.9 AI product portfolio

Heading: **AI support for everyday business work**.

Introduction: “The product portfolio focuses on repetitive calls, messages, follow-ups, administrative tasks, and enterprise workflows, with people handling exceptions, relationships, and approvals.”

Six cards from section 2.11, with product titles and descriptive rather than guaranteed claims. The AI-to-AI card carries an **In Development** badge. Other cards have no inferred deployment badge. Use **Discuss this solution** links to a prefilled email or the contact section; do not create nonworking demo links.

### 5.10 Work and ventures

Heading: **Current work, emerging ventures, and partnerships**.

Feature the AI Workforce Platform, Agentic ERP Solutions, AI-to-AI Communication Hub, and Green Miracle Engineering. Include all nine items on `/projects`. Show each item's status as text and explain in build notes that statuses reflect the supplied documents. No unprovided impact metrics.

Each project card has a category, stage badge, title, concise focus paragraph, and **Project overview** link to its real route. The detail page includes only supplied information and a project-specific enquiry link. Related products can be listed as capabilities, without asserting that every integration is already deployed.

### 5.11 Recognition

Heading: **Recognition across corporate, national, and international settings**.

Show the three principal award categories from section 2.9. Include a line: “Recognition described in Mahesh's professional profile; detailed award history is available on request.” Specific certificate gallery entries remain unpublished until actual award documents are supplied.

### 5.12 Vision, mission, and values

Use a wide two-column panel for vision and mission, followed by three small values cards. Keep statements from section 2.13 in full. A separate short paragraph can describe the differentiators from section 2.14. Use a dark background for this section to give the page a clear visual pause.

### 5.13 Speaking

Heading: **Practical conversations about AI, leadership, and growth**.

Introduction: “Available for keynotes, panels, workshops, corporate training, interviews, and podcasts.”

Display all five supplied talk titles in a numbered list and all six speaking formats with their focus. Actions: **Invite Me to Speak** → `mailto:` with a speaking-enquiry subject; **View Media Kit** → `/media-kit`.

Do not call these previous talks or imply an upcoming event schedule. Offer a downloadable speaker sheet only after one has been prepared and added as a real asset.

### 5.14 Contact

Heading: **Let's discuss what your business needs next**.

Body: “For business projects, AI adoption, partnerships, investment discussions, or speaking enquiries, contact Mahesh directly.”

Use a purple full-width panel with white text. Include both phone numbers, the email, Colombo location, and company website. The initial build can use working email and telephone links without a backend.

If a form is implemented, use the specification in section 11.2. Do not show a form with a fake success state. Keep the direct email link available alongside it.

### 5.15 Footer

Use a white or theme-background footer below the contact panel, with Mahesh's name, professional title, company affiliation, navigation, and a Privacy link. Copyright: `© {currentYear} Mahesh Ravindra. All rights reserved.` The year is a calendar value, not a career-duration calculation.

Include BIZmaster's actual logo on a white logo plate where it remains readable. The personal identity is the main wordmark. Do not label a downloaded company logo as a new personal logo.

## 6. Assets and content preparation

| Asset | Suggested path | Current availability | Handling |
| --- | --- | --- | --- |
| Portrait | `/images/mahesh-ravindra.webp` | Missing from both documents | Initials fallback; add approved real portrait later. |
| Company logo | `/brand/bizmaster-logo.png` | Reference site serves `https://bizmastersolutions.lk/nw_logo.png` | Download an approved copy to the project; preserve aspect ratio and original colours. |
| Personal monogram | CSS-rendered `MR` | Can be created from text | Treat as a typographic treatment, not an official existing logo. |
| Project images | `/images/projects/{slug}.webp` | Not supplied | Use simple decorative icon panels; no invented screenshots. |
| Award certificates | `/images/awards/` | Not supplied | Omit gallery until available. |
| Downloadable profile | `/downloads/mahesh-ravindra-profile.pdf` | No PDF supplied | Omit download button until a reviewed PDF is generated. |
| Speaking headshot | `/images/mahesh-speaker.webp` | Not supplied | Use approved portrait when available. |
| Open Graph card | `app/opengraph-image.tsx` or image asset | To be created during build | Name, role, MR treatment, purple and white design. |
| LinkedIn profile | Structured content URL | Missing | Store `null` and omit. |

All images must have intrinsic dimensions or a sized parent with `fill`. Use a `4 / 5` portrait container, `object-fit: cover`, and an owner-approved focal point. Set decorative SVGs to `aria-hidden="true"`. Copy the logo locally during implementation rather than hotlinking production image assets from another site's build.

Do not put the raw source documents or the source archive into a public download folder by default. Public downloads should be intentionally prepared, reviewed, and linked.

## 7. Next.js architecture and setup

### 7.1 Technology choices

Use the current stable Next.js release selected at build time, TypeScript, App Router, ESLint, and plain CSS. Commit the resulting lockfile so the exact chosen versions remain reproducible. The official installation documentation inspected for this brief lists Node.js 20.9 as the minimum; use a supported Node.js LTS release compatible with the selected Next.js version.

No CMS, authentication, database, animation library, or dashboard is needed for the first portfolio release. Keep content in typed files. Use Server Components for static content and small Client Components for the navigation disclosure, theme control, project filter if included, and a functional form if included.

### 7.2 Bootstrap

```bash
npx create-next-app@latest mahesh-portfolio --ts --eslint --app --src-dir --no-tailwind --use-npm --import-alias "@/*"
cd mahesh-portfolio
npm run dev
```

If the CLI asks about additional features, keep the basic setup and use the App Router. Replace scaffold content with this design. Do not add Tailwind directives to the plain CSS below.

Production checks:

```bash
npx eslint .
npx tsc --noEmit
npm run build
npm run start
```

Run ESLint explicitly; do not assume `next build` runs linting. The commands above are build instructions, not checks already performed on a finished site.

### 7.3 Suggested project files

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    projects/
      page.tsx
      [slug]/page.tsx
    media-kit/page.tsx
    privacy/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
    opengraph-image.tsx
    api/contact/route.ts       # only if a real contact backend is configured
  components/
    SiteHeader.tsx
    ThemeToggle.tsx
    Hero.tsx
    SectionHeading.tsx
    Snapshot.tsx
    ExpertiseCard.tsx
    ExperienceTimeline.tsx
    QualificationCard.tsx
    PillarCard.tsx
    ProductCard.tsx
    ProjectCard.tsx
    SpeakingSection.tsx
    ContactSection.tsx
    ContactForm.tsx            # optional backend-dependent component
    SiteFooter.tsx
  content/
    portfolio.ts
  lib/
    site-url.ts
    contact-validation.ts     # only for a contact form
public/
  brand/
  images/
    projects/
  downloads/
```

File names above are proposed files for the future project. Keep static portfolio records in `content/portfolio.ts`; do not duplicate phone numbers and project statuses across multiple components.

## 8. Structured content model

The following is a usable starting `src/content/portfolio.ts`. The full narrative and detailed competencies above remain the authoritative content specification. Extend the module with those records when building the complete pages.

```ts
export type Project = {
  slug: string;
  title: string;
  category: "AI & Enterprise" | "Engagement" | "Partnership" | "Sustainable Venture";
  stage: string;
  summary: string;
  featured: boolean;
};

export const profile = {
  name: "Mahesh Ravindra",
  initials: "MR",
  role: "Founder & CEO",
  company: "BIZmaster Solutions",
  positioning: ["Strategic Business Architect", "AI Technology Leader", "Corporate Growth Specialist"],
  location: "Colombo, Sri Lanka",
  languages: ["English", "Sinhala"],
  email: "mahesh.rajasinha22@gmail.com",
  companyUrl: "https://bizmastersolutions.lk/",
  phones: [
    { label: "+94 777 960 231", href: "tel:+94777960231" },
    { label: "+94 77 960 1192", href: "tel:+94779601192" },
  ],
  linkedinUrl: null as string | null,
  whatsappNumber: null as string | null,
  portrait: null as string | null,
  profilePdf: null as string | null,
  companyLogo: null as string | null, // Set after adding approved local logo.
  heroHeadline: "Business strategy. AI execution. Sustainable growth.",
  heroSummary: "I connect corporate experience, business architecture, and AI automation to help SMEs, startups, and established organisations move from ideas to execution.",
  shortBio: "Mahesh Ravindra is the Founder and CEO of BIZmaster Solutions and a strategic business architect with more than 18 years of experience in sales, marketing, and corporate management. He combines AI adoption, business architecture, and strategy execution to support SMEs, startups, and corporate organisations.",
};

export const stats = [
  { value: "18+", label: "Years of corporate experience" },
  { value: "15+", label: "Years of corporate awards" },
  { value: "6", label: "Business ecosystem pillars" },
  { value: "6", label: "AI product offerings" },
];

export const qualifications = [
  { title: "Master of Business Administration", institution: "Cardiff Metropolitan University, UK", field: "Strategic Marketing & Leadership" },
  { title: "Certified Professional Marketer", institution: "Asia Marketing Federation", field: "Advanced Marketing Strategy" },
  { title: "CIM Qualification", institution: "Chartered Institute of Marketing, UK", field: "Professional Marketing" },
  { title: "Financial Management", institution: "University of Kelaniya, Sri Lanka", field: "Corporate Finance & Management Accounting" },
];

export const expertise = [
  { title: "AI & Technology", items: [
    "Business AI adoption, agentic AI, and AI workforce design",
    "Agents for sales, service, back-office, and ERP",
    "B2B agent interoperability and autonomous business networks",
    "AI-integrated ERP and touchless automation",
    "Legacy modernisation and cloud adoption, including AWS",
  ] },
  { title: "Business & Strategy", items: [
    "Venture structuring, revenue modelling, and scaling",
    "Strategy execution from ideation to implementation",
    "P&L, team leadership, and stakeholder management",
    "Budgeting, investor relations, and ROI analysis",
    "Recruiting, training, and mentoring teams",
  ] },
  { title: "Sales & Marketing", items: [
    "B2B and B2C sales, pipeline management, and closing",
    "Brand building, digital marketing, and lead generation",
    "CRM, retention, loyalty, and churn reduction",
    "Channel partnerships, alliances, and joint ventures",
  ] },
];

export const experience = [
  { title: "Founder & CEO", organisation: "BIZmaster Solutions", dates: "July 2023–Present", location: "Colombo, Sri Lanka", summary: "Leading a six-pillar business ecosystem focused on AI-powered automation, strategic growth, and execution.", highlights: [
    "Built an AI Workforce Platform with six product entry points",
    "Selected for an AI Expo described in the profile as government-organised and Mobitel-sponsored",
    "Onboarding government-sector and corporate clients",
    "Developing agentic AI for ERP and enterprise systems",
  ] },
  { title: "Senior Corporate Roles", organisation: "Multiple leading companies", dates: "2005–2023", location: "Colombo, Sri Lanka", summary: "Sales, marketing, and corporate management across Sri Lankan and multinational organisations. Full corporate history available on request.", highlights: [
    "Led teams of more than 50 professionals",
    "Managed P&L responsibility for business units",
    "Consistently exceeded sales targets",
    "Implemented strategic initiatives across multiple industries",
  ] },
];

export const pillars = [
  { title: "BIZ Tech Hub", scope: "AI, ERP, software, web and mobile apps, cloud, and e-commerce" },
  { title: "BIZ Creative Forge", scope: "Branding, digital marketing, social media, and graphic design" },
  { title: "BIZ Strategic Growth", scope: "Sales and marketing strategy, execution, and government liaison" },
  { title: "BIZ Advisor", scope: "Legal, accounting, tax, HR, compliance, and asset management" },
  { title: "BIZ Investor & Venture Hub", scope: "Investor matchmaking, venture management, and ROI oversight" },
  { title: "BIZ Academy & Forum", scope: "Training, networking, business education, and events" },
];

export const products = [
  { title: "AI Sales Agent", description: "Sales calls, lead qualification, follow-up, and meeting booking", stage: null },
  { title: "AI Call Operator", description: "Incoming calls, routing, bookings, and escalation", stage: null },
  { title: "WhatsApp Commerce AI", description: "WhatsApp sales, orders, automated replies, and customer management", stage: null },
  { title: "Touchless ERP Bot Suite", description: "Repetitive finance, HR, procurement, and inventory workflows", stage: null },
  { title: "AI Personal Assistant", description: "Administration, email, calls, back-office tasks, and research", stage: null },
  { title: "AI-to-AI Communication Hub", description: "Interoperability between business AI agents", stage: "In Development" },
];

export const projects: Project[] = [
  { slug: "ai-workforce-platform", title: "AI Workforce Platform", category: "AI & Enterprise", stage: "Active Deployment", summary: "A business automation platform with six AI product offerings for SMEs, startups, and corporate organisations.", featured: true },
  { slug: "agentic-erp-solutions", title: "Agentic ERP Solutions", category: "AI & Enterprise", stage: "In Progress", summary: "AI agents for enterprise and ERP workflows, including repetitive back-office processes.", featured: true },
  { slug: "ai-to-ai-communication-hub", title: "AI-to-AI Communication Hub", category: "AI & Enterprise", stage: "In Development", summary: "Development focused on business-to-business agent interoperability.", featured: true },
  { slug: "government-sector-ai", title: "Government Sector AI Projects", category: "Engagement", stage: "In Progress", summary: "Profile-reported AI automation work in the public sector; client details are not supplied.", featured: false },
  { slug: "corporate-ai-projects", title: "Corporate-Level Projects", category: "Engagement", stage: "In Progress", summary: "Profile-reported AI work with private companies; client names and outcomes are not supplied.", featured: false },
  { slug: "sme-startup-onboarding", title: "SME & Startup AI Onboarding", category: "Engagement", stage: "Active", summary: "Supporting business adoption of AI automation.", featured: false },
  { slug: "agent-dilu-partnership", title: "Agent Dilu Partnership", category: "Partnership", stage: "Partnership Reported", summary: "A WhatsApp AI automation partnership described in the full profile.", featured: false },
  { slug: "ev-cafe-concept", title: "EV-Focused Cafe Concept", category: "Sustainable Venture", stage: "Concept in Development", summary: "An EV-focused cafe venture concept described in the short biography.", featured: false },
  { slug: "green-miracle-engineering", title: "Green Miracle Engineering", category: "Sustainable Venture", stage: "In Development", summary: "A green-energy and multibrand EV repair hub described in the short biography.", featured: true },
];

export const recognition = [
  { title: "SLIM National Recognition", detail: "Sales and marketing management recognition described in the profile." },
  { title: "International Recognition", detail: "International-level recognition in sales and marketing management described in the profile." },
  { title: "15+ Years of Corporate Awards", detail: "Continuous corporate recognition over more than 15 years, according to the profile." },
];

export const speakingFormats = [
  { title: "Keynotes", focus: "AI for business, digital transformation, SME growth" },
  { title: "Panels", focus: "AI adoption, business automation, the future of work" },
  { title: "Workshops", focus: "AI strategy, agentic AI, ERP integration" },
  { title: "Corporate Training", focus: "Sales excellence, marketing strategy, leadership" },
  { title: "Media Interviews", focus: "AI trends and Sri Lankan business" },
  { title: "Podcasts", focus: "Entrepreneurship, AI, business growth" },
];

export const speakingTopics = [
  "AI Is Not the Future of Business — It Is the Present",
  "Why SMEs and Startups Are Moving Faster Than Corporates in AI",
  "Agentic AI: The Next Evolution of Business Automation",
  "AI-to-AI Communication: Business at the Speed of Thought",
  "From Corporate Leader to Founder: Lessons Learned",
];

export const purpose = {
  vision: "To position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses, powered by AI, creating shared value for investors, entrepreneurs, and the nation.",
  mission: "To empower businesses at every stage—SME, startup, and corporate—with AI-powered automation, strategic execution, and comprehensive management, supporting continuous growth and market leadership.",
  values: [
    { title: "Collaboration", detail: "Partnering for mutual success" },
    { title: "Innovation", detail: "Using technology to build scalable solutions" },
    { title: "Integrity", detail: "Transparent, ethical, client-centred operations" },
  ],
};

export function emailFor(subject: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
}
```

## 9. Complete CSS foundation

Copy this into `src/app/globals.css`. The stylesheet covers the header, hero, snapshot, sections, timeline, cards, projects, media kit, contact panel, optional form, footer, theme variants, responsive breakpoints, keyboard focus, and reduced motion. Additional project-specific styling can use CSS Modules; keep shared colours in these variables.

> The full stylesheet from the original brief has been implemented (and extended) in `app/globals.css`. That file is the source of truth for the CSS foundation; it is not duplicated here to avoid the two copies drifting apart.

## 10. Next.js integration examples

These examples show how the content and CSS connect. They are starter components, not a complete application included separately with this brief. Build the remaining sections using the detailed content requirements above.

### 10.1 Root layout

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Mahesh Ravindra | Business Strategy & AI Leadership",
    template: "%s | Mahesh Ravindra",
  },
  description: "Explore Mahesh Ravindra's work in business architecture, AI automation, corporate growth, and BIZmaster Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
```

If the deployment cannot fetch Google fonts at build time, use an approved local Inter font file with `next/font/local` or the system-font fallback. Do not make the site depend on a runtime third-party font request.

### 10.2 Hero component

```tsx
// src/components/Hero.tsx
import Image from "next/image";
import { profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Founder & CEO · BIZmaster Solutions</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-headline">{profile.heroHeadline}</p>
          <p className="hero-summary">{profile.heroSummary}</p>
          <div className="actions">
            <a className="btn btn--primary" href="#contact">Discuss a Project</a>
            <a className="btn btn--hero" href="#work">Explore My Work</a>
          </div>
          <p className="hero-meta">Colombo, Sri Lanka · English & Sinhala</p>
        </div>
        <div className="portrait-card">
          <div className="portrait-frame">
            {profile.portrait ? (
              <Image src={profile.portrait} alt="Mahesh Ravindra" fill
                sizes="(max-width: 767px) 90vw, 40vw" preload />
            ) : (
              <div className="portrait-placeholder" aria-hidden="true">MR</div>
            )}
          </div>
          <p className="portrait-caption">Strategic Business Architect · AI Technology Leader</p>
        </div>
      </div>
    </section>
  );
}
```

The `preload` example targets the current Next.js Image API. Check the API of the version installed by the project; do not mix version-specific image props. Only preload the actual largest above-the-fold image when appropriate.

### 10.3 Reusable section heading

```tsx
// src/components/SectionHeading.tsx
export function SectionHeading({ id, eyebrow, title, description }: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### 10.4 Header disclosure behaviour

Implement `SiteHeader` as a small Client Component with a boolean menu state. Its menu button uses `aria-controls="mobile-navigation"` and `aria-expanded={open}`. The mobile `<nav id="mobile-navigation" hidden={!open}>` contains ordinary links and has an accessible label. Use the `.mobile-nav` and `.menu-toggle` classes from the stylesheet.

On link selection, close the panel. On Escape, close it and return focus to the menu button. If implementing outside-click dismissal, attach an event listener only while open and clean it up when closed. Do not use modal focus trapping for this nonmodal disclosure. On desktop, hide the mobile panel even if it was opened before resizing.

Keep theme switching in a separate Client Component. Start with a deterministic light theme for server rendering, read a saved `light` or `dark` preference after mount, and apply `document.documentElement.dataset.theme`. Catch storage errors. A pre-hydration theme script is an optional enhancement if removing the initial theme flash matters; keep it compatible with the deployment's content-security policy.

### 10.5 Project card

```tsx
// src/components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card--interactive project-card">
      <p className="card-meta">{project.category}</p>
      <div><span className="badge">{project.stage}</span></div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="card-footer">
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Project overview<span className="sr-only">: {project.title}</span>
        </Link>
      </div>
    </article>
  );
}
```

### 10.6 Homepage assembly pattern

```tsx
// Pattern for src/app/page.tsx; implement all named components before use.
// Keep this page a Server Component.
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, stats } from "@/content/portfolio";

export default function HomePage() {
  return (
    <>
      {/* Add SiteHeader above main and SiteFooter below it. */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <section className="snapshot" aria-label="Professional snapshot">
          <div className="container snapshot-grid">
            {stats.map(stat => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Add About, Expertise, Experience, Qualifications, Ecosystem,
            and Products sections here using sections 2 and 5. */}
        <section id="work" className="section section--soft" aria-labelledby="work-title">
          <div className="container">
            <SectionHeading id="work-title" eyebrow="Projects & Ventures"
              title="Current work, emerging ventures, and partnerships" />
            <div className="grid-2">
              {projects.filter(project => project.featured).map(project => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
            <div className="section-action"><a className="text-link" href="/projects">View all work</a></div>
          </div>
        </section>
        {/* Add Recognition, Vision and Values, Speaking, and Contact here. */}
      </main>
    </>
  );
}
```

Comments in this assembly example mark required sections to implement, not permission to omit them. The deliverable website is complete only when every section in the acceptance checklist exists.

### 10.7 Dynamic project routes

For `src/app/projects/[slug]/page.tsx`, use the slug list from `projects` in `generateStaticParams`. In the current App Router API, await `params` before reading `slug` when the type is `Promise<{ slug: string }>`. Find the corresponding project and call `notFound()` if it is absent. Use the same record for `generateMetadata` and page rendering.

The detail page must have a real H1, a back link to `/projects`, its category and stage, the source-based overview, and a contact action. Show a clear statement such as **“Further project information is available by enquiry”** when details are missing. Do not invent problem/solution/results sections with unsupported metrics.

## 11. Interactions and contact behaviour

### 11.1 Required interactions

| Interaction | Behaviour |
| --- | --- |
| Anchor navigation | Scroll to real section IDs with header offset. Use reduced-motion preferences. |
| Mobile menu | Toggle on button click; expose state to assistive technology; close on link selection and Escape. |
| Theme switch | Toggle light/dark; persist locally when available; keep contrast readable in both themes. |
| Email action | Open a mail client with a descriptive subject; do not report that a message was sent. |
| Telephone links | Use normalised international `tel:` targets. |
| Company website | Open a real company URL; if using a new tab, add `rel="noopener noreferrer"`. |
| Project card | Navigate to a valid detail page. |
| Downloads | Render only when the actual file exists. |
| LinkedIn/WhatsApp | Render only after confirmed URLs/accounts are supplied. |
| Project filter, optional | Filter local records by the four categories, preserve keyboard access, show result count and empty state. |

Keep all portfolio text visible without requiring a JavaScript reveal animation. Native hover effects are sufficient for the first release. No autoplay video or automatically moving carousel is needed.

### 11.2 Optional functional contact form

If requested during implementation, add the following fields:

| Field | Required | Validation |
| --- | --- | --- |
| Full name | Yes | Trimmed, 2–100 characters |
| Email | Yes | Valid email format, maximum 254 characters |
| Company | No | Maximum 150 characters |
| Enquiry type | Yes | Business Project, AI Solution, Partnership, Investment Discussion, Speaking, or General Enquiry |
| Message | Yes | Trimmed, 20–3000 characters |
| Contact consent | Yes | Explicit permission to respond; not automatic marketing consent |

Client validation improves usability; server validation is authoritative. The form should submit to a real Next.js Route Handler such as `/api/contact`, use an email delivery provider configured only on the server, and avoid exposing secrets through `NEXT_PUBLIC_*` variables.

Expected states: idle, validating, sending, received, and failed. Preserve entered data after failure. Disable repeat submission while sending. Use `aria-live="polite"` for status messages and connect field errors with `aria-describedby`.

On provider acceptance, use **“Your enquiry has been received. Thank you.”** Do not claim an email was delivered to the recipient's inbox. On failure, show **“We couldn't send your enquiry. Please try again or email Mahesh directly.”** If no backend is configured, render the direct-contact layout and omit the form entirely.

Use bounded request size, an allowlist of enquiry types, server-side rate limiting backed by storage suitable for the deployment, and plain-text email bodies or escaped HTML. Do not put user-supplied values in email headers. Set the user's email as a validated reply-to, not as the sender. Do not log full contact messages by default. No response-time promise was supplied; do not add “reply within 24 hours.”

## 12. SEO and structured data

### 12.1 Metadata

| Page | Suggested title |
| --- | --- |
| Homepage | Mahesh Ravindra — Business Strategy & AI Leadership |
| Projects | Projects & Ventures — Mahesh Ravindra |
| Individual project | Project title — Mahesh Ravindra |
| Media kit | Media Kit & Speaking — Mahesh Ravindra |
| Privacy | Privacy — Mahesh Ravindra |

Suggested homepage description: “Explore Mahesh Ravindra's work in business architecture, AI automation, corporate growth, and BIZmaster Solutions.”

Use the Metadata API from Server Components. Configure `metadataBase` and canonical URLs using the actual portfolio domain when it is chosen. Do not use `bizmastersolutions.lk` as the personal site's canonical URL unless this portfolio is intentionally hosted there.

Generate a sitemap containing the homepage, project collection, all valid detail pages, media kit, and privacy page. Exclude draft or unpublished pages. Set robots rules intentionally for preview and production environments. Prepare a 1200 × 630 Open Graph image using the purple, black, and white identity.

### 12.2 Person structured data

Create JSON-LD with `@type: "Person"`, the confirmed canonical name, job title, company affiliation, language information if appropriate, and relevant expertise. Add the actual portfolio URL and approved portrait only when available. Include `sameAs` only for genuine personal-profile URLs. A company homepage is not Mahesh's personal social profile.

The company affiliation can be an `Organization` named BIZmaster Solutions with its real website URL. Do not include unverified award titles or fabricated credentials in structured data. Keep telephone and email in JSON-LD only if the owner intends them to be publicly indexed; they are already supplied for visible contact content.

When placing JSON-LD inside a script element, use serialisation that escapes `<` to `<`. Keep values sourced from controlled content records. Do not inject user-submitted contact data into page metadata or JSON-LD.

## 13. Accessibility and performance

### 13.1 Accessibility

- Use one H1 per page and an ordered H2/H3 hierarchy.
- Give each main section a heading and link it with `aria-labelledby` where useful.
- Provide a visible keyboard focus outline and a working skip link.
- Use meaningful image alt text; decorative initials, shapes, and icons are hidden from screen readers.
- Use visible form labels, descriptive errors, and appropriate input autocomplete values.
- Use at least 44 × 44 px interactive targets where possible.
- Verify normal-text contrast of at least 4.5:1 and large-text contrast of at least 3:1.
- Use the adapted pale purple foreground for dark-theme links; retain the exact brand purple as the button background with white text.
- Status is conveyed by words, not colour alone.
- Respect reduced motion and avoid content that depends on hover.
- Ensure the site remains usable at 200% zoom and at 320 px viewport width without horizontal scrolling.

### 13.2 Performance

- Render static biography and portfolio content on the server.
- Keep client-side JavaScript limited to actual interactions.
- Optimise real images through `next/image`, appropriate formats, and accurate `sizes`.
- Reserve image space to prevent layout shift.
- Avoid large background video, canvas effects, and unnecessary animation libraries.
- Load below-the-fold images lazily and preload only appropriate above-the-fold content.
- Use `next/font` or approved local fonts and avoid loading multiple unused weights.
- Keep first-release icons lightweight; inline a few SVGs rather than importing an entire icon catalogue.

Target good Core Web Vitals in production: LCP ≤ 2.5 seconds, INP ≤ 200 ms, and CLS ≤ 0.1, measured at the 75th percentile of page loads and assessed separately for mobile and desktop. These are targets to measure, not results achieved by this brief. See the [official Web Vitals guidance](https://web.dev/articles/vitals) when implementing and measuring performance.

## 14. Testing and completion checklist

### 14.1 Content completeness

- [ ] Name spelling confirmed and used consistently.
- [ ] Both supplied documents represented, including EV cafe and Green Miracle Engineering.
- [ ] Long biography and short biography included in the appropriate pages.
- [ ] All four qualifications represented without invented dates or levels.
- [ ] All three expertise groups and their detailed capabilities included.
- [ ] Both career periods included, with no invented employers.
- [ ] Six company pillars and six AI offerings present.
- [ ] All nine project/engagement records present on the work collection page.
- [ ] Source-reported stages clearly displayed, especially in-development projects.
- [ ] National, international, and 15+ years of corporate recognition represented accurately.
- [ ] Vision, mission, three values, and differentiators included.
- [ ] Six speaking formats and all five topic titles included.
- [ ] Both phone numbers, email, company website, and Colombo location correct.
- [ ] LinkedIn, WhatsApp, portraits, downloads, and client logos hidden until real assets/URLs are supplied.
- [ ] Unsupported “first” claims, absolute service guarantees, and unprovided impact metrics absent from public copy.
- [ ] Source archive remains outside public pages and assets.

### 14.2 Design and behaviour

Review at 320, 375, 768, 1024, and 1440 px widths. Check the hero title wrapping, navigation spacing, portrait fallback, card widths, long email address, and contact actions. Review every route in both themes.

Test keyboard navigation from the skip link through all actions. Confirm menu state and Escape behaviour. Confirm each anchor reaches an existing section without hiding its title beneath the header. Verify all project slugs and the unknown-project 404. Test every phone, email, external link, and real download.

If a filter exists, test every category, the reset action, and its empty state. If a form exists, test invalid data, provider failure, duplicate submission, and accepted submission. Do not claim form success during a mock request.

### 14.3 Implementation checks

Run TypeScript checking, ESLint, and a production build. Run a focused browser review of responsive layout and interactions. Check rendered metadata, sitemap, robots behaviour, and Open Graph output using the chosen real domain. Validate image loading and basic accessibility. Measure performance after actual assets and hosting are in place.

### 14.4 Information still needed before public launch

1. Preferred spelling: Ravindra or Ravinder.
2. Approved portrait and company logo file.
3. Actual portfolio domain and deployment choice.
4. Confirmed LinkedIn URL and WhatsApp number, if wanted.
5. Award details and certificates, if a detailed gallery is wanted.
6. Current project stages, client-approved evidence, and any publishable results.
7. A reviewed downloadable profile or speaker sheet, if wanted.
8. Email provider and actual privacy practices, if a form or analytics is implemented.

These gaps do not prevent building the portfolio structure, stylesheet, and sourced content. Use the specified fallbacks until the missing information is available.

## 15. Build prompt

Copy this prompt into a Next.js implementation workflow together with this file:

> Build a complete responsive personal portfolio for Mahesh Ravindra, Founder and CEO of BIZmaster Solutions, using the content and requirements in this document. Use Next.js App Router, TypeScript, and the plain CSS design system provided here. The main brand colour is the verified BIZmaster purple #5D0E8B. Create a new executive portfolio composition with a dark portrait-led hero, editorial About layout, detailed expertise cards, a career timeline, qualifications, six business pillars, six AI products, projects and ventures, recognition, vision and values, speaking, and direct contact. Implement the homepage, all-projects collection, valid project detail routes, media kit, privacy, and a useful 404. Preserve every sourced detail, including the EV cafe concept and Green Miracle Engineering, while keeping project stages and uncertain information accurate. Use a typographic MR fallback until an approved portrait is provided. Do not invent companies, achievements, clients, testimonials, dates, investment returns, LinkedIn URLs, WhatsApp availability, or unavailable downloadable files. Keep the source archive out of public pages. Make navigation, themes, links, and any implemented filters work. Add a contact form only with a real configured backend; otherwise use email and telephone links. Verify responsive behaviour, accessibility, TypeScript, ESLint, and the production build before delivery.

## 16. References and source archive

### 16.1 Source references

Uploaded source documents:

- `Mahesh Ravindra Full Profile(1).docx`, personal profile, version 1.0, document date left as a placeholder.
- `Short Bio Mahesh Ravindra(1).docx`, short founder biography.

Web design and technical references:

- [BIZmaster Solutions homepage](https://bizmastersolutions.lk/) — company identity and visual reference.
- [Reference site's inspected stylesheet](https://bizmastersolutions.lk/_next/static/chunks/434e841bf6041b35.css) — exact colour variables as inspected on 8 October 2026; asset path may later change.
- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation) — project setup and runtime requirements.
- [create-next-app CLI](https://nextjs.org/docs/app/api-reference/cli/create-next-app) — setup options.
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) — rendering and interaction boundaries.
- [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) — page metadata.
- [Next.js Image component](https://nextjs.org/docs/app/api-reference/components/image) — image sizing and the current preload API.
- [Web Vitals](https://web.dev/articles/vitals) — loading, interaction, and layout stability targets.

### 16.2 Source archive instructions

The following archive retains the extracted body paragraphs and tables from both DOCX files in document order. Word formatting is normalised to Markdown. It preserves original spellings, placeholders, overlaps, and claims for traceability. It is not publication-ready website copy; public content follows the decisions in sections 1 and 2.

### 16.3 Original Short Biography

Short Bio – Mahesh Ravinder

Founder & CEO, BIZmaster Solutions

Mahesh Ravinder is a strategic business architect and corporate growth specialist with over 18 years of experience in sales, marketing, and management. He holds an MBA from Cardiff Metropolitan University (UK) and is a Certified Professional Marketer (Asia), with additional qualifications in Financial Management from the University of Kelaniya and CIM (UK).

As the founder of BIZmaster Solutions, Mahesh has built a unique 6pillar ecosystem that transforms earlystage concepts into scalable, investorready ventures. He is currently developing several highimpact projects, including an EVfocused cafe concept and a green energy & multibrand EV repair hub (Green Miracle Engineering).

A locally and globally awardwinning leader, Mahesh is a taskoriented achiever, creative thinker, and expert in business architecture, strategy execution, and team development. His mission is to position Sri Lanka as a launchpad for innovative, sustainable businesses that create shared value for investors, entrepreneurs, and the nation.

Use this for:

Website “About” or “Founder” section

LinkedIn summary

Investor pitch deck (team slide)

### 16.4 Original Full Profile

MAHESH RAVINDRA

Personal Profile Document

Founder & CEO | BIZ Master Solutions

Strategic Business Architect | AI Technology Leader | Corporate Growth Specialist

| Document Type | Personal Profile |
| --- | --- |
| Version | 1.0 |
| Prepared For | Mahesh Ravinder |
| Date | [Insert Date] |
| Use | Investor Meetings, Partnerships, Board Introductions, Speaking Engagements, Media Kit |

1. EXECUTIVE SUMMARY

Mahesh Ravindra is a strategic business architect, AI technology leader, and corporate growth specialist with over 18 years of proven experience in sales, marketing, and corporate management.

As the Founder & CEO of BIZ Master Solutions, he has built a 6-pillar business ecosystem that transforms fragmented ideas into scalable, investable ventures — bringing together capital, talent, operations, and market access under one roof.

He is currently leading the development of Sri Lanka's first comprehensive AI Workforce Platform— delivering Agentic AI solutions, AI-to-AI communication systems, and business automation for SMEs, startups, and corporate-level enterprises.

Mahesh is a 15+ year continuous corporate award winner, recognized at SLIM National Level and International Level for excellence in sales and marketing management. He holds an MBA from Cardiff Metropolitan University (UK), is a Certified Professional Marketer (Asia), and holds CIM (UK) and Financial Management qualifications.

His mission: To position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses — powered by AI — creating shared value for investors, entrepreneurs, and the nation.

2. PERSONAL DETAILS

| Field | Detail |
| --- | --- |
| Full Name | Mahesh Ravindra |
| Title | Founder & CEO, BIZ Master Solutions |
| Location | Colombo, Sri Lanka |
| Phone | +94 777 960 231 / +94 77 960 1192 |
| Email | mahesh.rajasinha22@gmail.com |
| Website | bizmastersolutions.lk |
| LinkedIn | [Insert LinkedIn URL] |
| Nationality | Sri Lankan |

3. PROFESSIONAL SNAPSHOT

| Area | Detail |
| --- | --- |
| Years of Experience | 18+ Years |
| Current Role | Founder & CEO, BIZ Master Solutions |
| Industry Focus | AI Technology, Business Automation, Enterprise Software, SME Growth |
| Core Expertise | AI Strategy, Business Architecture, Sales & Marketing, Corporate Management |
| Qualifications | MBA (UK), CPM (Asia), CIM (UK), Financial Management (Sri Lanka) |
| Awards | SLIM National Award Winner, International Award Winner, 15+ Years Continuous Corporate Awards |
| Languages | English, Sinhala |

4. ACADEMIC & PROFESSIONAL QUALIFICATIONS

| Qualification | Institution | Field |
| --- | --- | --- |
| Master of Business Administration (MBA) | Cardiff Metropolitan University, UK | Strategic Marketing & Leadership |
| Certified Professional Marketer (CPM) | Asia Marketing Federation | Advanced Marketing Strategy |
| CIM (Chartered Institute of Marketing) | CIM, UK | Professional Marketing |
| Financial Management | University of Kelaniya, Sri Lanka | Corporate Finance & Management Accounting |

5. CORE COMPETENCIES

5.1 AI & Technology

| Area | Expertise |
| --- | --- |
| AI Strategy | Business AI adoption, Agentic AI, AI workforce design |
| Agentic Solutions | AI agents for sales, service, back-office, ERP |
| AI-to-AI Communication | B2B agent interoperability, autonomous business networks |
| ERP & Enterprise Systems | AI-integrated ERP, Touchless ERP automation |
| Digital Transformation | Legacy modernization, cloud adoption (AWS) |

5.2 Business & Strategy

| Area | Expertise |
| --- | --- |
| Business Architecture | Venture structuring, revenue modelling, scaling strategies |
| Strategy Execution | From ideation to implementation — proven delivery |
| Corporate Management | P&L responsibility, team leadership, stakeholder management |
| Financial Oversight | Budgeting, investor relations, ROI analysis |
| Team Development | Recruiting, training, mentoring high-performance teams |

5.3 Sales & Marketing

| Area | Expertise |
| --- | --- |
| Sales Strategy | B2B and B2C strategy, pipeline management, closing |
| Marketing Strategy | Brand building, digital marketing, lead generation |
| Customer Experience | CRM, retention, loyalty, churn reduction |
| Partnership Development | Channel partners, strategic alliances, joint ventures |

6. KEY ACHIEVEMENTS

6.1 Awards & Recognition

| Award | Level | Duration |
| --- | --- | --- |
| SLIM National Award Winner | National (Sri Lanka) | Sales & Marketing Management |
| International Level Award Winner | International | Sales & Marketing Management |
| Corporate Level Continuous Award Winner | Corporate | 15+ Years |
| Local & Global Recognition | Multiple | Excellence in Sales & Management |

6.2 Venture Development

| Achievement | Detail |
| --- | --- |
| BIZ Master 6-Pillar Ecosystem | Created integrated platform for capital, tech, marketing, legal, talent |
| AI Workforce Platform | 6 AI products for SMEs, startups, corporates |
| Agent Dilu Partnership | WhatsApp AI automation — first of its kind in Sri Lanka |
| Government & Corporate Projects | Currently engaged with government sector and leading private companies |

6.3 Current Projects (In Progress)

| Project | Focus | Stage |
| --- | --- | --- |
| AI Workforce Platform | Business automation for SMEs & corporates | Active deployment |
| Agentic ERP Solutions | AI agents for ERP systems | In progress with clients |
| AI-to-AI Communication Hub | B2B agent interoperability | In development |
| Government Sector Projects | AI automation for public sector | In progress |
| Corporate Level Projects | Leading private companies | In progress |

7. PROFESSIONAL EXPERIENCE

7.1 Founder & CEO — BIZ Master Solutions

Dates: July 2023 – PresentLocation: Colombo, Sri Lanka

Overview:

Leading a 6-pillar business ecosystem that transforms businesses into industry leaders through AI-powered automation, strategic growth, and comprehensive execution.

Tech Hub Division — AI Workforce Platform:

| Product | Function |
| --- | --- |
| AI Sales Agent | Calls, qualifies, follows up, books meetings 24/7 |
| AI Call Operator | Never misses a call; answers, routes, books, escalates |
| WhatsApp Commerce AI | Sales, takes orders, auto-replies, manages customers |
| Touchless ERP Bot Suite | Automates finance, HR, procurement, inventory |
| AI Personal Assistant | Handles admin, email, calls, research |
| AI-to-AI Communication Hub | Business at the speed of thought |

Key Achievements:

Built AI Workforce Platform with 6 product doors

Selected for AI Expo (Government-organized, Mobitel-sponsored)

Onboarding government sector and corporate-level clients

Developing Agentic AI solutions for ERP and enterprise systems

7.2 Senior Corporate Roles — Multiple Leading Companies

Dates: 2005 – 2023Location: Colombo, Sri Lanka

Overview:

Over 18 years of proven experience in sales, marketing, and corporate management across leading Sri Lankan and multinational corporations.

Key Responsibilities:

Led teams of 50+ professionals

Managed P&L responsibility for business units

Exceeded sales targets consistently year after year

Implemented strategic initiatives across multiple industries

Awards:

Corporate Level Continuous Award Winner — 15+ years

SLIM National Award Winner — Sales & Marketing Management

International Level Award Winner — Sales & Marketing Management

Full corporate history available on request.

8. BIZMASTER SOLUTIONS — 6-PILLAR ECOSYSTEM

| Pillar | Focus |
| --- | --- |
| 1. BIZ tech Hub | AI, ERP, software, web & mobile apps, cloud, e-commerce |
| 2. BIZ Creative Forge | Branding, digital marketing, social media, graphic design |
| 3. BIZ Strategic Growth | Sales & marketing strategy, execution, government liaison |
| 4. BIZ Advisor | Legal, accounting, tax, HR, compliance, asset management |
| 5. BIZ Investor & Venture Hub | Investor matchmaking, venture management, ROI oversight |
| 6. BIZ Academy & Forum | Training, networking, business education, events |

Positioning Line: "AI workforce for repetitive work. Humans handle exceptions, relationships, and approvals."

9. AI PRODUCT PORTFOLIO

| # | Product | Core Promise |
| --- | --- | --- |
| 1 | AI Sales Agent | Calls, qualifies, follows up, books meetings |
| 2 | AI Call Operator | Never misses a call; answers, routes, books, escalates |
| 3 | WhatsApp Commerce AI | Sells, takes orders, auto-replies, manages customers |
| 4 | Touchless ERP Bot Suite | Bots run back-office ERP work |
| 5 | AI Personal Assistant | Handles admin, email, calls, back-office, research |
| 6 | AI-to-AI Communication Hub | AI agents talk to other companies' AI agents |

10. VISION & MISSION

Vision

To position Sri Lanka as a launchpad for innovative, scalable, and sustainable businesses — powered by AI — creating shared value for investors, entrepreneurs, and the nation.

Mission

To empower businesses at every stage — SME, startup, and corporate — with AI-powered automation, strategic execution, and comprehensive management, ensuring continuous growth and market leadership.

Core Values

| Value | Description |
| --- | --- |
| Collaboration | Partnering for mutual success |
| Innovation | Leveraging technology for scalable solutions |
| Integrity | Transparent, ethical, client-centric operations |

11. WHAT SETS MAHESH APART

| Differentiator | Detail |
| --- | --- |
| 18+ Years Corporate Experience | Proven track record across leading companies |
| 15+ Years Continuous Awards | SLIM National & International recognition |
| Strategic Business Architect | Designs ventures from ground up: funding, operations, talent, exit |
| Task-Oriented Achiever | Measurable outcomes, not just reports |
| Creative Thinker + Executor | Innovative solutions, delivered on time and on budget |
| AI Technology Leader | Agentic AI, ERP, AI-to-AI communication |
| Trusted by Partners | Proven ability to structure deals and attract capital |
| Multi-Language AI | English, Sinhala, Tamil — regional reach |

12. CURRENT ENGAGEMENTS

| Engagement | Status |
| --- | --- |
| Government Sector AI Projects | In Progress |
| Corporate-Level Private Company Projects | In Progress |
| Agentic AI for ERP Systems | In Progress |
| AI-to-AI Communication Projects | In Development |
| SME & Startup AI Onboarding | Active |

13. SPEAKING & THOUGHT LEADERSHIP

Mahesh is available for:

Keynote Speaking — AI for Business, Digital Transformation, SME Growth

Panel Discussions — AI Adoption, Business Automation, Future of Work

Workshops — AI Strategy, Agentic AI, ERP Integration

Corporate Training — Sales Excellence, Marketing Strategy, Leadership

Media Interviews — AI Trends, Sri Lankan Business Landscape

Podcast Appearances — Entrepreneurship, AI, Business Growth

Speaking Topics:

"AI Is Not the Future of Business — It Is the Present"

"Why SMEs and Startups Are Moving Faster Than Corporates in AI"

"Agentic AI: The Next Evolution of Business Automation"

"AI-to-AI Communication: Business at the Speed of Thought"

"From Corporate Leader to Founder: Lessons Learned"

14. CONTACT INFORMATION

| Channel | Detail |
| --- | --- |
| Phone | +94 777 960 231 / +94 77 960 1192 |
| Email | mahesh.rajasinha22@gmail.com |
| Website | bizmastersolutions.lk |
| LinkedIn | [Insert LinkedIn URL] |
| Location | Colombo, Sri Lanka |

15. REFERENCES

Available on request.

16. FINAL STATEMENT

"I have spent 18 years in corporate. I won awards. I led teams. I grew businesses. But I saw a problem — businesses were losing money not because they were bad at what they do, but because they missed calls, missed messages, and missed follow-ups.

So I built BIZ Master Solutions. Today, we deliver AI-powered business automation for SMEs, startups, and corporates. Six AI products. One platform.

We are working with government and corporate clients. And we are just getting started."

— Mahesh Ravindra

Document Prepared For: Mahesh RavinderTitle: Founder & CEO, BIZ Master SolutionsVersion: 1.0Date: [Insert Date]Classification: Professional Profile — Public Use

BIZ Master Solutions — Your AI Workforce. Your Rules. Your Growth. 🇱🇰
