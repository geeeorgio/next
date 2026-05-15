const Section = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="relative z-10 py-5 md:py-10 lg:py-16 xl:py-20 px-3 md:px-4 lg:px-6 shadow-[0_-15px_40px_rgba(2,15,10,0.15),0_15px_40px_rgba(2,15,10,0.15)] border-t border-t-primary-deep/5 border-b border-b-primary-deep/5">
      {children}
    </section>
  );
};

export default Section;
