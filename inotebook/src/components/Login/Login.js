import React, { useState } from 'react'
import './Login.css'
import logo from './logo.png'
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const host = "http://localhost:5000";

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        console.log(json);

        if (json.success) {
            // save the auth-token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in Successfully", "success")
            navigate('/');

        } else {
            props.showAlert(json.error, "danger")
            // props.showAlert("Invalid credentials", "danger")

        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="OuterLine mt-3">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">
                iNotebook - Login to see your notes 
            </div>

            <form className="p-3 mt-3" onSubmit={handleSubmit}>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="email" value={credentials.email} onChange={onChange} name="email" id="email" placeholder="Email address" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
                </div>
                <button type='submit' className="btn mt-3" >Login</button>
            </form>
            <div className="text-center fs-6">
                Create a new account <a href="/signup">Sign up</a>
            </div>
        </div>
    )
}

export default Login