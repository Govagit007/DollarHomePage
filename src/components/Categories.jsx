import React, { useState } from "react";
import data from "../data/data";

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  const handleCategoryMouseEnter = (index) => {
    setHoveredCategory(index);
    setHoveredSubcategory(null);
  };

  const handleSubcategoryMouseEnter = (index) => {
    setHoveredSubcategory(index);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredSubcategory(null);
  };

  return (
    <div className=" absolute z-50 top-full w-full flex flex-col cursor-pointer  justify-center items-center bg-dark-primary text-light-primary dark:bg-light-primary dark:text-dark-primary">
      {data.categories.map((c, i) => {
        return (
          <div
            key={i}
            className="flex relative w-full h-[40px] lg:h-[50px] justify-center transition items-center hover:dark:bg-dark-primary hover:bg-light-primary hover:text-dark-secondary hover:dark:text-light-secondary "
            onMouseEnter={() => handleCategoryMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <h1>{c.name}</h1>

            {hoveredCategory === i && (
              <div
                className={`absolute w-full left-full  top-[0px] flex flex-col justify-center items-center bg-dark-primary dark:bg-light-primary text-light-secondary dark:text-dark-secondary`}
              >
                {c.subcategories.map((sc, j) => {
                  return (
                    <div
                      key={j}
                      className={` w-full relative h-[40px] lg:h-[50px] flex flex-col justify-center items-center bg-dark-primary hover:bg-light-primary hover:dark:bg-dark-primary dark:bg-light-primary text-light-secondary  hover:text-dark-secondary hover:dark:text-light-secondary dark:text-dark-secondary`}
                      onMouseEnter={() => handleSubcategoryMouseEnter(j)}
                    >
                      <h1>{sc.name}</h1>
                      {hoveredSubcategory === j && (
                        <div
                          className={`absolute w-full left-full top-[0px] flex flex-col justify-center items-center bg-dark-primary dark:bg-light-primary text-light-secondary dark:text-dark-secondary`}
                        >
                          {sc.products.map((p, k) => {
                            return (
                              <div
                                key={k}
                                className={` w-full relative h-[40px] lg:h-[50px] flex flex-col justify-center items-center bg-dark-primary hover:bg-light-primary hover:dark:bg-dark-primary dark:bg-light-primary text-light-secondary  hover:text-dark-secondary hover:dark:text-light-secondary dark:text-dark-secondary`}
                              >
                                {p.name}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
