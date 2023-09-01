import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts, addComment } from "../util/httpPost";

const initialState = {
  isRefreshing: false,
  isLoggedIn: false,
  error: "",

  post: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [createPost.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
      state.post = [payload, ...state.post];
    },
    [createPost.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },

    [getPosts.fulfilled](state, action) {
      state.post = action.payload;
      state.isLoggedIn = true;
    },
    [getPosts.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    // [addComment.fulfilled](state, action) {
    //   state.post.push(action.payload);
    // const { idPost, idUser, date, text } = action.payload;
    // const newPost = state.post.find((item) => item.id === idPost);
    // post.comments = [{ idUser, date, text }, ...newPost.comments];
    // state.isLoggedIn = true;
    // },
    // [addComment.rejected](state, action) {
    //   state.isLoggedIn = false;
    //   state.error = action.payload;
    // },
  },
});

export const postsReducer = postsSlice.reducer;
