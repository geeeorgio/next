import type { LucideIcon } from 'lucide-react';
import type { ComponentProps, ComponentType } from 'react';

export type CustomSvgIconType = ComponentType<ComponentProps<'svg'>>;
export type IconType = LucideIcon | CustomSvgIconType;

export type SocialListItemType = {
  label: string;
  url: string;
  icon: IconType;
};

export type ServicesListItemType = {
  label_ua: string;
  desc: string[];
  icon: IconType;
};

export const CASES_TAGS_LIST = ['Кулінарія'] as const;

export interface CaseListItemType {
  id: string;
  label_ua: string;
  desc: string;
  long_desc: string;
  img: string;
  tags: string[];
  location: string[];
  placement: string;
  budget: string;
  task: string;
  result: string;
  created: string;
}
