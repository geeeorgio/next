import Banner from '@/components/sections/Banner';
import Cases from '@/components/sections/Cases';
import Connect from '@/components/sections/Connect';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Me from '@/components/sections/Me';
import Steps from '@/components/sections/Steps';
import Section from '@/components/ui/Section';

const Home = () => {
  return (
    <>
      <Hero />

      <Section>
        <Me />
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

      <Banner />

      <Section>
        <Connect />
      </Section>
    </>
  );
};

export default Home;
