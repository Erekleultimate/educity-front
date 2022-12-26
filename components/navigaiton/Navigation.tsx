import { NavigaitonItem, Button, Logo } from '../../components';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 paddings bg-gray-100 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Logo color="green" />
        </div>
        <ul className="hidden md:flex md:space-x-5 md:text-lg md:font-bold">
          <NavigaitonItem link="/" name="მთავარი" />
          <NavigaitonItem link="/library" name="ბიბლიოთეკა" />
          <NavigaitonItem link="/cources" name="კურსები" />
          <NavigaitonItem link="/projects" name="პროექტები" />
          <NavigaitonItem link="/social" name="სოც.ქსელი" />
          <Button
            size="md"
            value="Sign In / Up"
            onClick={() => alert('Sign in / Out clicked')}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
