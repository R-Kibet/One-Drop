import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/cartprodct";
import empty from "../assets/empty.gif"

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  return (
    <>
      <div 
      className="p-2 md:p-4 bg-cover"
      style={{backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-oBF_QzxNv_0%2FXznn8XA0KrI%2FAAAAAAAA4is%2Fs9W6XvaKz1cru5rCq3OyxAgb3OJbwUa9ACLcBGAsYHQ%2Fs2560%2Flemons_citrus_slice_180934_3840x2160.jpg&f=1&nofb=1&ipt=02dad0e1a8b948c05a9b839f0c2a61d9e4506251265342362706a5afcc1095a0&ipo=images')"}}>
        <h2 className="text-lg md:text-2xl font-bold text-white">
          Your shopping items{" "}
        </h2>
        { productCartItem[0] ?
          <div className="flex my-4 gap-4">
            {/** show cart items */}
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    price={el.price}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/** calculation of total cost */}
            <div className="w-full mx-w-md mt-auto mb-auto ml-auto shadow ">
              <h2 className="bg-yellow-200 text-center font-medium p-2 text-lg">
                Summary
              </h2>
              <div className=" hover:scale-105  overflow-hidden shadow drop-shadow text-center mt-3 p-2 border-b hover:bg-yellow-300 hover:text-yellow-800">
                <p className="text-lg font-medium"> Total Quantity</p>
                <p className="text-xl font-bold">{totalQty}</p>
              </div>
              <div className="hover:scale-105 hover:overflow-hidden text-center  shadow drop-shadow hover:bg-yellow-300 hover:text-yellow-800 border-b mt-3 p-2 ">
                <p className="text-lg font-medium">Total Price</p>
                <p className="text-xl font-bold">Ksh {totalPrice}</p>
              </div>
              <button className=" my-3 rounded-full bg-red-600 w-full text-lg font-bold py-2 text-white">
                Pay
              </button>
            </div>
          </div>

          :
          <>
           <div className="flex w-full justify-center items-center flex-col ">
            <img 
            src={empty} 
            alt=""
            className="w-full max-w-sm"
            />
            <p 
            className="text-slate-600 text-3xl font-bold"
            >Drop items in the cart</p>
           </div>
          </>
        }
      </div>
    </>
  );
};

export default Cart;
