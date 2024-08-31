function ProductListingForm() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">List Your Products</h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">Product Name:</label>
            <input type="text" id="product-name" name="product-name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="product-description" className="block text-gray-700 font-bold mb-2">Product Description:</label>
            <textarea id="product-description" name="product-description" rows="4" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="product-image" className="block text-gray-700 font-bold mb-2">Upload Product Image:</label>
            <input type="file" id="product-image" name="product-image" accept="image/*" required className="w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="product-price" className="block text-gray-700 font-bold mb-2">Price:</label>
            <input type="text" id="product-price" name="product-price" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">List Product</button>
        </form>
      </div>
    </section>
  );
}

export default ProductListingForm;