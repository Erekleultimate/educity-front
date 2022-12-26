import { PageLayout } from '../layouts';
import { Hero, HeroLeft, HeroRight } from '../components';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>
        <Hero>
          <HeroLeft />
          <HeroRight />
        </Hero>
      </div>
    </PageLayout>
  );
};

export default HomePage;
