I used Space Bunny Free in OpenCode for my original personal portfolio, then GPT-6.1 Sol from OpenAI for the BostonHacks update. I changed the topic because I am on the BostonHacks sponsorship team and wanted to introduce students to the event, especially beginners who might not know what a hackathon involves. That gave the site a purpose connected to something I do outside class.

One useful prompt was: "Change the design direction to a playful Boston transit theme," followed by requests for a cream background, red, green, blue, and orange accents, CSS transit lines, and station-sign headings. Those details gave the agent a clearer direction than just asking it to make the site look better.

One actual tool action was running `node --check script.js`, which reported no JavaScript syntax errors. The agent also reported automated theme checks. Those reports are different from browser behavior I personally confirmed. On the original portfolio, the theme button initially said "Dark." I requested a clearer label, refreshed the page, and saw "Switch to dark theme."

In the current code, `script.js` changes the HTML element's `data-theme` attribute, and CSS selects the matching colors. The script updates the visible button text and accessible label together and tries to save the choice in `localStorage`. The FAQs use native HTML `details` and `summary` elements, so expanding answers does not need JavaScript.

I still need to complete mobile, keyboard, and theme-persistence tests myself. Seeing the updated label confirmed that specific change, not every part of the site.
