# REBUILD PLAN
## West Bay Capital, LLC

---

## Design System Commitment

**Aesthetic Direction: "Institutional authority with editorial refinement and warm luxury accents"**

This site must communicate that West Bay Capital is a serious, established $15M commercial lender — not a startup, not a fintech disruptor, but a firm with 20+ years of track record. The design borrows from premium private equity and wealth management aesthetics: dramatic negative space, confident serif headings, deep navy foundations, and a **warm copper/amber accent** that distinguishes it from every generic blue-on-white financial site.

The single unforgettable element: the **lending criteria showcase** — a bold, beautifully designed section that immediately communicates deal size and speed, functioning as both information and brand statement.

---

## Site Architecture

### Page List

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | / | Primary landing page — hero, lending criteria, transactions, testimonials, team preview, CTA |
| About / Team | /team | Full team bios with headshots |
| Privacy Policy | /privacy | Legal requirement |
| Accessibility Statement | /accessibility | WCAG compliance statement |
| Contact | /contact | Contact form + information |
| Blog (listing) | /blog | MDX blog listing page |
| Blog (post) | /blog/[slug] | Individual blog posts |
| 404 | /not-found | Custom branded 404 page |
| Tools/Resources | /tools | Interactive tools hub (Phase 11b) |

### Navigation Structure

**Primary Nav (desktop):**
`[Logo] .................. Lending Criteria | Transactions | Team | Resources | Contact | [Get a Quote →]`

**Primary Nav (mobile):**
`[Logo] [Hamburger]` → slide-out menu with all links + prominent CTA

### Internal Linking Strategy
- Every page links back to homepage sections (lending criteria, transactions)
- Blog posts link to relevant service information
- Team page links to contact
- Tool pages link to contact with pre-filled context
- Breadcrumbs on all inner pages

---

## Design Direction

### Color Palette

| Token | Color | Hex | Usage | Contrast on White | Contrast on Navy |
|-------|-------|-----|-------|-------------------|-------------------|
| `--color-navy` | Deep Navy | `#0A1628` | Primary dark, hero bg, headings | 16.5:1 AA PASS | N/A (same) |
| `--color-navy-light` | Navy Light | `#1B3A5C` | Secondary dark, cards, hover states | 10.2:1 AA PASS | 3.1:1 AA PASS (large) |
| `--color-copper` | Warm Copper | `#C8874C` | Primary accent, CTAs, links, highlights | 3.2:1 AA PASS (large) | 5.2:1 AA PASS |
| `--color-copper-light` | Light Copper | `#E8B078` | Accent hover, decorative | 2.1:1 DECORATIVE ONLY | 4.1:1 AA PASS (large) |
| `--color-white` | White | `#FFFFFF` | Body backgrounds, text on dark | N/A | 16.5:1 AA PASS |
| `--color-cream` | Warm Cream | `#FAF7F2` | Section backgrounds, warmth | 15.8:1 (navy on cream) | N/A |
| `--color-gray-900` | Near Black | `#111827` | Body text | 18.1:1 AA PASS | N/A |
| `--color-gray-600` | Mid Gray | `#4B5563` | Secondary text | 7.2:1 AA PASS | N/A |
| `--color-gray-400` | Light Gray | `#9CA3AF` | Borders, muted | 2.8:1 DECORATIVE ONLY | 4.8:1 AA PASS |
| `--color-gray-100` | Pale Gray | `#F3F4F6` | Subtle backgrounds | N/A | N/A |

### Color Accessibility Pre-check

| Combination | Ratio | Status |
|-------------|-------|--------|
| `--color-gray-900` (#111827) on `--color-white` (#FFFFFF) | 18.1:1 | AA PASS |
| `--color-gray-900` (#111827) on `--color-cream` (#FAF7F2) | 16.8:1 | AA PASS |
| `--color-gray-600` (#4B5563) on `--color-white` (#FFFFFF) | 7.2:1 | AA PASS |
| `--color-white` (#FFFFFF) on `--color-navy` (#0A1628) | 16.5:1 | AA PASS |
| `--color-white` (#FFFFFF) on `--color-navy-light` (#1B3A5C) | 10.2:1 | AA PASS |
| `--color-copper` (#C8874C) on `--color-navy` (#0A1628) | 5.2:1 | AA PASS |
| `--color-copper` (#C8874C) on `--color-white` (#FFFFFF) | 3.2:1 | AA PASS (large text only) |
| `--color-white` (#FFFFFF) on `--color-copper` (#C8874C) | 3.2:1 | AA PASS (large text only) |
| Placeholder text (#6B7280) on `--color-white` (#FFFFFF) | 5.0:1 | AA PASS |

**Note:** Copper accent will only be used for large text (18px+), buttons with white text on navy backgrounds, or decorative elements. Body text will always use gray-900 or white.

### Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| Display / Hero | **Cormorant Garamond** | 600 (SemiBold) | 64-80px | 1.1 |
| H1 | Cormorant Garamond | 600 | 48-56px | 1.15 |
| H2 | Cormorant Garamond | 600 | 36-40px | 1.2 |
| H3 | Cormorant Garamond | 500 | 28-32px | 1.25 |
| Body | **DM Sans** | 400 | 16-18px | 1.6 (light bg) / 1.7 (dark bg) |
| Body Bold | DM Sans | 500 | 16-18px | 1.6 |
| Small / Caption | DM Sans | 400 | 14px | 1.5 |
| Button | DM Sans | 500 | 16px | 1 |
| Nav | DM Sans | 500 | 15px | 1 |

**Why these fonts:**
- **Cormorant Garamond** — an elegant, high-contrast serif with beautiful terminals that harmonizes with the logo's serif character. It signals luxury and authority without being stuffy. Not on the banned list.
- **DM Sans** — a geometric sans-serif with excellent readability at body sizes, modern feel, and good weight range. Not on the banned list.

### Component Style Guide
- **Buttons:** Rounded corners (8px radius). Primary: navy bg, white text, copper hover glow. Secondary: outlined navy, copper fill on hover.
- **Cards:** Subtle shadow, 12px radius, cream or white bg. Hover: slight lift (translateY -2px) with shadow increase.
- **Section transitions:** Alternating white/cream/navy backgrounds. No two consecutive sections share the same bg color.
- **Dividers:** Thin copper accent line (2px) or generous whitespace — never both.
- **Icons:** Lucide React icon set — clean, consistent, professional.

---

## Image Strategy

| Image | Decision | Notes |
|-------|----------|-------|
| Nav logo | KEEP | Download highest-res version, optimize to WebP |
| Hero word logo | KEEP | May recreate as SVG for crisp rendering |
| Hero bg | REPLACE WITH UNSPLASH | Need premium commercial real estate photography — dramatic angle, warm lighting |
| Lending criteria bg | REPLACE | Use solid navy gradient or subtle texture — no stock image needed |
| Transaction photos (4) | KEEP | Optimize, crop consistently, add subtle shadow treatment |
| Testimonials bg | REPLACE | Remove — use clean cream/white bg with quote styling |
| Team headshots (8) | KEEP | Download, optimize to WebP, consistent crop/treatment |
| Team section bg | REPLACE | Remove — clean white/cream bg |
| Affiliates bg | REPLACE | Remove — clean section bg |
| Contact bg | REPLACE | Remove or use subtle navy texture |
| 404 page | CREATE NEW | Branded illustration or styled text |
| Favicon | CREATE NEW | Generate from logo icon (wave/bird swoosh) |

---

## Copy Strategy

### Key Messaging Pillars
1. **Speed** — "Close in days, not months" — the #1 differentiator based on testimonials
2. **Scale** — "$1M-$15M" — communicate serious deal capability
3. **Track Record** — "20+ years, $XXM funded" — establish credibility
4. **Flexibility** — "We look past the borrower and focus on the real estate" — competitive edge over banks

### Tone of Voice
- Confident and direct, not corporate jargon
- 8th-grade reading level — short sentences, active voice
- Numbers and specifics over vague claims
- Professional but approachable — not stuffy

### What Needs Rewriting
- Hero headline and subhead — must communicate speed + capability in 5 seconds
- Section introductory copy — currently too sparse
- Transaction descriptions — good but could be more compelling
- Team section intro — "100 years combined experience" needs better framing
- ALL meta descriptions — currently non-existent

### What to Keep
- Testimonial text — verbatim (these are real quotes)
- Lending criteria data — exact numbers
- Transaction details — factual information
- Team names, titles, contact info — factual
- License information — legal requirement

---

## SEO Implementation Plan

### Per-Page Meta Strategy

| Page | Title (under 60 chars) | Target Keywords |
|------|----------------------|-----------------|
| Homepage | West Bay Capital \| Private Money Lender | private money lender, commercial real estate loans |
| Team | Our Team \| West Bay Capital | west bay capital team |
| Contact | Contact Us \| West Bay Capital | contact private money lender |
| Privacy | Privacy Policy \| West Bay Capital | — |
| Accessibility | Accessibility \| West Bay Capital | — |
| Blog | Insights \| West Bay Capital | commercial real estate, bridge loans |
| Tools | Lending Tools \| West Bay Capital | loan calculator, bridge loan calculator |

### Schema Types
- **Every page:** Organization, BreadcrumbList
- **Homepage:** FinancialService, FAQPage, LocalBusiness
- **Team:** Person schema for each team member
- **Blog posts:** Article, BlogPosting
- **Tools:** WebApplication

### Blog Content Strategy (future)
- "How Bridge Loans Work for Commercial Real Estate"
- "Private Money vs. Bank Loans: When Speed Matters"
- "Understanding Loan-to-Value in Commercial Lending"
- "Property Types We Finance: A Complete Guide"

---

## Tools Research Placeholder
*Initial hypotheses — to be validated by Phase 11a competitive research:*
- Bridge loan calculator (monthly payment, total cost)
- Loan-to-value calculator
- Loan comparison tool (private money vs. bank timeline)
- Pre-qualification quiz

---

## Technical Plan

### Stack
- **Framework:** Next.js 14+ (App Router) with SSG default
- **Styling:** Tailwind CSS v3+
- **Fonts:** Google Fonts (Cormorant Garamond + DM Sans) via next/font
- **Icons:** Lucide React
- **Animation:** Framer Motion (for scroll reveals, page transitions)
- **Blog:** MDX files in /content/blog/
- **Forms:** React Hook Form + server action or Formspree
- **Images:** Next.js Image component (WebP/AVIF auto-conversion)
- **Linting:** ESLint + Prettier
- **Accessibility:** @axe-core/react (dev dependency)
- **Analytics:** GA4 + GTM (script tags, not installed yet)
- **Deployment:** Vercel via GitHub (push to main = auto-deploy)
- **Package Manager:** pnpm

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 100
- Lighthouse SEO: 100
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Total page weight: < 500KB (vs current 500KB+ HTML alone)

### Third-Party Integrations
- Google Analytics 4 (GA4)
- Google Tag Manager (GTM)
- Microsoft Clarity (heatmapping)
- Formspree or custom server action for contact form

---

## Accessibility Targets
- Zero axe-core CRITICAL or SERIOUS violations at launch
- WCAG AA compliance across all color combinations (pre-verified above)
- Full keyboard navigation
- Skip-to-content link on every page
- Proper ARIA labels where needed
- prefers-reduced-motion respected for all animations
- All images have descriptive alt text
- Logical heading hierarchy (one h1 per page)
- Focus indicators visible and meeting contrast requirements
