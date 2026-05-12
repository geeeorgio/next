import { FaMeta } from 'react-icons/fa6';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import {
  LiaInstagram,
  LiaFacebookSquare,
  LiaLinkedin,
  LiaYoutube,
  LiaTelegramPlane,
} from 'react-icons/lia';
import { SiGoogleads } from 'react-icons/si';
import {
  TbTargetArrow,
  TbChartBarPopular,
  TbShieldCheck,
  TbHeartHandshake,
  TbSearch,
  TbChessKnight,
  TbRocket,
  TbChartInfographic,
  TbArrowsMaximize,
} from 'react-icons/tb';

export const navItemsList = [
  { href: '/services', label_en: 'Services', label_ua: 'Послуги' },
  { href: '/about', label_en: 'About', label_ua: 'Про мене' },
  { href: '/portfolio', label_en: 'Portfolio', label_ua: 'Кейси' },
  { href: '/work', label_en: 'Work phases', label_ua: 'Етапи роботи' },
  { href: '/reviews', label_en: 'Reviews', label_ua: 'Відгуки' },
  { href: '/blog', label_en: 'Blog', label_ua: 'Блог' },
  { href: '/contacts', label_en: 'Contacts', label_ua: 'Контакти' },
] as const;

export const skills = [
  'таргетована реклама в Meta Ads',
  'пошукова реклама в Google Ads',
  'просування на Google Картах',
  'комплексні маркетингові стратегії',
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
    label_ua: 'Таргетована реклама (Meta Ads)',
    desc: 'Залучення гарячих заявок через Facebook та Instagram. Створюю рекламні воронки, проводжу А/В тестування та масштабую найприбутковіші аудиторії для зниження ціни ліда',
    icon: FaMeta,
  },
  {
    href: '/services',
    label_ua: 'Реклама в Google Ads та на Картах',
    desc: 'Перехоплення готового попиту. Налаштовую пошукову рекламу (PPC) та виводжу ваш локальний бізнес у топ на Google Maps, щоб клієнти знаходили вас першими',
    icon: SiGoogleads,
  },
  {
    href: '/services',
    label_ua: 'Створення сайтів під ключ',
    desc: 'Розробка сучасних багатосторінкових сайтів та лендінгів. Створюємо швидкі, адаптивні платформи, які ідеально оптимізовані під запуск трафіку та високу конверсію',
    icon: HiOutlineComputerDesktop,
  },
];

export const casesList = [
  {
    label_ua: 'Кейс 1',
    desc: 'текст опису',
  },
  {
    label_ua: 'Кейс 2',
    desc: 'текст опису',
  },
  {
    label_ua: 'Кейс 3',
    desc: 'текст опису',
  },
  {
    label_ua: 'Кейс 4',
    desc: 'текст опису',
  },
];

export const workSteps = [
  {
    text: `Аналіз проєкту, клієнтів та конкурентів`,
    text_en: '',
    icon: TbSearch,
  },
  {
    text: `Індивідуальна стратегія просування`,
    text_en: '',
    icon: TbChessKnight,
  },
  {
    text: `Налаштування, запуск та оптимізація реклами`,
    text_en: '',
    icon: TbRocket,
  },
  {
    text: `Регулярна прозора звітність`,
    text_en: '',
    icon: TbChartInfographic,
  },
  {
    text: `Супровід та масштабування`,
    text_en: '',
    icon: TbArrowsMaximize,
  },
];
