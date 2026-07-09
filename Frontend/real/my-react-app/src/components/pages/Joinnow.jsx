
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Footer2 from "../Footer2";
import logoImg from "../../assets/logo.jpg";

const Joinnow = () => {
  const navigate = useNavigate();  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    wantsEmail: true,
    agreesTerms: false
  });


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.agreesTerms) {
      alert("Please agree to the Terms of Use to continue.");
      return;
    }

    try {
    
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Account created successfully and saved to MongoDB!");
        console.log('Success:', data);
        
       
        navigate('/'); 
      } else {
        alert("❌ Registration failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error('Connection error:', err);
      alert("Could not connect to the backend. Ensure your server is running on port 5000.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000de] flex flex-col">
  
      <header className="p-4 md:p-6 shadow-md md:ml-2 ">
        <div className="w-14 h-14 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src={logoImg} 
            alt="Starbucks" 
            className="w-full h-full object-contain"
          />
        </div>
      </header>

   
      <main className="grow max-w-360 mx-auto px-4 w-full py-10 md:py-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
          Create an account
        </h1>

        <div className="text-center max-w-125 mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase mb-3 text-gray-500">
            Starbucks® Rewards
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed px-4">
            Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <span className="underline cursor-pointer">more</span>.
          </p>
        </div>

     
        <div className="max-w-125 mx-auto bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.1)] p-8 md:p-12 mb-20">
          <p className="text-[13px] mb-10 text-gray-500">
            <span className="text-[#006241] font-bold text-lg">*</span> indicates required field
          </p>

          <form onSubmit={handleSubmit} className="space-y-12">
        
            <section>
              <h3 className="text-lg font-bold mb-8">Personal Information</h3>
              <div className="space-y-10">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 py-2 outline-none focus:border-[#006241] transition-all bg-transparent"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <label className="absolute left-0 top-2 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#006241] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                    <span className="text-[#006241] font-bold">*</span> First name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 py-2 outline-none focus:border-[#006241] transition-all bg-transparent"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                  <label className="absolute left-0 top-2 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#006241] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                    <span className="text-[#006241] font-bold">*</span> Last name
                  </label>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-8">Account Security</h3>
              <div className="space-y-10">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 py-2 outline-none focus:border-[#006241] transition-all bg-transparent"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <label className="absolute left-0 top-2 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#006241] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                    <span className="text-[#006241] font-bold">*</span> Email address
                  </label>
                  <p className="text-xs text-gray-500 mt-2 font-medium">This will be your username</p>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 py-2 outline-none focus:border-[#006241] transition-all bg-transparent pr-10"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <label className="absolute left-0 top-2 text-gray-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#006241] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                    <span className="text-[#006241] font-bold">*</span> Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-2 text-gray-400 cursor-pointer hover:text-[#006241]"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88L3 3m2.12 18.88l6.76-6.76M21 21l-3-3m-13.88-6.88A10.74 10.74 0 0112 5c4.47 0 8.27 2.73 9.88 6.62a10.78 10.78 0 01-5.11 5.39m-4.52 1.1a10.77 10.77 0 01-10.25-6.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed font-medium">
                    Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character.
                  </p>
                </div>
              </div>
            </section>

            
            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="promo"
                  checked={formData.wantsEmail}
                  onChange={(e) => setFormData({...formData, wantsEmail: e.target.checked})}
                  className="mt-1 w-6 h-6 accent-[#006241] cursor-pointer"
                />
                <label htmlFor="promo" className="cursor-pointer">
                  <span className="font-bold block text-base mb-1">Yes, I'd like email from Starbucks</span>
                  <span className="text-sm text-gray-600">Know about initiatives, announcements and product offers.</span>
                </label>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  onChange={(e) => setFormData({...formData, agreesTerms: e.target.checked})}
                  className="mt-1 w-6 h-6 accent-[#006241] cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  <span className="text-[#006241] font-bold mr-1">*</span> 
                  I agree to the <span className="text-[#006241] underline font-bold">Starbucks® Rewards Terms</span> ↗ and the <span className="text-[#006241] underline font-bold">Starbucks Card Terms</span> ↗ and have read the <span className="text-[#006241] underline font-bold">Starbucks Privacy Statement</span> ↗.
                </label>
              </div>
            </div>

          
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#006241] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#00704A] transition-all active:scale-95 cursor-pointer"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer2 />
    </div>
  );
};

export default Joinnow;