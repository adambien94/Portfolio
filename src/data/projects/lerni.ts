import type { ProjectDetail } from "./types";

export const lerniProject: ProjectDetail = {
  id: "lerni",
  name: "Lerni",
  stack: [
    "React",
    "TypeScript",
    "Shadcn",
    "Supabase",
    "Vercel",
    "Gemini API",
  ],
  accent: "#f9a8d4",
  headline:
    "Osobista przestrzeń do nauki, w której źródła z internetu, AI i powtórki spotykają się w jednym spójnym miejscu.",
  intro: [
    "Lerni to aplikacja do nauki z AI, którą budowałem inspirując się NotebookLM. Użytkownik dodaje artykuły, blogi i inne materiały z sieci, a potem pracuje z nimi w notatniku — bez skakania między kartami i bez chaosu w zakładkach.",
    "Silnik oparty na Gemini API streszcza wiedzę z wybranych źródeł, odpowiada na konkretne pytania w kontekście materiałów i generuje fiszki oraz egzaminy do utrwalania pojęć.",
  ],
  highlight:
    "Wreszcie uczysz się z własnych materiałów — zamiast zgadywać, co jest ważne, masz podsumowanie, chat i narzędzia do powtórek w jednym widoku.",
  screenshotIntro: "Zobacz, jak wygląda praca z notatnikiem od logowania po fiszki i quizy:",
  heroImage: {
    src: "/projects/lerni/Lerni-3.png",
    alt: "Widok roboczy notatnika Lerni z panelami źródeł, podsumowania AI i studia nauki",
  },
  sections: [
    {
      paragraphs: [
        "Interfejs jest ciemny i spokojny — celowo bez rozpraszaczy. Logowanie i ekran startowy od razu komunikują, że to narzędzie do skupionej nauki, a nie kolejna tablica ogłoszeń.",
      ],
      image: {
        src: "/projects/lerni/Lerni-1.png",
        alt: "Ekran logowania Lerni z podziałem na formularz i opis produktu",
      },
    },
    {
      paragraphs: [
        "Notatniki grupują tematy — React, wzorce projektowe, przygotowanie do rozmów. Każdy ma własne źródła, historię podsumowań i wygenerowane materiały do nauki.",
      ],
      image: {
        src: "/projects/lerni/Lerni-2.png",
        alt: "Lista notatników w Lerni z kartami tematów i opcją tworzenia nowego",
      },
    },
    {
      paragraphs: [
        "W widoku roboczym trzy kolumny odpowiadają trzem etapom nauki: **źródła** po lewej, **podsumowanie i chat z AI** na środku, **studio** po prawej — z fiszkami i testami wygenerowanymi z tego, co już przeczytałeś.",
      ],
    },
    {
      paragraphs: [
        "Quizy sprawdzają zrozumienie na podstawie podsumowania — z podpowiedziami, nawigacją między pytaniami i jasnym feedbackiem. Fiszki działają jak klasyczne karty: obrót, reset, przejście do następnej.",
      ],
      image: {
        src: "/projects/lerni/Lerni-4.png",
        alt: "Quiz w Lerni z pytaniem o wzorzec Singleton i panelem źródeł",
      },
    },
    {
      paragraphs: [
        "Fiszki generują się z wybranych źródeł i można je od razu przerabiać w panelu Studio — bez eksportu do innej aplikacji.",
      ],
      image: {
        src: "/projects/lerni/Lerni-5.png",
        alt: "Fiszki w Lerni z definicją wzorca Singleton",
      },
    },
  ],
  closing: [
    "Lerni łączy **React**, **TypeScript**, **Shadcn** i **Supabase** po stronie aplikacji z **Gemini API** jako warstwą inteligencji. Efekt to produkt, w którym od zebrania materiałów do powtórki przed egzaminem przechodzisz bez przełączania kontekstu.",
  ],
};
