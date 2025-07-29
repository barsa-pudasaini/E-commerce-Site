
// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORTANT: Ensure these paths and component names match your actual files
import Navbar from './components/Navbar';
import Home from './pages/Home';         // Make sure your file is Home.jsx
import Cart from './pages/Cart';         // Make sure your file is Cart.jsx
import Wishlist from './pages/Wishlist'; // Make sure your file is Wishlist.jsx
import About from './pages/About';       // Make sure your file is About.jsx
import Contact from './pages/Contact';   // Make sure your file is Contact.jsx

function App() {
  // Central state for login, cart, and wishlist
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from storage:", error);
      return [];
    }
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlistItems');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Error loading wishlist from storage:", error);
      return [];
    }
  });

  // Save cart/wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Login/Logout handlers
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]);
    setWishlistItems([]);
    alert('You have logged out. Your cart and wishlist are now empty.');
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
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              cartItems={cartItems}
              setCartItems={setCartItems}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} />
          }
        />
        {/* These are your new routes for About and Contact */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Placeholder for signup, assuming it's not a full component yet */}
        <Route path="/signup" element={<div className="min-h-screen bg-cream-white flex items-center justify-center text-2xl text-primary-pink">Sign Up Page</div>} />

            </Routes>
    </Router>
  );
}

export default App;










