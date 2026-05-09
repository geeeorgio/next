import Image from 'next/image';
import Link from 'next/link';

import { legalLinks } from '@/lib/legal';
import { navItemsList, socialList } from '@/lib/nav-items';

const Footer = () => {
  return (
    <footer className="bg-footer flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7 border-t border-t-gold-accent-muted/60 shadow-[0_4px_20px_rgba(201,168,76,0.3)] p-4 md:p-5 lg:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-3 lg:gap-4">
        <div className="flex flex-col gap-1.5 md:gap-2.5 lg:gap-3.5 xl:gap-5 items-start">
          <Link
            href="/"
            className="relative w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20
             filter drop-shadow-[0_5px_15px_rgba(224,184,79,0.4)]
             hover:drop-shadow-[0_8px_20px_rgba(224,184,79,0.6)]
             transition-all duration-300"
          >
            <Image
              src="/logo.png"
              alt="Кирилюк Людмила логотип"
              fill
              sizes="(max-width: 768px) 40px, (max-width: 1024px) 60px, 80px"
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-foreground-muted text-xs md:text-sm max-w-60">
            Системний трафік та стабільні ліди для вашого бізнесу
          </p>

          <ul className="flex flex-row gap-2">
            {socialList.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-gold-accent-muted/50 bg-foreground-muted/5 text-gold-accent hover:bg-gold-accent hover:text-primary-dark transition-all duration-300 shadow-sm backdrop-blur-sm"
                >
                  <Icon size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="flex flex-col items-start gap-1">
          <span className="text-foreground text-xs md:text-sm">Навігація</span>
          <ul className="flex flex-col gap-1">
            {navItemsList.map(({ href, label_ua }) => (
              <li
                key={label_ua}
                className="text-xs lg:text-sm transition-all duration-300 text-foreground-muted hover:text-gold-accent"
              >
                <Link href={href} className={`pt-2 pb-2`}>
                  {label_ua}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col">
          <span>Послуги</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span>Контакти</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 md:gap-4 lg:gap-5">
        <ul className="flex flex-col md:flex-row items-start p-2 md:p-3 lg:p-4 gap-3 md:gap-4 lg:gap-5 border-2 border-foreground">
          {legalLinks.map(({ label, href }) => (
            <li key={label} className="font-robo text-foreground font-semibold text-xs">
              <Link href={href} className="p-2">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-xs text-foreground-muted">© Copyright 2026 Людмила Кирилюк.</p>
      </div>
    </footer>
  );
};

export default Footer;
