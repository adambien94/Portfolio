export const profile = {
  name: "Adam Bien",
  firstName: "Adam",
  role: "Frontend Developer",
  location: "Wrocław, Polska",
  email: "adam@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  headline: "Jak budować produkty,\nktóre czują się dobrze?",
  subheadline:
    "Projektuję i koduję interfejsy, w których detale, ruch i czytelność idą w parze — od pierwszej interakcji.",
};

export const about = {
  title: `Cześć, jestem ${profile.firstName}`,
  paragraphs: [
    "Jestem frontend developerem z naciskiem na **design engineering**. Łączę czysty kod z wyczuciem produktu — tak, żeby aplikacje nie tylko działały, ale też sprawiały przyjemność w użyciu.",
    "Przez ostatnie lata budowałem dashboardy, landingi i aplikacje SaaS w **React**, **Next.js** i **TypeScript**. Dbam o animacje, dostępność i performance — bo to właśnie te detale odróżniają „ok” od „wow”.",
    "Poza kodem lubię typografię, systemy designu i eksperymenty z ruchem. Wierzę, że dobre UI to forma rzemiosła.",
  ],
};

export const projects = [
  {
    id: "lerni",
    name: "Lerni",
    description: "aplikacja wspomagająca naukę przez AI.",
    stack: [
      "React",
      "TypeScript",
      "Shadcn",
      "Supabase",
      "Vercel",
      "Gemini API",
    ],
    href: "/projects/lerni",
    accent: "#86efac",
    previewLabel: "Zobacz projekt",
  },
  {
    id: "flowboard",
    name: "Flowboard",
    description: "kanban z narzędziami AI i real-time sync.",
    stack: ["React", "TypeScript", "Zustand", "Supabase", "Vercel", "Jest"],
    href: "/projects/flowboard",
    accent: "#f9a8d4",
    previewLabel: "Otwórz board",
  },
  {
    id: "TvShow",
    name: "Tv shows",
    description: "biblioteka seriali.",
    stack: ["Vue", "TypeScript", "Tailwind", "Jest"],
    href: "/projects/TvShow",
    accent: "#7dd3fc",
    previewLabel: "Podgląd studio",
  },
  {
    id: "doors",
    name: "Door configurator",
    description: "konfigurator drzwi 3D.",
    stack: ["Vue", "Canvas", "Three.js"],
    href: "/projects/doors",
    accent: "#fde68a",
    previewLabel: "Otwórz dashboard",
  },
];

export const navLinks = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Projekty", href: "#projekty" },
];
