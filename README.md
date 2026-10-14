# Monica Chen — Portfolio

A one-page personal portfolio for Monica Chen, a data science student at Boston
University. Static HTML, CSS, and vanilla JavaScript — no build step, no
dependencies, no CDN, no network requests.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Structure and all copy. Contains the placeholder content. |
| `style.css` | All styling. Theme tokens, layout, light + dark palettes. |
| `script.js` | The theme toggle, and nothing else. |
| `AGENTS.md` | Project constraints. Read before making changes. |

## Run it locally

From the project root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open:

```
http://127.0.0.1:8000
```

`--bind 127.0.0.1` is required. It restricts the server to loopback so the site is
reachable only from this machine and is never exposed on your network.

Stop the server with `Ctrl-C`.

### Opening the file directly

`index.html` also works opened straight from disk (`file://`), since there is nothing
to build. Serving over localhost is still preferable — it matches production
behaviour and avoids `file://` restrictions in some browsers.

## Before you publish this

Every project card and link in `index.html` is a placeholder. Search the file for
`REPLACE` and fill in real content. The links are commented out on purpose so the
page never shows a dead or invented URL.

## Constraints

See `AGENTS.md`. In short: only three runtime files, no dependencies, all JS in
`script.js`, localhost only, and keyboard accessibility is mandatory.