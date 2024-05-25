// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyYZAO7cXRgLrisMArzZSZN2DX4Ncy7w",
  authDomain: "householdtypescript-8e29a.firebaseapp.com",
  projectId: "householdtypescript-8e29a",
  storageBucket: "householdtypescript-8e29a.appspot.com",
  messagingSenderId: "555708881724",
  appId: "1:555708881724:web:44aab998371ad3fa63dc39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };