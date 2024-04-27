// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearUserToken(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUserToken, clearUserToken } = authSlice.actions;
export default authSlice.reducer;
