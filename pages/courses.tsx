import { Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from '../layouts';
import { Auth, Overlay, Card } from '../components';
import { useAuth } from '../hooks';
import * as userActions from '../store/user';
import * as courseActions from '../store/course';
import * as authActions from '../store/auth';

const CoursesPage: NextPage = () => {
  const { toggleAuthActivation } = useAuth();
  const dispatch: Dispatch<any> = useDispatch();
  const courses = useSelector(courseActions.selectAllCourses);
  const isAuthActive = useSelector(authActions.selectIsActive);

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
      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>
          <Auth />
        </Overlay>
      )}
    </PageLayout>
  );
};

export default CoursesPage;
