import type { LandingFormListItemType } from '@/types/form-schema';

export const landingFormList: LandingFormListItemType[] = [
  {
    _id: 'user_name',
    _label_ua: 'Як до вас звертатися?',
    _label_en: '',
    _placeholder_ua: `Ваше ім'я`,
    _placeholder_en: 'Your name',
    _name: 'name',
    _type: 'text',
    _required: true,
  },
  {
    _id: 'user_phone_number',
    _label_ua: 'Номер телефону',
    _label_en: '',
    _placeholder_ua: '+38 (099) 999-99-99',
    _placeholder_en: '+7 (999) 000-00-00',
    _name: 'phone_number',
    _type: 'tel',
    _required: true,
  },
  {
    _id: 'user_link',
    _label_ua: 'Ваш сайт або соцмережі',
    _label_en: '',
    _placeholder_ua: 'https://',
    _placeholder_en: 'https://',
    _name: 'link',
    _type: 'url',
    _required: false,
  },
  {
    _id: 'user_telegram',
    _label_ua: 'Нікнейм в telegram',
    _label_en: '',
    _placeholder_ua: '@nickname',
    _placeholder_en: '@nickname',
    _name: 'telegram',
    _type: 'text',
    _required: false,
  },
];
