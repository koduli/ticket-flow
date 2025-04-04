import Navigation from './(components)/Navigation';
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TicketFlow',
  description: 'Generated by Kornel Duli',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Navigation />
          <div className="flex-grow overflow-y-auto bg-stone-800/100 text-defaukt-text p-10 px-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
