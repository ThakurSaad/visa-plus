// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDezqhp-WxTSkI65z5NOlZeT8TJHxbXOho",
  authDomain: "visa-plus.firebaseapp.com",
  projectId: "visa-plus",
  storageBucket: "visa-plus.appspot.com",
  messagingSenderId: "363491037363",
  appId: "1:363491037363:web:de71cf13fc05f200b8e0c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
