import type { ProjectDetail } from "./types";

export const tvshowProject: ProjectDetail = {
  id: "TvShow",
  name: "Tv shows",
  stack: ["Vue", "TypeScript", "Tailwind", "Jest"],
  accent: "#7dd3fc",
  headline:
    "A TV series library with a genre dashboard, search, and detail view, built on a local-first architecture with offline support.",
  intro: [
    "Tv shows is an app for browsing TV series, built with **Vue**, **TypeScript**, and **Tailwind CSS**. Data comes from the **TVMaze API**, but after the first fetch it lands in **IndexedDB**, so later visits load instantly without hammering the API.",
    "The interface is **mobile-first**: on a phone you scroll genre lists horizontally, on desktop navigation arrows appear on hover. Search filters results live and shows them in a grid with ratings and cover art.",
  ],
  highlight:
    "The app works offline. The Service Worker caches assets, and IndexedDB keeps series data locally. When the connection drops, a banner tells you you're in offline mode.",
  screenshotIntro:
    "What the app looks like, from the genre dashboard to series details and search:",
  heroImage: {
    src: "/projects/TvShow/TvShowApp-1.png",
    alt: "Tv shows dashboard with horizontal series lists grouped by genre: Drama, Mystery, Sci-Fi, Fantasy, Action, Comedy",
    caption: "Genre dashboard with horizontal series lists sorted by rating.",
  },
  sections: [
    {
      paragraphs: [
        "The homepage is a dashboard split by genre: **Drama**, **Mystery**, **Sci-Fi**, **Fantasy**, **Action**, **Comedy**, and more. Each section is a horizontal list of cards sorted by rating, with cover art, title, and score. On desktop, arrows appear on hover; on mobile, a swipe is enough.",
      ],
    },
    {
      paragraphs: [
        "Clicking a series opens a detail view with description, metadata (genres, status, premiere date), rating, and a list of seasons with episode counts. The layout adapts to the screen: on mobile the poster and description stack vertically; on desktop they sit side by side.",
        "Search works in real time. You type a phrase and results appear in a grid with cover art, title, and rating. No cover? The app shows a placeholder instead of an empty card.",
      ],
      images: [
        {
          src: "/projects/TvShow/TvShowApp-2.png",
          alt: "Dexter series detail view in Tv shows with 8.4 rating, description, and carousel of 8 seasons",
          caption: "Series detail view with rating, description, and season carousel.",
        },
        {
          src: "/projects/TvShow/TvShowApp-3.png",
          alt: "Search results for 'break' in Tv shows - grid with covers, titles, and ratings",
          caption: "Live search results with covers, titles, and ratings.",
        },
      ],
    },
    {
      paragraphs: [
        "Data refreshes automatically every hour, but only when there's a network connection. In offline mode you use the last version saved locally. No errors, no blank screens.",
      ],
    },
  ],
  closing: [
    "**Vue**, **TypeScript**, and **Tailwind** on the front end, **TVMaze API**, **IndexedDB**, and a **Service Worker** underneath. A responsive series library that responds quickly, respects API limits, and works without internet.",
  ],
};
