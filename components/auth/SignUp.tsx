import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { Button, Input, Error } from '../../components';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/user';
import * as errorActions from '../../store/error';

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
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h2 className="text-4xl text-gray-100 md:text-5xl">რეგისტრაცია</h2>
      <Error />
      <div className="flex flex-col items-center w-[100%] space-y-10">
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
    </div>
  );
};

interface SignUpWithLogicProps {
  setAuthType: Dispatch<SetStateAction<'sign in' | 'sign up'>>;
}

const WithLogic = (Component: (props: SignInProps) => JSX.Element) => {
  return function ComponentWithLogic(props: SignUpWithLogicProps): JSX.Element {
    const dispatch: Dispatch<any> = useDispatch();

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
      if (!inputs.email)
        return dispatch(errorActions.set('მეილის ველის შევსება სავალდებულოა'));
      if (!inputs.confirmEmail)
        return dispatch(errorActions.set('მეილის დადასტურება სავალდებულოა'));
      if (!inputs.password)
        return dispatch(errorActions.set('პაროლის ველის შევსება სავალდებულოა'));
      if (!inputs.confirmPassword)
        return dispatch(errorActions.set('პაროლის დადასტურება სავალდებულოა'));
      if (inputs.email !== inputs.confirmEmail)
        return dispatch(errorActions.set('იმეილები არ ემთხვევა ერთმანეთს'));
      if (inputs.password !== inputs.confirmPassword)
        return dispatch(errorActions.set('პაროლები არ ემთხვევა ერთმანეთს'));

      dispatch(
        userActions.signUp({
          email: inputs.email,
          password: inputs.password,
          setInputs,
        })
      );
    };

    const onSignInClick: MouseEventHandler<HTMLDivElement> = () => {
      dispatch(errorActions.set(null));
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
