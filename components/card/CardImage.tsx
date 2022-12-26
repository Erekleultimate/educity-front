import Image, { StaticImageData } from 'next/image';

interface CardImageProps {
  img: string | StaticImageData;
}

const CardImage = (props: CardImageProps) => {
  return (
    <div className="relative h-64 w-[100%]">
      <Image src={props.img} layout="fill" objectFit="cover" alt="card image" />
    </div>
  );
};

export default CardImage;
