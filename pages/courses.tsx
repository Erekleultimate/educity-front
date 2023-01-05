import { useState } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { PageLayout } from '../layouts';
import { Card, Courses, Filter } from '../components';
import * as courseActions from '../store/course';
import * as searchActions from '../store/search';
import { RootState } from '../store';

const CoursesPage: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<category.Model | null>(
    null
  );
  const searchQuery = useSelector(searchActions.selectSearch);
  const filteredCourses = useSelector((state: RootState) =>
    courseActions.selectCoursesWithTitle(state, {
      query: searchQuery,
      category: activeCategory,
    })
  );

  return (
    <PageLayout
      pageTitle="EduCity | Courses"
      pageDescription="Courses page description"
      withSearch={true}
    >
      <div className="min-h-screen md:grid md:grid-cols-6 md:gap-14">
        <Filter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="md:col-span-5">
          <Courses>
            {filteredCourses.map((course) => (
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
      </div>
    </PageLayout>
  );
};

export default CoursesPage;
