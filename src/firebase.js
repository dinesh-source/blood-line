// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM5yG52IcYlct05v6pP6170fJoMWkSfAI",
  authDomain: "bloodline-21de2.firebaseapp.com",
  projectId: "bloodline-21de2",
  storageBucket: "bloodline-21de2.appspot.com",
  messagingSenderId: "637546023210",
  appId: "1:637546023210:web:5ddc45292168c846f97653",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
