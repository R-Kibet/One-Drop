import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import  Home  from "./views/Home";
import  Menu  from "./views/Menu";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import NewProduct from "./views/NewProduct";
import SignUp from "./views/SignUp";
import Cart from "./views/Cart";
import { store } from "./redux/index";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home/>}/>
      {/*<Route path='menu' element={<Menu/>}/>*/}
      <Route path='menu/:filterby' element={<Menu/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path="new product" element={<NewProduct/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="cart" element={<Cart/>}/>
      
    </Route>)
);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />

  </Provider>
);    