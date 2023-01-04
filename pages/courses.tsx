import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { PageLayout } from '../layouts';
import { Auth, Overlay } from '../components';
import { useAuth } from '../hooks';
import * as authActions from '../store/auth';

const CoursesPage: NextPage = () => {
  const { toggleAuthActivation } = useAuth();
  const isAuthActive = useSelector(authActions.selectIsActive);

  return (
    <PageLayout pageTitle="Courses" pageDescription="Courses page description">
      <div>Courses Page</div>
      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>
          <Auth />
        </Overlay>
      )}
    </PageLayout>
  );
};

export default CoursesPage;
