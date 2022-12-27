import { NavigaitonItem, Button } from '../../components';

const MainNavigation = () => {
  return (
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
  );
};

export default MainNavigation;
