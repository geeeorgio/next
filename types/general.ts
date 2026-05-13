import type { IconType } from 'react-icons';

export type SocialListItemType = {
  label: string;
  url: string;
  icon: IconType;
};

export type ServicesListItemType = {
  label_ua: string;
  desc: string;
  icon: IconType;
};

export const CASES_TAGS_LIST = ['Кулінарія', '', '', ''] as const;

export interface CaseListItemType {
  id: string;
  label_ua: string;
  desc: string;
  long_desc: string;
  img: string;
  tags: [];
  location: [];
  placement: string;
  budget: number;
  task: string;
  result: string;
  created: string;
}
