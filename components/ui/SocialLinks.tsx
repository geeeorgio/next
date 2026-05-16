import { socialList } from '@/lib/social-list';

const SocialLinks = () => {
  return (
    <ul className="flex flex-row gap-3">
      {socialList.map(({ label, url, icon: Icon }) => (
        <li key={label}>
          <a
            href={url}
            target="_blank"
            rel="nofollow noopener"
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-gold-accent-sand text-gold-accent/90 hover:bg-gold-accent/90 hover:text-primary-dark transition-colors duration-300"
          >
            <Icon size={24} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
