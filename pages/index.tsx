import { PageLayout } from '../layouts';
import { Hero, HeroLeft, HeroRight, Card } from '../components';
import { useSelector } from 'react-redux';
import * as courseActions from '../store/course';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const courses = useSelector(courseActions.selectAllCourses);

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
