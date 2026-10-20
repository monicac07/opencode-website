# BostonHacks — Student Guide

**An independent student class project by Monica Chen, not affiliated with or endorsed by BostonHacks.**

A beginner-friendly, one-page guide with About BostonHacks, Get Involved, and an
expandable FAQ. The playful transit-inspired design uses a cream background,
red/green/blue/orange accents, CSS route decorations, and station-sign headings.
Both light and dark themes use readable text and clear cards.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Original guide text, disclaimer, navigation, and native FAQ controls. |
| `style.css` | Responsive layout, transit artwork, focus styles, and theme palettes. |
| `script.js` | Theme switching and local preference storage; no dependencies. |
| `AGENTS.md` | Content, accessibility, and development constraints. |
| `.gitignore` | Guards against committing secrets, dependencies, and macOS metadata. |

## Run locally (only when you choose)

Open a terminal in `/Users/monica/projects/opencode-website`, then run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000/** in your browser. Stop the server with **Ctrl-C**.
The loopback bind is required: do not replace it with `0.0.0.0` or expose the server
to your network. No installation or build step is needed. No deployment is configured.

## Source and factual boundaries

Guide descriptions and CSS artwork are original to this assignment.
Website references and external links were removed at the user's request.

Dates, locations, sponsors, registration details, and policies are intentionally
not reproduced. Preparation
suggestions and FAQ answers are general advice, not BostonHacks rules or guarantees.
This page neither collects registrations nor represents the organizers.

All runtime assets are local; no fonts, libraries, analytics, or remote resources
are loaded. The page contains no external links.

## Checks

JavaScript syntax (with Node already available):

```sh
node --check script.js
```

Manual browser checklist after starting localhost yourself:

- Check 320px-wide and desktop layouts, plus 200% zoom, for readable text and overflow.
- Tab from the skip link through navigation, links, theme toggle, and FAQ summaries;
  confirm visible focus. Use Enter/Space to operate the button and FAQ controls.
- Check both themes, matching visible/accessibility labels, and reload persistence.
- Disable JavaScript: content and FAQ should still work, the theme button should be
  hidden, and the system color preference should apply.
- Check screen-reader announcements for headings, disclaimer, and FAQ expanded state.

No server is started by these files or the syntax check. See `AGENTS.md` before editing.
