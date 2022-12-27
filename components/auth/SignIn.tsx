import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { Button, Input } from '../../components';

interface SignInProps {
  email: string;
  password: string;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const SignIn = (props: SignInProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 h-[80vh]">
      <h2 className="text-5xl text-gray-100">ავტორიზაცია</h2>
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
          value="Sign In"
          onClick={props.onButtonClick}
        />
      </form>
    </div>
  );
};

const WithLogic = (Component: (props: SignInProps) => JSX.Element) => {
  return function ComponentWithLogic(): JSX.Element {
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

      alert(`${inputs.email} - ${inputs.password}`);
      setInputs({ email: '', password: '' });
    };

    return (
      <Component
        email={inputs.email}
        password={inputs.password}
        onInputChange={onInputChange}
        onButtonClick={onButtonClick}
      />
    );
  };
};

const SignInWithLogic = WithLogic(SignIn);

export default SignInWithLogic;
