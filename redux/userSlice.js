import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "../util/http";

const initialState = {
  isLoading: false,
  isRefreshing: false,
  isLoggedIn: false,
  error: "",

  user: { login: null, email: null, token: null, uid: null },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
      state.user = action.payload;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.user = action.payload;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [logout.fulfilled](state, action) {
      state.user = { login: null, email: null, userId: "" };
      state.isLoggedIn = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
