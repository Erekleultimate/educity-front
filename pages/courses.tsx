import { Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from '../layouts';
import { Card } from '../components';
import * as userActions from '../store/user';
import * as courseActions from '../store/course';
import * as searchActions from '../store/search';
import { RootState } from '../store';

const CoursesPage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const searchQuery = useSelector(searchActions.selectSearch);
  const filteredCourses = useSelector((state: RootState) =>
    courseActions.selectCoursesWithTitle(state, searchQuery)
  );

  useEffect(() => {
    dispatch(userActions.setUser());
    dispatch(courseActions.setAllCourses());
  }, [dispatch]);

  return (
    <PageLayout
      pageTitle="EduCity | Courses"
      pageDescription="Courses page description"
      withSearch={true}
    >
      <div className="min-h-screen">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {filteredCourses.map((course) => (
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

export default CoursesPage;
