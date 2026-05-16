import { featuredCases } from '@/lib/cases-list';

import CasesListItem from './CasesListItem';

const CasesList = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
      {featuredCases.map((item) => (
        <CasesListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CasesList;
