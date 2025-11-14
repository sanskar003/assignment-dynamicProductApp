import { useEffect } from "react";
import { fetchProduct } from "../api/productApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart, setProduct } from "../slices/productSlice.js";
import SideProductList from "./SideProductList.jsx";

const ProductDisplay = () => {
  const filteredProduct = useSelector(state => state.products.filteredProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchproductdata = async () => {
      const res = await fetchProduct();
      dispatch(setProduct(res));
    };
    fetchproductdata();
  }, [dispatch]);

  const handleAddToCart = (idx) => {
    dispatch(setAddToCart(filteredProduct[idx]));
  };

  if (!filteredProduct || filteredProduct.length === 0)
    return <h1 className="text-4xl font-semibold text-blue-500 min-h-screen flex flex-col justify-center items-center">Something went wrong <br /> <p className="text-2xl text-black">( try again after some time )</p></h1>;

  return (
  <div className="min-h-screen w-full flex flex-col md:flex-row">
    {/* Product Grid */}
    <div className="w-full md:w-3/4 flex flex-wrap justify-center items-start gap-5 p-5">
      {filteredProduct.map((val, idx) => (
        <div
          key={idx}
          className="w-[15em] h-[25em] flex flex-col justify-evenly hover:scale-105 transition-all duration-300 bg-white rounded-2xl p-2"
        >
          <div className="w-[220px] h-[220px] mx-auto">
            <img
              className="w-full h-full p-1 bg-stone-100 rounded-2xl"
              src={val.image}
              alt="product image"
            />
          </div>
          <h1 className="text-sm">
            {val.title.length > 45 ? val.title.slice(0, 45) + "..." : val.title}
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-emerald-700 font-bold text-2xl">
                ₹{val.price.toFixed(0)}
              </h2>
              <p className="bg-stone-100 flex gap-2 w-fit border border-white rounded-2xl px-2 py-0.5">
                <img className="w-6 h-6" src="/icons/starRating.png" alt="rating:" /> {val.rating.rate}
              </p>
            </div>
            <button onClick={() => handleAddToCart(idx)}>
              <img
                className="w-9 h-9 bg-yellow-200 hover:bg-yellow-300 p-1 rounded-full cursor-pointer"
                src="/icons/addToCart.png"
                alt="+"
              />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Sidebar */}
    <SideProductList />
  </div>
  );
};

export default ProductDisplay;