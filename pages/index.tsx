import { PageLayout } from '../layouts';
import { Hero, HeroLeft, HeroRight, Card, Courses } from '../components';
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
        <Courses>
          {courses.map((course) => (
            <Card
              key={course._id}
              link="/"
              img={course.img}
              category={course.category}
              place={course.place}
              name={course.name}
              price={course.price}
            />
          ))}
        </Courses>
      </div>
    </PageLayout>
  );
};

export default HomePage;
