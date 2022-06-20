// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_R2vEnQ5oSyikmDtA2stgRPfZmPbcU1I",
  authDomain: "react-rendu.firebaseapp.com",
  projectId: "react-rendu",
  storageBucket: "react-rendu.appspot.com",
  messagingSenderId: "705250627349",
  appId: "1:705250627349:web:b8370ae11a95225547231c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};

