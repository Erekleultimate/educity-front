import { ChangeEventHandler } from 'react';

interface InputProps {
  name: 'email' | 'confirmEmail' | 'password' | 'confirmPassword';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const typesMap: Record<
  InputProps['name'],
  'email' | 'password' | 'text' | 'number'
> = {
  email: 'email',
  confirmEmail: 'email',
  password: 'password',
  confirmPassword: 'password',
};

const placeHoldersMap: Record<
  InputProps['name'],
  | 'შეიყვანე მეილი'
  | 'დაადასტურე მეილი'
  | 'შეიყვანე პაროლი'
  | 'დაადასტურე პაროლი'
> = {
  email: 'შეიყვანე მეილი',
  confirmEmail: 'დაადასტურე მეილი',
  password: 'შეიყვანე პაროლი',
  confirmPassword: 'დაადასტურე პაროლი',
};

const Input = (props: InputProps) => {
  return (
    <input
      autoComplete="off"
      name={props.name}
      type={typesMap[props.name]}
      placeholder={placeHoldersMap[props.name]}
      value={props.value}
      onChange={props.onChange}
      className="text-center outline-none rounded-lg py-1 border-2 border-white text-black"
    />
  );
};

export default Input;
