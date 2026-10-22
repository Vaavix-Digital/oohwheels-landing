# oohwheels — Project Documentation & Architecture Guide

> **Project Name:** oohwheels Landing & Web Experience  
> **Repository:** `Vaavix-Digital/oohwheels-landing`  
> **Framework:** Next.js 16.4.2 (Turbopack, App Router) • React 19.3.0 • Tailwind CSS v4  
> **Version:** 0.1.0  
> **Last Updated:** October 2026  

---

## 1. Project Overview

**oohwheels** is a high-converting, gamified landing and web experience for a modern driving theory test preparation mobile application. Inspired by the engaging mechanics of Duolingo, the platform transforms dry, intimidating highway codes and road regulations into short interactive games, bite-sized lessons, animated traffic scenes, and real mock tests across 10 countries and 65 regional licensing authorities.

---

## 2. Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.4.2** | App Router architecture with Turbopack bundler, partial prerendering, and component caching |
| **UI Library** | **React 19.3.0** | Server & Client Components (`"use client"` where interactive state/animations are needed) |
| **Styling** | **Tailwind CSS v4** | Modern theme configuration with custom color tokens, smooth gradients, and 3D button edges |
| **Animations** | **Framer Motion 14.4.0** | Micro-interactions, spring transitions, phone carousel switches, respecting `prefers-reduced-motion` |
| **Icons** | **Lucide React 1.59.0** | Stroke-customized modern iconography |
| **Typography** | **Google Fonts** | `Fredoka` (Display & headings) and `Nunito` (Body copy, UI labels, buttons) |
| **Language** | **TypeScript 5.x** | Strict mode typing with full safety across all routes and components |

---

## 3. Credentials & Secrets Audit

> [!NOTE]
> **Zero Private Credentials or Secrets:**  
> This project is a **100% client-safe static landing and web experience**. It does **not** connect directly to private databases, require server-side secrets, API tokens, or hardcoded sensitive credentials.

### Production Store & Service Placeholders to Configure:
When publishing the mobile app to production, update the placeholder links in the codebase with your live registered IDs:

| Item | Current Value (Placeholder) | Where to Update |
| :--- | :--- | :--- |
| **iOS App Store URL** | `https://www.apple.com/app-store/` | `src/components/AppNotificationBar.tsx`<br>`src/components/MainContent.tsx`<br>`src/components/CtaSection.tsx`<br>`src/components/DownloadBanner.tsx` |
| **Google Play URL** | `https://play.google.com/store` | `src/components/AppNotificationBar.tsx`<br>`src/components/MainContent.tsx`<br>`src/components/CtaSection.tsx`<br>`src/components/DownloadBanner.tsx` |
| **Google Analytics** | Not hardcoded | Can be placed in `src/app/layout.tsx` via `next/script` |

---

## 4. Routing & All Redirections

### A. Next.js Server Redirections (`next.config.ts`)
The project includes 12 automated internal redirections for SEO preservation, backwards compatibility, and clean short URLs:

```ts
// Defined in next.config.ts
redirects: [
  // Permanent 301 Redirects (SEO Canonical Preservation)
  { source: "/reviews",          destination: "/testimonials",     permanent: true },
  { source: "/tips",             destination: "/test-tips",        permanent: true },
  { source: "/stories",          destination: "/success-stories",  permanent: true },
  { source: "/guide",            destination: "/app-guide",        permanent: true },
  { source: "/about",            destination: "/about-us",         permanent: true },
  { source: "/support",          destination: "/help",             permanent: true },
  { source: "/privacy-policy",   destination: "/privacy",          permanent: true },
  { source: "/terms-of-service", destination: "/terms",            permanent: true },
  { source: "/tos",              destination: "/terms",            permanent: true },

  // Temporary 307 Anchor Section Redirects
  { source: "/how",              destination: "/features#how",     permanent: false },
  { source: "/how-it-works",     destination: "/features#how",     permanent: false },
  { source: "/scenes",           destination: "/features#scenes",  permanent: false },
]
```

### B. Smart App Banner Store Routing (`AppNotificationBar.tsx`)
When a user clicks the **GET** button on the smart notification bar:
- **iPhone, iPad, iPod, Mac (`iOS` / `macOS`)**: Automatically opens the **Apple App Store**.
- **Android devices (`Android OS`)**: Automatically opens the **Google Play Store**.
- **Windows / PC / Linux**: Defaults smartly to Google Play Store.

### C. Anchor & In-Page Navigation
- **`#how`**: On the `/features` page, the navigation bar tracks `#how` with an `IntersectionObserver` to highlight "How it works" dynamically during scroll.
- **`#main`**: Skip-to-content accessibility target anchored at the start of `<main>`.

### D. All 17 Application Routes (`src/app/`)
| Path | Purpose |
| :--- | :--- |
| `/` | Primary interactive landing page with Hero phone mockup, Zig-zag animated scenes, Quiz, Mock Test, Country Marquee, and Testimonials |
| `/features` | Deep dive into app capabilities, interactive theory modes, video breakdowns, and `#how` workflow |
| `/pricing` | Tier comparison (Free tier vs Premium $3.99/mo), FAQ accordion, feature checklists |
| `/countries` | Country hub exploring all 10 supported regions with search and fast filter |
| `/countries/[slug]` | Dynamic country landing pages (`/countries/gb`, `/countries/in`, etc.) tailored to each licensing agency |
| `/app-guide` | Interactive screen-by-screen visual guide to the mobile application |
| `/help` & `/faq` | Knowledge base, search, categorized FAQs, contact link |
| `/about-us` | Company mission, backstory, team values, and pedagogy approach |
| `/contact` | Inquiry form, social channels, and customer support channels |
| `/gallery` | Screenshots gallery showcasing high-resolution UI screens |
| `/blog` | Driving tips, rule changes, theory test survival guides |
| `/testimonials` | Verified student pass reviews and success ratings |
| `/test-tips` | Essential test-day advice, hazard perception tips, and road sign memory tricks |
| `/success-stories` | Detailed student spotlights and pass narratives |
| `/privacy` | Complete GDPR/CCPA compliant privacy policy |
| `/terms` | Official terms of service and subscription details |

---

## 5. Summary of What Has Been Done

### 1. App Notification Bar (Smart Promotion Banner)
- **Design Inspiration**: Designed after mobile smart app banners (similar to Cure.fit / native iOS Safari banners).
- **Instant SSR Load (0ms Delay)**: Rendered directly in HTML without layout shifts (`CLS`) or delayed hydration pop-ins.
- **Branding & 3D Styling**:
  - Squircle app icon featuring the animated **Whizzy mascot** against `#1F2D24` tire dark green.
  - Title `oohwheels app` with a 3D `FREE` badge.
  - Tagline `Plan & track lessons, practice road signs & pass your test!`.
  - Gold star ratings `★★★★★ (4,920)`.
  - Signature 3D Green **GET** pill button (`#58CC02` with `#3F9400` drop-shadow edge, bold Nunito typography).
- **Smart Route Restoration**: If dismissed on one page, navigating to the **next page** automatically restores the banner so new pages always promote the app seamlessly.

### 2. Base44 Hero Section Matching
- Matches the reference Base44 landing page typography and grid hierarchy:
  - Heading: `.ow-h1` styled with `clamp(40px, 6vw, 72px)` and `line-height: 1.02`.
  - Natural 3-line text wrap without artificial line breaks:
    - Line 1: `Pass your driving`
    - Line 2: `test without the`
    - Line 3: `boring bits.`
  - Container width matched to `1200px` (`ow-wrap`).

### 3. Interactive Phone Mockup Carousel
- Embedded mobile phone frame with 4 active screens:
  - **Screen 0 (Learn)**: 5-node gamified learning path (`Check`, `Check`, `START`, `Lock`, `Lock`) with bottom tab navigation bar (`House`, `Dumbbell`, `Trophy`, `BookOpen`, `User`).
  - **Screen 1 (Watch)**: Animated give-way junction with moving car SVG simulation.
  - **Screen 2 (Practise)**: Multiple-choice quiz question with interactive option selection and instant feedback.
  - **Screen 3 (Mock Test)**: Circular SVG readiness gauge (`82% Readiness`), topic breakdown progress bars, and `Review answers` button.
- Auto-advances every 5.2 seconds; pauses on hover or when `prefers-reduced-motion` is active.

### 4. Codebase & Repository Cleanup
- **Purged 24 Scratch Files**: Removed all temporary scraping and debugging scripts (`base44*`, `check_*.js`, `dump_*.js`, `extract_*.js`, `find_*.js`, `update_features.js`).
- Committed cleanly to Git on branch `main` and pushed to GitHub (`Vaavix-Digital/oohwheels-landing`).
- Fixed console script errors in React 19 / Next.js 16.

---

## 6. How to Run Locally

### Prerequisites
- Node.js 18.18+ or 20.x
- npm, yarn, or pnpm

### Installation & Execution
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. View in browser
# Open http://localhost:3000
```

### Production Build & Linting
```bash
# Typecheck and build optimized static bundle
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```

---

## 7. Deployment Guide (Vercel)

This repository is optimized for one-click deployment on **Vercel**:
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New Project** → Import `Vaavix-Digital/oohwheels-landing`.
3. Keep default settings (Framework: Next.js, Build Command: `next build`).
4. Click **Deploy**.
5. Every future `git push` to `main` will automatically trigger a preview and production build!
