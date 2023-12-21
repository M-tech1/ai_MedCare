import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB93AoVFLHDIlYWL1szz3p3sjoOvjQBy5s",
  authDomain: "ai-healthcare-diagnosis-system.firebaseapp.com",
  projectId: "ai-healthcare-diagnosis-system",
  storageBucket: "ai-healthcare-diagnosis-system.appspot.com",
  messagingSenderId: "56397094463",
  appId: "1:56397094463:web:df389d313e240d4f89628a",
  measurementId: "G-02S8PS7HWS",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
