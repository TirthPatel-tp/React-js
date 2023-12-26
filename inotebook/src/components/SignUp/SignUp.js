import React, { useState } from 'react'
import './SignUp.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [credentials,setCredentials] = useState({name: "",email: "", password:"", cpassword:""})

  let navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";

    const {name,email,password} = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password})
    });

    const json = await response.json()
    console.log(json);

    if(json.success){
      // save the auth-token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
  }else{
      alert("Invalid credentials")
  }
        
    
}

const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className="OuterLine">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="text-center mt-4 name">
        iNotebook
      </div>

      <form className="p-3 mt-3" onSubmit={handleSubmit}>

        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="text" name="name" id="name" onChange={onChange} placeholder="Name" />
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input type="email" name="email" id="email" onChange={onChange} placeholder="Email address" />
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="password" id="password" onChange={onChange} required minLength={5} placeholder="Password" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="cpassword" id="cpassword" onChange={onChange} required minLength={5} placeholder="Confirm Password" />
        </div>


        <button type='submit' className="btn mt-3" >Sign Up</button>
      </form>

      <div className="text-center fs-19">
        Already have an account <a href="/login">Login</a>
      </div>
    </div>
  )
}

export default SignUp