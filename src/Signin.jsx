import React, { useState } from 'react'


function Signin() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    
    return (
    <div>
      <label>Enter your email</label>
      <input type="email" placeholder='enter your email' />
      <label>Enter your password</label>
      <input type="email" placeholder='enter your password' />
      <button>Sign IN</button>
    </div>
  )
}

export default Signin
