// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsJ3BHdoUz_mTjW-ITVfyR0pFXfTTdbM",
  authDomain: "fir-g29-g27.firebaseapp.com",
  projectId: "fir-g29-g27",
  storageBucket: "fir-g29-g27.firebasestorage.app",
  messagingSenderId: "576203399633",
  appId: "1:576203399633:web:b98a2c2da9172c3a9440f0",
  databaseURL:"https://fir-g29-g27-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;
