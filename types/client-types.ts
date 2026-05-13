export const PAGE_ROUTES_LIST = [
  '/services',
  '/about',
  '/portfolio',
  '/work',
  '/reviews',
  '/blog',
  '/contacts',
  '/order',
] as const;
export type PageRoutesTypes = (typeof PAGE_ROUTES_LIST)[number];
