import { socialList } from '@/lib/social-list';

const SocialLinks = () => {
  return (
    <ul className="flex flex-row gap-4">
      {socialList.map(({ label, url, icon: Icon }) => (
        <li key={label}>
          <a
            href={url}
            target="_blank"
            rel="nofollow noopener"
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border border-gold-middle-accent/40 text-gold-accent/90 transition-colors duration-300 hover:bg-gold-accent/90 hover:text-primary-dark"
          >
            <Icon className="w-5 h-5 shrink-0" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
