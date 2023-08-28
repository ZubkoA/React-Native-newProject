import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../config";

export const getPosts = createAsyncThunk(
  "posts/fetchAll",
  async (uid, thunkAPI) => {
    try {
      const docRef = doc(db, "posts", uid);
      const docSnap = await getDoc(docRef);
      const posts = docSnap.data().posts;
      if (posts.length > 0) {
        // for (post of posts) {
        //   const url = await getDownloadURL(ref(storage, post.imageUrl));
        //   post.imageUrl = url;
        // }
        return allPosts;
      }
      return null;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const createPost = createAsyncThunk(
//   "posts/create",
//   async ({ uid, newPost }, thunkAPI) => {
//     try {
//       //   const docRef = await addDoc(collection(db, "posts"), {
//       //     newPost,
//       //   });
//       //   console.log("Document written with ID: ", docRef.id);
//       // } catch (e) {
//       //   console.error("Error adding document: ", e);
//       //   throw e;
//       // }
//       const pathImg = ref(storage, newPost.img);
//       const img = await fetch(newPost.img);
//       const bytes = await img.blob();
//       const randomNumber = Date.now();
//       const createdUrl = `posts/${randomNumber}`;
//       const postImageRef = ref(storage, createdUrl);
//       await uploadBytes(postImageRef, bytes);
//       const url = await getDownloadURL(ref(storage, createdUrl));
//       const docRef = doc(db, "posts", uid);
//       await updateDoc(docRef, {
//         posts: arrayUnion({ ...newPost, img: url }),
//       });
//       return { ...newPost, imageUrl: url };
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const createPost = createAsyncThunk(
//   "posts/create",
//   async ({ postData }, thunkAPI) => {
//     console.log(postData);
//     try {
//       const docRef = await addDoc(collection(db, "posts"), {
//         ...postData,
//       });
//       console.log("Document written with ID: ", docRef);

//       console.log(docSnap);
//       // const newPost = await setDoc(docRef);
//       // if (docSnap.exists()) {
//       //   console.log("Document data:", docSnap.data());
//       // } else {
//       //   // docSnap.data() will be undefined in this case
//       //   console.log("No such document!");
//       // }
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const createPost = createAsyncThunk(
  "posts/create",
  async ({ postData, userId }, thunkAPI) => {
    console.log(userId);
    console.log(postData);
    try {
      const docRef = doc(db, "posts", userId);
      const docSnap = await setDoc(docRef, { ...postData });

      console.log(docSnap);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
