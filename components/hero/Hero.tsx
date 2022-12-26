import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-2">
      {props.children}
    </div>
  );
};

export default Hero;
