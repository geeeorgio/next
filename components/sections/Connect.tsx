import LandingForm from '../ui/LandingForm';

const Connect = () => {
  return (
    <div className="bg-primary-deep rounded-xl flex flex-col md:flex-row gap-2.5 sm:gap-3.5 md:gap-5">
      <div className="flex flex-col justify-between w-full gap-7 md:w-1/2 p-4 md:p-6 lg:p-7 xl:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground/95">
          {`Залиште заявку, щоб обговорити `}
          <span className="relative inline-block text-gold-accent after:absolute after:bottom-0 md:after:-bottom-0.5  lg:after:-bottom-1 xl:after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 md:after:h-0.75 lg:after:h-1 after:bg-gold-accent">
            проєкт
          </span>
        </h2>
        <p className="text-sm lg:text-base text-foreground/90 font-semibold">
          Дізнайтесь, як підвищити ефективність ваших рекламних кампаній і отримати більше
          результатів за той самий бюджет. Заповніть форму, і вже за 48 годин ви отримаєте детальний
          аудит із рекомендаціями для покращення.
        </p>
      </div>
      <div className="flex flex-col justify-between w-full md:w-1/2 p-4 md:p-6 lg:p-7 xl:p-8">
        <div className="flex flex-col">
          <LandingForm />
        </div>
      </div>
    </div>
  );
};

export default Connect;
