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

import type { LandingFormListItemType } from '@/types/form-schema';
import type { CaseListItemType, ServicesListItemType, SocialListItemType } from '@/types/general';

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

export const socialList: SocialListItemType[] = [
  { label: 'telegram', url: '', icon: LiaTelegramPlane },
  { label: 'instagram', url: '', icon: LiaInstagram },
  { label: 'youtube', url: '', icon: LiaYoutube },
  { label: 'facebook', url: '', icon: LiaFacebookSquare },
  { label: 'linkedin', url: '', icon: LiaLinkedin },
];

export const servicesList: ServicesListItemType[] = [
  {
    label_ua: 'Таргетована реклама (Meta Ads)',
    desc: 'Залучення гарячих заявок через Facebook та Instagram. Створюю рекламні воронки, проводжу А/В тестування та масштабую найприбутковіші аудиторії для зниження ціни ліда',
    icon: FaMeta,
  },
  {
    label_ua: 'Реклама в Google Ads та на Картах',
    desc: 'Перехоплення готового попиту. Налаштовую пошукову рекламу (PPC) та виводжу ваш локальний бізнес у топ на Google Maps, щоб клієнти знаходили вас першими',
    icon: SiGoogleads,
  },
  {
    label_ua: 'Створення сайтів під ключ',
    desc: 'Розробка сучасних багатосторінкових сайтів та лендінгів. Створюємо швидкі, адаптивні платформи, які ідеально оптимізовані під запуск трафіку та високу конверсію',
    icon: HiOutlineComputerDesktop,
  },
];

export const casesList: CaseListItemType[] = [
  {
    id: 'local_barnershop',
    label_ua: 'Барбершоп та академія',
    desc: '180 000 грн доходу (316 лідів)',
    long_desc: 'Барбершоп (м. Вінниця) | 180 000 грн доходу з курсів при бюджеті $10/день',
    img: '/local_barnershop.png',
    tags: ['Meta Ads (Facebook, Instagram)'],
    location: ['Вінниця'],
    placement: 'Facebook',
    budget: '10$ в день',
    task: 'Заповнити групу на офлайн-навчання.',
    result:
      'Як запуск цільової лідогенерації в Instagram Direct дозволив локальному бізнесу продати навчальні курси на 180 000 грн при жорсткому обмеженні рекламного бюджету всього у $10 на день',
    created: '05.05.2026',
  },
  {
    id: 'premium_flashlights',
    label_ua: 'Спеціалізовані ліхтарі',
    desc: 'Ліхтарі Armytek | Технічне налаштування кабінету, інтеграція Pixel та запуск конверсій',
    long_desc:
      'Створення міцного фундаменту для e-commerce проєкту: від інтеграції аналітики та прогріву кабінету до розробки креативної стратегії та тестування аудиторій',
    img: '/premium_flashlights.png',
    tags: ['E-commerce'],
    location: ['Україна'],
    placement: 'Meta Ads (Facebook, Instagram)',
    budget: '2 235 грн (Тестовий запуск)',
    task: 'Досягти ROAS понад 400%.',
    result: 'Налаштована аналітика, виявлені креативи-лідери (CPC 4,79 грн)',
    created: '15.03.2026',
  },
  {
    id: 'silver_youtube_channel',
    label_ua: 'Мій YouTube канал',
    desc: 'Залучення органічного трафіку',
    long_desc:
      'Стратегія розвитку каналу для побудови особистого бренду та залучення лояльної аудиторії.',
    img: '/silver_youtube_channel.png',
    tags: ['YouTube'],
    location: ['Global'],
    placement: 'YouTube',
    budget: '0',
    task: 'Збільшити кількість підписників без прямих витрат на рекламу.',
    result:
      'Як глибоке розуміння алгоритмів, Event-Driven Marketing (сезонність) та правильне SEO допомогли згенерувати понад 23 мільйони переглядів без вкладень у рекламу.',
    created: '20.01.2026',
  },
  {
    id: 'cottage_rental',
    label_ua: 'Оренда котеджів',
    desc: 'Просування нерухомості для відпочинку',
    long_desc: 'Залучення заявок на оренду преміальних котеджів у заміському містечку.',
    img: '/cottage_rental.png',
    tags: ['Нерухомість'],
    location: ['Україна'],
    placement: 'Meta Ads',
    budget: '$145 / місяць',
    task: 'Збільшити кількість бронювань на вихідні.',
    result:
      'Як системна робота з аудиторіями та тестування креативів дозволили отримати 61 цільову заявку за ціною $2.38 та забезпечити реальні броні для подобової оренди нерухомості у Київській області навіть у період низького сезону (міжсезоння).',
    created: '10.02.2026',
  },
  {
    id: 'c5',
    label_ua: 'Психолог',
    desc: 'Аудит реклами та залучення клієнтів',
    long_desc: 'Переналаштування рекламних кампаній для приватного спеціаліста.',
    img: '/psychologist.png',
    tags: ['Послуги', 'Аудит'],
    location: ['Remote'],
    placement: 'Facebook, Instagram',
    budget: '500',
    task: 'Виправити помилки у таргеті.',
    result: 'Збільшення записів у 2 рази.',
    created: '12.04.2026',
  },
  {
    id: 'c6',
    label_ua: 'Сонцезахисні панелі',
    desc: 'Аудит реклами для ніші сонцезахисту',
    long_desc: 'Глибокий технічний аудит кабінетів та розробка стратегії масштабування.',
    img: '/sunblock_pannels.png',
    tags: ['Home Improvement', 'Audit'],
    location: ['Україна'],
    placement: 'Meta & Google Ads',
    budget: '2000',
    task: 'Оптимізувати вартість ліда.',
    result: 'Зниження вартості заявки на 30%.',
    created: '28.03.2026',
  },
  {
    id: 'c7',
    label_ua: 'Туроператор',
    desc: 'Аудит реклами у сфері туризму',
    long_desc: 'Пошук точок росту для туристичної агенції в умовах високої конкуренції.',
    img: '/tour_travel.png',
    tags: ['Travel', 'Audit'],
    location: ['Global'],
    placement: 'Google Ads',
    budget: '3000',
    task: 'Аудит існуючих кампаній.',
    result: 'Виявлено критичні помилки, надано план оптимізації.',
    created: '05.04.2026',
  },
  {
    id: 'c8',
    label_ua: 'B2C Фотодрук',
    desc: 'Продаж фотокниг та друку',
    long_desc: 'Системні продажі через Meta Ads для сервісу фотодруку.',
    img: '/photographic_print.png',
    tags: ['E-commerce', 'B2C'],
    location: ['Україна'],
    placement: 'Facebook Catalog',
    budget: '1200',
    task: 'Збільшити кількість замовлень.',
    result: 'Зростання LTV на 15%.',
    created: '18.02.2026',
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
