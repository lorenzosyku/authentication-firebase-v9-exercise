// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "authentication-v9-firebase.firebaseapp.com",
  projectId: "authentication-v9-firebase",
  storageBucket: "authentication-v9-firebase.appspot.com",
  messagingSenderId: "764010710828",
  appId: "1:764010710828:web:40db95ebf60929533a8e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
}
