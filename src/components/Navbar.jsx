import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({
  isLoggedIn,
  onLogin,
  onLogout,
  cartItemsCount,
  wishlistItemsCount,
}) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true); // true = login, false = register
  const [postLoginNavigate, setPostLoginNavigate] = useState(null);

  const [formData, setFormData] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const resetForm = () => setFormData({ email: '', password: '' });

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

  const validateEmail = (email) => email.includes('@') && email.includes('.');

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password.length < 4) {
      alert('Password must be at least 4 characters');
      return;
    }
    if (isLoginMode) {
      // Dummy login success
      onLogin();
      alert('Login successful! 🎉');
    } else {
      // Dummy register success
      alert('Registration successful! Please log in now.');
      setIsLoginMode(true);
      resetForm();
      return;
    }
    setShowAuthModal(false);
    resetForm();

    // Navigate if user intended a page after login/registration
    if (postLoginNavigate) {
      navigate(postLoginNavigate);
      setPostLoginNavigate(null);
    }
  };

  const promptAuthModal = (mode, targetPath = null) => {
    setIsLoginMode(mode === 'login');
    setShowAuthModal(true);
    setPostLoginNavigate(targetPath);
    resetForm();
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      promptAuthModal('login', '/cart');
      alert('Please login to view your cart.');
    } else {
      navigate('/cart');
    }
  };

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      promptAuthModal('login', '/wishlist');
      alert('Please login to view your wishlist.');
    } else {
      navigate('/wishlist');
    }
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 30px',
        backgroundColor: '#ffe6f0',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '24px', textDecoration: 'none', color: 'inherit' }}>
        Rent A Boyfriend
      </Link>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}
      >
        <li>
          <div style={iconButtonStyle} onClick={handleCartClick}>
            <ShoppingCart size={24} color="#333" />
            {isLoggedIn && cartItemsCount > 0 && <span style={badgeStyle}>{cartItemsCount}</span>}
          </div>
        </li>

        <li>
          <div style={iconButtonStyle} onClick={handleWishlistClick}>
            <Heart size={24} color="#333" strokeWidth={1.5} />
            {isLoggedIn && wishlistItemsCount > 0 && <span style={badgeStyle}>{wishlistItemsCount}</span>}
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
              onClick={() => promptAuthModal('login')}
              style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Log In
            </button>
          )}
        </li>
  <li>
  <button
    onClick={() => {
      setIsLoginMode(false); // show register form
      setShowAuthModal(true);
      resetForm();
    }}
    style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
  >
    Sign Up
  </button>
</li>

  <li>
    <Link to="/about" style={linkStyle}>
      About
    </Link>
  </li>
  <li>
    <Link to="/contact" style={linkStyle}>
      Contact
    </Link>
  </li>
</ul>

      {showAuthModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowAuthModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              width: '320px',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>{isLoginMode ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#ff4081',
                  color: 'white',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                {isLoginMode ? 'Login' : 'Register'}
              </button>
            </form>
            <p
              onClick={() => setIsLoginMode(!isLoginMode)}
              style={{ marginTop: '15px', textAlign: 'center', cursor: 'pointer', color: '#ff4081', userSelect: 'none' }}
            >
              {isLoginMode ? 'Need an account? Register' : 'Already have an account? Login'}
            </p>
            <button
              type="button"
              onClick={() => setShowAuthModal(false)}
              style={{
                marginTop: '10px',
                backgroundColor: 'gray',
                color: 'white',
                padding: '8px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 