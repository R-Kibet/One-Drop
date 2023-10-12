import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {VscTrash} from "react-icons/vsc"
import { useDispatch } from "react-redux";
import { deleteCartItem, increaseqty, decreaseqty } from "../redux/productSlide";

const CartProduct = ({ id, name, price, image, category, qty, total }) => {
  
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartItem(id))
    }
    return (
    <div className="hover:scale-105 bg-yellow-400 p-2 flex gap-4 rounded border-2 shadow-2xl drop-shadow-2xl border-slate-400">
      <div className="p-1 bg-gray-400 rounded overflow-hidden">
        <img src={image} alt="" className="h-full w-44 object-cover rounded " />
      </div>

      <div className="flex flex-col gap-1 px-2 py-3 w-full">
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-900 capitalize text-lg md:text-xl">
          {name}
        </h3>
        <div
         className="cursor-pointer text-gray-700 hover:text-red-600" 
         onClick={handleDelete}
        >
        <VscTrash/></div>
        </div>
        <p className="text-slate-500 font-medium text-2xl">{category}</p>
        <p className="font-bold">
          <span className="text-red-800 md:text-xl">Ksh</span>
          <span> {price} </span>
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 mt-3 items-center">
            <button 
            className="font-bold text-gray-700 p-2 bg-gray-400 hover:bg-slate-500 py-1 rounded "
            onClick={()=>dispatch(decreaseqty(id))}
            >
              <AiOutlineMinus />
            </button>
            <p className="font-bold p-1">{qty}</p>
            <button
              className="font-bold text-gray-700 p-2 bg-gray-400 hover:bg-slate-500 py-1 rounded "
              onClick={()=> dispatch(increaseqty(id))}
            >
              <BsCartPlus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-green-900">
            <p>Total = </p>
            <p>Ksh {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
