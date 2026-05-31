<div align="center">

<img src="logo.svg" alt="HIVE logo" width="120" height="120" />

# HIVE — U of T's Product Community

**Two-way learning for people who build.**

A fast, dependency-free landing page for HIVE, the University of Toronto's
student-run product community built around exchange: bring work in, leave sharper.

[![Deploys on Vercel](https://img.shields.io/badge/Deploys%20on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)
[![Instagram](https://img.shields.io/badge/Instagram-%40hive.uoft-e8b400?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/hive.uoft/)
![No build step](https://img.shields.io/badge/build-none%20required-1a3fa0?style=flat-square)

</div>

---

## Overview

HIVE is a graduate student–led community for digital product thinkers and makers —
UX design, product management, software development, and business analysis. This
repository is the marketing landing page: a single, hand-tuned HTML page styled with
modern CSS and a sprinkle of vanilla JavaScript. No framework, no bundler, no
`node_modules` — just open it and it runs.

> Bring something in. Leave with something better.

## Highlights

- **Zero dependencies** — pure HTML, CSS, and a single small JS file. Nothing to install to view it.
- **Responsive by design** — fluid `clamp()` typography and breakpoints down to 480px.
- **Animated, but tasteful** — scroll-reveal via `IntersectionObserver`, a slow-spinning
  logo, a floating hero scene, and an animated hexagon lattice backdrop (hive, get it?).
- **Accessible foundations** — semantic landmarks, `aria-label`ed nav, descriptive
  `alt` text, and visible focus states on interactive elements.
- **SEO-ready** — descriptive `<title>`, meta description, and an SVG favicon.
- **Self-contained assets** — all imagery ships as SVG in the repo.

## Tech Stack

| Layer        | Choice                                                        |
| ------------ | ------------------------------------------------------------ |
| Markup       | Semantic HTML5 (`index.html`)                                |
| Styling      | Modern CSS — custom properties, grid, `clamp()`, keyframes (`styles.css`) |
| Behavior     | Vanilla JavaScript — `IntersectionObserver` scroll reveal (`script.js`) |
| Typography   | [Satoshi](https://www.fontshare.com/fonts/satoshi) via Fontshare + system mono |
| Hosting      | [Vercel](https://vercel.com) (auto-deploy + PR preview builds) |

## Project Structure

```
hive-landing-page/
├── index.html              # The page: header, hero, sections, team, footer
├── styles.css              # All styling (design tokens live in :root)
├── script.js               # Scroll-reveal animations (IntersectionObserver)
├── logo.svg                # Brand mark / favicon
├── hero-exchange.svg       # Hero illustration
├── icon-*.svg              # Section icons (bring-work, share-back, cross-discipline)
├── portrait-*.svg          # Team portraits (krishna, harshita, anushka, rishi)
└── README.md
```

## Getting Started

No build step is required. Clone and open the file directly, or serve it locally
for accurate font loading and relative paths.

```bash
git clone https://github.com/rishiashar/hive-landing-page.git
cd hive-landing-page

# Option A — just open it
open index.html            # macOS  (use `xdg-open` on Linux)

# Option B — serve locally (recommended)
python3 -m http.server 8000
# then visit http://localhost:8000
```

Any static server works (`npx serve`, VS Code Live Server, etc.) — pick your favourite.

## Customizing

Design tokens are centralized as CSS custom properties at the top of
[`styles.css`](styles.css), so most theming is a one-line change:

```css
:root {
  --blue: #2a5ee2;   /* primary brand blue   */
  --gold: #e8b400;   /* accent / CTA gold     */
  --white: #ffffff;
  /* …spacing, panel fills, and frame lines follow */
}
```

- **Copy & sections** live in `index.html` (each `<section>` is independent).
- **Animations** are toggled by the `data-animate` attribute — add it to any element
  to have it fade/slide in on scroll.
- **Team** members are `<article class="team-member">` blocks; per-person portrait
  framing is tuned with `.team-<name> .team-portrait img` rules.

## Deployment

The site auto-deploys via **Vercel**:

- **Production** — every push to `main` ships to the project's production deployment.
- **Previews** — every pull request gets its own preview deployment, linked
  automatically in the PR.

Because it's fully static, it can be hosted anywhere (GitHub Pages, Netlify,
Cloudflare Pages, or any static file host) with no configuration.

## The Team

| Role           | Member          |
| -------------- | --------------- |
| President      | Krishna Rana    |
| Vice President | Harshita Verma  |
| Secretary      | Anushka Rane    |
| Designer       | Rishi Ashar     |

## Connect

- **Instagram:** [@hive.uoft](https://www.instagram.com/hive.uoft/)

---

<div align="center">
<sub>Learn from each other. Build with each other. — HIVE / U of T's Product Community</sub>
</div>
