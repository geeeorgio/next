import { aboutMeList } from '@/lib/about-me';

const AboutMeList = () => {
  return (
    <ul className="flex flex-col gap-2 pl-6 relative before:absolute before:left-0 before:h-[95%] before:top-2 before:w-0.5 before:bg-linear-to-b before:from-gold-accent-sand/50 before:via-gold-accent-muted/40 before:to-gold-accent/30">
      {aboutMeList.map((text) => (
        <li key={text} className="text-sm lg:text-lg leading-relaxed max-w-2xl">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default AboutMeList;
