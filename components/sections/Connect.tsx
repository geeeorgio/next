import LandingForm from '../ui/LandingForm';

const Connect = () => {
  return (
    <div className="bg-primary-deep border border-foreground/25 rounded-xl flex flex-col lg:flex-row h-[80dvh] gap-2.5 sm:gap-3.5 md:gap-5">
      <div className="flex flex-col justify-between w-full lg:gap-6 xl:gap-7 lg:w-1/2 p-2 md:p-3 lg:p-4 xl:p-5">
        <h2>Залиште заявку, щоб обговорити проєкт</h2>
        <p>
          Дізнайтесь, як підвищити ефективність ваших рекламних кампаній і отримати більше
          результатів за той самий бюджет. Заповніть форму, і вже за 48 годин ви отримаєте детальний
          аудит із рекомендаціями для покращення.
        </p>
      </div>
      <div className="flex flex-col justify-between w-full lg:w-1/2 p-2 md:p-3 lg:p-4 xl:p-5">
        <div className="flex flex-col">
          <LandingForm />
        </div>
      </div>
    </div>
  );
};

export default Connect;
