import { aboutStatsList, aboutStatsPositions } from '@/lib/about-stats';

const AboutMeStatsList = () => {
  return (
    <>
      {aboutStatsList.map(({ title, desc }, idx) => (
        <div
          key={title}
          className={`absolute ${aboutStatsPositions[idx]} z-20 bg-card-light/90 border border-gold-accent-sand/10 py-2.5 px-2.5 sm:py-4 sm:px-3 lg:py-5 xl:px-4 rounded-xl shadow-sm max-w-38 md:max-w-44 transition-transform duration-300 hover:-translate-y-1`}
        >
          <p className="text-gold-accent-muted font-bold text-base leading-none">{title}</p>
          <p className="text-[10px] lg:text-xs font-medium mt-1 leading-tight">{desc}</p>
        </div>
      ))}
    </>
  );
};

export default AboutMeStatsList;
