import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { auth, db, storage } from "../config";
import { ref, set } from "firebase/database";

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, email, password }, thunkAPI) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {
        displayName: login,
        // photoURL: profileImageUrl,
      });
      //
      return { login: displayName, email, password, uid };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return { login: displayName, email, password, uid };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const res = await signOut(auth);
    return res;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// const updateUserProfile = async (update) => {
//   const user = auth.currentUser;

//   // якщо такий користувач знайдений
//   if (user) {
//     // оновлюємо його профайл
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };
