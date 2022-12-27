import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../components';
import * as userActions from '../../store/user';

interface SignInProps {
  email: string;
  password: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  onSignUpLinkClick: MouseEventHandler<HTMLDivElement>;
}

const SignIn = (props: SignInProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 h-[80vh]">
      <h2 className="text-4xl text-gray-100 md:text-5xl">ავტორიზაცია</h2>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col space-y-5 w-[80%] md:w-[30%]"
      >
        <Input
          name="email"
          value={props.email}
          onChange={props.onInputChange}
        />
        <Input
          name="password"
          value={props.password}
          onChange={props.onInputChange}
        />
        <Button
          color="white"
          size="md"
          value="შესვლა"
          onClick={props.onButtonClick}
        />
      </form>
      <div
        onClick={props.onSignUpLinkClick}
        className="text-gray-100 cursor-pointer transition duration-300 hover:scale-105"
      >
        რეგისტრაცია
      </div>
    </div>
  );
};

interface SignInWithLogic {
  setAuthType: Dispatch<SetStateAction<'sign in' | 'sign up'>>;
}

const WithLogic = (Component: (props: SignInProps) => JSX.Element) => {
  return function ComponentWithLogic(props: SignInWithLogic): JSX.Element {
    const dispatch: Dispatch<any> = useDispatch();

    const [inputs, setInputs] = useState<{ email: string; password: string }>({
      email: '',
      password: '',
    });

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setInputs((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };

    const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
      if (!inputs.email) return alert('მეილის ველის შევსება სავალდებულოა');
      if (!inputs.password) return alert('პაროლის ველის შევსება სავალდებულოა');

      dispatch(
        userActions.signIn({ email: inputs.email, password: inputs.password })
      );
      setInputs({ email: '', password: '' });
    };

    const onSignUpLinkClick: MouseEventHandler<HTMLDivElement> = () => {
      props.setAuthType('sign up');
    };

    return (
      <Component
        email={inputs.email}
        password={inputs.password}
        onInputChange={onInputChange}
        onButtonClick={onButtonClick}
        onSignUpLinkClick={onSignUpLinkClick}
      />
    );
  };
};

const SignInWithLogic = WithLogic(SignIn);

export default SignInWithLogic;
