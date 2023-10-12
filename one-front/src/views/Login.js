import React, { useState } from "react";
import loginImg from "../assets/login-animation.gif";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginRed } from "../redux/userSlice";

const Login = () => {
  /* hide and show password */
  const [showpwd, setShowpwd] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const userData = useSelector((state) => state);
  console.log(userData.user);

  const dispatch = useDispatch();

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

  /* makes user page not to be default after submit*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
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
      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRed(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      console.log(userData);
    } else {
      alert("kindly fill the fields");
    }
  };

  const pwdHandler = () => {
    setShowpwd((prev) => !prev);
  };

  console.log(data);
  return (
    <div
      className="p-3 md:p-4 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.gobankingrates.com/wp-content/uploads/2019/10/groceries-laying-out-on-yellow-background-iStock-1126188273.jpg?quality=80')",
      }}
    >
      <div className="flex h-full m-44 p-20">
        <div className="w-full h-full max-w-sm bg-transparent hover:shadow-2xl drop-shadow-2xl m-auto flex items-center flex-col p-2">
          {/* <h1 className='text-center'>Sign up</h1>*/}
          <div className="w-20 ">
            <img
              src={loginImg}
              alt=""
              className="w-full overflow-hidden rounded-full drop-shadow-md shadow-md"
            ></img>
          </div>

          {/* create login form */}
          <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email" className="p-2">
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

            <label htmlFor="password" className="p-2">
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

            <button className=" w-full max-w-[120px] m-auto mt-5 rounded-full bg-teal-100 hover:bg-blue-200 cursor-pointer">
              Login
            </button>
          </form>
          <p className="mt-2 font-style: italic">
            Don't have an account ?
            <Link to={"/signup"} className="text-white hover:text-orange-200 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
