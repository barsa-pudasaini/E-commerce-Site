// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = ({
  isLoggedIn,
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div style={{ backgroundColor: 'lightpink' }}>
      <Hero />
      <main>
        <Featured 
          isLoggedIn={isLoggedIn}
          cartItems={cartItems}
          setCartItems={setCartItems}
          wishlistItems={wishlistItems}
          setWishlistItems={setWishlistItems}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
