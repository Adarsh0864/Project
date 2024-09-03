import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../firebase";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const CombinedSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("farmer"); // Default to farmer

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(value => {
        alert(`Success! Signed up as ${userType}`);
        // Here you could add additional logic to store the user type in your database
      })
      .catch(error => alert("Error: " + error.message));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        alert(`Success! Signed up with Google as ${userType}`);
        // Here you could add additional logic to store the user type in your database
      })
      .catch(error => alert("Error: " + error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-500"
                  name="userType"
                  value="farmer"
                  checked={userType === "farmer"}
                  onChange={() => setUserType("farmer")}
                />
                <span className="ml-2">Farmer</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="userType"
                  value="buyer"
                  checked={userType === "buyer"}
                  onChange={() => setUserType("buyer")}
                />
                <span className="ml-2">Buyer</span>
              </label>
            </div>
          </div>
          <div>
            <input
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                userType === "farmer" ? "focus:ring-green-500" : "focus:ring-blue-500"
              }`}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                userType === "farmer" ? "focus:ring-green-500" : "focus:ring-blue-500"
              }`}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className={`w-full text-white py-2 rounded-md transition duration-300 ${
              userType === "farmer"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            type="button"
            onClick={createUser}
          >
            Sign Up as {userType === "farmer" ? "Farmer" : "Buyer"}
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <button
            className="w-full flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300"
            type="button"
            onClick={signInWithGoogle}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            <span>Sign up with Google</span>
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className={`hover:underline ${
            userType === "farmer" ? "text-green-500" : "text-blue-500"
          }`}>
            Login
          </a>
        </p>
        <button className="w-full mt-4 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default CombinedSignup;