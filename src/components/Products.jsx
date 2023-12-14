import React, { useEffect, useState } from "react";
import products from "../data/products";

const Products = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(products);
  }, []);
  return (
    <div className="flex flex-col w-full bg-light-primary dark:bg-dark-primary gap-4 justify-around items-center">
      <h1 className="text-4xl mt-8">Products</h1>
      <div className="flex overflow-scroll  flex-wrap gap-4 justify-around items-center mx-4">
        {arr.map((p, i) => {
          const pic = p.thumbnail;
          return (
            <div key={i} className="w-40">
              <img
                src={pic}
                alt=""
                className="w-32 object-fill h-28 rounded-lg hover:scale-105 transition-all duration-100"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
