import React from "react";
import { RiFilter2Fill } from "react-icons/ri";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl p-3 rounded-full cursor-pointer 
      ${isActive ? "bg-orange-500" : "bg-transparent" }`}
      >
        <RiFilter2Fill />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
