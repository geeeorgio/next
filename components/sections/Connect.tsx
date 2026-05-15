import LandingForm from '../ui/LandingForm';

const Connect = () => {
  return (
    <div
      id="connect-section"
      className="bg-primary-deep rounded-xl flex flex-col md:flex-row items-stretch gap-2.5 sm:gap-3.5 md:gap-5 lg:gap-6 xl:gap-7 border border-white/10 my-4"
    >
      <div className="flex flex-col justify-between w-full gap-7 md:w-1/2 p-4 md:p-6 lg:p-8 xl:p-9">
        <h2 className="text-foreground/90 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
          {`Залиште заявку, щоб обговорити `}
          <span className="relative inline-block text-gold-middle-accent after:absolute after:bottom-0 md:after:-bottom-0.5 lg:after:-bottom-1 xl:after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 md:after:h-0.75 lg:after:h-1 after:bg-gold-middle-accent">
            проєкт
          </span>
        </h2>
        <p className="text-foreground-muted text-sm lg:text-base font-semibold">
          Дізнайтесь, як підвищити ефективність ваших рекламних кампаній і отримати більше
          результатів за той самий бюджет. Заповніть форму, і вже за 48 годин ви отримаєте детальний
          аудит із рекомендаціями для покращення.
        </p>
      </div>
      <div className="flex flex-col justify-between w-full md:w-1/2 p-5 md:p-7 lg:p-8 xl:p-9">
        <div className="flex flex-col">
          <LandingForm />
        </div>
      </div>
    </div>
  );
};

export default Connect;
