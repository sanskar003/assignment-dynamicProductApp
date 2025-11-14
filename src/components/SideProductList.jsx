import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setClearCart } from "../slices/productSlice";

const SideProductList = () => {
  const cartItems = useSelector((state) => state.products.productCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(setClearCart());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full md:w-1/4 h-auto mx-0 sm:mx-4 my-5 flex flex-col gap-4 rounded-2xl px-4 py-5 bg-stone-100 shadow-lg">
      <h1 className="font-bold text-3xl text-center text-stone-700 border-b pb-3">🛒 Cart Items</h1>
  {cartItems.length === 0 ? (
    <h1 className="text-2xl font-semibold text-center text-stone-500">No Items in Cart</h1>
  ) : (
    <>

      <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
        {cartItems.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start bg-white px-3 py-2 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col w-2/2">
              <h1 className="text-sm flex justify-between gap-3 font-medium text-stone-700 leading-snug">
              <p className="w-[70px] h-[70px]">
                <img className="w-full h-full" src={item.image} alt="" />
              </p>
                {item.title.length > 45 ? item.title.slice(0, 45) + "..." : item.title}
              </h1>
              <p className="text-emerald-700 font-semibold mt-1 px-2 w-fit rounded-2xl bg-zinc-400/20">
                ₹{item.price.toFixed(0)} × {item.quantity}
              </p>
            </div>
            <button
              className="flex h-full items-end"
              onClick={() => handleRemoveItem(item.id)}
            >
              <img
                className="w-8 h-8 bg-red-400/50 hover:bg-red-500 transition-all duration-300 rounded-full p-1"
                src="/icons/removeItem.png"
                alt="remove"
              />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <button
          className="px-4 py-1.5 bg-red-500/70 text-white rounded-xl font-semibold hover:bg-red-600 transition-all duration-300"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        <div className="text-right font-bold text-xl text-stone-700">
          Total: ₹{totalPrice.toFixed(0)}
        </div>
      </div>
    </>
  )}
</div>
  );
};

export default SideProductList;
