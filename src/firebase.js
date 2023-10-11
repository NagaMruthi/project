// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAuKNyJ8PzSVD_EUORXcTobJEpUJ1_vOJE",
  authDomain: "mypage-2fd03.firebaseapp.com",
  projectId: "mypage-2fd03",
  storageBucket: "mypage-2fd03.appspot.com",
  messagingSenderId: "150050426155",
  appId: "1:150050426155:web:da37bfd6396971bf65096e",
  measurementId: "G-K2ZW66LLKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
