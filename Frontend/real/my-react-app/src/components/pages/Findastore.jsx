import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import extImg from "../../assets/ext.jpg";


const MOCK_STORES = [
  { id: 1, name: "Downtown Central", address: "123 Maple St, Metropolis", openUntil: "9:00 PM", distance: "0.5 mi" },
  { id: 2, name: "Westside Plaza", address: "456 Oak Avenue, Metropolis", openUntil: "10:00 PM", distance: "1.2 mi" },
  { id: 3, name: "East Village Station", address: "789 Pine Rd, Metropolis", openUntil: "8:30 PM", distance: "2.4 mi" },
];

const Findastore = ({ userStatus }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
  
      const results = MOCK_STORES.filter(store => 
        store.name.toLowerCase().includes(query.toLowerCase()) || 
        store.address.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStores(results);
    } else {
      setFilteredStores([]);
    }
  };

  return (
    <div className="w-full bg-white font-sans min-h-screen flex flex-col">
    
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto h-20 flex justify-between items-center px-4 md:px-12">
          <div className="flex items-center space-x-6">
            <Link to="/"><img src={logoImg} className="h-10 w-10 md:h-12 md:w-12" alt="logo" /></Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/menu" className="font-bold tracking-widest hover:text-green-800 text-[13px]">MENU</Link>
              <Link to="/rewards" className="font-bold tracking-widest hover:text-green-800 text-[13px]">REWARDS</Link>
              <Link to="/gift-cards" className="font-bold tracking-widest hover:text-green-800 text-[13px]">GIFT CARDS</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/findastore" className="font-bold text-green-800 text-[14px]">
              <i className="fa-solid fa-location-dot mr-2"></i> Find a store
            </Link>
            {!userStatus && (
              <Link to="/signin">
                <button className="border border-black px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-100 transition">Sign in</button>
              </Link>
            )}
            <Link to="/joinnow">
              <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-800 transition">Join now</button>
            </Link>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-3xl focus:outline-none">{isMenuOpen ? "✕" : "☰"}</button>
        </div>
      </header>

    
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        
     
        <div className="lg:w-100 xl:w-120 w-full flex flex-col bg-white shadow-xl z-10 lg:h-[calc(100vh-80px)]">
          
          <div className="p-4 sm:p-6 overflow-y-auto h-full">
           
            <div className="flex w-full max-w-85 h-10 mx-auto border border-[#00754A] rounded-full mb-6 shrink-0">
              <button className="flex-1 text-white font-bold rounded-full bg-[#00754A]">Pickup</button>
              <Link to="/delivery" className="flex-1">
                <button className="w-full h-full text-[#00754A] font-bold rounded-full bg-white hover:bg-green-50">Delivery</button>
              </Link>
            </div>

        
            <div className="flex flex-col gap-3 mb-6 shrink-0">
              <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-green-600">
                <input
                  type="text"
                  placeholder="Find a store"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full outline-none text-gray-800 text-lg bg-transparent"
                />
                <button className="text-black ml-2"><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>

            {filteredStores.length > 0 ? (
              <div className="space-y-0">
                <p className="text-gray-500 text-sm mb-4 font-bold uppercase tracking-widest">Nearby Stores</p>
                {filteredStores.map(store => (
                  <div key={store.id} className="py-5 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition px-2">
                    <h3 className="font-bold text-lg text-gray-900">{store.name}</h3>
                    <p className="text-gray-600 text-sm">{store.address}</p>
                    <div className="flex justify-between mt-2 items-center">
                      <span className="text-gray-500 text-xs">Open until {store.openUntil}</span>
                      <span className="text-green-800 font-bold text-xs">{store.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center text-center py-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchQuery.length > 0 ? "No stores found" : "Zoomed out too far"}
                </h2>
                <p className="text-gray-500 mt-2 max-w-62.5">
                  {searchQuery.length > 0 
                    ? "Try adjusting your search or filters." 
                    : "Zoom in to see available stores near your location."}
                </p>
              </div>
            )}

      
            <div className="mt-12 space-y-4 pt-8 border-t border-gray-100">
              <a href="#" className="flex items-center text-green-900 hover:underline font-medium text-sm">
                Privacy Notice <img src={extImg} className="ml-2 h-3 w-3" alt="" />
              </a>
              <a href="#" className="flex items-center text-green-900 hover:underline font-medium text-sm">
                Terms of Use <img src={extImg} className="ml-2 h-3 w-3" alt="" />
              </a>
            </div>
          </div>
        </div>

     
        <div className="flex-1 h-100 lg:h-[calc(100vh-80px)] relative">
          <iframe
            title="store-map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d-73.985!3d40.758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1625000000000"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


export default Findastore;

