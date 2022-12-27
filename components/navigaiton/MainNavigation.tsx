import { NavigationItem, Button } from '../../components';

const MainNavigation = () => {
  return (
    <ul className="hidden md:flex md:space-x-5 md:text-lg md:font-bold">
      <NavigationItem link="/" name="მთავარი" />
      <NavigationItem link="/library" name="ბიბლიოთეკა" />
      <NavigationItem link="/cources" name="კურსები" />
      <NavigationItem link="/projects" name="პროექტები" />
      <NavigationItem link="/social" name="სოც.ქსელი" />
      <Button
        size="md"
        value="Sign In / Up"
        onClick={() => alert('Sign in / Out clicked')}
      />
    </ul>
  );
};

export default MainNavigation;
