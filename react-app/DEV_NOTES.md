PROJECT: Portfolio (Vite + React + CSS Modules)

REPO/ZIP: <link to repo or attach latest zip>

KEY DECISIONS TO KEEP:
- Layout: CSS grid container = 320px left pane + 1fr right; stacks <1024px.
- RightPanel: inner column .contentCol max-width 56rem.
- Cards: full-width stacked; radius .375rem; default no bg/border; hover adds
  background: rgba(255,255,255,0.04), border-color: rgba(148,163,184,0.12), backdrop-filter: blur(6px);
  title -> var(--color-accent); siblings fade via `.cards:hover > .card:not(:hover){opacity:.5}`.
- Media: CSS-only JPG→GIF swap with `.mediaStatic/.mediaAnimated` opacity change.
- Background: cursor glow = radial-gradient 600px, fade 65%, ~6% of var(--color-accent).
- Paths: image URLs normalized with BASE_URL in Card (no hardcoded leading slash).
- Palette: use CSS vars; no hardcoded accent hex.

OPEN ITEMS:
- Extracted the nav from the left panel to seperate files, need the current nav point to stay like it's focus state (white text, longer line.). The currenlty selected/active nav item shoujld also be using the accent color for the line instead of the white line.
- Need to add stub Products and Patent section that are wired up to nav. With dummy cards in each
- Need to unify the Social Links and Download Resume button styles into a single group, while still making the download resume be a good CTA. It is is just a little icon like the other social links, it will not be good. I'm not 100% sure what to do here.
- need to have each card act as a link to it's github repo (or something else)
- Probably want clicking on an image/gif to open it in a larger modal. Maybe the entire card would get larger. I know this is not workable with the todo just above this. 
