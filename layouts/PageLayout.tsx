import Head from 'next/head';
import { Navigation } from '../components';

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
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <Navigation />

      <main className="paddings">{children}</main>

      <footer className="paddings">Footer</footer>
    </div>
  );
};

export default PageLayout;
