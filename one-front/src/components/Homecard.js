import React from "react";
import { Link } from "react-router-dom";

const Homecard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="hover:scale-105 bg-yellow-300 shadow-2xl drop-shadow-2xl p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className=" w-40  min-h-[150px]">
              <img src={image} alt="" className="h-full w-full"></img>
            </div>
            <h3 className="font-semibold text-gray-900 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-center text-slate-500 font-medium">{category}</p>
            <p className=" text-center font-bold">
              <span className="text-red-800">Ksh</span>
              <span> {price} </span>
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default Homecard;
