// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRnmX85O6XENFichu85ii2Eue3HslHX6E",
  authDomain: "ema-john-s-1f463.firebaseapp.com",
  projectId: "ema-john-s-1f463",
  storageBucket: "ema-john-s-1f463.appspot.com",
  messagingSenderId: "248696153694",
  appId: "1:248696153694:web:d640970c1aa11c427cb6cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
