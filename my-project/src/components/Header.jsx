function Header() {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AgriConnect</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-200">Home</a></li>
            <li><a href="#" className="hover:text-green-200">Marketplace</a></li>
            <li><a href="#" className="hover:text-green-200">Contracts</a></li>
            <li><a href="#" className="hover:text-green-200">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;