import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDaMZ21kH1144viZI97BL3SZC7xvDQNumg",
  authDomain: "italian-language-app.firebaseapp.com",
  projectId: "italian-language-app",
  storageBucket: "italian-language-app.appspot.com",
  messagingSenderId: "947129421478",
  appId: "1:947129421478:web:666b9b86ba0a19784b2e67",
  measurementId: "G-HTYE4LN8F1"
};


export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);
