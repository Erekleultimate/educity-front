import { ChangeEventHandler } from 'react';

interface InputProps {
  name: 'email' | 'password';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const typesMap: Record<
  InputProps['name'],
  'email' | 'password' | 'text' | 'number'
> = {
  email: 'email',
  password: 'password',
};

const placeHoldersMap: Record<
  InputProps['name'],
  'შეიყვანე მეილი' | 'შეიყვანე პაროლი'
> = {
  email: 'შეიყვანე მეილი',
  password: 'შეიყვანე პაროლი',
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
      className="text-center outline-none rounded-lg py-1"
    />
  );
};

export default Input;
