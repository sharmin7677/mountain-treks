// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIH5_-FaiC5bt8gDmb_Cvj43w9HSuBVR0",
  authDomain: "mountain-treks-5b3ef.firebaseapp.com",
  projectId: "mountain-treks-5b3ef",
  storageBucket: "mountain-treks-5b3ef.firebasestorage.app",
  messagingSenderId: "190078538349",
  appId: "1:190078538349:web:cdce4e49d71c82834d2564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
