# ATRIOB2B - AI Coding Agent Instructions

## Project Overview

ATRIOB2B is an institutional website for a B2B consultancy offering three independent service pillars:
1. **BPO Financeiro** (Financial BPO) - Led by Eder
2. **Controladoria** (Financial Intelligence & KPIs) - Led by Suan  
3. **Desenvolvimento de Software** (Software Development) - Led by Sandro

**Business Model**: Modular contracting - clients can engage one or multiple service areas independently.

**Target Audience**: Small and medium-sized businesses (PMEs) in Brazil.

**Brand Voice**: Formal corporate, light, didactic, results-oriented.

## Tech Stack

- **Framework**: Vue 3 (component-based UI)
- **Build Tool**: Vite (zero-config, instant HMR)
- **Deployment**: GitHub Pages (static hosting)
- **Contact Form**: Formspree or Web3Forms (free open-source form handling)
- **Contact CTAs**: Direct mailto/tel/WhatsApp links
- **WhatsApp Number**: +55 11 98765-4321 (placeholder)

This is a minimal-service stack using only open-source tooling. No Vue UI component library required - build custom components.

## Project Structure (To Be Generated)

The site requires these pages:
- **HOME** - Hero section with value proposition and CTAs
- **SOBRE** (About) - Company story, team (Sandro, Suan, Eder), mission/vision
- **SERVIÇOS** (Services) - Three sections with Basic/Pro/Premium tiers for each pillar
- **CONTATO** (Contact) - Form + WhatsApp button
- **BLOG** - Future expansion (leave structure empty)

## Brand Colors (Mandatory)

Use the exact palette from `color_palettecss.txt`:
- `--deep-space-blue: #293b56` (primary - headers, nav)
- `--light-blue: #93b7be` (secondary - accents)
- `--sunlit-clay: #dda15e` (CTAs, highlights)
- `--soft-blossom: #efb9cb` (subtle backgrounds)
- `--dark-spruce: #26532b` (footer, contrast)

## Service Tier Structure

Each service pillar has three tiers following this pattern:

**BPO Financeiro** (`serviços_bpo.txt`):
- Basic: Daily operations (AP/AR, bank reconciliation, WhatsApp support)
- Pro: + ERP implementation, financial reports, process review, training
- Premium: + Continuous treasury consulting, advanced ERP integration, monthly efficiency reviews

**Controladoria** (`serviços_controladoria.txt`):
- Basic: DRE creation, standard Power BI dashboard, monthly meetings
- Pro: + Custom KPIs, budget tracking, bi-weekly follow-ups
- Premium: + Advanced analysis models, continuous forecasting, CFO-lite service, weekly board meetings

**Desenvolvimento** (`serviços_desenvolvimento.txt`):
- Basic: Simple ERP configurations, basic data extraction, system onboarding support
- Pro: + System integrations, process automation, custom Power BI/ERP KPIs
- Premium: + Custom software development, advanced automation/database projects, continuous monitoring

## Content Guidelines

**Homepage Headline**: "Estrutura, dados e tecnologia para acelerar empresas."

**Subheadline**: "Consultoria completa em BPO financeiro, Controladoria e Desenvolvimento de Software. Soluções modulares, sob demanda."

**Primary CTAs**:
- "Fale com um consultor" (WhatsApp)
- "Solicite uma proposta" (Contact form)

## Component Organization

- Create reusable components for service tier cards (Basic/Pro/Premium)
- Navigation should be simple, responsive, and accessible
- Use placeholders for images and icons
- Add clear section headings, subheadings, and CTAs throughout

## Development Workflow

Since this is a Vite + Vue 3 project:
- Run dev server: `npm run dev` or `vite`
- Build for production: `npm run build` or `vite build`
- Preview production build: `npm run preview` or `vite preview`

## Key Reference Files

- `prompt.txt` - Original project requirements (in Portuguese)
- `proposta_inicial.txt` - Site structure proposal
- `tech_stack.txt` - Technical architecture decisions
- `color_palettecss.txt` - Brand color palette (CSS variables)
- `serviços_bpo.txt` - BPO service tier definitions
- `serviços_controladoria.txt` - Controladoria service tier definitions
- `serviços_desenvolvimento.txt` - Development services (empty, to be defined)

## Language & Localization

All content is in **Brazilian Portuguese**. Use formal business language that is approachable and results-focused. Avoid overly technical jargon - the goal is to be didactic and clear for SMB owners.

## Future Expansion

The project should be structured for easy addition of:
- Blog/content section with articles on ERP, DRE, KPIs, Power BI, treasury management
- Case studies section (dashboards, before/after processes, automation demos)
- Additional service pages as offerings expand
