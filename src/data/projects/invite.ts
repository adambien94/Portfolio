import type { ProjectDetail } from "./types";

export const inviteProject: ProjectDetail = {
  id: "invite",
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
    "This side project is for creating and hosting wedding invitation websites. A couple registers, picks a personal address like john-monica.appdomain.pl, edits content in a dashboard, chooses a template, and publishes a page their guests can open on any device.",
    "The app is multi-tenant: one Next.js deployment serves the marketing site, dashboard, and every public invitation. Middleware reads the hostname and routes each subdomain to the right page without a separate deploy per couple.",
    "The project is still in progress. The landing page, registration with slug reservation, and the invitation editor are working today.",
  ],
  highlight:
    "Next up: a guest list, RSVP, and a shared photo gallery so couples can collect attendance confirmations and let guests browse uploaded photos in one place.",
  screenshotIntro:
    "What the product looks like so far, from the landing page to registration and the editor:",
  heroImage: {
    src: "/projects/invite/invite-1.png",
    alt: "Invite landing page hero with headline about a wedding site filled with guest memories and a collage of invitation templates",
    caption:
      "Landing hero with template collage and a clear path to create an account.",
  },
  sections: [
    {
      title: "Landing Page & Product Story",
      paragraphs: [
        "The landing page presents the full idea: create an account, customize the page, pick a personal address, and share one link with guests. A collage of template previews shows the range of styles couples can choose from.",
        "Below the hero, the page walks through the setup flow and highlights features like a shared photo gallery, day schedule, and personalized subdomain.",
      ],
    },
    {
      title: "Subdomain Registration",
      paragraphs: [
        "Signup opens in a modal from the landing page. Couples can continue with Google or email, then pick a slug like monika-rafal, see a live availability check, and get a preview of the final URL before creating an account.",
        "If the address is already taken, validation blocks signup with a clear message - the slug stays protected in Supabase from the first successful reservation.",
      ],
      images: [
        {
          src: "/projects/invite/invite-5.png",
          alt: "Registration form with available invitation address monika-rafal.invite.pl and green availability confirmation",
          caption:
            "Live availability check confirms the invitation address before account creation.",
        },
        {
          src: "/projects/invite/invite-4.png",
          alt: "Registration form showing subdomain validation error when ania-piotr.invite.pl is already taken",
          caption: "Signup blocked when the chosen subdomain is already taken.",
        },
      ],
    },
    {
      title: "Invitation Editor",
      paragraphs: [
        "The dashboard editor has workspace tabs for Overview, Theme, Sections, and Publication. In Sections, each block of the invitation can be toggled and edited separately: couple, date, header, locations, schedule, FAQ, and RSVP.",
        "Changes update a live preview on the right, with desktop and mobile modes. The green botanical template in the screenshot shows editable header copy synced to the mobile preview.",
      ],
      image: {
        src: "/projects/invite/invite-6.png",
        alt: "Invitation editor with Sections tab, header fields, and live mobile preview of Joanna and Rafał wedding template",
        caption:
          "Invitation editor with section toggles and a live mobile preview.",
      },
    },
  ],
  closing: [
    "Built with Next.js, React, TypeScript, and Supabase (Auth, PostgreSQL, RLS). Forms use React Hook Form and Zod. UI is Tailwind and Shadcn.",
    "Still on the roadmap: a guest list for managing invitees, a full RSVP flow so guests can confirm attendance, and a photo gallery where guests can upload and browse shared wedding photos from the dashboard.",
  ],
};
