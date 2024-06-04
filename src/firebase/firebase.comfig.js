// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7RVhTqanczxA5jwZV23-7GcZAMwg4Tvo",
    authDomain: "eventify-13c6d.firebaseapp.com",
    projectId: "eventify-13c6d",
    storageBucket: "eventify-13c6d.appspot.com",
    messagingSenderId: "1007306775654",
    appId: "1:1007306775654:web:5ebc7b57bec6dea7b561a7",
    measurementId: "G-EQGWMZFVRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;