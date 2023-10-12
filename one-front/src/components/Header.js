import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { ImCart } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { logoutRed } from "../redux/userSlice";
import { toast } from "react-hot-toast";

export const Header = () => {
  /* displaying drop down */
  const [showMenu, setShowMenu] = useState(false);

  /**  fetching profile picture */
  const userData = useSelector((state) => state.user);
 
  /** enabling logout */
  const dispatch = useDispatch();

  const showMneuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRed());
    toast("Logout successfully");
  };

  const cartItemNum = useSelector(state => state.product.cartItem)
  return (
    <header className="fixed shadow-md drop-shadow w-full h-16 px-2 md:px-4 z-50 bg-yellow-300">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-14">
            {/* logo */}
            <img className="h-full" src={logo} alt=""></img>
          </div>
        </Link>
        <div className="flex items-center gap-5 md:gap-7 ">
          <nav className="gap-4 md:gap-7 text-base md: text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/65081581609300d5b7cda875"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
           <Link to={"cart"}> <ImCart />
            <div className="absolute  h-4 w-4 rounded-full  m-0 p-0 -top-2 -right-2 bg-red-400 text-white text-base text-center ">
              {cartItemNum.length}
            </div>
            </Link>
          </div>

          <div className="text-l text-slate-600 " onClick={showMneuHandler}>
            <div className="cursor-pointer  w-10 h-10 p-2  overflow-hidden drop-shadow border-solid border-slate-500 ">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt=""
                  className="rounded-full h-full w-full"
                />
              ) : (
                <FaUserLarge />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white p-2 shadow drop-shadow-md  flex flex-col  min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"new product"}
                    className="px-2 whitespace-nowrap cursor-pointer"
                  >
                    New product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="px-2 cursor-pointer text-blue-400 bg-teal-100 rounded-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="px-2 whitespace-nowrap cursor-pointer justify-center items-center"
                  >
                    Login
                  </Link>
                )}
                <nav 
                className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""}className="px-2 py-1">Home</Link>
                  <Link to={"menu/65081581609300d5b7cda875"} className="px-2 py-1">Menu</Link>
                  <Link to={"about"} className="px-2 py-1">About</Link>
                  <Link to={"contact"} className="px-2 py-1">Contact</Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};
