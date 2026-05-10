import Image from 'next/image';

import CustomButton from '../ui/CustomButton';
import OrderLink from '../ui/OrderLink';

const Banner = () => {
  return (
    <div className="relative overflow-hidden flex flex-col bg-linear-to-b from-primary-deep via-primary-dark to-primary-deep/35 gap-2 md:gap-3 lg:gap-4 xl:gap-5 pt-4 pb-4 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10 xl:pt-16 xl:pb-16 border-t border-t-gold-accent-muted/50">
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
            <CustomButton className="w-full sm:w-auto border border-gold-accent/15 bg-white/5 hover:bg-white/10">
              <span className="text-foreground font-semibold text-sm md:text-base">
                Залишити заявку
              </span>
            </CustomButton>
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
