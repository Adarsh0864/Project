import React, { useState } from 'react';

function ContractPage() {
  const [formData, setFormData] = useState({
    farmerName: '',
    buyerName: '',
    productName: '',
    quantity: '',
    price: '',
    deliveryDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would integrate with your backend API
    console.log('Form submitted:', formData);
    // Implement API call to save contract and initiate digital signature process
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Create Contract</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="farmerName" className="block text-gray-700 font-bold mb-2">Farmer Name</label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="buyerName" className="block text-gray-700 font-bold mb-2">Buyer Name</label>
          <input
            type="text"
            id="buyerName"
            name="buyerName"
            value={formData.buyerName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="deliveryDate" className="block text-gray-700 font-bold mb-2">Delivery Date</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Create Contract
        </button>
      </form>
    </div>
  );
}

export default ContractPage;