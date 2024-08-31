import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FarmerBuyerSection from './components/FarmerBuyerSection';
import MarketplacePage from './components/MarketplacePage';
import WeatherReport from './components/WeatherReport';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <WeatherReport />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<FarmerBuyerSection />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
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