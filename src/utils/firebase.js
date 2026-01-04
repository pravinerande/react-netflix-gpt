// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw91xuszhZvXO89rXkYJdnkrNtkOs6pn4",
  authDomain: "netflixgpt-70a73.firebaseapp.com",
  projectId: "netflixgpt-70a73",
  storageBucket: "netflixgpt-70a73.firebasestorage.app",
  messagingSenderId: "490906916248",
  appId: "1:490906916248:web:a9453edba920054352c7ed",
  measurementId: "G-2SEJHKTY21",
};

// Firebase URL for hosted apps- https://netflixgpt-70a73.web.app/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };