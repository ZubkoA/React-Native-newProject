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
import * as MediaLibrary from "expo-media-library";

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
  //  переписав логіку додавання поста
  "posts/create",
  async ({ photoUri, ...restData }, thunkAPI) => {
    try {
      const { creationTime } = await MediaLibrary.createAssetAsync(photoUri);
      const response = await fetch(photoUri);
      const file = await response.blob();
      const snapshot = await uploadBytes(
        ref(storage, `posts/${creationTime}.jpg`),
        file
      );
      const url = await getDownloadURL(snapshot.ref);
      const post = {
        ...restData,
        url,
        creationTime,
      };

      try {
        const docRef = await setDoc(
          doc(db, "posts", `${post.creationTime}`),
          post
        ).catch((e) => alert(e));
      } catch (error) {
        console.log(error.message);
      }
      return post;
    } catch (error) {
      console.log(error.message);
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
