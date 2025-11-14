import ProductDisplay from "../components/ProductDisplay";
import ProductFilter from "../components/ProductFilter";

const MainProductPage = () => {
  return (
    <div className="bg-linear-to-r from-amber-500/10 to-amber-900/10">
      <div className="py-4 px-5">
        <h1 className="text-4xl font-semibold  px-5 py-3 bg-white w-fit rounded-2xl ">
        PRODUCTS LIST
      </h1>
      </div>
      <ProductFilter />
      <ProductDisplay />
    </div>
  );
};

export default MainProductPage;
