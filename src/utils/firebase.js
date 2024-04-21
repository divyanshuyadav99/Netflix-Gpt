// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA05krZboYZfRV3CXpSq3mOeIiprJJi27c",
  authDomain: "netflixgpt-67bbe.firebaseapp.com",
  projectId: "netflixgpt-67bbe",
  storageBucket: "netflixgpt-67bbe.appspot.com",
  messagingSenderId: "241375798924",
  appId: "1:241375798924:web:782d0c75cf59e2830d7da9",
  measurementId: "G-PLNXE9RFFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();