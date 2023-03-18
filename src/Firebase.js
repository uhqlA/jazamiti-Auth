// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSNnOB1lJdLHFJNe06nfed7D7iJi8ZZFM",
  authDomain: "jazamiti-auth.firebaseapp.com",
  projectId: "jazamiti-auth",
  storageBucket: "jazamiti-auth.appspot.com",
  messagingSenderId: "777965860465",
  appId: "1:777965860465:web:514d70f6cd91b9363d0dd0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore ();
