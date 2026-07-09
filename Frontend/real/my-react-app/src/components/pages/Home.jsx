
import React, { useEffect } from 'react';
import Header from "../Header"; 
import Hero from "../Hero";
import Footer2 from "../Footer2";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <Header />
      <main className="max-w-screen-2xl mx-auto py-8 px-10 space-y-8">
        <Hero />
      </main>
      <Footer2 />
    </div>
  );
};

export default Home;

