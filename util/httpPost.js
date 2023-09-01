import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../config";
import { getRealPhotoURL } from "./photo";

export const getPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const posts = await getDocs(collection(db, "posts"));
      const array = [];
      posts.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
      });
      return array;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/create",
  async (post, thunkAPI) => {
    try {
      console.log(post);
      const photo = post.img;
      const { img, ...rest } = post;
      const realPhotoURL = await getRealPhotoURL(photo);

      newPost = { img: realPhotoURL, ...rest };
      console.log("this is new", newPost);

      const docRef = await addDoc(collection(db, "posts"), newPost);

      return { id: docRef.id, ...post };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addComment = createAsyncThunk(
//   "posts/addComment",
//   async (comment, thunkAPI) => {
//     try {
//       console.log(comment);
//       const { idPost, date, ...restCommentData } = comment;
//       const dateString = formatDate(date);
//       const postRef = doc(db, "posts", idPost);
//       await updateDoc(postRef, {
//         comments: arrayUnion({ date: dateString, ...restCommentData }),
//       });

//       return { idPost, date: dateString, ...restCommentData };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addLike = createAsyncThunk(
//   "posts/addLike",
//   async ({ idPost, idUser }, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//       const posts = state.posts.items;
//       const post = posts.find((post) => post.id === idPost);
//       if (!post.likes.find((id) => idUser === id)) {
//         const postRef = doc(db, "posts", idPost);
//         await updateDoc(postRef, {
//           likes: arrayUnion(idUser),
//         });
//         return { idPost, idUser, typeOfDoing: "increase" };
//       } else {
//         const postRef = doc(db, "posts", idPost);
//         await updateDoc(postRef, {
//           likes: arrayRemove(idUser),
//         });
//         return { idPost, idUser, typeOfDoing: "reduce" };
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
