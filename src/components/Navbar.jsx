
// src/components/Navbar.jsx
import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogin, onLogout, cartItemsCount, wishlistItemsCount }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  // Your existing styles (keep them as they are)
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
    transition: 'color 0.3s',
  };

  const iconButtonStyle = {
    padding: '6px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: '#ff4081',
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin();
    setShowLoginModal(false);
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      navigate('/cart');
    }
  };

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      navigate('/wishlist');
    }
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 30px',
      backgroundColor: '#ffe6f0',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '24px', textDecoration: 'none', color: 'inherit' }}>
        Rent A Boyfriend
      </Link>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
        alignItems: 'center',
      }}>
        <li>
          <div
            style={iconButtonStyle}
            onClick={handleCartClick}
          >
            <ShoppingCart size={24} color="#333" />
            {isLoggedIn && cartItemsCount > 0 && (
              <span style={badgeStyle}>{cartItemsCount}</span>
            )}
          </div>
        </li>

        <li>
          <div
            style={iconButtonStyle}
            onClick={handleWishlistClick}
          >
            <Heart size={24} color="#333" strokeWidth={1.5} />
            {isLoggedIn && wishlistItemsCount > 0 && (
              <span style={badgeStyle}>{wishlistItemsCount}</span>
            )}
          </div>
        </li>

        <li>
          {isLoggedIn ? (
            <button
              onClick={handleLogoutClick}
              style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Log In
            </button>
          )}
        </li>
        <li><Link to="/signup" style={linkStyle}>Sign Up</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>     {/* This links to your new About page */}
       <li>
  <Link to="/contact" style={linkStyle}>Contact</Link>

</li> {/* This links to your new Contact page */}
      </ul>

      {showLoginModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000,
        }} onClick={() => setShowLoginModal(false)}>
          <div style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '300px',
          }} onClick={e => e.stopPropagation()}>
            <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <input type="email" placeholder="Email" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <input type="password" placeholder="Password" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%', padding: '10px', backgroundColor: '#ff4081',
                  color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;