import logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="w-full h-14 border-b dark:bg-gray-950">
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center gap-1">
          <img alt="logo" src={logo} className="w-12 h-12" />
          <h2 className="font-semibold text-lg md:text-xl dark:text-white">
            Price Calculator
          </h2>
        </div>

        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
          <i className="ri-moon-fill text-gray-800 dark:text-white"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
