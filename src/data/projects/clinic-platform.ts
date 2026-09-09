import type { ProjectDetail } from "./types";

export const clinicPlatformProject: ProjectDetail = {
  id: "clinic-platform",
  name: "Clinic web platform",
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
    "A multilingual SSR platform for a dental clinic group with headless CMS content.",
  intro: [
    "Sole front-end owner of a production **SSR** platform for **three clinic brands** and **four languages**, with content from **Directus** via typed **GraphQL**. Editors publish in the CMS; copy updates ship without redeploys.",
    "One codebase renders three visual identities via **CSS custom properties** and route-based clinic context (`/[clinic]/…`). No global store; per-page async data caching instead.",
  ],
  highlight:
    "Four locales have fully localized URL paths, including Cyrillic slugs, so switching language lands on the equivalent page, not the homepage.",
  sections: [
    {
      title: "Localized URL Routing",
      paragraphs: [
        "Route templates per page type (`/offer/`, `/oferta/`, `/оферта/`) with language-specific CMS slugs. Detail pages fetch slug translations at **SSR** time; the language switcher navigates to the correct localized URL via route metadata.",
      ],
    },
    {
      title: "SEO & Sitemap Generation",
      paragraphs: [
        "A **Nitro** server route generates a **dynamic sitemap** for every clinic × locale × slug combination (**SWR**, 60s TTL). **Canonical URLs**, **hreflang** alternates (hash-aware on team profiles), **JSON-LD** from CMS, and trailing-slash enforcement via **`MutationObserver`** on dynamic anchors.",
      ],
    },
    {
      title: "Medical Imaging Referral Form",
      paragraphs: [
        "The most complex feature: a referral form with clinic-specific fields, dental domain option sets, and multi-file uploads. Client-side **FormKit** validation, then atomic **REST** file upload + **GraphQL** mutation + junction binding, coordinated with **reCAPTCHA v3**.",
      ],
    },
    {
      title: "Team Profiles & Hash Navigation",
      paragraphs: [
        "Team profiles combine **SSR** content with **hash-driven** in-page tabs (pricing, addresses, gallery). The directory filters by offer category via URL hash, with **Headless UI** on mobile for shareable deep links without extra routes.",
      ],
    },
    {
      title: "CMS Integration & UI Components",
      paragraphs: [
        "Colocated **`.gql`** files generate typed queries at compile time. An image atom applies **Directus** transforms (**WebP**, lazy load); **FormKit** themed with localized validation across all four languages; price lists and gallery lightbox with measured animations.",
      ],
    },
  ],
  closing: [
    "Sole front-end owner: **SSR**, **Directus GraphQL**, four-locale URL routing, programmatic **SEO**, per-clinic theming, and **REST** + **GraphQL** form orchestration in production.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
