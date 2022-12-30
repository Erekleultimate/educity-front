import { Dispatch, useEffect } from 'react';
import { PageLayout } from '../layouts';
import { Hero, HeroLeft, HeroRight, Card, Overlay, Auth } from '../components';
import { useAuth } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../store/user';
import * as authActions from '../store/auth';
import img from '../public/home-image.png';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const { toggleAuthActivation } = useAuth();
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const isAuthActive = useSelector(authActions.selectIsActive);

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
      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>
          <Auth />
        </Overlay>
      )}
    </PageLayout>
  );
};

export default HomePage;
