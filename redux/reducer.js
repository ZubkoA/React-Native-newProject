import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authReducer } from "./userSlice";
import { postsReducer } from "./postSlice";
import storage from "./storage";

const persistConfig = {
  key: "auth",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedReducer,
  posts: postsReducer,
});
