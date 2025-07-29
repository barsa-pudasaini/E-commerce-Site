// src/pages/Wishlist.jsx
import React from 'react';

// Wishlist page accepts props from App.jsx
const Wishlist = ({ wishlistItems, setWishlistItems }) => { // IMPORTANT: These props are required
  // Function to remove an item from the wishlist
  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id)); // Updates App.jsx's state
  };

  return (
    <div className="bg-cream-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary-pink mb-8">Your Wishlist</h1>

        {/* Conditional rendering based on whether wishlistItems is empty */}
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your wishlist is empty. Discover your favorites!</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white rounded-lg shadow-md p-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-secondary-pink">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 bg-red-400 text-white p-2 rounded-md hover:bg-red-500 transition-colors duration-200"
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

export default Wishlist; // IMPORTANT: Ensure this is 'export default Wishlist;'