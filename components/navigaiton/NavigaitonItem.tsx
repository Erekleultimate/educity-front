import Link from 'next/link';

interface NavLinksProps {
  link: string;
  name: string;
}

const NavItem = (props: NavLinksProps) => {
  return (
    <li className="transition hover:scale-110">
      <Link href={props.link}>
        <a className="">{props.name}</a>
      </Link>
    </li>
  );
};

export default NavItem;
