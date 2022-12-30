import { Dispatch, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from '../../components';
import * as userActions from '../../store/user';
import * as authActions from '../../store/auth';

const HeroLeft = () => {
  const router = useRouter();
  const user = useSelector(userActions.selectUser);
  const dispatch: Dispatch<any> = useDispatch();

  const onBeginButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    !user && dispatch(authActions.set(true));
    user && router.push('/dashboard');
  };

  return (
    <div className="col-span-1 space-y-10 text-center md:text-left">
      <div className="text-red-700">მზად ხარ სწავლისთვის?</div>
      <h1 className="flex flex-col gap-3">
        <span className="font-bold text-4xl md:text-5xl">ისწავლე ღიმილით</span>
        <span className="font-bold text-green-600 text-4xl md:text-5xl">
          ნებისმიერ დროს
        </span>
      </h1>
      <article className="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vitae
        blanditiis dignissimos nisi assumenda mollitia doloremque, odit
        veritatis eum qui debitis vel ad quia laborum consequuntur deleniti
        facilis voluptas. Atque.
      </article>
      <Button
        color="green"
        size="lg"
        value="დაიწყე"
        onClick={onBeginButtonClick}
      />
    </div>
  );
};

export default HeroLeft;
