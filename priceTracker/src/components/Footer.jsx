const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm md:text-base">
        Made by <span className="font-bold">Aadarsh Pathak</span> ©{" "}
        {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
