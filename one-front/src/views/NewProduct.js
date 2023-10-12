import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/imageconv";
import { toast } from "react-hot-toast"

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    //console.log(data);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    //validate not to send empty
    const { name, image, category, price } = data;

    if (name && image && category && price) {
      
      //link ackend api
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message)

      //when successfull field will clear
      setData(() => {
        return{
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        } 
      })
    }else {
      toast("Enter required fields")
    }
  };

  return (
    <div className="p-4 w-full h-full bg-cover"
    style={{
      backgroundImage: "url('https://wallpaperaccess.com/full/2792583.jpg')"
    }}
    >
      <div className="m-20 p-16">
      <form
        className="flex flex-col m-auto w-full hover:shadow-2xl hover:drop-shadow-2xl max-w-md bg-gray-400 p-3 shadow"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="mb-2">
          Name
        </label>
        <input
          type={"text"}
          name="name"
          value={data.name}
          className="bg-gray-300 p-1 rounded"
          onChange={handleOnchange}
        />

        <label htmlFor="category" className="mt-4">
          Category
        </label>
        <select
          className="my-1 bg-orange-200 p-1 mb-2"
          id="category"
          name="category"
          value={data.category}
          onChange={handleOnchange}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruit</option>
          <option value={"vegetables"}>Vegetable</option>
          <option value={"ice-cream"}>Icecream</option>
          <option value={"cereals"}>Cereals</option>
          <option value={"spices"}>spices</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 mb-2 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} alt="" className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="rounded bg-slate-200 p-1 my-1"
          name="price"
          value={data.price}
          onChange={handleOnchange}
        ></input>

        <label htmlFor="description" className="mt-4">
          Description
        </label>
        <textarea
          rows={3}
          className="rounded bg-slate-200 p-1 my-1 resize-none"
          name="description"
          value={data.description}
          onChange={handleOnchange}
        ></textarea>

        <button className="rounded-full bg-gray-400 my-2 hover:bg-blue-300 font-bold">
          Save
        </button>
      </form>
      </div>
    </div>
  );
};

export default NewProduct;
