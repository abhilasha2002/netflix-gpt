// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjjmCeivbiP70cHr0z96A1sf8jQCLYxyI",
  authDomain: "netflixgpt-42550.firebaseapp.com",
  projectId: "netflixgpt-42550",
  storageBucket: "netflixgpt-42550.firebasestorage.app",
  messagingSenderId: "716160258650",
  appId: "1:716160258650:web:d7ce8ef8ea5f8e0f9abe63",
  measurementId: "G-ME86XGS1GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();