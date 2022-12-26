import Image from 'next/image';
import { NavigaitonItem } from '../../components';
import logo from '../../public/logo.png';

const Navigation = () => {
  return (
    <header className="bg-gray-100 px-14 py-6 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Image src={logo} layout="fill" />
        </div>
        <ul className="flex space-x-5 text-lg font-bold">
          <NavigaitonItem link="/" name="მთავარი" />
          <NavigaitonItem link="/library" name="ბიბლიოთეკა" />
          <NavigaitonItem link="/cources" name="კურსები" />
          <NavigaitonItem link="/projects" name="პროექტები" />
          <NavigaitonItem link="/social" name="სოც.ქსელი" />
          <button className="bg-green-600 text-gray-100 px-4 rounded-lg border-2 border-green-600 transition duration-300 hover:scale-105 hover:bg-transparent hover:text-green-600">
            Sign In / Up
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
