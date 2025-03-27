import React from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth , signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase } from 'firebase/database';


export const FirebaseContext = createContext(null)


const firebaseConfig = {
  apiKey: "AIzaSyBBsJ3BHdoUz_mTjW-ITVfyR0pFXfTTdbM",
  authDomain: "fir-g29-g27.firebaseapp.com",
  projectId: "fir-g29-g27",
  storageBucket: "fir-g29-g27.firebasestorage.app",
  messagingSenderId: "576203399633",
  appId: "1:576203399633:web:b98a2c2da9172c3a9440f0",
  databaseURL:"https://fir-g29-g27-default-rtdb.firebaseio.com/"
};
 const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

const auth = getAuth(app);
const signUpUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}



function FirebaseProvider(props) {
  return (
    <FirebaseContext.Provider value={{signUpUser}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default {FirebaseProvider,app}
