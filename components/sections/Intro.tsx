import ServicesLink from '../ui/ServicesLink';
import ServicesList from '../ui/ServicesList';

const Intro = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 sm:gap-10 lg:gap-12">
      <div className="flex flex-col gap-2 mb-4 md:mb-8">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-muted uppercase tracking-[0.3em]">
          Мої послуги
        </h2>
        <div className="w-20 h-px bg-gold-accent-muted/40 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row">
        <ServicesList />
      </div>

      <div className="flex justify-center px-3 md:px-6">
        <ServicesLink src="/services" text="Усі послуги та формати співпраці" />
      </div>
    </div>
  );
};

export default Intro;
