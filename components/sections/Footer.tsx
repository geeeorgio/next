import FooterContactsLinks from '../ui/FooterContactsLinks';
import FooterNav from '../ui/FooterNav';
import LegalLinks from '../ui/LegalLinks';
import LogoLink from '../ui/LogoLink';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-footer flex flex-col gap-4 sm:gap-5 md:gap-8 lg:gap-12 xl:gap-14 px-4 lg:px-6 py-4 md:py-8 lg:py-10 xl:py-14">
      <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-3 lg:gap-4">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 items-start">
          <LogoLink />
          <p className="text-foreground/80 font-medium text-sm lg:text-base max-w-65">
            Системний трафік та стабільні ліди для вашого бізнесу
          </p>

          <SocialLinks />
        </div>

        <div className="flex flex-col items-start gap-2 lg:gap-3.5">
          <span className="text-foreground text-sm lg:text-base font-medium">Навігація</span>
          <FooterNav />
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
          <FooterContactsLinks />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 md:gap-4 lg:gap-5">
        <LegalLinks />

        <p className="text-sm text-foreground-muted">© Copyright 2026 Людмила Кирилюк.</p>
      </div>
    </footer>
  );
};

export default Footer;
