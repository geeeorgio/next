import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-linear-to-b from-primary-dark to-primary pt-5 pb-5">
      <div className="absolute top-0 left-0 w-1/4">
        <Image
          src="/t.png"
          alt="hero top"
          width={300}
          height={500}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="min-h-[85vh] flex justify-center">
        <h1 className="text-foreground">Hero section</h1>
      </div>

      <div className="absolute bottom-0 right-0 w-1/2">
        <Image
          src="/b.png"
          alt="hero bottom"
          width={600}
          height={500}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
