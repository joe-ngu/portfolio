const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-4 text-center text-white">
      <p className="text-sm sm:text-base">&copy; {currentYear} Joseph Nguyen</p>
    </footer>
  );
};

export default Footer;
