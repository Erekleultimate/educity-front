import Image from 'next/image';
import { NavigaitonItem, Button } from '../../components';
import logo from '../../public/logo.png';

const Navigation = () => {
  return (
    <header className="bg-gray-100 px-14 py-6 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Image src={logo} layout="fill" alt="logo" />
        </div>
        <ul className="flex space-x-5 text-lg font-bold">
          <NavigaitonItem link="/" name="მთავარი" />
          <NavigaitonItem link="/library" name="ბიბლიოთეკა" />
          <NavigaitonItem link="/cources" name="კურსები" />
          <NavigaitonItem link="/projects" name="პროექტები" />
          <NavigaitonItem link="/social" name="სოც.ქსელი" />
          <Button
            value="Sign In / Up"
            onClick={() => alert('Sign in / Out clicked')}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
