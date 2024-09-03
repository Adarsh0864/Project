import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => console.log('Signin Success'))
            .catch((err) => console.log(err));
    };

    return (
        <div className="sign-inPage">
            <label>Enter your email</label>
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <label>Enter your Password</label>
            <input 
                type="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={signinUser}>Sign me in</button>
        </div>
    );
};

export default SigninPage;
