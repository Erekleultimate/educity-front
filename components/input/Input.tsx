import { ChangeEventHandler } from 'react';
import { BiSearch } from 'react-icons/bi';

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
    | 'image'
    | 'search';
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
  search: 'text',
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
  | 'იპოვნე კურსი'
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
  search: 'იპოვნე კურსი',
};

const Input = (props: InputProps) => {
  return props.name !== 'search' ? (
    <input
      autoComplete="off"
      name={props.name}
      type={typesMap[props.name]}
      placeholder={placeHoldersMap[props.name]}
      value={props.value}
      onChange={props.onChange}
      className="text-center outline-none rounded-lg py-1 border-2 border-white text-black"
    />
  ) : (
    <div className="flex items-center bg-white rounded-lg px-2 space-x-3 shadow-md">
      <BiSearch className="text-2xl text-green-600" />
      <input
        autoComplete="off"
        name={props.name}
        type={typesMap[props.name]}
        placeholder={placeHoldersMap[props.name]}
        value={props.value}
        onChange={props.onChange}
        className="outline-none  py-1 border-2 border-transparent bg-transparent text-black w-48 md:w-auto"
      />
    </div>
  );
};

export default Input;
