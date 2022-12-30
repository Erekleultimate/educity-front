import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import whiteLogo from '../../public/logo-white.png';
import greenLogo from '../../public/logo.png';

interface LogoProps {
  color: 'white' | 'green';
}

const colorsMap: Record<LogoProps['color'], string | StaticImageData> = {
  green: greenLogo,
  white: whiteLogo,
};

const Logo = (props: LogoProps) => {
  return (
    <Link href="/">
      <a>
        <Image src={colorsMap[props.color]} alt="Logo" />
      </a>
    </Link>
  );
};

export default Logo;
