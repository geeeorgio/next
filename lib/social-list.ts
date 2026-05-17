import { FacebookIcon } from '@/components/ui/icons/FacebookIcon';
import { InstagramIcon } from '@/components/ui/icons/InstagramIcon';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { TelegramIcon } from '@/components/ui/icons/TelegramIcon';
import { YoutubeIcon } from '@/components/ui/icons/YoutubeIcon';
import type { SocialListItemType } from '@/types/general';

export const socialList: SocialListItemType[] = [
  { label: 'telegram', url: 'https://t.me/luydmila_kyryliuk', icon: TelegramIcon },
  { label: 'instagram', url: 'https://www.instagram.com/kyryliuk.ads', icon: InstagramIcon },
  { label: 'youtube', url: 'https://www.youtube.com/@LyuskinsRecipes', icon: YoutubeIcon },
  {
    label: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=61577524193923',
    icon: FacebookIcon,
  },
  { label: 'linkedin', url: '', icon: LinkedinIcon },
];

export const TG_LINK = 'https://t.me/luydmila_kyryliuk';
