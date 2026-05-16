import { FaMeta } from 'react-icons/fa6';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SiGoogleads } from 'react-icons/si';

import type { ServicesListItemType } from '@/types/general';

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
