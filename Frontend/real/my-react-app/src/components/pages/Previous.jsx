
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import previousImg from "../../assets/previous.jpg";
import Footer2 from "../Footer2";
import bagImg from "../../assets/bag.jpg";
import arrImg from "../../assets/arr.jpg";


const Previous = ({ userStatus }) => {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans min-h-screen text-[#000000DE]">
 
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto h-20 flex justify-between items-center px-4 md:px-12">
          
          <div className="flex items-center space-x-6">
            <Link to="/">
              <img src={logoImg} className="h-10 w-10 md:h-12 md:w-12" alt="logo" />
            </Link>

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
             <Link to="/signin" ><button className="border border-black px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-200 transition">
                Sign in
              </button></Link>
            )}
            
            <Link to="/joinnow" > <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-800 transition">
              Join now
            </button></Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-3xl cursor-pointer focus:outline-none">
            {open ? "✕" : "☰"}
          </button>

          {open && (
            <div className="md:hidden bg-white border-t border-gray-200 px-6 py-8 space-y-6 absolute w-full top-20 left-0 shadow-xl z-50">
              <Link to="/menu" onClick={() => setOpen(false)} className="block text-xl font-bold">Menu</Link>
              <Link to="/rewards" onClick={() => setOpen(false)} className="block text-xl font-bold">Rewards</Link>
              <Link to="/gift-cards" onClick={() => setOpen(false)} className="block text-xl font-bold">Gift Cards</Link>
              <hr className="border-gray-200" />
              <Link to="/findastore" onClick={() => setOpen(false)} className="block font-bold text-[20px]">Find a store</Link>
               <div className="flex flex-col space-y-4 pt-2 pb-24">
                  <Link to="/signin" ><button className="w-full border border-black rounded-full py-3 font-bold cursor-pointer hover:bg-gray-200">Sign in</button></Link>
                  <Link to="/joinnow"> <button className="w-full bg-black text-white rounded-full py-3 font-bold cursor-pointer hover:bg-gray-800">Join now</button></Link>
                </div>
            </div>
          )}
        </div>
      </header>

      <div className="h-14 border-b border-gray-200 px-4 md:px-12 lg:px-32 bg-[#f9f9f9] sticky top-20 z-40">
        <ul className="flex space-x-6 md:space-x-8 text-[13px] font-bold h-full items-center overflow-x-auto whitespace-nowrap">
          <li className="text-gray-500 hover:text-black transition"><Link to="/menu">Menu</Link></li>
          <li className="text-gray-500 hover:text-black transition cursor-pointer">Featured</li>
          <li className="border-b-2 border-black h-full flex items-center">Previous</li>
          <li className="text-gray-500 hover:text-black transition"><Link to="/favorites">Favorites</Link></li>
        </ul>
      </div>

      
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-32 py-20 min-h-[60vh]">
        <h2 className="text-3xl font-bold mb-10">Previous</h2>
        
       
        <div className="flex flex-col items-start">
          <img className="h-44 w-56 mb-8 object-contain" src={previousImg} alt="Previous" />
          <h3 className="text-2xl font-bold mb-4">When history repeats itself</h3>
          <p className="text-[#00000094] text-lg max-w-sm mb-8">
            Previous orders will appear here to quickly order again.
          </p>
          
          <div className="flex space-x-4">
            <Link to="/signin" ><button className="px-6 py-2 border border-black rounded-full font-bold cursor-pointer hover:bg-gray-100 transition">
              Sign in
            </button></Link>
             <Link to="/joinnow" ><button className="px-6 py-2 bg-black text-white rounded-full font-bold cursor-pointer hover:bg-gray-800 transition">
              Join now
            </button></Link>
          </div>
        </div>
      </main>

      <Footer2 />

     
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E3932] text-white p-4 z-50 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center md:px-32 px-5">
          <Link to="/findastore" className="flex items-center group">
            <div className="flex flex-col">
              <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">For item availability</p>
              <p className="font-bold flex items-center group-hover:text-green-200 transition">
                Choose a store <img src={arrImg} className="h-3 w-3 ml-2 invert" alt="" />
              </p>
              <hr className="border-gray-500 mt-1 opacity-50"/>
            </div>
          </Link>
          
          <div className="relative cursor-pointer group">
            <Link to="/findastore">
              <img src={bagImg} className="h-8 w-8 invert" alt="cart" />
            </Link>
            <span className="absolute -top-1 -right-1 bg-[#006241] text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#1E3932] font-bold">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previous;