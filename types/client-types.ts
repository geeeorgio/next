export const BTN_TYPES_LIST = ['order', 'telegram'] as const;
export type BtnTypes = (typeof BTN_TYPES_LIST)[number];

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
