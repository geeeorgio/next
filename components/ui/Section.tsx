const Section = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="py-5 md:py-10 lg:py-16 xl:py-20 px-3 md:px-4 lg:px-6 border-t border-t-white/10">
      {children}
    </section>
  );
};

export default Section;
