import Head from 'next/head';
import { Navigation, Footer } from '../components';

import type { ReactNode } from 'react';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

const PageLayout = ({
  pageTitle,
  pageDescription,
  children,
}: PageLayoutProps) => {
  return (
    <div className="space-y-5">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <Navigation />

      <main className="paddings">{children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;
