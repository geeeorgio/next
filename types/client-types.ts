export const BTN_TYPES_LIST = ['order', 'telegram'] as const;

export type BtnTypes = (typeof BTN_TYPES_LIST)[number];
