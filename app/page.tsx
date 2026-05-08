import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Section from '@/components/ui/Section';

const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Intro />
      </Section>
    </>
  );
};

export default Home;
