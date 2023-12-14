import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="bg-light-primary h-[80px] dark:bg-dark-primary text-dark-secondary dark:text-light-secondary flex gap-4 w-full justify-around items-center">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-black">Discover</h1>
        <h1 className="text-xs font-black">
          Dollar <span className="text-base md:text-xl font-black">Store</span>
        </h1>
      </div>
      <div className="w-1/2 relative">
        <input
          type="text"
          className="w-full bg-dark-primary dark:bg-light-primary text-light-secondary dark:text-dark-secondary h-10 rounded-lg pl-1 md:pl-4"
          placeholder="search for category or product"
        />

        <IoIosSearch className="absolute right-4 scale-150 top-1/4 text-light-secondary dark:text-dark-secondary" />
      </div>
      <div className="flex gap-2 md:gap-6 justify-center items-center">
        <FaMoon
          onClick={handleClick}
          className="bg-dark-primary dark:bg-light-primary text-light-secondary dark:text-dark-secondary w-6 h-6 p-1 hover:scale-105 rounded-full transition-all duration-300"
        />
        <div className="flex md:gap-2 flex-col md:flex-row justify-center items-center">
          <FaCartShopping />
          <p className="text-sm">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
