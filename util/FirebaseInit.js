// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjaxWuc_HoxlpaXa9wRxYm3BWCoC3o9GQ",
  authDomain: "fsab-project-dd1a0.firebaseapp.com",
  projectId: "fsab-project-dd1a0",
  storageBucket: "fsab-project-dd1a0.appspot.com",
  messagingSenderId: "836162784812",
  appId: "1:836162784812:web:e934a74a554c6482360b89",
  measurementId: "G-TH3LF47M3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);