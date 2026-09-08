import type { ProjectDetail } from "./types";

export const weseleoProject: ProjectDetail = {
  id: "weseleo",
  name: "Invite",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Tailwind",
    "Shadcn",
    "React Hook Form",
    "Zod",
  ],
  accent: "#d8a7ca",
  headline:
    "SaaS for online wedding invitations - from a personal subdomain to a published page guests can open.",
  intro: [
    "This side project is for creating and hosting wedding invitation websites. A couple registers, picks a personal address like **adam-monika.invite.pl**, edits content in a dashboard, chooses a template, and publishes a page their guests can open on any device.",
    "The app is multi-tenant: one **Next.js** deployment serves the marketing site, dashboard, and every public invitation. **Middleware** reads the hostname and routes each subdomain to the right page without a separate deploy per couple.",
    "The project is **still in progress**. The landing page, registration with slug reservation, and the invitation editor are working today.",
  ],
  highlight:
    "Next up: a guest list and **RSVP** — so couples can collect attendance confirmations from invitees in one place.",
  screenshotIntro:
    "What the product looks like so far, from the landing page to registration and the editor:",
  heroImage: {
    src: "/projects/weseleo/weseleo-1.png",
    alt: "Wedding invitations landing page with hero, phone mockup showing guest gallery, and a four-step onboarding flow",
  },
  sections: [
    {
      paragraphs: [
        "The landing page presents the full idea: create an account, customize the page, pick a personal address, and share a QR code. A phone mockup shows how guests might browse a shared gallery and react to updates.",
        "Below the hero, the page walks through the setup flow and highlights features like a guest photo gallery, day schedule, and personalized links.",
      ],
    },
    {
      paragraphs: [
        "Registration reserves a subdomain right away. The user picks a slug like **adam-monika**, sees a live availability check, and gets a preview of the final URL before creating an account.",
        "If the address is already taken, validation blocks signup with a clear message - the slug stays protected in **Supabase** from the first successful reservation.",
      ],
      images: [
        {
          src: "/projects/weseleo/weseleo-6.png",
          alt: "Registration form showing subdomain validation error when the chosen address is already taken",
        },
        {
          src: "/projects/weseleo/weseleo-5.png",
          alt: "Registration form with available invitation address adam-monika.invite.pl and green availability confirmation",
        },
      ],
    },
    {
      paragraphs: [
        "The dashboard editor has workspace tabs for **Overview**, **Theme**, **Sections**, and **Publication**. In **Sections**, each block of the invitation can be toggled and edited separately: couple, date, header, locations, schedule, FAQ, and RSVP.",
        "Changes update a live preview on the right, with desktop and mobile modes. The **Romantic** template in the screenshot shows ceremony and reception details, a day plan, and autosaved draft content.",
      ],
      image: {
        src: "/projects/weseleo/weseleo-2.png",
        alt: "Invitation editor with Sections tab, schedule editor, and live mobile preview of a romantic wedding template",
      },
    },
  ],
  closing: [
    "Built with **Next.js**, **React**, **TypeScript**, and **Supabase** (Auth, PostgreSQL, RLS). Forms use **React Hook Form** and **Zod**; UI is **Tailwind** and **Shadcn**.",
    "Still on the roadmap: a **guest list** for managing invitees and a full **RSVP** flow so guests can confirm attendance and couples can track responses from the dashboard.",
  ],
};
