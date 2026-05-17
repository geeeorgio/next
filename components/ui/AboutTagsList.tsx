import { infoList } from '@/lib/info-list';

const AboutTagsList = () => {
  return (
    <ul className="flex flex-col sm:flex-row gap-3 w-full border border-primary-dark/8 rounded-xl p-3">
      {infoList.map(({ text, icon: Icon }) => (
        <li
          key={text}
          className="flex flex-row sm:flex-col md:flex-row sm:items-center gap-4 flex-1 group"
        >
          <div className="flex shrink-0 py-2 px-2 lg:px-3 lg:py-3 bg-primary-deep/8 border border-primary-dark/10 rounded-xl items-center justify-center">
            <Icon className="w-5 h-5 text-gold-accent-muted" />
          </div>
          <span className="text-primary-dark/70 text-start sm:text-center md:text-start text-xs lg:text-sm font-medium leading-tight whitespace-pre-line">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default AboutTagsList;
