import type { ProjectDetail } from "./types";

export const doorsProject: ProjectDetail = {
  id: "doors",
  name: "Door configurator",
  stack: ["Vue 2", "Canvas", "Three.js"],
  accent: "#fde68a",
  headline:
    "Trzyetapowy konfigurator drzwi szklanych — od typu i wymiarów, przez podział ramy, po kolor wykończenia w podglądzie 2D i 3D.",
  intro: [
    "Door configurator to aplikacja webowa do projektowania drzwi wewnętrznych z ramą i przeszkleniem. Użytkownik przechodzi przez trzy kroki — **Choose door**, **Choose door division** i **Choose color** — a każda zmiana parametrów od razu aktualizuje podgląd produktu.",
    "Interfejs opiera się na przejrzystym wizardzie z paskiem postępu u góry, dużym obszarem podglądu po lewej i panelem konfiguracji po prawej. Przełącznik **3D / 2D** pozwala zobaczyć ten sam model jako schemat techniczny z wymiarami albo realistyczną scenę w pomieszczeniu.",
  ],
  highlight:
    "Wymiary, podział szyb i kolor ramy zmieniają się na żywo — bez przeładowania strony i bez zgadywania, jak drzwi będą wyglądać po montażu.",
  screenshotIntro:
    "Zobacz, jak wygląda konfiguracja krok po kroku — od wyboru typu drzwi po podgląd 3D:",
  heroImage: {
    src: "/projects/doors/Doors-4.png",
    alt: "Konfigurator drzwi w widoku 3D — realistyczny render double door w pomieszczeniu z wyborem koloru ramy i sterowaniem kamerą",
  },
  sections: [
    {
      paragraphs: [
        "W kroku **Choose door** użytkownik wybiera typ drzwi — **Single door**, **Double door** albo **Triple door** — oraz podaje wymiary **Width** i **Height** w centymetrach. Podgląd 2D rysuje schemat z liniami wymiarowymi, żeby od razu widać było proporcje i szerokość poszczególnych skrzydeł.",
        "Przełącznik **3D / 2D** w rogu podglądu pozwala w każdej chwili przejść między widokiem technicznym a renderem przestrzennym — bez utraty aktualnej konfiguracji.",
      ],
      images: [
        {
          src: "/projects/doors/Doors-1.png",
          alt: "Pierwszy krok konfiguratora drzwi — wybór typu (Single, Double, Triple) i wymiarów z podglądem 2D z oznaczeniami szerokości 145 i wysokości 270",
        },
        {
          src: "/projects/doors/Doors-2.png",
          alt: "Drugi krok konfiguratora — podział drzwi z regulacją liczby belek, słupków i grubości ramy na schemacie double door 290×270",
        },
        {
          src: "/projects/doors/Doors-3.png",
          alt: "Trzeci krok konfiguratora w widoku 2D — wybór koloru ramy z palety i kołem barw, double door z siatką przeszklenia",
        },
      ],
    },
  ],
  closing: [
    "Konfigurator powstał w **Vue 2** z **Canvas** do schematów 2D i wymiarów oraz **Three.js** do renderu 3D w pomieszczeniu. Efekt to narzędzie produktowe, w którym klient — albo handlowiec — krok po kroku składa drzwi na miarę i od razu widzi, co zamawia.",
  ],
};
