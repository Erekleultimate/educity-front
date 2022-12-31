import Head from 'next/head';
import { Navigation, Footer } from '../components';

import type { ReactNode } from 'react';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <div className="space-y-5">
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navigation />

      <main className="paddings">{props.children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;
