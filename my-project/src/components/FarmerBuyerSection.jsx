import React, { useState } from 'react';
import LoginPage from './Signup';

function FarmerBuyerSection() {
  const [showFarmerLogin, setShowFarmerLogin] = useState(false);
  const [showBuyerLogin, setShowBuyerLogin] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex justify-center space-x-8">
        <div className="bg-green-50 p-8 rounded-lg shadow-md max-w-md">
          <h3 className="text-2xl font-bold text-green-700 mb-4">For Farmers</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Secure contracts with guaranteed buyers</li>
            <li>Stable income and reduced market risks</li>
            <li>Access to a wide network of potential buyers</li>
          </ul>
          <button
            onClick={() => setShowFarmerLogin(true)}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Farmer SignUp
          </button>
        </div>
        <div className="bg-green-50 p-8 rounded-lg shadow-md max-w-md">
          <h3 className="text-2xl font-bold text-green-700 mb-4">For Buyers</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Direct access to a network of reliable farmers</li>
            <li>Ensure consistent supply of quality produce</li>
            <li>Streamlined contract management and payments</li>
          </ul>
          <button
            onClick={() => setShowBuyerLogin(true)}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Buyer SignUp
          </button>
        </div>
      </div>
      {showFarmerLogin && (
        <LoginPage userType="Farmer" onClose={() => setShowFarmerLogin(false)} />
      )}
      {showBuyerLogin && (
        <LoginPage userType="Buyer" onClose={() => setShowBuyerLogin(false)} />
      )}
    </section>
  );
}

export default FarmerBuyerSection;