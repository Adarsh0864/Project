import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AgriConnect</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/marketplace" className="hover:text-green-200">Marketplace</Link></li>
            <li>
              <button 
                onClick={() => setShowContacts(!showContacts)} 
                className="hover:text-green-200 focus:outline-none"
              >
                Contacts
              </button>
            </li>
            <li><Link to="/about" className="hover:text-green-200">About</Link></li>
          </ul>
        </nav>
      </div>
      {showContacts && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 text-gray-800">
          <h3 className="font-bold text-lg mb-2 text-green-700">Contact Information</h3>
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>857-397-1809</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>am9774981@gmail.com</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;