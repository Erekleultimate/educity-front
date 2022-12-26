import { PageLayout } from '../layouts';
import { Button, Hero } from '../components';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>
        <Hero>
          <div className="col-span-1">
            <div>მზად ხარ სწავლისთვის?</div>
            <h1>
              <span>ისწავლე ღიმილით</span>
              <span>ნებისმიერ დროს</span>
            </h1>
            <article>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              vitae blanditiis dignissimos nisi assumenda mollitia doloremque,
              odit veritatis eum qui debitis vel ad quia laborum consequuntur
              deleniti facilis voluptas. Atque.
            </article>
            <Button
              size="lg"
              value="დაიწყე"
              onClick={() => alert('დაიწყე clicked')}
            />
          </div>
          <div className="col-span-1">Right</div>
        </Hero>
      </div>
    </PageLayout>
  );
};

export default HomePage;
