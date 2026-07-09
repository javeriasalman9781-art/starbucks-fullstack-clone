import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logoImg from "../../assets/logo.jpg";
import bagImg from "../../assets/bag.jpg";
import hotCoffeeImg from "../../assets/img111.jpg"; 
import hotTeaImg from "../../assets/img333.jpg";
import frappuccinoImg from "../../assets/img666.jpg";
import coldCoffeeImg from "../../assets/img222.jpg"; 
import coldTeaImg from "../../assets/img444.jpg";
import bakeryImg from "../../assets/img1010.jpg"; 
import breakfastImg from "../../assets/img999.jpg";
import lunchImg from "../../assets/img1212.jpg";

import Footer2 from "../Footer2";

const Menu = () => {
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Drinks");
  const [selectedItem, setSelectedItem] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [cartItems, setCartItems] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCart = async () => {
      const userName = localStorage.getItem('userName');
      if (userName) {
        try {
          const response = await fetch(`http://localhost:5000/api/cart/${userName}`);
          const data = await response.json();
          if (response.ok) {
            setCartItems(data); 
          }
        } catch (err) {
          console.log("Could not load cart from DB");
        }
      }
    };
    fetchCart();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const openDialog = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleAddToOrder = async () => {
    const userName = localStorage.getItem('userName');
    if (!userName) { 
      alert("Please sign in to order!"); 
      return; 
    }
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: userName,
          itemName: selectedItem.name,
          itemImg: selectedItem.img,
          calories: selectedItem.cal,
          price: selectedItem.price 
        })
      });

      if (response.ok) {
        setCartItems(prev => [...prev, { itemName: selectedItem.name, price: selectedItem.price }]);
        setIsModalOpen(false);
      }
    } catch (err) { console.log("Error adding"); }
  };

  const handleRemoveOne = async () => {
    const userName = localStorage.getItem('userName');
    try {
      const response = await fetch(`http://localhost:5000/api/cart/remove/${userName}/${selectedItem.name}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const index = cartItems.findIndex(item => item.itemName === selectedItem.name);
        if (index > -1) {
          const newCart = [...cartItems];
          newCart.splice(index, 1);
          setCartItems(newCart);
        }
        setIsModalOpen(false);
      }
    } catch (err) { console.log("Error removing item"); }
  };

 
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setIsCartOpen(false);
     
      navigate("/delivery"); 
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  const menuCategories = [
    {
      title: "Drinks",
      items: [
        { name: "Hot Coffee", img: hotCoffeeImg, cal: "5-10", price: 3.95 },
        { name: "Hot Tea", img: hotTeaImg, cal: "0", price: 2.45 },
        { name: "Frappuccino®", img: frappuccinoImg, cal: "230-450", price: 5.25 },
        { name: "Cold Tea", img: coldTeaImg, cal: "0-120", price: 3.25 },
        { name: "Cold Coffee", img: coldCoffeeImg, cal: "5-150", price: 4.45 },
      ]
    },
    {
      title: "Food",
      items: [
        { name: "Hot Breakfast", img: breakfastImg, cal: "350-500", price: 6.95 },
        { name: "Bakery", img: bakeryImg, cal: "250-400", price: 3.50 },
        { name: "Lunch", img: lunchImg, cal: "400-600", price: 8.25 },
      ]
    }
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0), 0);

  return (
    <div className="w-full bg-white font-sans min-h-screen text-[#000000DE] pb-32 relative">
      
    
      <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-200 transition-all duration-500 transform ${showSuccess ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="bg-[#00754a] text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 border-2 border-white">
          <i className="fa-solid fa-truck-fast text-xl"></i>
          <span className="font-bold text-lg tracking-wide">Setting up your delivery...</span>
        </div>
      </div>

    
      {isCartOpen && (
        <div className="fixed inset-0 z-100 flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-bold text-[#1E3932]">Your Order</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-3xl hover:text-red-500 transition">✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              {cartItems.length === 0 ? (
                <div className="text-center mt-20">
                  <p className="text-gray-400 text-lg">Your bag is empty</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b">
                    <p className="font-bold text-lg text-gray-800">{item.itemName}</p>
                    <span className="font-bold text-gray-700">${Number(item.price).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-6 border-t mt-auto">
              <div className="flex justify-between text-xl font-extrabold text-[#1E3932] mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-[#00754a] hover:bg-[#006241] text-white text-center py-4 rounded-full font-bold text-lg shadow-md transition active:scale-95"
              >
                Checkout for Delivery
              </button>
            </div>
          </div>
        </div>
      )}

     
      <header className="w-full bg-white shadow-md sticky top-0 z-50 h-20">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 md:px-10 lg:px-0">
          <div className="flex items-center space-x-6">
            <Link to="/"><img src={logoImg} alt="logo" className="h-10 w-10 md:h-12 md:w-12" /></Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/menu" className="font-bold text-green-800 border-b-4 border-green-800 flex items-center uppercase text-[13px] tracking-widest md:h-19 md:mt-1">Menu</Link>
              <Link to="/rewards" className="font-bold hover:text-green-800 uppercase text-[13px] flex items-center tracking-widest">Rewards</Link>
              <Link to="/gift-cards" className="font-bold hover:text-green-800 uppercase text-[13px] flex items-center tracking-widest">Gift Cards</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-6">
           
            <Link to="/findastore" className="flex items-center font-bold text-[14px] hover:text-green-800 mr-4">
              <i className="fa-solid fa-location-dot mr-2"></i> Find a store
            </Link>
            <Link to="/signin" className="border border-black px-4 py-1.5 rounded-full font-bold hover:bg-gray-100 transition text-[14px]">Sign in</Link>
            <Link to="/joinnow" className="bg-black text-white px-4 py-1.5 rounded-full font-bold hover:bg-gray-800 transition text-[14px]">Join now</Link>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

       <div className="h-14 border-b border-gray-200 px-4 md:px-22 lg:px-36 bg-[#f9f9f9] sticky top-20 z-40">
         <ul className="flex space-x-6 md:space-x-8 text-[13px] font-bold h-full items-center overflow-x-auto whitespace-nowrap">
           <li className="border-b-2 border-black h-full flex items-center"><Link to="/menu">Menu</Link></li>
           <li className="text-gray-500 hover:text-black h-full flex items-center"><Link to="/featured">Featured</Link></li>
           <li className="text-gray-500 hover:text-black h-full flex items-center"><Link to="/previous">Previous</Link></li>
           <li className="text-gray-500 hover:text-black h-full flex items-center"><Link to="/favorites">Favorites</Link></li>
        </ul>
  </div>
    
      <main className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-32 py-12 flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 pr-8 sticky top-40 h-fit">
          {menuCategories.map((cat, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="font-bold text-lg mb-4">{cat.title}</h3>
              <ul className="space-y-4 text-gray-500 text-[15px]">
                {cat.items.map((item, i) => (
                  <li key={i} onClick={() => scrollToSection(cat.title)} className="hover:text-black cursor-pointer">{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <div className="flex-1">
          <h1 className="text-2xl font-extrabold mb-10">Menu</h1>
          {menuCategories.map((cat, idx) => (
            <section key={idx} id={cat.title} className="mb-16 scroll-mt-40">
              <h2 className="text-2xl font-bold border-b border-gray-200 pb-4 mb-10">{cat.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                {cat.items.map((item, i) => (
                  <div key={i} onClick={() => openDialog(item)} className="flex items-center group cursor-pointer">
                    <div className="w-24 h-24 rounded-full overflow-hidden mr-4 shadow-sm group-hover:shadow-md transition">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    </div>
                    <span className="text-lg font-bold group-hover:text-green-800 transition">{item.name}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-110 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl p-8 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-2xl">✕</button>
            <div className="text-center">
              <img src={selectedItem?.img} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg" alt="" />
              <h3 className="text-2xl font-bold mb-1">{selectedItem?.name}</h3>
              <p className="text-green-700 text-xl font-extrabold mb-1">${selectedItem?.price?.toFixed(2)}</p>
              <p className="text-gray-500 font-bold mb-8">{selectedItem?.cal} calories</p>
              <div className="flex flex-col gap-3">
                <button onClick={handleAddToOrder} className="w-full bg-[#00754a] hover:bg-[#006241] text-white py-4 rounded-full font-bold transition">Add to Order</button>
                <button onClick={handleRemoveOne} className="w-full border border-gray-300 text-gray-600 py-3 rounded-full font-bold transition">Remove Item</button>
              </div>
            </div>
          </div>
        </div>
      )}

     
      <div className="fixed bottom-0 left-0 right-0 bg-[#1E3932] text-white p-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex flex-col">
            <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Total Order</span>
            <span className="text-2xl font-extrabold">${totalPrice.toFixed(2)}</span>
          </div>

          <div 
            className="relative cursor-pointer transition-transform hover:scale-110 active:scale-95" 
            onClick={() => setIsCartOpen(true)}
          >
            <img src={bagImg} className="h-12 w-12 brightness-200" alt="view order" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00754A] text-[12px] font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-[#1E3932] shadow-lg">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Menu;