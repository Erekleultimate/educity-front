import { useState, MouseEventHandler, ChangeEventHandler } from 'react';
import Head from 'next/head';
import {
  Navigation,
  Footer,
  Logo,
  Input,
  Bars,
  MainNavigation,
} from '../components';

import type { ReactNode } from 'react';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  withSearch: boolean;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const [isMainNavActive, setIsMainNavActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleMainNavActivation: MouseEventHandler<HTMLOrSVGElement> = () => {
    setIsMainNavActive((prev) => !prev);
  };

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="space-y-5">
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navigation>
        <div className="relative h-11 w-11">
          <Logo color="green" />
        </div>
        {props.withSearch && (
          <Input name="search" value={searchQuery} onChange={onSearchChange} />
        )}
        <div className="md:hidden">
          <Bars onClick={toggleMainNavActivation} />
        </div>
        <MainNavigation
          isActive={isMainNavActive}
          toggleNavActivation={toggleMainNavActivation}
        />
      </Navigation>

      <main className="paddings">{props.children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;
