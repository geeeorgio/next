import Cases from '@/components/sections/Cases';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Steps from '@/components/sections/Steps';
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
      <Section>
        <Cases />
      </Section>
      <Section>
        <Steps />
      </Section>
    </>
  );
};

export default Home;
