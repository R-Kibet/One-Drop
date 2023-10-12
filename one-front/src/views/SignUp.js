import React, { useState } from "react";
import loginImg from "../assets/login-animation.gif";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/imageconv";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  /* hide and show password */
  const [showpwd, setShowpwd] = useState(false);
  const [showconfpwd, setconfpwd] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  /** save user data while login in */
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  /** handle profile image upload */
  const handleProfImgUpload = async (f) => {
    const data = await ImagetoBase64(f.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  /* makes user page not to be default after submit*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);
        //alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/");
        }
      } else {
        toast("check password field");
      }
    } else {
      toast("kindly fill the fields");
    }
  };

  const pwdHandler = () => {
    setShowpwd((prev) => !prev);
  };

  const confhandler = () => {
    setconfpwd((prev) => !prev);
  };

  console.log(data);
  return (
    <div 
      className="p-3 md:p-4 w-full h-full bg-cover"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1625014.jpg')"
      }}
      >
      <div className="p-8 m-24">
        <div className="w-full max-w-sm bg-transparent hover:shadow-2xl drop-shadow-2xl m-auto flex items-center flex-col p-2 rounded">
          {/* <h1 className='text-center'>Sign up</h1>*/}
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
            <img
              src={data.image ? data.image : loginImg}
              alt=""
              className="w-full h-full"
            />

            {/* user to upload image */}
            <label htmlFor="profileImage">
              <div className="absolute bottom-0 h-1/4 bg-slate-300 bg-opacity-30 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-orange-800">Upload</p>
              </div>
              <input
                type={"file"}
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleProfImgUpload}
              ></input>
            </label>
          </div>

          {/* create login form */}
          <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="p-2 text-orange-300">
              First Name
            </label>
            <input
              type={"text"}
              id="firstName"
              name="firstName"
              className="w-full bg-slate-200 px-2 py-1 rounded-full mt-1 mb-3 focus-within:outline-blue-300"
              value={data.firstName}
              onChange={handleOnchange}
            ></input>

            <label htmlFor="lastName" className="p-2 text-orange-700">
              Last Name
            </label>
            <input
              type={"text"}
              id="lastName"
              name="lastName"
              className="w-full bg-slate-200 px-2 py-1 rounded-full mt-1 mb-3 focus-within:outline-blue-300"
              value={data.lastName}
              onChange={handleOnchange}
            ></input>

            <label htmlFor="email" className="p-2 text-orange-700">
              Email
            </label>
            <input
              type={"email"}
              id="email"
              name="email"
              className="w-full bg-slate-200 px-2 py-1 rounded-full mt-1 mb-3 focus-within:outline-blue-300"
              value={data.email}
              onChange={handleOnchange}
            ></input>

            <label htmlFor="password" className="p-2 text-orange-900">
              Password
            </label>
            <div className=" w-full flex px-2 py-1 rounded-full mt-1 mb-3 bg-slate-200 focus-within:outline focus-within:outline-blue-300">
              <input
                type={showpwd ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-slate-200 border-none outline-none"
                value={data.password}
                onChange={handleOnchange}
              ></input>
              <span
                className="flex text-xl cursor-pointer"
                onClick={pwdHandler}
              >
                {showpwd ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>

            <label htmlFor="confirmPassword" className="p-2 text-orange-200">
              Confirm Password
            </label>
            <div className=" w-full flex px-2 py-1 rounded-full mt-1 mb-3 bg-slate-200 focus-within:outline focus-within:outline-blue-300">
              <input
                type={showconfpwd ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-slate-200 border-none outline-none"
                value={data.confirmPassword}
                onChange={handleOnchange}
              ></input>
              <span
                className="flex text-xl cursor-pointer"
                onClick={confhandler}
              >
                {showconfpwd ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>

            <button className=" w-full max-w-[120px] m-auto mt-5 rounded-full bg-teal-100 hover:bg-blue-200 cursor-pointer">
              Sign Up
            </button>
          </form>
          <p className="mt-2 font-style: italic text-gray-200">
            Already have account ?
            <Link to={"/login"} className="text-white underline hover:text-orange-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
