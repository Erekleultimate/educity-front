import Image from 'next/image';
import { PageLayout } from '../layouts';
import { Button, Hero } from '../components';
import img from '../public/home-image.png';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>
        <Hero>
          <div className="col-span-1 space-y-10 text-center md:text-left">
            <div className="text-red-700">მზად ხარ სწავლისთვის?</div>
            <h1 className="flex flex-col gap-3">
              <span className="font-bold text-4xl text-center md:text-left md:text-5xl">
                ისწავლე ღიმილით
              </span>
              <span className="font-bold text-green-600 text-4xl text-center md:text-left md:text-5xl">
                ნებისმიერ დროს
              </span>
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
          <div className="col-span-1 relative h-60 md:h-auto">
            <Image src={img} layout="fill" />
          </div>
        </Hero>
      </div>
    </PageLayout>
  );
};

export default HomePage;
