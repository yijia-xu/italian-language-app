// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaMZ21kH1144viZI97BL3SZC7xvDQNumg",
  authDomain: "italian-language-app.firebaseapp.com",
  projectId: "italian-language-app",
  storageBucket: "italian-language-app.appspot.com",
  messagingSenderId: "947129421478",
  appId: "1:947129421478:web:666b9b86ba0a19784b2e67",
  measurementId: "G-HTYE4LN8F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);