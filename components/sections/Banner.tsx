import Image from 'next/image';

import OrderLink from '../ui/OrderLink';
import ScrollLink from '../ui/ScrollLink';

const Banner = () => {
  return (
    <div className="relative overflow-hidden flex flex-col bg-primary-dark gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <div className="flex flex-col-reverse sm:flex-row gap-8 items-center max-w-8xl mx-auto w-full">
        <div className="relative w-full sm:w-[30%] h-80 lg:h-130 xl:h-140 shrink-0">
          <div className="absolute left-[-10%] top-10 w-72 h-72 bg-gold-accent/10 rounded-full pointer-events-none" />

          <Image
            src="/liydmila_kyryliuk_banner.png"
            alt="Людмила Кирилюк контактний баннер"
            fill
            className="object-contain object-bottom md:object-bottom-left relative z-10"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>

        <div className="flex flex-col w-full md:w-[65%] gap-4 md:gap-7 lg:gap-10 xl:gap-12 px-3 py-3 lg:py-4 md:px-4 lg:px-5 xl:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-foreground leading-tight uppercase tracking-tighter">
            Хочете такі ж <br />
            <span className="text-gold-accent-muted">результати?</span>
          </h2>
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg max-w-xl leading-relaxed">
            Дізнайтесь, як підвищити ефективність ваших рекламних кампаній та отримати кращі
            результати за той самий бюджет
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full lg:w-4/5">
            <OrderLink extraStyle="w-full sm:flex-1" />
            <ScrollLink to="#connect-section" text="Залишити заявку" className="w-full sm:flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
