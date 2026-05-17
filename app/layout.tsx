import type { Metadata } from 'next';
import { EB_Garamond, Inter, Roboto_Mono } from 'next/font/google';

import './globals.css';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

const garamond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ['latin', 'cyrillic'],
});

const roboto = Roboto_Mono({
  variable: '--font-roboto',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Людмила Кирилюк — Таргетолог Meta та Google Ads',
  description:
    'Таргетована реклама у Facebook, Instagram та Google. Системний трафік та стабільні ліди для вашого бізнесу.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${garamond.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col pt-22">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
