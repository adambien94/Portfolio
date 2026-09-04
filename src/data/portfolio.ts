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
  },
  {
    id: "flowboard",
    name: "Flowboard",
    description: "kanban z narzędziami AI i real-time sync.",
    stack: ["React", "TypeScript", "Zustand", "Supabase", "Vercel", "Jest"],
    href: "/projects/flowboard",
    accent: "#f9a8d4",
  },
  {
    id: "TvShow",
    name: "Tv shows",
    description: "biblioteka seriali.",
    stack: ["Vue 3", "TypeScript", "Tailwind", "Jest", "RWD", "PWA"],
    href: "/projects/TvShow",
    accent: "#7dd3fc",
  },
  {
    id: "doors",
    name: "Door configurator",
    description: "konfigurator drzwi 3D.",
    stack: ["Vue 2", "Canvas", "Three.js"],
    href: "/projects/doors",
    accent: "#FA824C",
  },
];

export const commercialExperience = {
  title: "Doświadczenie komercyjne",
  subtitle:
    "Ponad pięć lat jako frontend developer — od aplikacji wewnętrznych po produkty end-to-end.",
  paragraphs: [
    "Budowałem i utrzymywałem nowoczesne aplikacje webowe — od wewnętrznych narzędzi biznesowych po pełne **SPA** i **PWA**. Pracowałem w ekosystemie **Vue** (2 i 3, **Nuxt.js**, **Quasar**), a także w **React** i **Next.js**, konsekwentnie stawiając na **TypeScript**.",
    "Projektowałem interfejsy, implementowałem logikę aplikacji i integrowałem **API**. Zarządzałem stanem (**Pinia**, **Zustand**, **Vuex**), konfigurowałem routing i autentykację, dbałem o wydajność, responsywność, dostępność i kompatybilność między przeglądarkami. Stylowanie w **CSS**, **SCSS**, **Tailwind** i **Bootstrap** — często na podstawie projektów z **Figma**.",
    "Pisałem testy jednostkowe (**Jest**), wdrażałem aplikacje na staging i produkcję (**Docker**), współpracowałem z zespołami produktowymi i backendowymi. Brałem udział w wyborze technologii i konfiguracji toolchainu (**Vite**, **Webpack**, **Git**).",
  ],
  stack: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Vue.js",
    "Nuxt.js",
    "Quasar",
    "React",
    "Next.js",
    "Pinia",
    "Vuex",
    "Zustand",
    "Redux",
    "RxJS",
    "Tailwind",
    "Bootstrap",
    "SASS",
    "shadcn/ui",
    "Three.js",
    "Chart.js",
    "Video.js",
    "Jest",
    "REST",
    "GraphQL",
    "Swagger",
    "Twig",
    "Webpack",
    "Vite",
    "Git",
    "Docker",
    "Supabase",
    "Figma",
    "BEM",
    "RWD",
    "SPA",
    "SSR",
    "WordPress",
  ],
};

export const navLinks = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Projekty", href: "#projekty" },
  { label: "Doświadczenie", href: "#doswiadczenie" },
];
