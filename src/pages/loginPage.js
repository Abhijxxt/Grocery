import logo from '../assets/logo.png';
import './loginPage.css';
import {auth} from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import HomePage from './homePage';
export default function Login() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    const loginFunction = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        await signInWithEmailAndPassword(auth, email, password)
        .then( user => {
            setUserEmail(user.user.email);
            setSuccess(true);
            setEmail("");
            setPassword("");
        })
        .catch((err) => {
            console.log(err);
            setSuccess(false);
            setEmail("");
            setPassword("");
        })
    }

    return(
        <form className='loginForm'>
            <label>Email</label> <br/>
            <input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/> <br/>
            <label>Password</label> <br/>
            <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} required/> <br/>
            <input type='submit' value='Log In' onClick={(e) => loginFunction(e)}></input> <br/>
            {success && <HomePage email={userEmail}/>}
        </form>
    );
} 