import Head from 'next/head';
import { ReactNode } from 'react';

interface DashboarPageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

const DashboardPageLayout = (props: DashboarPageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
      </Head>
      <main>{props.children}</main>
    </div>
  );
};

export default DashboardPageLayout;
