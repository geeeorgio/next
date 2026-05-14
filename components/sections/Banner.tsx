import Image from 'next/image';

import OrderLink from '../ui/OrderLink';
import ScrollLink from '../ui/ScrollLink';

const Banner = () => {
  return (
    <div className="relative overflow-hidden flex flex-col bg-linear-to-b from-primary-deep via-primary-dark to-primary-deep/35 gap-2 md:gap-3 lg:gap-4 xl:gap-5 py-5 md:py-10 lg:py-16 xl:py-20 px-3 md:px-4 lg:px-6 border-t border-t-gold-accent-muted/50">
      <div className="flex flex-col md:flex-row pl-3 pr-3 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6 gap-6 items-center lg:gap-8 xl:gap-10">
        <div className="flex flex-col flex-1 gap-3 md:gap-5 lg:gap-7 xl:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight uppercase">
            Хочете такі ж <br />
            <span className="text-gold-accent">результати?</span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-xl">
            Дізнайтесь, як підвищити ефективність ваших рекламних кампаній та отримати кращі
            результати за той самий бюджет
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mt-1.5">
            <OrderLink />
            <ScrollLink to="#connect-section" text="Залишити заявку" />
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-60 sm:h-90 md:h-100 lg:h-120">
          <div className="absolute right-0 top-0 w-80 h-80 bg-gold-accent/10 blur-3xl rounded-full" />

          <Image
            src="/liydmyla_kyryliuk_contact.png"
            alt="liydmyla kyryliuk contact"
            fill
            className="object-contain object-bottom md:object-bottom-right relative z-10"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
