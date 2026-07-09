
import React, { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUser(savedName);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUser(null);
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 md:h-22 font-sans">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center lg:px-0 md:px-10 px-4 bg-white relative">
        
       
        <div className="flex items-center space-x-6 ">
          <Link to="/"> 
            <img src={logoImg} alt="logo" className="h-10 w-10 md:h-12 md:w-12" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/menu" className="font-bold tracking-widest hover:text-green-800 uppercase text-[13px]">Menu</Link>
            <Link to="/rewards" className="font-bold tracking-widest hover:text-green-800 uppercase text-[13px]">Rewards</Link>
            <Link to="/gift-cards" className="font-bold tracking-widest hover:text-green-800 uppercase text-[13px]">Gift Cards</Link>
          </nav>
        </div>

       
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/findastore" className="font-bold hover:text-green-800 text-[14px] flex items-center">
            <i className="fa-solid fa-location-dot mr-2"></i>
            Find a store
          </Link>

          {user ? (
           
            <div className="flex items-center space-x-4">
              <span className="font-bold text-[#006241]">Hi, {user}!</span>
              <button 
                onClick={handleLogout} 
                className="border border-black px-4 py-1.5 rounded-full font-bold text-[14px] cursor-pointer hover:bg-gray-200 transition"
              >
                Logout
              </button>
            </div>
          ) : (
           
            <>
              <Link to="/signin">
                <button className="border border-black px-4 py-1.5 rounded-full font-bold text-[14px] cursor-pointer hover:bg-gray-200 transition">
                  Sign in
                </button>
              </Link>
              <Link to="/joinnow">
                <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold text-[14px] cursor-pointer hover:bg-gray-800 transition">
                  Join now
                </button>
              </Link>
            </>
          )}
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl p-2 cursor-pointer focus:outline-none">
            {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>

          {isOpen && (
            <div className="fixed top-20 left-0 w-full h-screen bg-white shadow-xl z-50 animate-fadeIn overflow-y-auto">
              <div className="px-6 py-8 space-y-6">
                <nav className="flex flex-col space-y-6">
                  <Link to="/menu" onClick={toggleMenu} className="block text-xl font-bold">Menu</Link>
                  <Link to="/rewards" onClick={toggleMenu} className="block text-xl font-bold">Rewards</Link>
                  <Link to="/gift-cards" onClick={toggleMenu} className="block text-xl font-bold">Gift Cards</Link>
                </nav>
                <hr className="border-gray-200" />
                
              
                {user ? (
                  <div className="flex flex-col space-y-4 pt-2">
                    <span className="text-xl font-bold text-[#006241]">Hi, {user}!</span>
                    <button onClick={handleLogout} className="w-full border border-black rounded-full py-3 font-bold">Logout</button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4 pt-2 pb-24">
                    <Link to="/signin" onClick={toggleMenu}><button className="w-full border border-black rounded-full py-3 font-bold">Sign in</button></Link>
                    <Link to="/joinnow" onClick={toggleMenu}><button className="w-full bg-black text-white rounded-full py-3 font-bold">Join now</button></Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;