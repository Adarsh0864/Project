import React from 'react';

const sampleListings = [
  { id: 1, name: 'Organic Apples', price: 2.99, farmer: 'John Doe', image: '/api/placeholder/300/200' },
  { id: 2, name: 'Fresh Tomatoes', price: 1.99, farmer: 'Jane Smith', image: '/api/placeholder/300/200' },
  { id: 3, name: 'Sweet Corn', price: 0.50, farmer: 'Bob Johnson', image: '/api/placeholder/300/200' },
  { id: 4, name: 'Organic Carrots', price: 1.50, farmer: 'Alice Brown', image: '/api/placeholder/300/200' },
];

function MarketplacePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Crop Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={listing.image} alt={listing.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-600 mb-2">{listing.name}</h2>
              <p className="text-gray-600 mb-2">Farmer: {listing.farmer}</p>
              <p className="text-2xl font-bold text-green-700">${listing.price.toFixed(2)}</p>
              <button className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Contact Farmer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplacePage;