import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 30px',
      backgroundColor: '#ffe6f0',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Rent A Boyfriend</div>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
        alignItems: 'center',
      }}>
        <li>
          <a href="/" style={iconButtonStyle}>
            <ShoppingCart size={24} color="#333" />
          </a>
        </li>
        <li>
          <a href="/wishlist" style={iconButtonStyle}>
            <Heart size={24} color="#333" strokeWidth={1.5} />
          </a>
        </li>
        <li><a href="/login" style={linkStyle}>Log In</a></li>
        <li><a href="/signup" style={linkStyle}>Sign Up</a></li>
        <li><a href="/about" style={linkStyle}>About</a></li>
        <li><a href="/contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

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
};

export default Navbar;



