// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACJSEFwGzvfzaWF0sPs0FjlkA7AdOmNwU",
  authDomain: "auth-con2.firebaseapp.com",
  projectId: "auth-con2",
  storageBucket: "auth-con2.appspot.com",
  messagingSenderId: "757176888876",
  appId: "1:757176888876:web:4d55bdb280bd7f9c53ab89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;