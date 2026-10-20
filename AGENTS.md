# Project constraints

## Purpose and content

This is Monica Chen's one-page **student class project**, a beginner-friendly guide
to BostonHacks. It is **not affiliated with or endorsed by BostonHacks**. Keep that disclaimer
visible in the footer. The header disclaimer was removed at the user's request.
Write original descriptions; do not copy another page or borrow its assets.

- Website references and external links were removed at the user's request.
  Ask the user for verified facts before adding club-specific information.
  General hackathon advice must not read like an event policy.
- Do not invent dates, locations, sponsors, fees, eligibility, registration links,
  team rules, support offerings, or other organizer commitments.
- Do not add external links, reproduce time-sensitive event details, or create a
  registration form without the user's request.
- Preserve the introduction, About BostonHacks, Get Involved, expandable FAQ,
  and light/dark theme toggle.

## Technical and safety boundaries

- Only three runtime files: `index.html`, `style.css`, and `script.js`.
- Plain HTML, CSS, and JavaScript only. No dependencies, package installs, CDN,
  webfonts, analytics, external assets, or build step.
- No external requests or external links; the local guide must render offline.
- All JavaScript belongs in `script.js`; no inline scripts or event handlers.
- Keep the script in the head without `defer` to apply the saved theme early.
- Keep everything in this repository; preserve unrelated user files.
- Serve only on loopback: `python3 -m http.server 8000 --bind 127.0.0.1`.
  Never bind to `0.0.0.0`. Do not start a server unless explicitly requested.
- Do not install, deploy, publish, commit, or push unless explicitly requested.

## Design and accessibility

- Playful Boston-transit-inspired design: cream light background, red/green/blue/
  orange accents, CSS-only transit lines, station-sign section headings.
- Transit artwork is decorative, not directions. Hide it from assistive technology.
- Use theme tokens for all colors. Maintain the explicit dark palette and the
  `prefers-color-scheme` fallback for visitors without JavaScript.
- Preserve `theme` storage key (`light`/`dark`) and try/catch around storage access.
- The theme button's visible and accessible labels must match:
  “Switch to dark theme” in light mode; “Switch to light theme” in dark mode.
  Preserve its `aria-pressed` state and native keyboard behavior.
- Use native `<details>` / `<summary>` FAQ controls; no custom accordion script.
- Keep the skip link first, semantic headings, visible focus, and logical Tab order.
- Controls must fit narrow screens and have at least 44px-high targets. Cards stack
  on mobile; at `48rem` the hero and card layouts expand.
- Body text must meet WCAG AA contrast in both themes. Never use color alone to
  communicate meaning. Do not add scroll or entrance animations.

## Verification

Run `node --check script.js`. Check local asset paths, fragment links, unique IDs,
theme labels, FAQ structure, and absence of inline JS, external links, or remote assets. Inspect diffs
without discarding user work. Do not install testing dependencies.

Human browser checks are still required: narrow and wide screens, zoom, keyboard
navigation, Enter/Space on FAQ and theme controls, focus visibility, theme persistence,
system/no-JS fallback, readability, and no horizontal overflow.
