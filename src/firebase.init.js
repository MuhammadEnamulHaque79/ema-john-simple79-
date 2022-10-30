// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9aMgc6e-bkX6E05R9SgVTrADV0AGavqA",
  authDomain: "ema-john-simple79.firebaseapp.com",
  projectId: "ema-john-simple79",
  storageBucket: "ema-john-simple79.appspot.com",
  messagingSenderId: "92038726360",
  appId: "1:92038726360:web:3053d65482c74f12610dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;