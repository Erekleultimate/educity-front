import { MouseEventHandler } from 'react';

interface BarsProps {
  onClick: MouseEventHandler<HTMLOrSVGElement>;
}

const Bars = (props: BarsProps) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={props.onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 24.5H26.5M5.5 16.5H26.5M5.5 8.5H26.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bars;
