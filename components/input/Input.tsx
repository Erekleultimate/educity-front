import { ChangeEventHandler } from 'react';

interface InputProps {
  name:
    | 'email'
    | 'confirmEmail'
    | 'password'
    | 'confirmPassword'
    | 'type'
    | 'name'
    | 'place'
    | 'price'
    | 'image';
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const typesMap: Record<
  InputProps['name'],
  'email' | 'password' | 'text' | 'number' | 'file'
> = {
  email: 'email',
  confirmEmail: 'email',
  password: 'password',
  confirmPassword: 'password',
  type: 'text',
  name: 'text',
  place: 'text',
  price: 'text',
  image: 'file',
};

const placeHoldersMap: Record<
  InputProps['name'],
  | 'შეიყვანე მეილი'
  | 'დაადასტურე მეილი'
  | 'შეიყვანე პაროლი'
  | 'დაადასტურე პაროლი'
  | 'შეიყვანე ტიპი'
  | 'შეიყვანე სახელი'
  | 'შეიყვანე ადგილი'
  | 'შეიყვანე ფასი'
  | 'აირჩიე სურათი'
> = {
  email: 'შეიყვანე მეილი',
  confirmEmail: 'დაადასტურე მეილი',
  password: 'შეიყვანე პაროლი',
  confirmPassword: 'დაადასტურე პაროლი',
  type: 'შეიყვანე ტიპი',
  name: 'შეიყვანე სახელი',
  place: 'შეიყვანე ადგილი',
  price: 'შეიყვანე ფასი',
  image: 'აირჩიე სურათი',
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
