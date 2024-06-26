import React, { useState } from 'react'
import './CSS/loginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFromdata] = useState({
    name: "",
    password: "",
    email: ""
  })

  const login = async () => {
    console.log("Login checking",formData);
  }

  const signup = async () => {
    console.log("Signup executed",formData);
  }

  const changeHandler = (e) => {
    setFromdata({
      ...formData, [e.target.name]: e.target.value
    })
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input type="text" name='name' onChange={changeHandler} value={formData.name} placeholder='Your Name' /> : <></>}
          <input type="email" name='email' placeholder='Email Address' value={formData.email} onChange={changeHandler}  />
          <input type="password" name='password' placeholder='Password' value={formData.password} onChange={changeHandler}  />

        </div>
        <button onClick={() => {
          state === "Login" ? login() : signup()
        }}>Continue</button>

        {
          state === 'Sign Up' ? <p className='loginsignup-login'>Allready have an account?
            <span onClick={() => {
              setState("Login")
            }}>Login</span>
          </p> : <p className='loginsignup-login'>Create an account?
            <span onClick={() => {
              setState("Sign Up")
            }}>Click here</span>
          </p>
        }

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup