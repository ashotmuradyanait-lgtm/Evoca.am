import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "ՔՈ_API_KEY",
  authDomain: "ՔՈ_PROJECT.firebaseapp.com",
  projectId: "ՔՈ_PROJECT_ID",
  storageBucket: "ՔՈ_PROJECT.appspot.com",
  messagingSenderId: "ՔՈ_ID",
  appId: "ՔՈ_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);