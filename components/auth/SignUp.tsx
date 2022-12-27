import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { Button, Input } from '../../components';

interface SignInProps {
  email: string;
  confirmEamil: string;
  password: string;
  confirmPassword: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  onSignInLinkClick: MouseEventHandler<HTMLDivElement>;
}

const SignUp = (props: SignInProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 h-[80vh]">
      <h2 className="text-5xl text-gray-100">რეგისტრაცია</h2>
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
          name="confirmEmail"
          value={props.confirmEamil}
          onChange={props.onInputChange}
        />
        <Input
          name="password"
          value={props.password}
          onChange={props.onInputChange}
        />
        <Input
          name="confirmPassword"
          value={props.confirmPassword}
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
        onClick={props.onSignInLinkClick}
        className="text-gray-100 cursor-pointer transition duration-300 hover:scale-105"
      >
        ავტორიზაცია
      </div>
    </div>
  );
};

interface SignUpWithLogicProps {
  setAuthType: Dispatch<SetStateAction<'sign in' | 'sign up'>>;
}

const WithLogic = (Component: (props: SignInProps) => JSX.Element) => {
  return function ComponentWithLogic(props: SignUpWithLogicProps): JSX.Element {
    const [inputs, setInputs] = useState<{
      email: string;
      confirmEmail: string;
      password: string;
      confirmPassword: string;
    }>({
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    });

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setInputs((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };

    const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
      if (!inputs.email) return alert('მეილის ველის შევსება სავალდებულოა');
      if (!inputs.confirmEmail) return alert('მეილის დადასტურება სავალდებულოა');
      if (!inputs.password) return alert('პაროლის ველის შევსება სავალდებულოა');
      if (!inputs.confirmPassword)
        return alert('პაროლის დადასტურება სავალდებულოა');

      alert(
        `${inputs.email} - ${inputs.confirmEmail} - ${inputs.password} - ${inputs.confirmPassword}`
      );
      setInputs({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
      });
    };

    const onSignInClick: MouseEventHandler<HTMLDivElement> = () => {
      props.setAuthType('sign in');
    };

    return (
      <Component
        email={inputs.email}
        confirmEamil={inputs.confirmEmail}
        password={inputs.password}
        confirmPassword={inputs.confirmPassword}
        onInputChange={onInputChange}
        onButtonClick={onButtonClick}
        onSignInLinkClick={onSignInClick}
      />
    );
  };
};

const SignUpWithLogic = WithLogic(SignUp);

export default SignUpWithLogic;
