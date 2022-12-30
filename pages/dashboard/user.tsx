import { NextPage } from 'next';
import { DashboardPageLaout } from '../../layouts';

const UserDashboardPage: NextPage = () => {
  return (
    <DashboardPageLaout
      pageTitle="User Dashboard"
      pageDescription="User dashboard page description"
    >
      <div>User Dashboard Page</div>
    </DashboardPageLaout>
  );
};

export default UserDashboardPage;
