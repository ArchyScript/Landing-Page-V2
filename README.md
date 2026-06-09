# Landing Page V2

## Development

```bash
npm install
npm run dev
```

## Deployment base path

Copy `.env.example` to `.env.production` and set `VITE_APP_BASE_URL` to the
public path where the site is hosted.

```env
# Root domain, Vercel, or Netlify
VITE_APP_BASE_URL=/

# GitHub Pages repository path
VITE_APP_BASE_URL=/Landing-Page-V2/
```

The configured path is shared by Vite, Vue Router, images, icons, and flags.
