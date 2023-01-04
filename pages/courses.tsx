import { NextPage } from 'next';
import { PageLayout } from '../layouts';

const CoursesPage: NextPage = () => {
  return (
    <PageLayout pageTitle="Courses" pageDescription="Courses page description">
      <div>Courses Page</div>
    </PageLayout>
  );
};

export default CoursesPage;
