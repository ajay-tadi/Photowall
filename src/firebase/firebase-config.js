// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5lKMsagAQ2BbEuQbEgnhxwvSmV3xti_Y",
  authDomain: "photowall-d4fe6.firebaseapp.com",
  projectId: "photowall-d4fe6",
  storageBucket: "photowall-d4fe6.appspot.com",
  messagingSenderId: "84114939201",
  appId: "1:84114939201:web:7c2cbc5217493e9be3d5c0",
  measurementId: "G-ESPTXTEXH3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);

export const db  = getFirestore(app);

