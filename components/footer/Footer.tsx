const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <div className="paddings bg-green-500">Body</div>
      <div className="paddings bg-green-600 text-center">
        Copyright © {getYear()} EduCity
      </div>
    </footer>
  );
};

export default Footer;
