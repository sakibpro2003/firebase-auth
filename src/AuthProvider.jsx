import { createContext, useState } from "react";
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import auth from './firebase.init';

const AuthProvider = ({children}) => {
  const registerUser = (email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
      console.log(result.user)
    })
  }

  const loginInfo = (email,password) => {
    signInWithEmailAndPassword(auth, email, password);
    console.log('login');

  }

  const authInfo = {
    registerUser,
    loginInfo
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
