import { Dispatch, useEffect } from 'react';
import { PageLayout } from '../layouts';
import { Hero, HeroLeft, HeroRight, Card } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../store/user';
import * as courseActions from '../store/course';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const courses = useSelector(courseActions.selectAllCourses);

  useEffect(() => {
    dispatch(userActions.setUser());
    dispatch(courseActions.setAllCourses());
  }, [user?.token, dispatch]);

  return (
    <PageLayout
      pageTitle="EduCity | Home"
      pageDescription="Home page description"
      withSearch={false}
    >
      <div className="space-y-20">
        <Hero>
          <HeroLeft />
          <HeroRight />
        </Hero>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              link="/"
              img={course.img}
              type={course.type}
              place={course.place}
              name={course.name}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
