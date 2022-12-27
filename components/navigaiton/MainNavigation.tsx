import { MouseEventHandler, useState } from 'react';
import { NavigationItem, Button, Times, Overlay } from '../../components';

interface MainNavigationProps {
  isActive: boolean;
  toggleNavActivation: MouseEventHandler<HTMLOrSVGElement>;
}

const MainNavigation = (props: MainNavigationProps) => {
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);

  const toggleAuthActivation: MouseEventHandler<HTMLButtonElement> = () => {
    setIsAuthActive((prev) => !prev);
  };

  return (
    <ul
      className={`${
        props.isActive
          ? 'fixed top-0 bottom-0 left-0 right-0 z-40 bg-green-600 text-center text-white text-lg space-y-10 md:space-y-0'
          : 'hidden'
      } md:bg-transparent md:static md:flex md:space-x-5 md:text-lg md:font-bold md:text-gray-700`}
    >
      <div className="flex justify-end pt-8 mb-20 pr-5 md:hidden">
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
          value="Sign In / Up"
          onClick={toggleAuthActivation}
        />
      </div>
      <div className="md:hidden">
        <Button
          color="white"
          size="md"
          value="Sign In / Up"
          onClick={toggleAuthActivation}
        />
      </div>
      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>Overlay</Overlay>
      )}
    </ul>
  );
};

export default MainNavigation;
