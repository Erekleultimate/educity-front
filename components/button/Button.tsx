import { MouseEventHandler } from 'react';

interface ButtonProps {
  size: 'md' | 'lg';
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const sizesMap: Record<ButtonProps['size'], string> = {
  md: 'px-4',
  lg: 'px-7 py-3',
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${
        sizesMap[props.size]
      } bg-green-600 text-gray-100 rounded-lg border-2 border-green-600 transition duration-300 hover:scale-105 hover:bg-transparent hover:text-green-600`}
    >
      {props.value}
    </button>
  );
};

export default Button;
