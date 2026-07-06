# Riddhi Raina Prasad — Portfolio

Premium animated portfolio of **Riddhi Raina Prasad** — Full Stack & AI Engineer, MS CS @ NYU, Ex-SDE2 @ Optum (UnitedHealth Group), 5x hackathon winner.

Built with React 19, Vite, Tailwind CSS 4, Framer Motion, and AOS.

## Run locally

```bash
npm install
npm run dev
```

## Build & Deploy (Vercel)

```bash
npm run build   # outputs to dist/
```

Push to GitHub → Import repository on Vercel → Build command `npm run build`, output directory `dist` → Deploy.

## Customization

All personal content lives in one file: `src/data/portfolioData.js`.

### Adding your talking hero video (optional)

Generate a talking-avatar MP4 (e.g. with Google Veo) and drop it into
`src/assets/hero video/` — it will be picked up automatically and the
"Play Reel" button will appear. Until then, the hero shows your photo.

### Contact form

The contact form uses EmailJS. Set these in a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
