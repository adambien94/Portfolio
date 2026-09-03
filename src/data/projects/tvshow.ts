import type { ProjectDetail } from "./types";

export const tvshowProject: ProjectDetail = {
  id: "TvShow",
  name: "Tv shows",
  stack: ["Vue", "TypeScript", "Tailwind", "Jest"],
  accent: "#7dd3fc",
  headline:
    "Biblioteka seriali z dashboardem wg gatunków, wyszukiwarką i widokiem szczegółów — z architekturą local-first i wsparciem offline.",
  intro: [
    "Tv shows to aplikacja do przeglądania seriali telewizyjnych, zbudowana w **Vue** i **TypeScript** z **Tailwind CSS**. Dane pochodzą z **TVMaze API**, ale po pierwszym pobraniu trafiają do **IndexedDB** — dzięki temu kolejne wejścia ładują się natychmiast, bez zbędnych requestów i z poszanowaniem limitów API.",
    "Interfejs jest **mobile-first**: na telefonie listy gatunków przewijasz poziomo, a na desktopie pojawiają się strzałki nawigacji przy hoverze. Wyszukiwarka filtruje wyniki na żywo i pokazuje je w siatce z oceną i okładką.",
  ],
  highlight:
    "Aplikacja działa offline — Service Worker cache'uje assety, a IndexedDB trzyma dane seriali lokalnie. Gdy zniknie połączenie, pojawia się banner informujący o trybie offline.",
  screenshotIntro:
    "Zobacz, jak wygląda aplikacja — od dashboardu z gatunkami po szczegóły serialu i wyszukiwarkę:",
  heroImage: {
    src: "/projects/TvShow/TvShowApp-1.png",
    alt: "Dashboard Tv shows z poziomymi listami seriali pogrupowanymi wg gatunków: Drama, Mystery, Sci-Fi, Fantasy, Action, Comedy",
  },
  sections: [
    {
      paragraphs: [
        "Strona główna to dashboard podzielony na gatunki — **Drama**, **Mystery**, **Sci-Fi**, **Fantasy**, **Action**, **Comedy** i kolejne. Każda sekcja to pozioma lista kart posortowana wg oceny, z okładką, tytułem i ratingiem. Na desktopie strzałki pojawiają się po najechaniu, na mobile wystarczy przesunąć palcem.",
      ],
    },
    {
      paragraphs: [
        "Po kliknięciu w serial otwiera się widok szczegółów z opisem, metadanymi (gatunki, status, data premiery), oceną i listą sezonów z liczbą odcinków. Layout dostosowuje się do ekranu — na mobile poster i opis układają się pionowo, na desktopie obok siebie.",
        "Wyszukiwarka działa w czasie rzeczywistym — wpisujesz frazę, a wyniki pojawiają się w siatce z okładką, tytułem i oceną. Brak okładki? Aplikacja pokazuje placeholder zamiast pustej karty.",
      ],
      images: [
        {
          src: "/projects/TvShow/TvShowApp-2.png",
          alt: "Widok szczegółów serialu Dexter w Tv shows z oceną 8.4, opisem i karuzelą 8 sezonów",
        },
        {
          src: "/projects/TvShow/TvShowApp-3.png",
          alt: "Wyniki wyszukiwania frazy break w Tv shows — siatka z okładkami, tytułami i ocenami",
        },
      ],
    },
    {
      paragraphs: [
        "Dane odświeżają się automatycznie co godzinę, ale tylko gdy jest połączenie z siecią. W trybie offline korzystasz z ostatniej wersji zapisanej lokalnie — bez błędów i bez pustych ekranów.",
      ],
    },
  ],
  closing: [
    "Tv shows łączy **Vue**, **TypeScript** i **Tailwind** po stronie interfejsu z **TVMaze API**, **IndexedDB** i **Service Workerem** jako warstwą danych. Efekt to responsywna biblioteka seriali, która szybko reaguje na interakcje, szanuje limity API i działa nawet bez internetu.",
  ],
};
