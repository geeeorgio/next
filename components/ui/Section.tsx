const Section = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="py-6 md:py-10 lg:py-16 xl:py-20 px-4 md:px-5 lg:px-6 xl:px-8 border-t border-t-primary-deep/8">
      {children}
    </section>
  );
};

export default Section;
