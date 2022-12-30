import { Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { DashboardPageLaout } from '../../layouts';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/user';

const UserDashboardPage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(userActions.setUser());
  }, [dispatch]);

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
