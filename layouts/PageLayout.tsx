import {
  useState,
  MouseEventHandler,
  ChangeEventHandler,
  Dispatch,
  useEffect,
} from 'react';
import Head from 'next/head';
import {
  Navigation,
  Footer,
  Logo,
  Input,
  Bars,
  MainNavigation,
  Overlay,
  Auth,
} from '../components';

import type { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as searchActinos from '../store/search';
import * as authActions from '../store/auth';
import * as userActions from '../store/user';
import * as courseActions from '../store/course';
import { useAuth } from '../hooks';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  withSearch: boolean;
  children: ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  const { toggleAuthActivation } = useAuth();
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const [isMainNavActive, setIsMainNavActive] = useState<boolean>(false);
  const searchQuery = useSelector(searchActinos.selectSearch);
  const isAuthActive = useSelector(authActions.selectIsActive);

  useEffect(() => {
    dispatch(userActions.setUser());
    dispatch(courseActions.setAllCourses());
  }, [user?.token, dispatch]);

  const toggleMainNavActivation: MouseEventHandler<HTMLOrSVGElement> = () => {
    setIsMainNavActive((prev) => !prev);
  };

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(searchActinos.set(event.target.value));
  };

  return (
    <div className="space-y-5">
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navigation>
        <div className="relative h-11 w-11">
          <Logo color="green" />
        </div>
        {props.withSearch && (
          <Input name="search" value={searchQuery} onChange={onSearchChange} />
        )}
        <div className="md:hidden">
          <Bars onClick={toggleMainNavActivation} />
        </div>
        <MainNavigation
          isActive={isMainNavActive}
          toggleNavActivation={toggleMainNavActivation}
        />
      </Navigation>

      <main className="paddings">{props.children}</main>

      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>
          <Auth />
        </Overlay>
      )}

      <Footer />
    </div>
  );
};

export default PageLayout;
