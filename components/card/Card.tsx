import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  link: string;
  img: string | StaticImageData;
  type: string;
  place: string;
  name: string;
  price: string;
}

const Card = (props: CardProps) => {
  return (
    <Link href={props.link}>
      <a className="col-span-1 rounded-t-3xl overflow-hidden transition duration-300 hover:scale-105">
        <div className="relative h-64 w-[100%]">
          <Image
            src={props.img}
            layout="fill"
            objectFit="cover"
            alt="card image"
          />
        </div>
        <div className="space-y-1 p-5 rounded-b-xl border border-gray-500">
          <span>{props.type}</span>
          <h5>{props.place}</h5>
          <h3 className="text-xl">{props.name}</h3>
          <h4 className="text-xl font-bold space-x-1">
            <span>₾</span>
            <span>{props.price}</span>
          </h4>
        </div>
      </a>
    </Link>
  );
};

export default Card;
