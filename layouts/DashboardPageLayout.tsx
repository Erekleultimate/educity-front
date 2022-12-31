import Head from 'next/head';
import { Dispatch, MouseEventHandler, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import * as userActions from '../store/user';

interface DashboarPageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

const DashboardPageLayout = (props: DashboarPageLayoutProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(userActions.signOut());
  };

  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Button color="green" size="md" value="გასვლა" onClick={handleSignOut} />
      <main>{props.children}</main>
    </div>
  );
};

export default DashboardPageLayout;
