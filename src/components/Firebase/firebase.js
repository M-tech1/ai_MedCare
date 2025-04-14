// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAnalytics} from "firebase/analytics"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh_s5udCIQsgddfDi5stl53srFp86qOXY",
  authDomain: "ai-medcare.firebaseapp.com",
  projectId: "ai-medcare",
  storageBucket: "ai-medcare.firebasestorage.app",
  messagingSenderId: "1038325038519",
  appId: "1:1038325038519:web:6070ec2b7ce9eca387bc32",
  measurementId: "G-9N27F9B56M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;
