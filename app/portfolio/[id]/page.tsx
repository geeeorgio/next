import { casesList } from '@/lib/cases-list';

interface PortfolioCardDetailsProps {
  params: Promise<{ id: string }>;
}

const PortfolioCardDetails = async ({ params }: PortfolioCardDetailsProps) => {
  const { id } = await params;

  const currentCase = casesList.find((c) => c.id === id);

  return (
    <div>
      <p>We got: {currentCase?.label_ua}</p>
    </div>
  );
};

export default PortfolioCardDetails;
