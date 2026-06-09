# Icons

This folder contains exported SVG interface icons and logo files.

- `greep-ful-logo.svg`: full GreepPay logo.
- Store icons: `apple.svg`, `google-play.svg`.
- UI icons: `card.svg`, `clock.svg`, `close.svg`, `download.svg`, `menu.svg`, `money.svg`, `wallet.svg`.
- `flags/`: currency and country symbols used by the currency marquee.

Use the global `<UiIcon />` component for reusable interface symbols:

```vue
<UiIcon name="wallet" custom-class="h-5 w-5" alt="Wallet" />
```

The component loads `/images/icons/{name}.{extension}` through the configured
Vite base path.
