import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
   
    const from = location.state?.from?.pathname || "/";

    const handleEmailChange=(event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordChange=(event)=>{
        // console.log(event.target.value);
        setPassword(event.target.value);
    }

    if(user){
        // navigate('/shop');
        navigate(from, { replace: true });
    }
    const handleUserSignIn=(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading......</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='user-query'>New to Ema-John? <Link className='form-link' to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;