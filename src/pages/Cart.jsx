// src/pages/Cart.jsx
import React from 'react';

// Cart page accepts props from App.jsx
const Cart = ({ cartItems, setCartItems }) => { // IMPORTANT: These props are required
  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id)); // Updates App.jsx's state
  };

  return (
    <div className="bg-cream-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary-pink mb-8">Your Cart</h1>

        {/* Conditional rendering based on whether cartItems is empty */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty. Start adding some boyfriends!</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
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

        {/* Checkout button (only if there are items in the cart) */}
        {cartItems.length > 0 && (
          <div className="mt-8 text-center">
            <button className="bg-accent-blue text-white px-6 py-3 rounded-lg text-lg hover:bg-soft-blue transition-colors duration-200">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; // IMPORTANT: Ensure this is 'export default Cart;'