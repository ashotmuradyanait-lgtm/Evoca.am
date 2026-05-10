import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVQh4u_k_o6uMVKUvn4F1ApZWiNdCPJNU",
  authDomain: "evoca-am.firebaseapp.com",
  projectId: "evoca-am",
  storageBucket: "evoca-am.firebasestorage.app",
  messagingSenderId: "736537528645",
  appId: "1:736537528645:web:29a2624eb46d57424a962c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);