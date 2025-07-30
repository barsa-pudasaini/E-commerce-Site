import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';
import ProfilePage from './pages/profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlistItems');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]);
    setWishlistItems([]);
    alert('Logged out. Cart and wishlist cleared.');
  };

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        cartItemsCount={cartItems.length}
        wishlistItemsCount={wishlistItems.length}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
 <Route path="/profile/:id" element={<ProfilePage isLoggedIn={isLoggedIn} />} />


        {/* Placeholder for signup, assuming it's not a full component yet */}
        <Route path="/signup" element={<div className="min-h-screen bg-cream-white flex items-center justify-center text-2xl text-primary-pink">Sign Up Page</div>} />

            </Routes>
    </Router>
  );
}

export default App;