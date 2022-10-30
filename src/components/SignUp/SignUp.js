import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[error,setError]=useState('');

    const [
        createUserWithEmailAndPassword,
       
        
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur=(event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    };

    const handlePasswordBlur=(event)=>{
        // console.log(event.target.value);
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur=(event)=>{
        // console.log(event.target.value);
        setConfirmPassword(event.target.value);
    };

    const handleCreateUser=(event)=>{
        // console.log('working');
        event.preventDefault();
        
        if(password !== confirmPassword){
            setError("Your password didn't match!");
            return;
        };
        if(password.length<6){
            setError("Password must contain six characters");
            return;
        };
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>SignUp</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBeforeInputCapture={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p className='user-query'>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;