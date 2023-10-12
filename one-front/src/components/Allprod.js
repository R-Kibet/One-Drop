import React, { useEffect, useState } from "react";
import FilterProduct from "./filterProduct";
import Cardslider from "./Cardslider";
import { useSelector } from "react-redux";

const Allprod = ({ heading }) => {
  /**get data */
  const productData = useSelector((state) => state.product.productList);


  const categoryList = [...new Set(productData.map((el) => el.category))];


  //filter data display
  const [filterby, setfilterBy] = useState('')
  const [dataFilter, setDataFilter] = useState([]);

  const loadingSlider = new Array(10).fill(null);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handlefilterProd = (category) => {
    setfilterBy(category)
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="my-5 ">
      <h2 className=" mb-8 font-bold text-2xl text-slate-800 underline">
        {heading}
      </h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                key={el}
                category={el}
                isActive={el === filterby}
                onClick={() => handlefilterProd(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0] ? 
        dataFilter.map((el) => {
          return (
            <Cardslider
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          );
        })
      :
      loadingSlider.map((el, index) => <Cardslider key={index} loading="Loading..." />)
      }
      </div>
    </div>
  );
};

export default Allprod;
