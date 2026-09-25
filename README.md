# Nagar Parishad Dhamangaon Railway — Official Website

A static, frontend-only website for Nagar Parishad Dhamangaon Railway (Dist. Amravati, Maharashtra), built with
**Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

There is no backend, database, authentication or API. All content lives in TypeScript data files, and all
documents and images live in `/public`.

## Getting started

```bash
npm install        # install dependencies
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm run start      # preview the ./out folder
```

After `npm run build`, upload the contents of `out/` to any static host (NIC server, Apache, Nginx, S3, Netlify…).

## Folder structure

```
public/
  documents/          PDFs: notices/, circulars/, forms/, tenders/
  images/             gallery/, people/, og-image.svg, emblem.svg
src/
  app/                Routes (one folder per page) + sitemap.ts, robots.ts, manifest.ts
  components/
    layout/           TopBar, Header (desktop + mobile menu), Footer, LanguageSwitcher
    ui/               PageHero, Breadcrumbs, SectionHeading, Reveal (animations), Icon, Seal, ServiceDetailLayout
    cards/            DocumentCard, ServiceCard, DepartmentCard, SchemeCard, PersonCard
    features/         DocumentExplorer, TenderList, GalleryGrid, WardMembersGrid, SearchClient, ContactForm
    home/             HeroSection, NoticeTicker, TownSkyline
  data/               ← ALL EDITABLE CONTENT
  i18n/               English / Marathi / Hindi dictionaries + language provider
  lib/                SEO helpers, client-side search index, utilities
  types/              Shared TypeScript types
```

## Updating content (no coding needed beyond editing a list)

| What                         | File                          |
| ---------------------------- | ----------------------------- |
| Address, phones, email, stats| `src/data/site.ts`            |
| Menu                         | `src/data/navigation.ts`      |
| President / Chief Officer    | `src/data/leadership.ts`      |
| Ward members                 | `src/data/wardMembers.ts`     |
| Ward population & voter list | `src/data/wards.ts`           |
| Organisation hierarchy       | `src/data/orgStructure.ts`    |
| History, past Presidents     | `src/data/history.ts`         |
| Water supply schedule        | `src/data/waterSchedule.ts`   |
| Departments (auto pages)     | `src/data/departments.ts`     |
| Citizen services             | `src/data/services.ts`        |
| Schemes                      | `src/data/schemes.ts`         |
| Notices                      | `src/data/notices.ts`         |
| Circulars / GRs              | `src/data/circulars.ts`       |
| Download forms               | `src/data/forms.ts`           |
| Tenders                      | `src/data/tenders.ts`         |
| Government links             | `src/data/links.ts`           |
| Gallery                      | `src/data/gallery.ts`         |
| Emergency contacts           | `src/data/emergency.ts`       |
| UI text (EN / मराठी / हिन्दी) | `src/i18n/dictionaries.ts`    |

**To publish a notice:** copy the PDF into `public/documents/notices/`, then add an entry to `src/data/notices.ts`
with `file: "/documents/notices/<name>.pdf"`. Lists are sorted by date automatically, and the notice also appears
on the home page, in the ticker and in search.

**Languages:** data fields use `{ en, mr, hi }`. `mr` and `hi` are optional and fall back to English. Visitors
choose a language in the top bar, and the choice is remembered in their browser.

## ⚠ Before going live

The names, phone numbers, emails, ward areas, statistics, tender details and PDFs included here are **sample
placeholders**. Values marked `VERIFY` in the data files must be replaced with official information. Replace the
placeholder SVG images and the generated sample PDFs with real photographs and signed documents, and set the
production domain in `src/data/site.ts` (`url`).
