import "./login.css";
import logo from '../assets/logo.png';
import {auth} from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import HomePage from './homePage';

export default function LoginPage()
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

    return (
        <>
        
        <main style={{display: !success ? 'flex' : 'none'}}>
            <div className="leftContainer">
                <div className="headingContainer">
                    <h1>Grocers</h1>
                    <p>Here to look after all your needs!</p>
                </div>
            </div>
            <div className="rightContainer">
                <div className="loginPage">
                    <div>
                        <img src={logo} alt="ABC" id="logo"></img>
                    </div>
                    <form className='loginForm'>
                        <label>Email</label> <br/>
                        <input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/> <br/>
                        <label>Password</label> <br/>
                        <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} required/> <br/>
                        <input type='submit' value='Log In' onClick={(e) => loginFunction(e)}></input> <br/>
                        {success && <HomePage email={userEmail}/>}
                    </form>
                    <a href="#">New user? Want to Sign up?</a>
                </div>
            </div>
        </main>
        {success && <HomePage email={userEmail}/>}
        </>
    );
} 