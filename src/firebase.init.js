// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr-tgeO3e0dv03WtV1oKCW24jYAWfzggk",
  authDomain: "ema-john-ecommerce-6ae77.firebaseapp.com",
  projectId: "ema-john-ecommerce-6ae77",
  storageBucket: "ema-john-ecommerce-6ae77.appspot.com",
  messagingSenderId: "246009647147",
  appId: "1:246009647147:web:adc9a0d1ed5d9738f6da6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;



