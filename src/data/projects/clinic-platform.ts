import type { ProjectDetail } from "./types";

export const clinicPlatformProject: ProjectDetail = {
  id: "clinic-platform",
  name: "Multi-clinic SSR web platform",
  accent: "#fda4af",
  stack: [
    "Directus GraphQL",
    "FormKit",
    "Headless UI",
    "SSR",
    "reCAPTCHA v3",
    "JSON-LD",
    "Google Tag Manager",
    "REST",
  ],
  headline:
    "A production SSR web platform for a multi-location dental clinic group. One codebase, three clinic brands, four languages, all content from a headless CMS.",
  intro: [
    "I was the sole owner of the client application for this production platform. One SSR app serves **three clinic brands** and **four languages**. Page content comes from **Directus** via typed **GraphQL** at request time. Editors publish through the CMS and the site renders without redeploying copy changes.",
    "The app follows an **Atomic Design** hierarchy and resolves clinic context from the route (`/[clinic]/…`) through a lightweight composable, no global state store. Data is fetched per page and cached through async data helpers; global bootstrap content is prefetched once and shared across routes. Per-clinic branding applies through **CSS custom properties** on the root element, so one codebase renders three distinct visual identities.",
  ],
  highlight:
    "Four locales each have fully localized path segments, including Cyrillic slugs. Switching language navigates to the equivalent page, not the homepage.",
  sections: [
    {
      paragraphs: [
        "Four locales (**EN**, **PL**, **BG**, **RO**) each have fully localized URL structures, not just translated strings. Route templates are declared per page type (`/offer/`, `/oferta/`, `/оферта/`, etc.), including Cyrillic slugs for Bulgarian.",
        "CMS entities carry language-specific slugs, so switching language must land the user on the equivalent page. Detail pages fetch slug translations from **GraphQL** at SSR time and attach them to route metadata. The language switcher uses this metadata to navigate to the correct localized URL, while a content translator composable resolves CMS translation arrays into the active locale's fields.",
      ],
    },
    {
      paragraphs: [
        "SEO was treated as an engineering concern. A **Nitro server route** queries all routable CMS entities and generates a **dynamic sitemap** for every clinic × locale × slug combination, reading the same i18n route templates as the client, respecting per-offer language availability, and cached with **SWR** (60s TTL).",
        "A CMS-driven regex mapping resolves the correct **canonical URL** for each page. **hreflang** alternate links preserve URL hashes on team profile pages (where in-page tabs use `#pricing`, `#addresses`, `#gallery`) by extending the default i18n head output to append the active hash to each language entry. Additional layers include **JSON-LD** structured data from CMS, robots.txt configuration, and trailing-slash enforcement backed by a **`MutationObserver`** for dynamically rendered anchor tags.",
      ],
    },
    {
      paragraphs: [
        "The most complex interactive feature is a medical imaging referral form with clinic-specific field visibility, domain-specific option sets (dental jaw notation, DICOM formats, clinical justifications), and multi-file attachment support.",
        "**Directus** handles file uploads and relational records through separate **REST** endpoints, while form submission goes through a **GraphQL** mutation. The client coordinates both atomically. On submit: validate files client-side (max 10 files, 5 MB each) via custom **FormKit** validation rules; upload files to Directus REST with pre-generated UUIDs; submit the form record via GraphQL mutation; then bind uploaded files through a REST junction endpoint. **reCAPTCHA v3** token is acquired before submission. Clinic-specific fields are conditionally rendered based on per-clinic config.",
      ],
    },
    {
      paragraphs: [
        "Team profile and directory pages combine server-rendered content with **hash-driven client navigation** for sub-sections. Profile pages use a two-column template where tabs are driven by URL hash and resolved to dynamic components; a default hash redirect runs on mount when none is present.",
        "The team directory filters employees by offer category through the URL hash, with a **Headless UI** Listbox fallback on mobile. Shareable deep links to filtered views without additional route definitions.",
      ],
    },
    {
      paragraphs: [
        "All content (offers, news, team members, price lists, custom pages) is fetched from Directus via colocated **`.gql` query files** that generate typed imports consumed at compile time, so query variables and response shapes stay typed. Pages compose multiple queries where needed; paginated news refetches on page param change without full navigation.",
        "An image atom wraps Directus asset URLs with on-the-fly transform parameters (**WebP** format, quality, dimensions, fit mode) and lazy loading. **FormKit** is fully themed with localized validation messages across all four languages. Price list expand/collapse sections use measured DOM heights for smooth animations; a gallery lightbox teleports to the document body with keyboard-style prev/next navigation.",
      ],
    },
  ],
  closing: [
    "I built and maintained this as the sole front-end owner: **SSR** rendering with async data caching, **Directus GraphQL** for typed content, localized URL routing across four languages, programmatic **SEO** (sitemap, hreflang, canonicals, JSON-LD), per-clinic theming, and REST + GraphQL orchestration for complex form submissions, with bot protection, analytics, and live chat in production.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
