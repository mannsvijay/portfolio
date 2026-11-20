<div align="center">

# Manan Vijay — Portfolio

**Full Stack Developer · UI/UX Designer · Builder**

A hand-built, single-page portfolio with a 3D particle hero and an AI assistant that answers visitors' questions about my work.

[**Live site**](https://mannsvijay.vercel.app) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/mannsvijay) &nbsp;·&nbsp; [LeetCode](https://leetcode.com/u/mannsvijay) &nbsp;·&nbsp; [Email](mailto:mananvijay13@gmail.com)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

<!-- Add a screenshot: save it as assets/preview.png and uncomment the line below -->
<!-- ![Portfolio preview](assets/preview.png) -->

## Features

**Ask My AI.** A chat assistant in the corner of the page (and a button in the hero) that answers questions about my projects, skills, experience and availability. It only answers from a profile file I maintain, links to live demos and repos, replies in the visitor's language, and points people to email for anything it doesn't know. Conversations survive a page refresh within the same tab.

**3D hero.** A Three.js particle field with a wireframe icosahedron and orbiting rings that follow the mouse. If the CDN is blocked, the page skips it and everything else keeps working.

**Interaction details.** Custom glowing cursor with hover states, magnetic buttons, a typewriter role line, animated stat counters, and scroll-triggered reveals for skills, projects, achievements and the timeline.

**Working contact form.** Sends straight to my inbox through FormSubmit with AJAX, validation, a honeypot field and inline success and error messages.

**Built to a quality floor.** Responsive down to small phones, native cursor restored on touch devices, `prefers-reduced-motion` respected, keyboard-accessible chat (Enter to send, Shift+Enter for a new line, Esc to close), plus SEO and social-share meta tags.

## Tech stack

| Layer | Tools |
| --- | --- |
| Frontend | Vanilla HTML, CSS and JavaScript in a single `index.html`, no build step |
| 3D | Three.js r128 |
| AI backend | Vercel Serverless Function (`/api/chat`) |
| AI models | Groq (GPT-OSS 120B), Google Gemini, or Anthropic Claude, picked by environment variable |
| Forms | FormSubmit |
| Fonts | Bebas Neue, Outfit, JetBrains Mono |
| Hosting | Vercel |

## Project structure

```
portfolio/
├── index.html        # The whole site: markup, styles and scripts
├── api/
│   ├── chat.js       # POST /api/chat, talks to the AI provider (key stays server-side)
│   └── _profile.js   # What the assistant knows about me; edit this to update its answers
├── package.json      # Marks the project as ES modules, Node 18+
├── .env.example      # Environment variable template
└── .gitignore
```

## How the AI assistant works

```
Visitor types a question
        │
        ▼
index.html ── POST /api/chat { messages } ──►  api/chat.js
                                                 │  validates and trims input
                                                 │  rate-limits per IP
                                                 │  adds system prompt + _profile.js
                                                 ▼
                                        Groq / Gemini / Claude API
                                                 │
index.html ◄──────────── { reply } ──────────────┘
renders the reply with links and formatting
```

The API key is only ever read on the server, so it never appears in the page source. The function sends the last 12 messages for context, caps each message at 600 characters, allows 20 requests per IP every 10 minutes, and can be locked to your own domain with `ALLOWED_ORIGINS`. The system prompt tells the model to answer only from `_profile.js`, speak about me in the third person, keep answers short, and decline off-topic requests.

## Run it locally

The static page works by just opening `index.html`, but the chat needs the serverless function, so use the Vercel CLI:

```bash
git clone https://github.com/mannsvijay/portfolio.git
cd portfolio
npm i -g vercel
cp .env.example .env.local   # then paste your API key into .env.local
vercel dev                   # opens http://localhost:3000
```

## Deploy

1. Get a free API key from [Groq](https://console.groq.com/keys) (recommended) or [Google AI Studio](https://aistudio.google.com/apikey).
2. In Vercel, open the project, go to **Settings → Environment Variables**, and add `GROQ_API_KEY` (or `GEMINI_API_KEY`).
3. Push to `main`. Vercel picks up the `api/` folder automatically, with no build settings needed.
4. Optional: add `ALLOWED_ORIGINS=https://mannsvijay.vercel.app` so other sites can't use your endpoint.

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `GROQ_API_KEY` | One of these three | Uses Groq, default model `openai/gpt-oss-120b` |
| `GEMINI_API_KEY` | One of these three | Uses Gemini, default model `gemini-flash-latest` |
| `ANTHROPIC_API_KEY` | One of these three | Uses Claude, default model `claude-haiku-5-5` |
| `AI_PROVIDER` | No | Forces `groq`, `gemini` or `anthropic` when several keys are set |
| `AI_MODEL` | No | Overrides the default model for the chosen provider |
| `ALLOWED_ORIGINS` | No | Comma-separated list of sites allowed to call `/api/chat` |

Model names change over time. If the assistant stops replying, check the provider's model list and set `AI_MODEL`.

## Customize

| To change | Edit |
| --- | --- |
| What the assistant knows | `api/_profile.js` |
| Assistant tone and rules | `SYSTEM_PROMPT` in `api/chat.js` |
| Suggested questions and greeting | `CHIPS` and `WELCOME` in the AI assistant script in `index.html` |
| Typewriter roles in the hero | `phrases` in `index.html` |
| Colors and fonts | CSS variables in `:root` at the top of `index.html` |
| Contact form destination | The FormSubmit URL in the contact form script |

## Contact

Open to internships, freelance work and collaborations.

**Manan Vijay**, Jaipur, India · [mananvijay13@gmail.com](mailto:mananvijay13@gmail.com) · [github.com/mannsvijay](https://github.com/mannsvijay)

---

<div align="center">Designed and built by Manan Vijay</div>