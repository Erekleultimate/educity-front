import { Button } from '../../components';

const HeroLeft = () => {
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
        onClick={() => alert('დაიწყე clicked')}
      />
    </div>
  );
};

export default HeroLeft;
