# Icons

This folder contains exported SVG icon and logo files.

Current files:
- `greep-logo.svg`: Greep mark only.
- `greep-ful-logo.svg`: Full GreepPay logo.
- `sample-ui-icon.svg`: sample exported icon shape.
- UI icons: `card.svg`, `clock.svg`, `close.svg`, `download.svg`, `greep.svg`, `menu.svg`, `money.svg`, `send.svg`, `wallet.svg`.

For interface icons inside Vue components, use the global `<UiIcon />` component:

```vue
<UiIcon name="wallet" custom-class="w-5 h-5" alt="Wallet" />
<UiIcon name="download" extension="svg" />
```

The component loads icons from `/images/icons/{name}.{extension}`.

Use exported SVG files here when an exact brand asset is needed. Use `<UiIcon />` for reusable UI symbols.
