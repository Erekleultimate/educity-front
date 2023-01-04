import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { MainNavigation, Logo, Bars, Input } from '../../components';

const Navigation = () => {
  const [isMainNavActive, setIsMainNavActive] = useState<boolean>(false);

  const toggleMainNavActivation: MouseEventHandler<HTMLOrSVGElement> = () => {
    setIsMainNavActive((prev) => !prev);
  };

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // TODO: set search query logic
    console.log(event.target.value);
  };

  return (
    <header className="sticky top-0 z-30 paddings shadow-lg bg-gray-100 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Logo color="green" />
        </div>
        <Input name="search" value="" onChange={onSearchChange} />
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
