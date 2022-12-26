import { Logo } from '../../components';

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <div className="paddings bg-green-500 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-1 md:col-span-3">
          <div>
            <Logo color="white" />
          </div>
          <div></div>
        </div>
        <div className="col-span-1 md:col-span-1">Right</div>
      </div>
      <div className="paddings bg-green-600 text-center">
        Copyright © {getYear()} EduCity
      </div>
    </footer>
  );
};

export default Footer;
