import { ReactNode } from 'react';

interface NavigaitonProps {
  children: ReactNode;
}

const Navigation = (props: NavigaitonProps) => {
  return (
    <header className="sticky top-0 z-30 paddings shadow-lg bg-gray-100 border-b-2 border-green-600">
      <nav className="flex items-center justify-between">{props.children}</nav>
    </header>
  );
};

export default Navigation;
