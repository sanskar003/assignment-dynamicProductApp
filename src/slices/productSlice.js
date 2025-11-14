import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cartItems");

const initialState = {
  product: [],
  filteredProduct: [],
  productCart: storedCart ? JSON.parse(storedCart) : [],
};

const productSlice = new createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
      state.filteredProduct = action.payload;
    },
    setFilterProduct: (state, action) => {
      state.filteredProduct = state.product.filter(
        (item) => item.category === action.payload
      );
    },
    setAddToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.productCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productCart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.productCart.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.productCart = state.productCart.filter(
            (item) => item.id !== productId
          );
        }
      }
    },
    setClearCart: (state) => {
      state.productCart = [];
    },
    resetFilter: (state) => {
      state.filteredProduct = state.product;
      localStorage.removeItem('cartItems');
    },
  },
});

export const {
  setProduct,
  setFilterProduct,
  setAddToCart,
  resetFilter,
  removeFromCart,
  setClearCart
} = productSlice.actions;
export default productSlice.reducer;
