import { MouseEventHandler, useState } from 'react';
import { MainNavigation, Logo, Bars } from '../../components';

const Navigation = () => {
  const [isMainNavActive, setIsMainNavActive] = useState<boolean>(false);

  const toggleMainNavActivation: MouseEventHandler<HTMLOrSVGElement> = () => {
    setIsMainNavActive((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-30 paddings bg-gray-100 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Logo color="green" />
        </div>
        <div className="md:hidden">
          <Bars onClick={toggleMainNavActivation} />
        </div>
        <MainNavigation
          isActive={isMainNavActive}
          toggleNavActivation={toggleMainNavActivation}
        />
      </nav>
    </header>
  );
};

export default Navigation;
