// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi_VMt1gxyLGmKAa-2izfsvM1S3sq9O8o",
  authDomain: "twitter-tweets-77ec7.firebaseapp.com",
  projectId: "twitter-tweets-77ec7",
  storageBucket: "twitter-tweets-77ec7.appspot.com",
  messagingSenderId: "517734163089",
  appId: "1:517734163089:web:e43e8e2465f9331cca5530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);