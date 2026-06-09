const configuredBase =
  import.meta.env.VITE_APP_BASE_URL || import.meta.env.BASE_URL || '/';

const basePath = configuredBase.replace(/\/?$/, '/');

export const assetUrl = (path: string) =>
  `${basePath}${path.replace(/^\/+/, '')}`;
