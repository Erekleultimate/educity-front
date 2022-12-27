import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { Button, Input } from '../../components';

const SignIn = () => {
  const [inputs, setInputs] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputs.email) return alert('მეილის ველის შევსება სავალდებულოა');
    if (!inputs.password) return alert('პაროლის ველის შევსება სავალდებულოა');

    alert(`${inputs.email} - ${inputs.password}`);
    setInputs({ email: '', password: '' });
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col space-y-5 w-[80%] md:w-[30%]"
      >
        <Input name="email" value={inputs.email} onChange={onInputChange} />
        <Input
          name="password"
          value={inputs.password}
          onChange={onInputChange}
        />
        <Button
          color="white"
          size="md"
          value="Sign In"
          onClick={onButtonClick}
        />
      </form>
    </div>
  );
};

export default SignIn;
