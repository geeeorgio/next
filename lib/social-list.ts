import {
  LiaFacebookSquare,
  LiaInstagram,
  LiaLinkedin,
  LiaTelegramPlane,
  LiaYoutube,
} from 'react-icons/lia';

import type { SocialListItemType } from '@/types/general';

export const socialList: SocialListItemType[] = [
  { label: 'telegram', url: '', icon: LiaTelegramPlane },
  { label: 'instagram', url: '', icon: LiaInstagram },
  { label: 'youtube', url: '', icon: LiaYoutube },
  { label: 'facebook', url: '', icon: LiaFacebookSquare },
  { label: 'linkedin', url: '', icon: LiaLinkedin },
];
