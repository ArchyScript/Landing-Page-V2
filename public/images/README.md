# Image Assets

Use this folder for static files that should be served directly by Vite.

- `images/icons/` stores exported logo marks, product icons, and other SVG files.
- `images/samples/` stores sample assets used by component examples.
- `images/brands/` stores partner logos and customer imagery used across landing sections.
- Future section images can live in folders like `images/hero/`, `images/features/`, or `images/testimonials/`.
- Reference public assets from Vue with root paths, for example `/images/icons/greep-logo.svg`.

Vue image placeholders are handled in `src/components/common/ImageLoader.vue` and `src/components/common/PlaceholderImage.vue`.

Current landing exports use descriptive file names such as `transfer-receipt-phone.png`, `trusted-by.jpg`, `home-with-bg-pattern.png`, and `brands/happy-user.png`.

Sample usage:

```vue
<ImageLoader
  photo-url="/images/samples/image-loader-sample.svg"
  alt="Sample exported landing page image"
  label="Sample public image"
  fit="contain"
  can-show-full-image
/>
```
