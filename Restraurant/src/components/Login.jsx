import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
 
    const [login, setLogin] = useState({
        email:"",
        password:""
    });

    const handleChange=(e)=>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        });
    }

    const loginUser = async()=> {
        const res = await fetch("http://localhost:5000/login",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(login),
        });

        const data = await res.json();

        if(data.success){
            alert("Login Successful");
            navigate("/");
        }
        else{
            alert(data.message);
        }
    }
  return (
    <div className='container mt-5'>
        <h2>Login Page</h2>

        <input onChange={handleChange} type="email" name='email' placeholder='Email' className='form-control mb-2'/>

        <input onChange={handleChange} type="password" name='password' placeholder='Password' className='form-control mb-2'/>

        <button onClick={loginUser} className='btn btn-success'>Login</button>
    </div>
  )
}

export default Login
