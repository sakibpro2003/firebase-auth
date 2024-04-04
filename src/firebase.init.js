// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHC-eeqflzwtCfj_k2eMh47Qiuekw6ZNk",
  authDomain: "auth-conception.firebaseapp.com",
  projectId: "auth-conception",
  storageBucket: "auth-conception.appspot.com",
  messagingSenderId: "489121055000",
  appId: "1:489121055000:web:eae994a2cd6dba606b1e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;