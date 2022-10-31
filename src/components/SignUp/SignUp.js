import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[error,setError]=useState('');
   

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailChange=(event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    };

    const handlePasswordChange=(event)=>{
        // console.log(event.target.value);
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange=(event)=>{
        // console.log(event.target.value);
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser=(event)=>{
        console.log(email,'email');
        console.log(password,'password');
        console.log(confirmPassword,"confirmPassword");
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password did not match?');
            return;
        }
        if(password.length<6){
            setError('Your password must be 6 characters or long');
            return;
        }
        
        createUserWithEmailAndPassword(email, password)
    };

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onChange={handleConfirmPasswordChange} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                   
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='user-query'>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;