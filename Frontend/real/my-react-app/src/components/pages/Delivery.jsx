import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from "../../assets/logo.jpg";
import heroImg from "../../assets/starbucks_resized (1).png";
import extImg from "../../assets/ext.jpg";

const Delivery = ({ userStatus }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDone = () => {
    if (!location.trim()) {
      alert("Please enter a delivery address.");
      return;
    }
    
    setIsProcessing(true);
    

    setTimeout(() => {
      alert(`Success! Your order is being sent to: ${location}`);
      setIsProcessing(false);
      navigate("/"); 
    }, 2000);
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
            <Link to="/findastore" className="font-bold hover:text-green-800 text-[14px]">
              <i className="fa-solid fa-location-dot mr-2"></i> Find a store
            </Link>
            {!userStatus && (
              <Link to="/signin"><button className="border border-black px-4 py-1.5 rounded-full font-bold hover:bg-gray-100 transition">Sign in</button></Link> 
            )}
            <Link to="/joinnow"><button className="bg-black text-white px-4 py-1.5 rounded-full font-bold hover:bg-gray-800 transition">Join now</button></Link> 
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-3xl focus:outline-none">{isMenuOpen ? "✕" : "☰"}</button>
        </div>
      </header>

     
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">

      
        <div className="lg:w-100 xl:w-120 w-full flex flex-col bg-white shadow-xl z-10 lg:h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-6 sm:p-10 flex flex-col items-center">

         
            <div className="flex w-full max-w-85 h-10 border border-[#00754A] rounded-full mb-10 shrink-0">
              <Link to="/findastore" className="flex-1 flex items-center justify-center text-[#00754A] font-bold rounded-full bg-white hover:bg-green-50 transition">Pickup</Link>
              <div className="flex-1 flex items-center justify-center text-white font-bold rounded-full bg-[#00754A]">Delivery</div>
            </div>

           
            <div className="text-center lg:mt-6 w-full max-w-sm">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">Almost there!</h2>
              <p className="text-gray-500 mt-4 text-md">Enter your delivery address to finalize your order.</p>
              
             
              <div className="mt-8 space-y-4">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Enter delivery address" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border-b-2 border-gray-300 py-3 px-2 focus:border-[#00754A] outline-none transition-colors text-lg font-medium placeholder:text-gray-400"
                  />
                  <i className="fa-solid fa-truck absolute right-2 top-4 text-gray-300 group-focus-within:text-[#00754A]"></i>
                </div>

                <button 
                  onClick={handleDone}
                  disabled={isProcessing}
                  className={`w-full ${isProcessing ? 'bg-gray-400' : 'bg-[#00754A] hover:bg-[#00623e]'} text-white py-4 rounded-full font-extrabold text-lg shadow-lg transition active:scale-95 cursor-pointer mt-4`}
                >
                  {isProcessing ? "Processing..." : "Done"}
                </button>
              </div>
            </div>

          
            <p className="mt-12 text-sm text-gray-500 text-center leading-relaxed border-t border-gray-200 pt-8">
              Menu limited. Menu pricing for delivery may be higher than posted in stores. 
              <span className="block mt-2 font-medium">Delivery powered by DoorDash.</span>
            </p>
          </div>
        </div>

       
        <div className="flex-1 h-75 lg:h-[calc(100vh-80px)] overflow-hidden">
          <img 
            src={heroImg} 
            alt="Delivery Hero" 
            className="w-full h-full object-cover lg:object-center" 
          />
        </div>

      </div>
    </div>
  );
};

export default Delivery;
