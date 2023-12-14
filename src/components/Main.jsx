import React, { useState } from "react";
import pic from "../data/shop-assign.jpg";
import Categories from "./Categories";
import Products from "./Products";

const Main = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoriesHover = () => {
    setShowCategories(true);
  };

  const handleCategoriesLeave = () => {
    setShowCategories(false);
  };

  return (
    <div className="w-full h-2/5 bg-light-ternary dark:bg-dark-ternary text-dark-secondary dark:text-light-secondary ">
      <div className="flex w-full item-center">
        <div
          className="w-1/3 md:w-1/4 flex flex-col justify-start  gap-4 relative m-8"
          onMouseEnter={handleCategoriesHover}
          onMouseLeave={handleCategoriesLeave}
        >
          <h1 className="text-2xl w-full flex justify-center items-center cursor-pointer bg-light-primary dark:bg-dark-secondary  px-4 py-2 rounded-md z-0 ">
            Categories
          </h1>
          {showCategories && <Categories />}
        </div>
        <div className="flex flex-col justify-center items-center text-base md:text-xl md:ml-20 gap-2">
          <p>
            Welcome to{" "}
            <span className="text-xl md:text-4xl font-black ml-4">
              Discover <span className="text-base md:text-xl">Dollar</span>{" "}
              Store
            </span>
          </p>
          <div className="border-[1px] w-4/5 "></div>
        </div>
      </div>

      <div className="w-full h-full">
        <img src={pic} alt="" className="w-full object-cover h-full" />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Main;
