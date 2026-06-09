# Image Assets

Static landing-page images live here and are served directly by Vite.

- `feat/` contains individual and merchant feature visuals.
- `steps/` contains the three onboarding illustrations.
- `uses/` contains use-case photography.
- `icons/` contains interface icons, the GreepPay logo, and currency flags.

Use WebP for raster exports and SVG for icons. Reference assets with root paths,
for example `/images/feat/virtual-card.webp`. The shared `ImageLoader` and
`PlaceholderImage` components handle loading, fallback, and responsive display.
