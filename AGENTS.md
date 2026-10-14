# AGENTS.md

Constraints for anyone (human or agent) working in this repository.

## What this project is

A one-page personal portfolio for **Monica Chen**, a data science student at Boston
University. Static, single-page, recruiter-facing. Plain HTML, CSS, and vanilla
JavaScript — no framework, no build step, no server-side code.

## Hard constraints

These are not preferences. Breaking one invalidates the project.

1. **Only three runtime files:** `index.html`, `style.css`, `script.js`. Do not add
   other source files without asking.
2. **Zero dependencies.** No package manager, no `node_modules`, no CDN links, no
   webfonts, no icon packs, no analytics, no tracking. The page must render fully
   offline with the network disabled.
3. **No external requests.** Every asset ships in this repo or is inline SVG.
4. **All JavaScript lives in `script.js`.** No inline `<script>` blocks in the HTML,
   no separate JS files. `script.js` is loaded from `<head>` without `defer` on
   purpose — it must keep running before first paint so the saved theme applies with
   no flash. Do not move it or add `defer`.
5. **Localhost only.** Never bind to `0.0.0.0` and never expose this on a network.
   Serve with `--bind 127.0.0.1`.
6. **Never deploy, install, or publish** without explicit instruction. Do not commit
   or push unless asked in that turn.

## Accessibility requirements

Non-negotiable; treat regressions as bugs.

- Full keyboard operability. Logical DOM order = reading order = Tab order.
- A visible `:focus-visible` outline on every interactive element. Never `outline: none`.
- "Skip to content" link stays as the first focusable element.
- The theme toggle is a real `<button>` with `aria-pressed` and a descriptive
  `aria-label` that updates when the state changes.
- Touch targets ≥ 44px tall (`.theme-toggle` sets `min-height: 2.75rem`).
- Body text meets WCAG AA contrast in **both** light and dark themes. When you change
  a token in one theme, change its counterpart in the other.
- Decorative SVGs carry `aria-hidden="true"` and `focusable="false"`.
- `prefers-reduced-motion` is honored. There are no scroll or entrance animations —
  do not add any.

## Theming rules

- Colors live in CSS custom properties on `:root` and are overridden wholesale by
  `[data-theme="dark"]`. Never hard-code a color outside those blocks.
- The `prefers-color-scheme` media query targets `:root:not([data-theme])` so it only
  applies when JavaScript is off, and can never fight the explicit attribute.
- The `localStorage` key is exactly `theme`, values exactly `light` or `dark`.
- Storage access must stay inside try/catch so private-browsing failures degrade
  gracefully instead of throwing.

## Content rules

- Placeholder content must stay **obviously placeholder**: each project card shows a
  visible `Placeholder` badge, and every editable slot carries a `REPLACE` HTML
  comment.
- **Never invent results.** No fabricated accuracy scores, percentages, user counts,
  or client names.
- **Never ship dead or invented links.** Project and contact link markup stays
  commented out until a real URL exists. No `href="#"`.
- Use `<!-- REPLACE: ... -->` as the standard marker so placeholders are greppable.

## Responsive rules

Mobile-first. Base styles target narrow viewports; enhancements go in
`min-width` media queries. Use `clamp()` for fluid type. Breakpoints in use: `34rem`
(fact list) and `48rem` (two-column project grid).

## Verification before calling a change done

```sh
node --check script.js   # JS syntax
```

Then confirm in a browser: Tab-only pass through the whole page, both themes, and a
narrow width. Automated checks cannot cover contrast, focus order, or the theme flash.