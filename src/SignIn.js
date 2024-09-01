import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { auth } from './Firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(userCredential){
                navigate('/');
            }
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if(userCredential){
                    navigate('/');
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='signin'>
            <Link to='/'>
                <img className='signin_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon Logo' />
            </Link>

            <div className='signin_container'>
                <h1 className='signin_title'>Sign-in</h1>
                <form className='signin-form'>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signin} className='signin_button'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                </p>
                <button onClick={register} className='signin-register'>Create your Amazon account</button>
            </div>
        </div>

    );
}

export default SignIn;
