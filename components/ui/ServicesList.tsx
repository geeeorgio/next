import { servicesList } from '@/lib/servises-list';

import ServicesListItem from './ServicesListItem';

const ServicesList = () => {
  return (
    <ul className="relative w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6">
      {servicesList.map((item) => (
        <ServicesListItem key={item.label_ua} item={item} />
      ))}
    </ul>
  );
};

export default ServicesList;
