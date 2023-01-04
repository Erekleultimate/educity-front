import { Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from '../layouts';
import { Auth, Overlay } from '../components';
import { useAuth } from '../hooks';
import * as userActions from '../store/user';
import * as courseActions from '../store/course';
import * as authActions from '../store/auth';

const CoursesPage: NextPage = () => {
  const { toggleAuthActivation } = useAuth();
  const dispatch: Dispatch<any> = useDispatch();
  const isAuthActive = useSelector(authActions.selectIsActive);

  useEffect(() => {
    dispatch(userActions.setUser());
    dispatch(courseActions.setAllCourses());
  }, [dispatch]);

  return (
    <PageLayout
      pageTitle="EduCity | Courses"
      pageDescription="Courses page description"
    >
      <div className="min-h-screen">Courses Page</div>
      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>
          <Auth />
        </Overlay>
      )}
    </PageLayout>
  );
};

export default CoursesPage;
