import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

function ContractForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
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
        <label htmlFor="farmerAddress" className="block text-gray-700 font-bold mb-2">Farmer Address</label>
        <input
          type="text"
          id="farmerAddress"
          name="farmerAddress"
          value={formData.farmerAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="farmerAadhaar" className="block text-gray-700 font-bold mb-2">Farmer Aadhaar Number</label>
        <input
          type="text"
          id="farmerAadhaar"
          name="farmerAadhaar"
          value={formData.farmerAadhaar}
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
        <label htmlFor="buyerAddress" className="block text-gray-700 font-bold mb-2">Buyer Address</label>
        <input
          type="text"
          id="buyerAddress"
          name="buyerAddress"
          value={formData.buyerAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="buyerRegistration" className="block text-gray-700 font-bold mb-2">Buyer Registration Number</label>
        <input
          type="text"
          id="buyerRegistration"
          name="buyerRegistration"
          value={formData.buyerRegistration}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="produce" className="block text-gray-700 font-bold mb-2">Produce</label>
        <input
          type="text"
          id="produce"
          name="produce"
          value={formData.produce}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="farmLocation" className="block text-gray-700 font-bold mb-2">Farm Location</label>
        <input
          type="text"
          id="farmLocation"
          name="farmLocation"
          value={formData.farmLocation}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price per Unit</label>
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
      <div className="mb-4">
        <label htmlFor="paymentTerms" className="block text-gray-700 font-bold mb-2">Payment Terms</label>
        <input
          type="text"
          id="paymentTerms"
          name="paymentTerms"
          value={formData.paymentTerms}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="deliveryLocation" className="block text-gray-700 font-bold mb-2">Delivery Location</label>
        <input
          type="text"
          id="deliveryLocation"
          name="deliveryLocation"
          value={formData.deliveryLocation}
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
        Preview Contract
      </button>
    </form>
  );
}

function ContractPreview({ formData, onBack, onGeneratePDF }) {
  const contractText = `
CONTRACT FARMING AGREEMENT

This Agreement is made on this ${new Date().getDate()} day of ${new Date().toLocaleString('default', { month: 'long' })}, ${new Date().getFullYear()}, by and between:

 - PARTIES:
- Farmer:
  - Name: ${formData.farmerName}
  - Address: ${formData.farmerAddress}
  - Aadhaar Number: ${formData.farmerAadhaar}
- Buyer:
  - Name: ${formData.buyerName}
  - Address: ${formData.buyerAddress}
  - Company Registration Number (if applicable): ${formData.buyerRegistration}

1. PURPOSE:
This Agreement is made for the purpose of cultivating and selling the agricultural produce mentioned herein.

2. DEFINITIONS:
- "Produce" refers to the specific crop(s) agreed upon, namely: ${formData.produce}.
- "Farm" refers to the land where the crop(s) will be grown, located at: ${formData.farmLocation}.

3. TERMS OF THE AGREEMENT:
- Cultivation: The Farmer agrees to cultivate the specified crop(s) using inputs and techniques as agreed upon by both parties.
- Quality Standards: The produce must meet the quality standards as specified by the Buyer, detailed in Annexure A.
- Quantity: The Farmer agrees to produce and supply a minimum of ${formData.quantity} of the produce.
- Price: The Buyer agrees to pay the Farmer a price of ₹${formData.price} per unit. The payment terms are as follows: ${formData.paymentTerms}.
- Supply and Delivery: The Farmer agrees to deliver the produce to the Buyer's location at ${formData.deliveryLocation} on or before the ${new Date(formData.deliveryDate).getDate()} day of ${new Date(formData.deliveryDate).toLocaleString('default', { month: 'long' })}, ${new Date(formData.deliveryDate).getFullYear()}.

4. RESPONSIBILITIES OF THE PARTIES:
- Farmer's Responsibilities:
  - Ensure timely planting, cultivation, and harvesting of the crop(s).
  - Use quality seeds, fertilizers, and other inputs as agreed.
  - Maintain the quality standards as per the agreement.
- Buyer's Responsibilities:
  - Provide technical support and guidance if required.
  - Inspect and approve the produce before final purchase.
  - Make timely payments as per the agreed terms.

5. FORCE MAJEURE:
Neither party shall be liable for failure to perform any obligation under this Agreement if such failure is caused by an event beyond their control, including but not limited to natural disasters, war, or government restrictions.

6. TERMINATION:
This Agreement may be terminated by mutual consent or if either party fails to comply with the terms, after providing a notice period of 30 days.

7. DISPUTE RESOLUTION:
Any disputes arising from this Agreement shall be resolved through mediation. If mediation fails, the dispute shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996.

8. GOVERNING LAW:
This Agreement shall be governed by and construed in accordance with the laws of India.

9. MISCELLANEOUS:
- Amendments: Any amendments to this Agreement must be made in writing and signed by both parties.
- Entire Agreement: This Agreement constitutes the entire agreement between the parties.

1. SIGNATURES:
IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the day and year first above written.

Farmer:
Signature: __________________________
Name: ${formData.farmerName}
Date: ${new Date().toLocaleDateString()}

Buyer:
Signature: __________________________
Name: ${formData.buyerName}
Date: ${new Date().toLocaleDateString()}
  `;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contract Preview</h2>
      <pre className="whitespace-pre-wrap font-sans text-sm mb-6">{contractText}</pre>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
        >
          Back to Edit
        </button>
        <button
          onClick={() => onGeneratePDF(contractText)}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}

function ContractPage() {
  const [formData, setFormData] = useState({
    farmerName: '',
    farmerAddress: '',
    farmerAadhaar: '',
    buyerName: '',
    buyerAddress: '',
    buyerRegistration: '',
    produce: '',
    farmLocation: '',
    quantity: '',
    price: '',
    paymentTerms: '',
    deliveryLocation: '',
    deliveryDate: '',
  });
  const [step, setStep] = useState('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('preview');
  };

  const handleBack = () => {
    setStep('form');
  };

  const generatePDF = (contractText) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    const splitText = doc.splitTextToSize(contractText, 180);
    let yPosition = 10;
    splitText.forEach(line => {
      if (yPosition > 280) {
        doc.addPage();
        yPosition = 10;
      }
      doc.text(line, 15, yPosition);
      yPosition += 7;
    });
    
    doc.save('contract.pdf');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Create Contract</h1>
      {step === 'form' ? (
        <ContractForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
      ) : (
        <ContractPreview formData={formData} onBack={handleBack} onGeneratePDF={generatePDF} />
      )}
    </div>
  );
}

export default ContractPage;