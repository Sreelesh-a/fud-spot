import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./cartSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    paymentStatus: null,
    loginStatus: false,
    showSigup: null,
  },
  reducers: {
    addUser: (state, action) => {
      //   if (!state?.userData?.length == 0) {
      //     state.userData.length == 0;
      //   }
      state.userData = action.payload;
      //   state.loginStatus = true;
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
  },
});

export const {
  addUser,
  handleShowSigup,
  handleloginStatus,
  paymentStatusUpdate,
} = userSlice.actions;
export default userSlice.reducer;
