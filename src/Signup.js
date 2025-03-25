import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth = getAuth();


function Signup() {
    //State to manage email and password
    const [formData, setformData] = useState({ email: "", password: "" })

    //to handle input changes
    const handleInputChanges = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    };

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //add your signup logic below
    createUserWithEmailAndPassword(auth, formData.email, formData.password).then((value) => {
        console.log(value);
    })
    console.log("Form submitted:", formData);
    alert(`SignUp successfull ! Email:${formData.email}`)

    }

    

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChanges}></input>
                <label htmlFor="password">Password :</label>
                <input type="passwprd" name="password" value={formData.password} onChange={handleInputChanges}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
