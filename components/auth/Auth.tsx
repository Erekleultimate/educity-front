import { useState } from 'react';
import { SignIn, SignUp } from '../../components';

const Auth = () => {
  const [authType, setAuthType] = useState<'sign in' | 'sign up'>('sign in');

  return (
    <div>
      {authType === 'sign in' && <SignIn setAuthType={setAuthType} />}
      {authType === 'sign up' && <SignUp setAuthType={setAuthType} />}
    </div>
  );
};

export default Auth;
