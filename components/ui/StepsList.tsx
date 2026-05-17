import { workSteps } from '@/lib/work-steps';

const StepsList = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6 w-full items-start my-4">
      {workSteps.map(({ text, icon: Icon }, index) => (
        <li
          key={text}
          className="group relative flex flex-row md:flex-col items-center gap-5 md:gap-6 flex-1 z-10"
        >
          <span className="absolute -top-6 md:-top-8 lg:-top-9 text-4xl md:text-5xl font-black text-primary-deep/8 transition-colors duration-500 group-hover:text-gold-accent-sand/30">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="relative flex shrink-0 items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-bckg-light border border-gold-accent-muted/40 group-hover:border-gold-middle-accent group-hover:-translate-y-2 transition-[transform, border-color] duration-500 shadow-md">
            <Icon className="w-6 h-6 text-primary-deep group-hover:text-gold-accent-muted transition-colors duration-500" />
          </div>

          <div className="flex flex-col md:items-center gap-2">
            <span className="text-sm lg:text-base font-bold text-primary-deep/80 group-hover:text-primary-deep transition-colors md:text-center leading-relaxed">
              {text}
            </span>
            <div className="h-0.5 w-full origin-left scale-x-0 bg-gold-accent-muted transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StepsList;
