import { Dispatch, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import * as userActions from '../store/user';
import * as authActions from '../store/auth';
import * as errorActions from '../store/error';

type ReturnData = {
  toggleAuthActivation: MouseEventHandler<HTMLButtonElement>;
};

const useAuth = (): ReturnData => {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const isAuthActive = useSelector(authActions.selectIsActive);

  const toggleAuthActivation: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(errorActions.set(null));
    !user
      ? dispatch(authActions.set(!isAuthActive))
      : router.push('/dashboard');
  };

  return { toggleAuthActivation };
};

export default useAuth;
