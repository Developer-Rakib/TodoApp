// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4YExLPCpRqLgxKUmbP2PkqY-qoHGxmGs",
  authDomain: "todoapp-49a6c.firebaseapp.com",
  projectId: "todoapp-49a6c",
  storageBucket: "todoapp-49a6c.appspot.com",
  messagingSenderId: "88373861440",
  appId: "1:88373861440:web:bc603f7658d8740a5e13a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;