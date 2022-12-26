import { MouseEventHandler } from 'react';

interface ButtonProps {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className="bg-green-600 text-gray-100 px-4 rounded-lg border-2 border-green-600 transition duration-300 hover:scale-105 hover:bg-transparent hover:text-green-600"
    >
      {props.value}
    </button>
  );
};

export default Button;
