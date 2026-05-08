import {
  LiaInstagram,
  LiaFacebookSquare,
  LiaLinkedin,
  LiaYoutube,
  LiaTelegramPlane,
} from 'react-icons/lia';
import { TbTargetArrow, TbChartBarPopular, TbShieldCheck, TbHeartHandshake } from 'react-icons/tb';

export const navItemsList = [
  { href: '/services', label_en: 'Services', label_ua: 'Послуги' },
  { href: '/about', label_en: 'About', label_ua: 'Про мене' },
  { href: '/portfolio', label_en: 'Portfolio', label_ua: 'Кейси' },
  { href: '/work', label_en: 'Work phases', label_ua: 'Етапи роботи' },
  { href: '/reviews', label_en: 'Reviews', label_ua: 'Відгуки' },
  { href: '/blog', label_en: 'Blog', label_ua: 'Блог' },
  { href: '/contacts', label_en: 'Contacts', label_ua: 'Контакти' },
  { href: '/order', label_en: `Start a Project`, label_ua: 'Почати проєкт' },
] as const;

export const stats = [
  { value: '2+ роки', label: 'досвіду' },
  { value: '15+', label: 'проєктів' },
  { value: 'Україна та Європа', label: 'міжнародні клієнти' },
] as const;

export const skills = [
  'більше заявок з реклами',
  'цільових клієнтів',
  'стабільний потік продажів',
  'заявки без зливу бюджету',
  'мастшабування бізнесу',
];

export const infoList = [
  {
    text: `Реклама,\nяка приносить результат`,
    text_en: '',
    icon: TbTargetArrow,
  },
  {
    text: `Прозора аналітика\n\nта звітність`,
    text_en: '',
    icon: TbChartBarPopular,
  },
  {
    text: `Ефективні рішення.\nБез зливу бюджету`,
    text_en: '',
    icon: TbShieldCheck,
  },
  {
    text: `Індивідуальний підхід\nдо потреб бізнесу`,
    text_en: '',
    icon: TbHeartHandshake,
  },
];

export const socialList = [
  { label: 'telegram', url: '', icon: LiaTelegramPlane },
  { label: 'instagram', url: '', icon: LiaInstagram },
  { label: 'youtube', url: '', icon: LiaYoutube },
  { label: 'facebook', url: '', icon: LiaFacebookSquare },
  { label: 'linkedin', url: '', icon: LiaLinkedin },
];

export const servicesList = [
  {
    href: '/services',
    label_ua: 'Таргетована реклама (Meta Ads)',
    desc: 'Налаштування та оптимізація реклами в Facebook та Instagram для стабільного потоку заявок та продажів.',
  },
  {
    href: '/services',
    label_ua: 'Реклама в Google Ads',
    desc: 'Пошукова, медійна та YouTube-реклама для залучення клієнтів, які вже шукають ваш продукт або послугу.',
  },
  {
    href: '/services',
    label_ua: 'Комплексне ведення реклами',
    desc: 'Повний супровід рекламних кампаній: стратегія, запуск, аналітика, оптимізація та масштабування результатів.',
  },
];
