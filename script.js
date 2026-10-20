/*
 * BostonHacks student class-project guide
 * All JavaScript for this site lives in this file.
 *
 * Single responsibility: the light/dark theme toggle, persisted to localStorage.
 * No dependencies, no build step, no analytics, no network requests.
 *
 * This file is loaded from <head> without `defer` so the stored theme is applied
 * before the first paint. The toggle button does not exist yet at that point, so
 * button wiring is deferred to DOMContentLoaded.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var LIGHT = "light";
  var DARK = "dark";

  var root = document.documentElement;
  var toggle = null;
  var label = null;

  /* -- storage: never let a blocked/failed store break the toggle ---------- */

  function readStoredTheme() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === LIGHT || value === DARK ? value : null;
    } catch (error) {
      // Private browsing or a blocked origin. Fall through to the system setting.
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Storage unavailable: the toggle still works, it just will not persist.
    }
  }

  /* -- theme resolution --------------------------------------------------- */

  function systemTheme() {
    if (typeof window.matchMedia !== "function") {
      return LIGHT;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === DARK ? DARK : LIGHT;
  }

  /* -- apply -------------------------------------------------------------- */

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);

    if (persist) {
      storeTheme(theme);
    }

    // The button only exists after the DOM is parsed; this is a no-op before then.
    if (!toggle) {
      return;
    }

    var isDark = theme === DARK;

    // Same two strings drive the visible label and the accessible name, so the
    // spoken label and the on-screen text can never drift apart.
    var action = isDark ? "Switch to light theme" : "Switch to dark theme";

    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    toggle.setAttribute("aria-label", action);

    if (label) {
      label.textContent = action;
    }
  }

  /* -- run before first paint (we are still in <head>) --------------------- */

  applyTheme(readStoredTheme() || systemTheme(), false);

  /* -- wire the button once the body exists -------------------------------- */

  function wireToggle() {
    toggle = document.getElementById("theme-toggle");

    if (!toggle) {
      return;
    }

    label = toggle.querySelector("[data-theme-label]");

    // Sync the button to the theme already on <html>.
    applyTheme(currentTheme(), false);

    // Without JavaScript the system palette still works; do not show a dead control.
    toggle.hidden = false;

    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === DARK ? LIGHT : DARK, true);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireToggle);
  } else {
    // Defensive: script.js was loaded with defer/async or at the end of <body>.
    wireToggle();
  }
})();
