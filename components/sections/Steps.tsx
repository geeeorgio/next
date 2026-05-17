import ServicesLink from '../ui/ServicesLink';
import StepsList from '../ui/StepsList';

const Steps = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 sm:gap-10 lg:gap-12">
      <div className="flex flex-col gap-2 mb-4 md:mb-8">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-sand uppercase tracking-[0.3em]">
          Етапи роботи
        </h2>
        <div className="w-20 h-px bg-gold-accent-sand/50 rounded-full" />
      </div>

      <div className="relative w-full">
        <div className="hidden md:block absolute top-12 left-10 right-10 h-px border-t border-dashed border-primary-deep/20 z-0" />

        <StepsList />
      </div>

      <div className="flex justify-center">
        <ServicesLink src="/work" text="Детальніше про кожен етап" />
      </div>
    </div>
  );
};

export default Steps;
