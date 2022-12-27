import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { CardData, CardImage } from '../../components';

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
      <a className="col-span-1 rounded-t-3xl overflow-hidden shadow-lg transition duration-300 md:hover:scale-105">
        <CardImage img={props.img} />
        <CardData
          type={props.type}
          place={props.place}
          name={props.name}
          price={props.price}
        />
      </a>
    </Link>
  );
};

export default Card;
