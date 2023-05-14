// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz8iu4wluJMnq-M4F39TN5FKEjBWhJUVI",
  authDomain: "golfgames-608f4.firebaseapp.com",
  projectId: "golfgames-608f4",
  storageBucket: "golfgames-608f4.appspot.com",
  messagingSenderId: "432718003968",
  appId: "1:432718003968:web:cb4bec3f792a9cc0507de5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

console.log("Firebase initialized", db);
