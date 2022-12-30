import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { NavigationItem, Button, Times } from '../../components';
import { useAuth } from '../../hooks';
import * as userActions from '../../store/user';

interface MainNavigationProps {
  isActive: boolean;
  toggleNavActivation: MouseEventHandler<HTMLOrSVGElement>;
}

const MainNavigation = (props: MainNavigationProps) => {
  const { toggleAuthActivation } = useAuth();
  const user = useSelector(userActions.selectUser);

  return (
    <ul
      className={`${
        props.isActive
          ? 'fixed top-0 bottom-0 left-0 right-0 z-40 bg-green-600 text-center text-white text-lg space-y-10 md:space-y-0'
          : 'hidden'
      } md:bg-transparent md:static md:flex md:space-x-5 md:text-lg md:font-bold md:text-gray-700`}
    >
      <div className="flex justify-end pt-3 mb-20 pr-3 md:hidden">
        <Times onClick={props.toggleNavActivation} />
      </div>
      <NavigationItem link="/" name="მთავარი" />
      <NavigationItem link="/library" name="ბიბლიოთეკა" />
      <NavigationItem link="/cources" name="კურსები" />
      <NavigationItem link="/projects" name="პროექტები" />
      <NavigationItem link="/social" name="სოც.ქსელი" />
      <div className="hidden md:block">
        <Button
          color="green"
          size="md"
          value={!user ? 'შესვლა / რეგისტრაცია' : user.email}
          onClick={toggleAuthActivation}
        />
      </div>
      <div className="md:hidden">
        <Button
          color="white"
          size="md"
          value={!user ? 'შესვლა / რეგისტრაცია' : user.email}
          onClick={toggleAuthActivation}
        />
      </div>
    </ul>
  );
};

export default MainNavigation;
