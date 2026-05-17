import CasesList from '../ui/CasesList';
import ServicesLink from '../ui/ServicesLink';

const Cases = () => {
  return (
    <div className="flex flex-col relative overflow-hidden gap-8 sm:gap-10 lg:gap-12">
      <div className="flex flex-col gap-2 mb-4 md:mb-8">
        <h2 className="text-base lg:text-xl xl:text-2xl font-black text-gold-accent-sand uppercase tracking-[0.3em]">
          Кейси з digital просування
        </h2>
        <div className="w-20 h-px bg-gold-accent-sand/50 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row">
        <CasesList />
      </div>

      <div className="flex justify-center px-3 md:px-6">
        <ServicesLink src="/portfolio" text="Більше проєктів" />
      </div>
    </div>
  );
};

export default Cases;
