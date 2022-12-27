import { MouseEventHandler } from 'react';

interface ButtonProps {
  color: 'green' | 'white';
  size: 'md' | 'lg';
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const colorsMap: Record<ButtonProps['color'], string> = {
  green:
    'bg-green-600 text-gray-100 rounded-lg border-2 border-green-600 transition duration-300 md:hover:scale-105 md:hover:bg-transparent md:hover:text-green-600',
  white:
    'bg-white text-black rounded-lg border-2 border-white transition duration-300 md:hover:scale-105',
};

const sizesMap: Record<ButtonProps['size'], string> = {
  md: 'px-4',
  lg: 'px-7 py-3',
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${sizesMap[props.size]} ${colorsMap[props.color]} `}
    >
      {props.value}
    </button>
  );
};

export default Button;
