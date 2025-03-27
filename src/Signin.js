import React, { useState } from 'react'
import {getAuth , signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase"
import { useContext } from 'react'
import { CounterContext } from './context/CounterContex'

function Signin() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  //making an instance of the auth object
  const auth = getAuth(app);

  const signInUser = () =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((value)=>{
      console.log(value.user)
      console.log("User Signed In Succesfully");
      alert(`${email} Successfully Signed In`); 
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const ConterData = useContext(CounterContext);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
         type="email" 
         placeholder='Email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
         <label >Password:</label>
        <input
         type="password" 
         placeholder='Password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={signInUser}>SignIn</button>
      </form>
      <button onClick={()=>{ConterData.setCount(ConterData.count+1)}}>Increment</button>
    </div>
  )
}

export default Signin
