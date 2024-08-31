import Header from './components/Header';
import Hero from './components/hero';
import FarmerBuyerSection from './components/FarmerBuyerSection';
// import ProductListingForm from './components/ProductListingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FarmerBuyerSection />
        {/* <ProductListingForm /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;