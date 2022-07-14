import firebase from "firebase/compat/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkxSs5TkgNBB-pqldNZSxrGcmGHhWSXPE",
  authDomain: "react-hooks-blog-6e953.firebaseapp.com",
  projectId: "react-hooks-blog-6e953",
  storageBucket: "react-hooks-blog-6e953.appspot.com",
  messagingSenderId: "558166468029",
  appId: "1:558166468029:web:bfca43e7bf8099b7685ed4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = "firebase/firestore";
