import { MainNavigation, Logo, Bars } from '../../components';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-40 paddings bg-gray-100 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Logo color="green" />
        </div>
        <div className="md:hidden">
          <Bars onClick={() => alert('clicked bars')} />
        </div>
        <MainNavigation />
      </nav>
    </header>
  );
};

export default Navigation;
