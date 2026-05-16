import Link from 'next/link';

import { legalLinks } from '@/lib/legal';
import { navItemsList, socialList } from '@/lib/nav-items';

import LogoLink from '../ui/LogoLink';

const Footer = () => {
  return (
    <footer className="bg-footer flex flex-col gap-4 sm:gap-5 md:gap-8 lg:gap-12 xl:gap-14 px-4 lg:px-6 py-4 md:py-8 lg:py-10 xl:py-14">
      <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-3 lg:gap-4">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 items-start">
          <LogoLink />
          <p className="text-foreground/80 font-medium text-sm lg:text-base max-w-65">
            Системний трафік та стабільні ліди для вашого бізнесу
          </p>

          <ul className="flex flex-row gap-3">
            {socialList.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-gold-accent-sand text-gold-accent/90 hover:bg-gold-accent/90 hover:text-primary-dark transition-all duration-300"
                >
                  <Icon size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-2 lg:gap-3.5">
          <span className="text-foreground text-sm lg:text-base font-medium">Навігація</span>
          <nav>
            <ul className="flex flex-col gap-1.5">
              {navItemsList.map(({ href, label_ua }) => (
                <li
                  key={label_ua}
                  className="text-sm lg:text-base font-medium transition-all duration-300 text-foreground/70 hover:text-foreground"
                >
                  <Link href={href} className={`pt-2 pb-2`}>
                    {label_ua}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-start gap-2 lg:gap-3.5">
          <span className="text-foreground text-sm lg:text-base font-medium">Послуги</span>
          <ul className="flex flex-col gap-1.5 text-foreground/80">
            <li className="text-sm lg:text-base font-medium transition-all duration-300 text-foreground/70 hover:text-foreground">
              1
            </li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-2 lg:gap-3.5">
          <span className="text-foreground text-sm lg:text-base font-medium">Контакти</span>
          <ul className="flex flex-col gap-1.5 text-foreground/80">
            <li className="text-sm lg:text-base font-medium transition-all duration-300 text-foreground/70 hover:text-foreground">
              1
            </li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 md:gap-4 lg:gap-5">
        <ul className="flex flex-col md:flex-row items-start p-2 md:p-3 lg:p-4 gap-3 md:gap-4 lg:gap-5 border-2 border-white/50">
          {legalLinks.map(({ label, href }) => (
            <li
              key={label}
              className="relative font-robo text-foreground/90 font-semibold text-sm after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-foreground/90 after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]"
            >
              <Link href={href} className="p-2 inline-block">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-foreground-muted">© Copyright 2026 Людмила Кирилюк.</p>
      </div>
    </footer>
  );
};

export default Footer;
