// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbFLWXA-ECNFe2kp9IXVfmUm_8o446ktE",
  authDomain: "react-native-home-f4db3.firebaseapp.com",
  projectId: "react-native-home-f4db3",
  storageBucket: "react-native-home-f4db3.appspot.com",
  messagingSenderId: "333666459670",
  appId: "1:333666459670:web:9bf8ae1384b07c9d631537",
  measurementId: "G-HNX187TTNB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
