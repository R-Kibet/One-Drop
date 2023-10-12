import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },

    addCatItem: (state, action) => {
      /** check -item is available */
      const check = state.cartItem.some((el) => el._id === action.payload._id);

      if (check) {
        toast("already in cart");
      } else {
        toast("One item added");
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },

    deleteCartItem: (state, action) => {
      toast("item deleted");

      /**first find indexx */
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      /** Delete item from the cart page */
      state.cartItem.splice(index, 1);
      console.log(index);
    },

    increaseqty: (state, action) => {
      /**first find indexx */
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtInc = ++qty;
      state.cartItem[index].qty = qtInc;

      const totalprice = state.cartItem[index].price;
      const total = totalprice * qtInc;

      state.cartItem[index].total = total;
    },

    decreaseqty: (state, action) => {
      /**first find indexx */
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;

      if (qty > 1) {

        const qtDec = --qty;
        state.cartItem[index].qty = qtDec;

        const totalprice = state.cartItem[index].price;
        const total = totalprice * qtDec;

        state.cartItem[index].total = total;
      }
    },
  },
});

export const {
  setDataProduct,
  addCatItem,
  deleteCartItem,
  increaseqty,
  decreaseqty,
} = productSlide.actions;

export default productSlide.reducer;
