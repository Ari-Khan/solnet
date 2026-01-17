// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgzWWinou5yEjLksEJBCOcIIin0lrWA8",
  authDomain: "solnet-f2191.firebaseapp.com",
  projectId: "solnet-f2191",
  storageBucket: "solnet-f2191.firebasestorage.app",
  messagingSenderId: "991886660477",
  appId: "1:991886660477:web:ad882dc4e9cee2086db214",
  measurementId: "G-324DCMV00T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);