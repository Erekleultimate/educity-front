import { Dispatch, useEffect } from 'react';
import { PageLayout } from '../layouts';
import { Hero, HeroLeft, HeroRight, Card } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../store/user';
import img from '../public/home-image.png';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);

  useEffect(() => {
    dispatch(userActions.setUser());
  }, [user?.token, dispatch]);

  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div className="space-y-20">
        <Hero>
          <HeroLeft />
          <HeroRight />
        </Hero>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <Card
            link="/link1"
            img={img}
            type="მარკეტინგი"
            place="Digital Bus • Academy"
            name="ADVERTISING & ANALYTICS"
            price="400.00"
          />
          <Card
            link="/link1"
            img={img}
            type="მარკეტინგი"
            place="Digital Bus • Academy"
            name="ADVERTISING & ANALYTICS"
            price="400.00"
          />
          <Card
            link="/link1"
            img={img}
            type="მარკეტინგი"
            place="Digital Bus • Academy"
            name="ADVERTISING & ANALYTICS"
            price="400.00"
          />
          <Card
            link="/link1"
            img={img}
            type="მარკეტინგი"
            place="Digital Bus • Academy"
            name="ADVERTISING & ANALYTICS"
            price="400.00"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
