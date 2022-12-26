import Image from 'next/image';
import { NavigaitonItem } from '../../components';
import logo from '../../public/logo.png';

const Navigation = () => {
  return (
    <header className="bg-gray-100 px-14 py-6">
      <nav className="flex items-center justify-between">
        <div className="relative h-11 w-11">
          <Image src={logo} layout="fill" />
        </div>
        <ul className="flex space-x-6 text-lg font-bold">
          <NavigaitonItem link="/" name="მთავარი" />
          <NavigaitonItem link="/library" name="ბიბლიოთეკა" />
          <NavigaitonItem link="/cources" name="კურსები" />
          <NavigaitonItem link="/projects" name="პროექტები" />
          <NavigaitonItem link="/social" name="სოც.ქსელი" />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
