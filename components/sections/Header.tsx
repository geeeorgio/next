import { LiaTelegramPlane } from 'react-icons/lia';

import CustomButton from '../ui/CustomButton';
import HeaderNav from '../ui/HeaderNav';
import LogoLink from '../ui/LogoLink';

const Header = () => {
  return (
    <header className="bg-header/92 w-full border-b border-b-gold-accent-muted/30 sticky top-0 z-50 px-3 md:px-4 lg:px-6">
      <div className="flex flex-row items-center justify-between py-4">
        <LogoLink />

        <HeaderNav />

        <CustomButton>
          <span className="text-foreground font-sans font-semibold text-sm">
            Написати в Telegram
          </span>
          <LiaTelegramPlane size={18} className="fill-gold-accent" />
        </CustomButton>
      </div>
    </header>
  );
};

export default Header;
