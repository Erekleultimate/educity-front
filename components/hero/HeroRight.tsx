import Image from 'next/image';
import img from '../../public/home-image.png';

export const HeroRight = () => {
  return (
    <div className="col-span-1 relative h-60 md:h-auto">
      <Image src={img} layout="fill" objectFit="cover" />
    </div>
  );
};

export default HeroRight;
