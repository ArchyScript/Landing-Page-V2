# Style System

Core color tokens live in `variables.css`.

Use these CSS variables in component styles:

- `--color-brand-50` through `--color-brand-900`
- `--color-theme-ink`
- `--color-theme-muted`
- `--color-theme-line`
- `--color-theme-canvas`
- `--color-theme-surface`
- `--color-theme-accent`
- `--color-state-success`
- `--color-state-warning`
- `--color-state-danger`

Tailwind utility colors are configured in `tailwind.css` with matching names:

```html
<div class="bg-brand-50 text-theme-ink border-theme-line"></div>
```

Keep new landing-page section colors mapped to these tokens before adding new one-off values.
