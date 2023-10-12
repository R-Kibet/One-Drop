import React, { useRef } from "react";
import Homecard from "../components/Homecard";
import { useSelector } from "react-redux";
import Cardslider from "../components/Cardslider";
import { GrPrevious, GrNext } from "react-icons/gr";
import Allprod from "../components/Allprod";


const Home = () => {
  /**get data */
  const productData = useSelector((state) => state.product.productList);
 

  /** we want to display some products on home page */
  const homeProductCartLIst = productData.slice(2,4);
  const veglist = productData.filter((el) => el.category === "vegetables", []);
  

  /** as it takes long to load we displayempty cards */
  const loading = new Array(2).fill(null);
  const loadingSlider = new Array(10).fill(null);

  /**initializing arrow sliders */
  const slideProdref = useRef();

  const nextProd = () => {
    slideProdref.current.scrollLeft += 200;
  };

  const prevProd = () => {
    slideProdref.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4 bg-cover w-full h-full" style={{
      backgroundImage: "url('https://wallpapercave.com/wp/wp4459414.jpg')",
      }}>
      <div className="md:flex gap-4 py-2">
        {/* right section */}
        <div className="md:w-1/2 ">
          <div className="flex gap-4 bg-teal-400 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-gray-800">Delivery</p>
            <img
              src="https://image.freepik.com/free-vector/bicycle-delivery_23-2148147086.jpg"
              alt=""
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold">
            Reliable Grocery store{" "}
            <span className="text-teal-900">We Deliver At your Doorstep</span>
          </h2>
          <p className="text-base max-w-sm py-3">
            {" "}
            We got you covered on fresh and available stock usishtuke stock
            imeisha na sisi tuko hapo your reliable food plug
          </p>
          <button className="font-bold bg-orange-500 text-gray-300 px-4 py-2 rounded-md hover:bg-red-400">
            Place your order
          </button>
        </div>

        {/** left section */}
        <div className="md:w-1/2 flex flex-wrap gap-4 p-4 justify-center">
          {homeProductCartLIst[0]
            ? homeProductCartLIst.map((el) => {
                return (
                  <Homecard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loading.map((el, index) => {
                return <Homecard key={index} loading={"loading..."} />;
              })}
        </div>
      </div>

      {/** create a slider */}
      <div className="mt-20">
        <div className="flex w-full items-center">
          <h2 className="mb-8 font-bold text-2xl text-slate-800 underline">
            Fresh Vegetables
          </h2>

          <div className="ml-auto flex gap-5 ">
            <button
              onClick={prevProd}
              className="bg-slate-400 hover:bg-gray-500 text-lg p-2 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProd}
              className="bg-slate-400 hover:bg-gray-500 text-lg p-2 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProdref}
        >
          {veglist[0]
            ? veglist.map((el) => {
                return (
                  <Cardslider
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingSlider.map((el, index) => <Cardslider key={index} loading="Loading..." />)}
        </div>
      </div>

      <Allprod heading={"Your Product"} />
    </div>
  );
};

export default Home;
