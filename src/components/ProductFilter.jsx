import { useDispatch, useSelector } from "react-redux";
import { resetFilter, setFilterProduct } from "../slices/productSlice";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const filteredProduct = useSelector((state) => state.products.filteredProduct);

  const categories = [...new Set(products.map((item) => item.category))];

  if (filteredProduct.length === 0) return <h1 className="text-center text-2xl">cant find the product</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-4 my-5 bg-white p-4 w-fit rounded-2xl mx-auto">
      <button
        className="border border-zinc-300 px-3 py-1 rounded-lg hover:bg-sky-500/50 hover:text-white cursor-pointer transition-all duration-300"
        onClick={() => dispatch(resetFilter())}
      >
        All
      </button>
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className="border border-zinc-300 px-3 py-1 rounded-lg hover:bg-sky-500/50 hover:text-white cursor-pointer transition-all duration-300"
          onClick={() => dispatch(setFilterProduct(cat))}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;