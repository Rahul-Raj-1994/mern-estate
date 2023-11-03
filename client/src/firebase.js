// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-dfdd2.firebaseapp.com",
    projectId: "mern-estate-dfdd2",
    storageBucket: "mern-estate-dfdd2.appspot.com",
    messagingSenderId: "1070495023856",
    appId: "1:1070495023856:web:f6ec66a487b3d176e57835"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);