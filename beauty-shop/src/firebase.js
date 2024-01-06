// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "beauty-shop-4af0c.firebaseapp.com",
  projectId: "beauty-shop-4af0c",
  storageBucket: "beauty-shop-4af0c.appspot.com",
  messagingSenderId: "786088844788",
  appId: "1:786088844788:web:e0b4d648332044025deda1",
  measurementId: "G-HCMB6K280M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
