import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.profileUrl
            }))
        }).catch(error => {
            alert(error.message);
        })
    };

    const register = () => {
        if(!name) {
            alert('Please enter full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePicture
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePicture
                }));
            });
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
             alt="logo" />

             <form>
                 <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
                 <input value={profilePicture} onChange={e => setProfilePicture(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
                 <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                 <input value={password} onChange={e => setPassword(e.target.value)}  placeholder="Password" type="password" />
                 <button onClick={loginToApp}>Sign In</button>
             </form>
             <p>Not a member? {" "}
                 <span className="login__register" onClick={register}>
                     Register Now
                </span>
             </p>
        </div>
    )
}

export default Login
