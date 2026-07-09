
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer2 from "../Footer2";
import logoImg from "../../assets/logo.jpg";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
       
        localStorage.setItem('userName', data.name); 
        
       
        alert(`✅ Welcome back, ${data.name}!`);
        
      
        window.location.href = "/"; 
      } else {
        alert("❌ Login failed: " + data.error);
      }
    } catch (err) {
      console.error('Connection error:', err);
      alert("Could not connect to the backend. Is your server running?");
    }
  };

  return (
   <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="p-4 md:p-6 shadow-md md:ml-2">
        <div className="w-14 h-14 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src={logoImg} 
            alt="Starbucks" 
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      <main className="max-w-360 mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-10 md:mt-9">
          Sign in or create an account
        </h1>

        <div className="max-w-120 mx-auto bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.15)] p-8 md:p-12 mb-12">
          <p className="text-sm mb-8">
            <span className="text-[#006241] font-bold text-lg">*</span> indicates required field
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 py-3 outline-none focus:border-[#006241] transition-all bg-transparent"
              />
              <label className="absolute left-0 top-3 text-gray-500 transition-all pointer-events-none
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#006241] peer-focus:font-bold
                peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                <span className="text-[#006241] font-bold">*</span> Username or email address
              </label>
            </div>

            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 py-3 outline-none focus:border-[#006241] transition-all bg-transparent pr-10"
              />
              <label className="absolute left-0 top-3 text-gray-500 transition-all pointer-events-none
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#006241] peer-focus:font-bold
                peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                <span className="text-[#006241] font-bold">*</span> Password
              </label>
              
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-3 text-gray-400 hover:text-[#006241] cursor-pointer z-10">
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.88 9.88L3 3m2.12 18.88l6.76-6.76M21 21l-3-3m-13.88-6.88A10.74 10.74 0 0112 5c4.47 0 8.27 2.73 9.88 6.62a10.78 10.78 0 01-5.11 5.39m-4.52 1.1a10.77 10.77 0 01-10.25-6.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="keep"
                defaultChecked
                className="mt-1 w-6 h-6 rounded border-gray-300 text-[#006241] focus:ring-[#006241] accent-[#006241] cursor-pointer"
              />
              <label htmlFor="keep" className="text-[16px] cursor-pointer">
                Keep me signed in. <span className="underline font-bold text-[#006241] cursor-pointer">Details</span>
              </label>
            </div>

            <div className="space-y-4 pt-2">
              <a href="#" className="block text-[#006241] font-bold underline hover:no-underline">Forgot your username?</a>
              <a href="#" className="block text-[#006241] font-bold underline hover:no-underline">Forgot your password?</a>
            </div>

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="bg-[#006241] hover:bg-[#00704A] cursor-pointer text-white font-bold py-4 px-8 rounded-full shadow-md transition-all active:scale-95"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="text-center max-w-105 mx-auto pb-20">
          <h2 className="text-[#006241] font-bold text-xs tracking-[0.15em] uppercase mb-4">
            Join Starbucks® Rewards
          </h2>
          <p className="text-[16px] leading-relaxed mb-8 text-gray-700">
            As a member, start earning free food and drinks, unlock our best offers and celebrate your birthday with a treat from us. Best of all, it's free to join.
          </p>
          <Link to="/joinnow"> 
            <button className="border-2 border-[#006241] cursor-pointer text-[#006241] font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors ">
              Join now
            </button>
          </Link>
        </div>
      </main>
      <Footer2 />
    </div>
  )
};

export default Signin;