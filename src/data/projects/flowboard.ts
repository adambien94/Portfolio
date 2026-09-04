import type { ProjectDetail } from "./types";

export const flowboardProject: ProjectDetail = {
  id: "flowboard",
  name: "Flowboard",
  stack: ["React", "TypeScript", "Zustand", "Supabase", "Vercel", "Jest"],
  accent: "#f9a8d4",
  headline:
    "Osobisty kanban z własnymi tablicami, kolumnami i AI, które rozbija zadania na konkretne kroki do wykonania.",
  intro: [
    "Flowboard to aplikacja kanban z rejestracją użytkownika — każdy ma własne tablice, niezależne od innych kont. Po zalogowaniu tworzysz board pod projekt, szkołę albo listę zadań domowych i pracujesz w trybie Kanban lub tabeli.",
    "Tablica składa się z kolumn, które sam definiujesz — od klasycznego Todo → In progress → Done po własny workflow z etapami Test czy Prod. Zadania dodajesz jednym kliknięciem, ustawiasz priorytet i opis, a potem przeciągasz między kolumnami.",
  ],
  highlight:
    "Nie musisz sam rozpisywać zadania — AI generuje listę kroków na podstawie tytułu i opisu karty, żeby od razu wiedzieć, od czego zacząć.",
  screenshotIntro:
    "Zobacz, jak wygląda praca z tablicą — od widoku kanban po szczegóły karty z krokami AI:",
  heroImage: {
    src: "/projects/flowboard/Flowboard-1.png",
    alt: "Widok kanban Flowboard z bocznym panelem tablic, kolumnami Todo, In progress, Test, Done i Prod oraz kartami zadań",
  },
  sections: [
    {
      paragraphs: [
        "Boczny panel grupuje wszystkie tablice użytkownika — **Example Project**, **Personal Tasks**, **School** i kolejne, które sam tworzysz przyciskiem **New board**. Każda tablica ma własny zestaw kolumn i zadań, więc projekty nie mieszają się między sobą.",
        "Kolumny dodajesz dynamicznie, a karty pokazują priorytet (HIGH, MEDIUM, LOW), tytuł, krótki opis i czas pracy. Przełącznik **Kanban Mode** / **Table Mode** pozwala zmienić sposób pracy z tym samym zestawem danych.",
      ],
    },
    {
      paragraphs: [
        "Po kliknięciu w kartę otwiera się panel szczegółów — tytuł, pełny opis, priorytet i log czasu. To tutaj działa integracja z AI: przycisk **Generate AI steps** analizuje zadanie i zwraca numerowaną listę konkretnych kroków do wykonania.",
      ],
      image: {
        src: "/projects/flowboard/Flowboard-2.png",
        alt: "Panel szczegółów karty w Flowboard z opisem zadania, przyciskiem Generate AI steps i wygenerowanymi krokami akcji",
      },
    },
    {
      paragraphs: [
        "Wygenerowane kroki trafiają do sekcji **ACTION STEPS (AI)** — gotowej checklisty, którą możesz od razu realizować po kolei. Przydaje się przy bugach, feature'ach i zadaniach, które na pierwszy rzut oka wydają się zbyt ogólne, żeby od razu usiąść do kodu.",
      ],
    },
  ],
  closing: [
    "Flowboard łączy **React**, **TypeScript** i **Zustand** po stronie interfejsu z **Supabase** jako backendem użytkowników i danych tablic. Efekt to kanban, w którym rejestracja, własne boardy, elastyczne kolumny i AI wspierają codzienną pracę — od planowania po rozbicie zadania na wykonalne kroki.",
  ],
};
