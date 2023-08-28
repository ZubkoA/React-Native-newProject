import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "../util/httpPost";

const initialState = {
  isLoading: false,
  isRefreshing: false,
  isLoggedIn: false,
  error: "",

  post: {
    img: null,
    title: null,
    locationTitle: null,
    location: null,
    id: null,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [createPost.pending](state) {
      state.isLoading = true;
    },
    [createPost.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
      state.post.push(payload);
    },
    [createPost.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    // [login.pending](state) {
    //   state.isLoading = true;
    // },
    // [login.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [login.rejected](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = false;
    //   state.error = action.payload;
    // },
    // [logout.fulfilled](state, action) {
    //   state.user = { login: null, email: null, userId: "" };
    //   state.isLoggedIn = false;
    //   state.error = null;
    // },
  },
});

export const postsReducer = postsSlice.reducer;
