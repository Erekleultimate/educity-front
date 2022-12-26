import { Logo } from '../../components';

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="text-gray-100">
      <div className="paddings bg-green-500 grid grid-cols-1 gap-20 text-center md:grid-cols-3 md:text-left">
        <div className="col-span-1 md:col-span-2 space-y-3">
          <div>
            <Logo color="white" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            excepturi ea, velit odit eligendi incidunt esse cum corrupti
            blanditiis quaerat quia obcaecati dignissimos soluta culpa doloribus
            cupiditate! Consectetur, qui nam.
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 grid grid-cols-3">
          <div className="col-span-1 space-y-1">
            <div className="text-xl font-bold">კურსები</div>
            <div className="space-y-1">
              <div>კურსები</div>
              <div>კურსები</div>
              <div>კურსები</div>
              <div>კურსები</div>
            </div>
          </div>
          <div className="col-span-1 space-y-1">
            <div className="text-xl font-bold">კურსები</div>
            <div className="space-y-1">
              <div>კურსები</div>
              <div>კურსები</div>
              <div>კურსები</div>
              <div>კურსები</div>
            </div>
          </div>
          <div className="col-span-1 space-y-1">
            <div className="text-xl font-bold">კურსები</div>
            <div className="space-y-1">
              <div>კურსები</div>
              <div>კურსები</div>
              <div>კურსები</div>
              <div>კურსები</div>
            </div>
          </div>
        </div>
      </div>
      <div className="paddings bg-green-600 text-center">
        Copyright © {getYear()} EduCity
      </div>
    </footer>
  );
};

export default Footer;
