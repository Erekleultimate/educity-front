import { PageLayout } from '../layouts';
import { Hero } from '../components';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>
        <Hero>
          <div className="col-span-1">Left</div>
          <div className="col-span-1">Right</div>
        </Hero>
      </div>
    </PageLayout>
  );
};

export default HomePage;
