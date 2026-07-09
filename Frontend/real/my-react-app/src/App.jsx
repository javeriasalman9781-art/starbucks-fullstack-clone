
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
// import Featured from './components/pages/Featured';
import Previous from './components/pages/Previous';
import Favorites from './components/pages/Favorites';
import Findastore from './components/pages/Findastore';
import Delivery from './components/pages/Delivery';
import Signin from './components/pages/Signin';
import Joinnow from './components/pages/Joinnow';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
       <Route   path="/"   element={<Home userStatus={isUserLoggedIn} />}   />
        <Route   path="/menu"   element={<Menu userStatus={isUserLoggedIn} />}   />
        <Route   path="/previous"   element={<Previous userStatus={isUserLoggedIn} />}   />
       <Route   path="/favorites"   element={<Favorites userStatus={isUserLoggedIn} />}   />
         <Route   path="/findastore"   element={<Findastore userStatus={isUserLoggedIn} />}   />
        <Route   path="/delivery"   element={<Delivery userStatus={isUserLoggedIn} />}   />
       <Route   path="/signin"   element={<Signin userStatus={isUserLoggedIn} />}   />
       <Route   path="/joinnow"   element={<Joinnow userStatus={isUserLoggedIn} />}   />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


