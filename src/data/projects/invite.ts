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
    "Recreaft.ai",
  ],
  accent: "#d8a7ca",
  headline:
    "SaaS for online wedding invitations - from a personal subdomain to a published page guests can open.",
  intro: [
    "This side project is for creating and hosting wedding invitation websites. A couple registers, picks a personal address like john-monica.appdomain.pl, edits content in a dashboard, chooses a template, and publishes a page their guests can open on any device.",
    "The app is multi-tenant: one Next.js deployment serves the marketing site, dashboard, and every public invitation. Middleware reads the hostname and routes each subdomain to the right page without a separate deploy per couple.",
    "The project is still in progress. The landing page, registration with slug reservation, invitation theme editor, wedding overview dashboard, and guest list are working today.",
  ],
  highlight:
    "Next up: guest-facing RSVP on the public invitation, a shared photo gallery, and richer statistics so couples can see responses and activity in one place.",
  screenshotIntro:
    "What the product looks like so far, from the landing page through registration, the editor, dashboard, and guest list:",
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
      title: "Invitation Theme & Preview",
      paragraphs: [
        "The invitation creator separates look and content across Theme, Sections, and Details tabs. Couples pick a base template, tune paper texture and page background, and can enable an envelope animation before saving.",
        "A live preview on the right switches between desktop and mobile so copy and layout stay readable on phones - the screenshot shows a photo-led template with couple names and theme controls on the left.",
      ],
      image: {
        src: "/projects/invite/invite-6.png",
        alt: "Invitation creator Theme tab with base template photo, color swatches, paper texture toggles, envelope animation, and mobile preview of Anna and Rafał invitation",
        caption:
          "Theme controls with template photo, colors, and a live mobile preview.",
      },
    },
    {
      title: "Wedding Dashboard",
      paragraphs: [
        "After signup, the overview dashboard summarizes the wedding at a glance: invited guests, confirmed and declined RSVPs, and how many responses are still pending.",
        "A short checklist tracks planning tasks, recent activity lists guest and RSVP changes, and a QR code links to the guest app couples can print or share offline.",
      ],
      image: {
        src: "/projects/invite/invite-7.png",
        alt: "Wedding overview dashboard with RSVP counts, planning checklist, activity feed, guest app QR code, and invitation preview",
        caption:
          "Overview with RSVP stats, next steps, activity, and a guest-app QR code.",
      },
    },
    {
      title: "Guest List",
      paragraphs: [
        "The guest list is where couples manage invitees before send-out. They can add a couple, family, or group in one form, attach contact details and private notes, and mark companions or children per person.",
        "The table shows headcount per entry, dietary or other notes, and confirmation status at a glance - expandable rows list everyone in a group when hosts need to edit or remove someone.",
      ],
      image: {
        src: "/projects/invite/invite-8.png",
        alt: "Guest list with add-group form and table showing names, contact info, party size, notes, and RSVP confirmation status",
        caption:
          "Add groups from the sidebar form; track RSVPs and notes in the table.",
      },
    },
    {
      title: "RSVP on the Published Invitation",
      paragraphs: [
        "Guests open the couple's subdomain and confirm attendance from a modal that greets them by name. They can say they are coming, decline, or note a plus-one before sending the response.",
        "Copy explains they can change their mind and submit again until the deadline, so hosts get accurate counts without chasing people over text.",
      ],
      images: [
        {
          src: "/projects/invite/invite-9.png",
          alt: "Mobile RSVP modal on the published invitation asking Edyta Testowa to confirm wedding attendance with attend, decline, and plus-one options",
          caption: "Personalized RSVP on the live invitation page.",
        },
        {
          src: "/projects/invite/invite-10.png",
          alt: "Mobile RSVP modal on the published invitation with attendance choice selected and send response action",
          caption: "Confirm choice and submit the response.",
        },
      ],
    },
  ],
  closing: [
    "Built with Next.js, React, TypeScript, and Supabase (Auth, PostgreSQL, RLS). Forms use React Hook Form and Zod. UI is Tailwind and Shadcn.",
    "Still on the roadmap: RSVP on the public invitation page, a photo gallery where guests upload and browse shared wedding photos, and deeper analytics tied to the guest app.",
  ],
};
