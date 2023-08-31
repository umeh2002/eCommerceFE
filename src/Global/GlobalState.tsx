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
    signInUser: (state: any, { payload }: any) => {
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
  },
});

export const { signInUser, logOut, changeToggleFalse, changeToggleTrue } =
  GlobalState.actions;

export default GlobalState.reducer;
