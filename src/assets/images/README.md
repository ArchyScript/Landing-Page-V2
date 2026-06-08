# Landing Page Images

Drop exported landing-page assets in this folder, then wire them through the `imageSrc` fields in `src/pages/HomePage.vue`.

Suggested filenames:

- `hero-app-home.png`
- `feature-virtual-card.png`
- `feature-shop-across-borders.png`
- `feature-virtual-account.png`
- `feature-savings.png`
- `benefits-transfer.png`
- `step-signup.png`
- `step-fund-wallet.png`
- `step-spend.png`
- `cta-currency-belongs.png`
- `use-tuition.png`
- `use-send-money.png`
- `use-products.png`
- `use-freelance.png`

The placeholder components already preserve the layout sizes while these assets are missing.

Image rendering is handled through:

- `src/components/common/ImageLoader.vue` for loading/error/empty states.
- `src/components/common/PlaceholderImage.vue` for section image slots with background tones.

Icons are handled through:

- `src/components/common/UiIcon.vue`

Use the global `<UiIcon />` component for small app-like symbols instead of hand-drawn inline SVG in section components.
