import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./cartSlice";
import { act } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
      mobile: "",
    },
    paymentStatus: null,
    loginStatus: false,
    showSigup: null,
    cartCount: null,
  },
  reducers: {
    addUser: (state, action) => {
      //   if (!state?.userData?.length == 0) {
      //     state.userData.length == 0;
      //   }

      state.userData = action.payload;
      //   state.loginStatus = true;
    },
    updateUser: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
    handleShowSigup: (state, action) => {
      state.showSigup = action.payload;
    },

    handleloginStatus: (state, action) => {
      state.loginStatus = action.payload;
      if (!action.payload) {
        state.userData = null;
      }
    },
    paymentStatusUpdate: (state, action) => {
      state.paymentStatus = action.payload;
    },
    paymentStatusChange: (state, action) => {
      state.paymentStatus.status = action.payload;
    },
    updateCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
  },
});

export const {
  addUser,
  handleShowSigup,
  handleloginStatus,
  paymentStatusUpdate,
  paymentStatusChange,
  updateUser,
  updateCartCount,
} = userSlice.actions;
export default userSlice.reducer;
