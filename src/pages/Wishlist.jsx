// src/pages/Wishlist.jsx
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wishlist = ({ isLoggedIn, wishlistItems, setWishlistItems }) => {
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      alert("Please login to view your wishlist");
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-cream-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary-pink mb-8">
          Your Wishlist ({wishlistItems.length})
        </h1>
        
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Your wishlist is empty. Discover your favorites!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white rounded-lg shadow-md p-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md mr-4" 
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-secondary-pink">{item.name}</h3>
                  <p className="text-gray-600">Rs. {item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 bg-red-400 text-white p-2 rounded-md hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;