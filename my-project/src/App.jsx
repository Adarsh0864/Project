import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase"; // Make sure firebase is configured in this file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FarmerBuyerSection from './components/FarmerBuyerSection';
import MarketplacePage from './components/MarketplacePage';
import WeatherReport from './components/WeatherReport';
import ContractPage from './components/ContractPage';
import SigninPage from './components/Signin';

const auth = getAuth(app);

function App() {
  // You can move this to where it needs to be called, like in SigninPage
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "am9774981@gmail.com", "Pass@12")
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User signed up:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
      });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <WeatherReport />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<FarmerBuyerSection />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/contract" element={<ContractPage />} />
            <Route path="/signin" element={<SigninPage />} /> {/* SigninPage route */}
          </Routes>
        </main>
        <footer className="bg-green-600 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 AgriConnect. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
