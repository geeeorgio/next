const Section = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="flex flex-col flex-1">{children}</section>;
};

export default Section;
