import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "./redux/productSlide";
import Footer from "./views/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  console.log(productData);

  useEffect(() => {
    (async function () {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, [dispatch]);
 
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
