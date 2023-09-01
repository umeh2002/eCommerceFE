import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null || {},
  toggle: false,
  cart: [] as any,
};

const GlobalState = createSlice({
  name: "store",
  initialState,
  reducers: {
    createUser: (state: any, { payload }: any) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
    changeToggleFalse: (state: any) => {
      state.toggle = false;
    },

    changeToggleTrue: (state: any) => {
      state.toggle = true;
    },
    addToCart: (state, { payload }) => {
      const checkCart = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });
      if (checkCart >= 0) {
        state.cart[checkCart].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },
    remove: (state: any, { payload }) => {
      const removal = state.cart.filter((el: any) => el.id !== payload.id);
      state.cart = removal;
    },
    removeQty: (state, { payload }) => {
      const itemQty = state.cart.findIndex((el: any) => {
        return el.id === payload.id;
      });
      if (state.cart[itemQty].qty > 1) {
        state.cart[itemQty].qty -= 1;
      } else if (state.cart[itemQty].qty === 1) {
        const removal = state.cart.filter((el: any) => el.id !== payload.id);
        state.cart = removal;
      }
    },
  },
});

export const {
  createUser,
  logOut,
  changeToggleFalse,
  changeToggleTrue,
  addToCart,
  remove,
  removeQty,
} = GlobalState.actions;

export default GlobalState.reducer;
