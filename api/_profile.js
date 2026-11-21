// ─────────────────────────────────────────────────────────────
//  Everything the AI assistant knows about you lives here.
//  Edit this file whenever you ship a project or update your info —
//  the bot will only answer from what's written below.
//  (Files starting with "_" inside /api are NOT exposed as routes on Vercel.)
// ─────────────────────────────────────────────────────────────

export const PROFILE = `
NAME: Manan Vijay
LOCATION: Jaipur, Rajasthan, India
ROLES: Full Stack Engineer, Backend Engineer, Frontend Engineer, Cloud & DevOps Engineer, Data Engineer
STATUS: Open to full-time roles, internships, freelance projects and collaboration
EMAIL: mananvijay13@gmail.com
PHONE: +91 9602243295
GITHUB: https://github.com/mannsvijay
LINKEDIN: https://www.linkedin.com/in/mannsvijay
LEETCODE: https://leetcode.com/u/mannsvijay
PORTFOLIO: https://mannsvijay.vercel.app
RESUME (PDF): https://mannsvijay.vercel.app/Manan_Vijay_Resume.pdf

SUMMARY
Full-stack engineer focused on secure, scalable backend systems with React.js, Node.js, Spring Boot,
PostgreSQL, Redis, Docker and CI/CD. He has architected multi-role, production-grade platforms with
role-based access control, including a self-directed security audit that closed authorization
vulnerabilities before launch. He cares about concurrency, authorization, data correctness and proving
systems work under load. 1200+ DSA problems solved (900+ on LeetCode), 1800+ LeetCode contest rating,
Smart India Hackathon finalist. Currently going deeper into cloud, DevOps, data engineering and applied AI.

EDUCATION
B.Tech in Electronics & Communication Engineering, JECRC Foundation (Rajasthan Technical University),
Jaipur, 2023 to 2027. CGPA 7.5/10.

SKILLS
- Languages: C, C++, Java, JavaScript, TypeScript, Python
- Frontend: React.js, Next.js, Redux, TanStack Query, Tailwind CSS, Three.js, HTML, CSS
- Backend: Node.js, Express.js, Spring Boot, REST APIs, OpenAPI, JWT authentication and RBAC, Zod
- Databases & Data: PostgreSQL, MySQL, MongoDB, Redis, H2, Drizzle ORM, Mongoose, Apache Kafka,
  data modeling, data validation
- Cloud & DevOps: Docker, Docker Compose, CI/CD pipelines, GitHub Actions, Vercel, Oracle Cloud (OCI),
  Neon, MongoDB Atlas, Git & GitHub, Postman
- Applied AI & GenAI Platforms: Generative AI (GenAI), Claude, ChatGPT, Prompt Engineering,
  AI Workflow Automation, Applied AI Evaluation
- Testing & Quality: Playwright, Vitest, JUnit, k6 load testing, concurrency testing
- Core CS: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks

FEATURED PROJECTS (the seven on the website)
1. Stampede (Backend / distributed systems) — IN ACTIVE DEVELOPMENT, no live demo yet.
   A ticketing platform built for contention: thousands of buyers racing for the same seats.
   Built so far: one Spring Boot app split into 8 modules (identity, inventory, booking, payments,
   ticketing, waitingroom, realtime, control) with boundaries enforced by Spring Modulith tests;
   3 pluggable seat-locking strategies (pessimistic locking, optimistic version-checked writes, and a
   Redis-first strategy using Lua scripts); a concurrency harness that runs 1,000 randomized rounds per
   strategy in a GitHub Actions proof workflow (100 rounds on every push); an invariant checker that
   verifies rules like "no seat sold twice" after every test; per-user ticket caps that hold under
   concurrency; short-lived JWTs with rotating refresh tokens; Ed25519-signed tickets verifiable offline;
   k6 load tests. 24 design decisions are documented with their trade-offs.
   Planned next: published benchmarks, a fair waiting room, a live seat map, bot resistance, resilience
   and observability work.
   Stack: Java, Spring Boot, PostgreSQL, Redis, React 19, TypeScript, Vite, TanStack Query, Docker Compose,
   GitHub Actions, k6, Playwright.
   Code: https://github.com/mannsvijay/stampede
2. InstaVEG (Full stack marketplace) — hyperlocal marketplace where neighbourhood farms sell produce
   directly to buyers, with Buyer, Seller and Admin roles. Multi-farm cart that splits checkout into one
   order per farm, seller dashboards with revenue stats, admin approval of sellers, order tracking.
   pnpm TypeScript monorepo; an OpenAPI 3.1 contract generates React Query hooks and Zod validators;
   Express 5 API with JWT auth and role-based access; PostgreSQL on Neon via Drizzle ORM. A self-run
   security audit found and fixed BOLA/IDOR authorization flaws before launch.
   Stack: TypeScript, React 19, Vite, TanStack Query, Tailwind, Express 5, PostgreSQL, Drizzle ORM, OpenAPI, Zod.
   Live: https://instaveg.vercel.app/  Code: https://github.com/mannsvijay/instaveg-fullstack
3. SocialTube (Full stack video platform) — YouTube + X (Twitter) style app: upload and watch videos,
   likes on videos, comments and tweets, subscriptions, playlists, watch history, liked videos, tweets on
   your channel, and a creator studio with channel stats and video management (edit, publish/draft, delete).
   Guests can browse and watch everything published; actions need an account.
   Express 5 REST API with JWT access + refresh tokens in httpOnly cookies (refresh tokens rotate and work
   once), verifyJWT / optionalJWT middleware so public reads can still be personalised, Multer uploads to
   Cloudinary with one retry and temp-file cleanup, cascading deletes of likes, comments and playlist entries.
   React 19 + Vite SPA with TanStack Query, optimistic likes and subscriptions, automatic token refresh,
   lazy-loaded routes. Backend on Render (free tier, so the first request can take up to a minute while it
   wakes), frontend on Vercel, MongoDB Atlas, Cloudinary.
   Stack: React 19, Vite, TanStack Query, React Router, Tailwind CSS 4, Node.js, Express 5, MongoDB, Mongoose,
   JWT, bcrypt, Multer, Cloudinary.
   Live: https://social-tube-manns.vercel.app/  Code: https://github.com/mannsvijay/SocialTube

4. Appointy (Full stack healthcare) — doctor appointment platform with Patient, Doctor and Admin portals:
   specialty-based doctor discovery, slot booking, doctor dashboards with earnings, admin onboarding of
   doctors. JWT auth for all three roles; Razorpay and Stripe payments.
   Stack: React, Node.js, Express, MongoDB, JWT, Razorpay, Stripe.
   Live: https://appointy-roan.vercel.app/  Code: https://github.com/mannsvijay/appointy-fullstack
5. FairShift (Data engineering) — workforce scheduling engine combining leave requests, shift coverage,
   skills and labour rules. Generates 2,000 employees, 100 teams, 90 days and 5,000 leave requests in about
   30 seconds; 144/144 validation checks pass on the exported files; injected anomalies are detected with
   precision and recall of 1.0; zero hard-constraint violations; byte-for-byte reproducible from a seed.
   Python standard library only, SQLite for load checks, 27 unit tests.
   Code: https://github.com/mannsvijay/fairshift-scheduler
6. Insight Analytics Dashboard (Data / full stack) — analytics console over 1,000 research insights.
   8 interactive charts and KPI cards driven by server-side MongoDB aggregation, combinable filters
   (country, region, topic, sector, PESTLE, source, end year), paginated sortable table.
   Stack: React 18, Vite, Tailwind, Recharts, Node.js, Express, MongoDB Atlas.
   Live: https://blackcoffer-insight-dashboard.vercel.app/
   Code: https://github.com/mannsvijay/Blackcoffer-insight-dashboard
7. Cynbit Backend Audit (Backend / security) — passive, read-only backend and security audit of a
   production Next.js website: 20 findings in four groups (data handling, security, API/architecture,
   rendering/performance), each with severity, confidence and evidence, plus 12 runnable reference fixes
   (security headers, Zod validation, RFC 9457 errors, rate limiting with Turnstile and a honeypot,
   transactional outbox, Prisma data model, AES-256-GCM PII encryption, multi-tenancy with Postgres RLS,
   data retention).
   Report: https://cynbit-backend-audit-black.vercel.app  Code: https://github.com/mannsvijay/cynbit-backend-audit
OTHER WORK ON GITHUB
Chromatic Flux (Next.js + React Three
Fiber 3D experience); a Playwright + TypeScript QA automation suite; a ROS 2 TurtleBot3 Nav2 autonomous
navigation demo; Power Electronics and FOC Radar exam study tools. All repos: https://github.com/mannsvijay

EXPERIENCE
- Freelance Full Stack Developer (remote, self-employed), May 2024 to June 2026: owned 20+ full-stack apps
  end to end for independent clients as the sole engineer (requirements, architecture, deployment);
  JWT-authenticated REST APIs and responsive production UIs; maintained live deployments with
  post-launch fixes and feature iterations.
- JPMorgan Chase & Co. Software Engineering Virtual Experience (Forage): backend tasks in Java, Spring Boot,
  Apache Kafka (async transaction processing), H2, JPA and REST integration.
- Deloitte Data Analytics Job Simulation (Forage).
- Co-founder & brand lead, Flickies, a Jaipur streetwear brand (branding, creative direction, digital presence).

ACHIEVEMENTS
- 1200+ DSA problems solved across platforms (900+ on LeetCode), 1800+ contest rating, 500 Days badge.
- LeetCode global ranks: 198 in Biweekly Contest 174, 375 in Biweekly Contest 190, 1576 in Biweekly Contest 175.
- Smart India Hackathon (SIH) finalist; participant in multiple national-level hackathons.
- Oracle Cloud Infrastructure Generative AI Professional certification.
- Invited guest speaker at JECRC University for "Protocraft", a Figma and UI/UX design workshop by DevCrest JU.
`;