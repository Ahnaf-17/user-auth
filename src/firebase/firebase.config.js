// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsHNGmlZylL3ClX2w2l1hDw28XG0Q0Rmo",
  authDomain: "user-auth-9145a.firebaseapp.com",
  projectId: "user-auth-9145a",
  storageBucket: "user-auth-9145a.appspot.com",
  messagingSenderId: "515948230343",
  appId: "1:515948230343:web:3fa0d74d45db2e35fbf0e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 
const auth = getAuth(app);
export default auth;
