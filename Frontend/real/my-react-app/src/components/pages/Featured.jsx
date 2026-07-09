// // import { Link } from "react-router-dom";
// // import logoImg from "../../assets/logo.jpg";
// // import bagImg from "../../assets/bag.jpg";
// // import arrImg from "../../assets/arr.jpg";
// // import f1 from "../../assets/501.jpg";
// // import f2 from "../../assets/502.jpg";
// // import f3 from "../../assets/503.jpg";
// // import f4 from "../../assets/504.jpg";
// // import f5 from "../../assets/505.jpg";
// // import Footer2 from "../Footer2";

// // const Featured = () => {
// //   return (
// //     <div className="w-full bg-white min-h-screen font-sans text-[#000000DE] pb-24">
// //      <header className="w-full bg-white shadow-md sticky top-0 z-50">
// //         <div className="max-w-360 mx-auto h-20 flex justify-between items-center px-4 ">
          
// //           <div className="flex items-center space-x-6">
// //             <Link to="/">
// //               <img src={logoImg} className="h-10 w-10 md:h-12 md:w-12" alt="logo" />
// //             </Link>

// //             <nav className="hidden md:flex space-x-8">
// //               <Link to="/menu" className="font-bold tracking-widest text-[13px] hover:text-green-800">MENU</Link>
// //               <Link to="/rewards" className="font-bold tracking-widest text-[13px] hover:text-green-800">REWARDS</Link>
// //               <Link to="/gift-cards" className="font-bold tracking-widest text-[13px] hover:text-green-800">GIFT CARDS</Link>
// //             </nav>
// //           </div>

// //           <div className="hidden md:flex items-center space-x-6">
// //             <Link to="/findastore" className="font-bold hover:text-green-800 text-[14px]">
// //               <i className="fa-solid fa-location-dot mr-2"></i>
// //               Find a store
// //             </Link>
// //             <button className="border border-black px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-200">Sign in</button>
// //             <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-800">
// //               Join now
// //             </button>
// //           </div>

// //           {/* --- NO-JS MOBILE MENU LOGIC START --- */}
// //           <div className="md:hidden flex items-center">
// //             {/* Hidden Checkbox */}
// //             <input type="checkbox" id="menu-toggle" className="hidden peer" />
            
// //             {/* Label acts as the Hamburger Button */}
// //             <label htmlFor="menu-toggle" className="text-3xl cursor-pointer select-none">
// //               <span className="peer-checked:hidden">☰</span>
// //             </label>

// //             {/* Mobile Dropdown - controlled by peer-checked */}
// //             <div className="fixed top-20 left-0 w-full bg-white border-t shadow-md border-gray-200 px-6 py-4 space-y-4 hidden peer-checked:block transition-all">
// //               <Link to="/menu" className="block font-bold">Menu</Link>
// //               <Link to="/rewards" className="block font-bold">Rewards</Link>
// //               <Link to="/gift-cards" className="block font-bold">Gift Cards</Link>
// //               <hr className="border-gray-200" />
// //               <Link to="/findastore" className="block font-bold">Find a store</Link>
// //               <div className="flex flex-col space-y-3 pt-2">
// //                 <button className="w-full border border-black rounded-full py-2 font-bold cursor-pointer hover:bg-gray-200">Sign in</button>
// //                 <button className="w-full bg-black text-white rounded-full py-2 font-bold cursor-pointer hover:bg-gray-800">Join now</button>
// //               </div>
// //             </div>
// //           </div>
// //           {/* --- NO-JS MOBILE MENU LOGIC END --- */}

// //         </div>
// //       </header>
    

// //       {/* ================= SUB-NAV ================= */}
// //       <div className="h-14 border-b border-gray-200 px-4 md:px-24 lg:px-32 bg-[#f9f9f9] sticky top-20 z-40">
// //         <ul className="flex space-x-6 md:space-x-8 text-[13px] font-bold h-full items-center overflow-x-auto whitespace-nowrap">
// //           <li className="text-gray-500 hover:text-black"><Link to="/menu">Menu</Link></li>
// //           <li className="border-b-2 border-black h-full flex items-center">Featured</li>
// //           <li className="text-gray-500 hover:text-black"><Link to="/previous">Previous</Link></li>
// //           <li className="text-gray-500 hover:text-black"><Link to="/favorites">Favorites</Link></li>
// //         </ul>
// //       </div>

// //       {/* ================= FEATURED SECTIONS ================= */}
// //       <main className="max-w-360 mx-auto py-8">

// //         {/* Section 1 */}
// //         <section className="flex flex-col md:flex-row mb-8">
// //           <img src={f1} className="md:w-1/2 w-full object-cover" alt="Pumpkin Spice Latte" />
// //           <div className="md:w-1/2 bg-[#61381C] text-white p-12 flex flex-col justify-center items-center text-center">
// //             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pumpkin Spice Latte</h2>
// //             <p className="text-lg md:text-xl mb-8 max-w-md">
// //               Our signature espresso and steamed milk with pumpkin spice flavor.
// //             </p>
// //             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-[#794522] transition">
// //               Order now
// //             </button>
// //           </div>
// //         </section>

// //         {/* Section 2 - Reversed on Desktop */}
// //         <section className="flex flex-col md:flex-row-reverse mb-8">
// //           <img src={f2} className="md:w-1/2 w-full object-cover" alt="Iced PSL" />
// //           <div className="md:w-1/2 bg-[#61381C] text-white p-12 flex flex-col justify-center items-center text-center">
// //             <h2 className="text-3xl md:text-5xl font-bold mb-6">Iced Pumpkin Spice Latte</h2>
// //             <p className="text-lg md:text-xl mb-8 max-w-md">
// //               Chilled espresso with pumpkin spice and cream.
// //             </p>
// //             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-[#794522] transition">
// //               Order now
// //             </button>
// //           </div>
// //         </section>

// //         {/* Section 3 */}
// //         <section className="flex flex-col md:flex-row mb-8">
// //           <img src={f3} className="md:w-1/2 w-full object-cover" alt="Pecan Cortado" />
// //           <div className="md:w-1/2 bg-[#32462F] text-white p-12 flex flex-col justify-center items-center text-center">
// //             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pecan Oatmilk Cortado</h2>
// //             <p className="text-lg md:text-xl mb-8 max-w-md">
// //               Smooth ristretto shots with nutty oatmilk flavor.
// //             </p>
// //             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-[#396832] transition">
// //               Order now
// //             </button>
// //           </div>
// //         </section>

// //         {/* Section 4 - Reversed on Desktop */}
// //         <section className="flex flex-col md:flex-row-reverse mb-8">
// //           <img src={f4} className="md:w-1/2 w-full object-cover" alt="Pumpkin Cream Cold Brew" />
// //           <div className="md:w-1/2 bg-[#32462F] text-white p-12 flex flex-col justify-center items-center text-center">
// //             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pumpkin Cream Cold Brew</h2>
// //             <p className="text-lg md:text-xl mb-8 max-w-md">
// //               Cold brew topped with pumpkin cream cold foam.
// //             </p>
// //             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-[#396832] transition">
// //               Order now
// //             </button>
// //           </div>
// //         </section>

// //       </main>

// //       <Footer2 />

// //       {/* ================= BOTTOM BAR ================= */}
// //       <div className="fixed bottom-0 left-0 right-0 bg-[#1E3932] text-white p-4 z-50">
// //         <div className="max-w-360 mx-auto flex justify-between items-center md:px-44 px-2">
// //           <Link to="/findastore" className="flex items-center">
// //             <div>
// //               <p className="text-[10px] text-gray-300 font-bold">For item availability</p>
// //               <p className="font-bold flex items-center text-[14px]">
// //                 Choose a store
// //                 <img src={arrImg} className="h-3 w-3 ml-2 invert" alt="" />
// //               </p>
// //               <hr className="border-gray-500 mt-1"/>
// //             </div>
// //           </Link>

// //           <div className="relative">
// //             <img src={bagImg} className="h-8 w-8 invert cursor-pointer" alt="cart" />
// //             <span className="absolute -top-1 -right-2 bg-[#006241] text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#1E3932] font-bold">
// //               0
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Featured;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logoImg from "../../assets/logo.jpg";
// import bagImg from "../../assets/bag.jpg";
// import arrImg from "../../assets/arr.jpg";
// import f1 from "../../assets/501.jpg";
// import f2 from "../../assets/502.jpg";
// import f3 from "../../assets/503.jpg";
// import f4 from "../../assets/504.jpg";
// import Footer2 from "../Footer2";

// // ✅ Receive userStatus from App.js
// const Featured = ({ userStatus }) => {
//   const [open, setOpen] = useState(false);

//   // JS Logic: Scroll to top on page load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="w-full bg-white min-h-screen font-sans text-[#000000DE] pb-24">
      
//       {/* ================= HEADER ================= */}
//       <header className="w-full bg-white shadow-md sticky top-0 z-50">
//         <div className="max-w-screen-2xl mx-auto h-20 flex justify-between items-center px-4 md:px-12">
          
//           <div className="flex items-center space-x-6">
//             <Link to="/">
//               <img src={logoImg} className="h-10 w-10 md:h-12 md:w-12" alt="logo" />
//             </Link>

//             <nav className="hidden md:flex space-x-8">
//               <Link to="/menu" className="font-bold tracking-widest text-[13px] hover:text-green-800">MENU</Link>
//               <Link to="/rewards" className="font-bold tracking-widest text-[13px] hover:text-green-800">REWARDS</Link>
//               <Link to="/gift-cards" className="font-bold tracking-widest text-[13px] hover:text-green-800">GIFT CARDS</Link>
//             </nav>
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             <Link to="/findastore" className="font-bold hover:text-green-800 text-[14px]">
//               <i className="fa-solid fa-location-dot mr-2"></i>
//               Find a store
//             </Link>
//             {/* Logic: Only show Sign In if not logged in */}
//             {!userStatus && (
//               <button className="border border-black px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-100 transition">Sign in</button>
//             )}
//             <button className="bg-black text-white px-4 py-1.5 rounded-full font-bold cursor-pointer hover:bg-gray-800 transition">
//               Join now
//             </button>
//           </div>

//           {/* MOBILE MENU TOGGLE */}
//           <button onClick={() => setOpen(!open)} className="md:hidden text-3xl cursor-pointer focus:outline-none">
//             {open ? "✕" : "☰"}
//           </button>

//           {/* MOBILE MENU DROPDOWN */}
//           {open && (
//             <div className="md:hidden bg-white border-t border-gray-200 px-6 py-8 space-y-6 absolute w-full top-20 left-0 shadow-xl z-50">
//               <Link to="/menu" onClick={() => setOpen(false)} className="block text-xl font-bold">Menu</Link>
//               <Link to="/rewards" onClick={() => setOpen(false)} className="block text-xl font-bold">Rewards</Link>
//               <Link to="/gift-cards" onClick={() => setOpen(false)} className="block text-xl font-bold">Gift Cards</Link>
//               <hr className="border-gray-200"/>
//               <Link to="/findastore" onClick={() => setOpen(false)} className="block font-bold text-[20px]">Find a store</Link>
//                <div className="flex flex-col space-y-4 pt-2 pb-24">
//                   <button className="w-full border border-black rounded-full py-3 font-bold cursor-pointer hover:bg-gray-100">Sign in</button>
//                   <button className="w-full bg-black text-white rounded-full py-3 font-bold cursor-pointer hover:bg-gray-800">Join now</button>
//                 </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* ================= SUB-NAV ================= */}
//       <div className="h-14 border-b border-gray-200 px-4 md:px-12 lg:px-32 bg-[#f9f9f9] sticky top-20 z-40">
//         <ul className="flex space-x-6 md:space-x-8 text-[13px] font-bold h-full items-center overflow-x-auto whitespace-nowrap">
//           <li className="text-gray-500 hover:text-black transition"><Link to="/menu">Menu</Link></li>
//           <li className="border-b-2 border-black h-full flex items-center">Featured</li>
//           <li className="text-gray-500 hover:text-black transition"><Link to="/previous">Previous</Link></li>
//           <li className="text-gray-500 hover:text-black transition"><Link to="/favorites">Favorites</Link></li>
//         </ul>
//       </div>

//       {/* ================= FEATURED SECTIONS ================= */}
//       <main className="max-w-screen-2xl mx-auto py-8">

//         {/* Section 1 */}
//         <section className="flex flex-col md:flex-row mb-8">
//           <img src={f1} className="md:w-1/2 w-full object-cover" alt="Pumpkin Spice Latte" />
//           <div className="md:w-1/2 bg-[#61381C] text-white p-12 flex flex-col justify-center items-center text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pumpkin Spice Latte</h2>
//             <p className="text-lg md:text-xl mb-8 max-w-md">
//               Our signature espresso and steamed milk with pumpkin spice flavor.
//             </p>
//             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-white/10 transition">
//               Order now
//             </button>
//           </div>
//         </section>

//         {/* Section 2 - Reversed */}
//         <section className="flex flex-col md:flex-row-reverse mb-8">
//           <img src={f2} className="md:w-1/2 w-full object-cover" alt="Iced PSL" />
//           <div className="md:w-1/2 bg-[#61381C] text-white p-12 flex flex-col justify-center items-center text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Iced Pumpkin Spice Latte</h2>
//             <p className="text-lg md:text-xl mb-8 max-w-md">
//               Chilled espresso with pumpkin spice and cream.
//             </p>
//             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-white/10 transition">
//               Order now
//             </button>
//           </div>
//         </section>

//         {/* Section 3 */}
//         <section className="flex flex-col md:flex-row mb-8">
//           <img src={f3} className="md:w-1/2 w-full object-cover" alt="Pecan Cortado" />
//           <div className="md:w-1/2 bg-[#32462F] text-white p-12 flex flex-col justify-center items-center text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pecan Oatmilk Cortado</h2>
//             <p className="text-lg md:text-xl mb-8 max-w-md">
//               Smooth ristretto shots with nutty oatmilk flavor.
//             </p>
//             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-white/10 transition">
//               Order now
//             </button>
//           </div>
//         </section>

//         {/* Section 4 - Reversed */}
//         <section className="flex flex-col md:flex-row-reverse mb-8">
//           <img src={f4} className="md:w-1/2 w-full object-cover" alt="Pumpkin Cream Cold Brew" />
//           <div className="md:w-1/2 bg-[#32462F] text-white p-12 flex flex-col justify-center items-center text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pumpkin Cream Cold Brew</h2>
//             <p className="text-lg md:text-xl mb-8 max-w-md">
//               Cold brew topped with pumpkin cream cold foam.
//             </p>
//             <button className="border-2 border-white px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-white/10 transition">
//               Order now
//             </button>
//           </div>
//         </section>

//       </main>

//       <Footer2 />

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="fixed bottom-0 left-0 right-0 bg-[#1E3932] text-white p-4 z-50 border-t border-white/10">
//         <div className="max-w-screen-2xl mx-auto flex justify-between items-center md:px-32 px-4">
//           <Link to="/findastore" className="flex items-center group">
//             <div className="flex flex-col">
//               <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">For item availability</span>
//               <div className="flex items-center">
//                 <span className="font-bold border-b border-transparent group-hover:border-white transition">Choose a store</span>
//                 <img src={arrImg} className="h-3 w-3 ml-2 invert" alt="arrow" />
//               </div>
//             </div>
//           </Link>

//           <div className="relative cursor-pointer group">
//             <img src={bagImg} className="h-8 w-8 invert" alt="cart" />
//             <span className="absolute -top-1 -right-2 bg-[#006241] text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#1E3932] font-bold">
//               0
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;