import Link from 'next/link';

interface NavigationItemProps {
  link: string;
  name: string;
  active: boolean;
}

const NavigationItem = (props: NavigationItemProps) => {
  return (
    <li
      className={`${
        props.active
          ? 'bg-gray-200 text-green-600 md:bg-transparent md:border-green-600'
          : 'border-transparent hover:scale-110'
      } border px-5 rounded-lg transition duration-300 p-1`}
    >
      <Link href={props.link}>
        <a className={`${props.active && 'md:cursor-default'}`}>{props.name}</a>
      </Link>
    </li>
  );
};

export default NavigationItem;
