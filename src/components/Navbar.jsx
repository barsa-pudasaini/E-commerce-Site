import React from 'react';

const Navbar = () => {
  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'10px 20px', backgroundColor:'#f8f8f8'}}>
      <div style={{fontWeight:'bold', fontSize:'24px'}}>AnimeBF</div>
      <ul style={{listStyle:'none', display:'flex', gap:'20px', margin:0, padding:0}}>
        <li><a href="/">Shop</a></li>
        <li><a href="/wishlist">Crush List</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
