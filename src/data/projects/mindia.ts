import type { ProjectDetail } from "./types";

export const mindiaProject: ProjectDetail = {
  id: "mindia",
  name: "Clinical video streaming app",
  accent: "#a5b4fc",
  stack: [
    "WebSockets",
    "getUserMedia",
    "Canvas API",
    "VAD (ONNX Runtime)",
    "Video.js",
    "HLS",
    "WebVTT",
    "JWT",
    "REST",
    "Swagger",
  ],
  headline:
    "A privacy-first clinical platform where psychologists record therapy sessions, review anonymized footage, and annotate behavior — all in one controlled workflow.",
  intro: [
    "This is a web application for psychologists to capture therapy sessions, review anonymized media, edit transcriptions, and tag clinical behavior. The frontend orchestrates a full media pipeline rather than acting as a simple data-entry screen — from live capture through anonymization to synchronized review.",
    "Session flow is driven by assignment status: an **Active** session opens the recording interface, while later statuses unlock the review workbench with streaming playback, editable transcripts, and behavioral annotations persisted as structured data.",
  ],
  highlight:
    "Recording starts only when both video and audio streams are live — so a half-connected session can never leave clinicians with incomplete capture.",
  sections: [
    {
      paragraphs: [
        "Therapy video and audio reach anonymization workers in real time over **two independent WebSocket channels** — one for picture, one for sound. Each stream authenticates with a **JWT** on connect, then sends data through a structured protocol: a start signal, frame or audio chunks, and a stop signal when the session ends.",
        "Video is grabbed from a **getUserMedia** feed via **Canvas** at ~15 FPS as JPEG and transmitted as base64. Recording begins only when **both** channels report ready — if either service fails to connect, the session never enters a half-recorded state.",
      ],
    },
    {
      paragraphs: [
        "Continuous microphone streaming would waste bandwidth and hurt transcription quality downstream. Instead, **voice activity detection** runs in the browser via **ONNX Runtime** (`@ricky0123/vad-web`) — only speech segments are converted to PCM, queued, and sent serially, each tagged with a precise start timestamp.",
        "That keeps audio aligned with the video timeline, reduces load on anonymization and speech-to-text services, and avoids dumping silence into the pipeline.",
      ],
    },
    {
      paragraphs: [
        "After processing, clinicians need playback synced with an editable transcript and behavioral tags. The review workbench uses **Video.js** with an **HLS** playlist and a remote **WebVTT** caption track — the active cue highlights as the video plays, so reading and watching stay in lockstep.",
        "A **dual timeline** supports both point annotations and time-range tags, with seek, frame-step, and play-until-range-end controls. Edits to the transcript and tag boundaries persist as structured records with millisecond precision.",
      ],
    },
    {
      paragraphs: [
        "REST calls, live streams, and protected media URLs all require the same identity — but each channel accepts credentials differently. A **Swagger**-generated typed client handles API requests with a bearer token; **WebSocket** connections authenticate with a token as the first message; and **HLS** playlists and **VTT** files load via token query parameters, because **Video.js** cannot set custom headers.",
        "The frontend unifies these patterns behind a single session model, so clinicians move from recording to review without re-authenticating or hitting broken media URLs mid-playback.",
      ],
    },
  ],
  closing: [
    "The app sits closer to a **clinical media tool** than a standard admin panel: **WebSockets** and **getUserMedia** for real-time capture, on-device **VAD** for speech gating, and a **Video.js** + **HLS** annotation workspace with synced **WebVTT** captions. The frontend is the control plane for a privacy-by-architecture loop — from session to anonymized review.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Doświadczenie komercyjne",
};
