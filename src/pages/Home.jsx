import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'lightpink' }}>
      <Navbar />

      {/* Hero Section */}
      <header style={{
        backgroundImage: 'url(/assets/banner.png)',
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
          <h1>💕 Rent Your Dream Anime Boyfriend 💕</h1>
          <p>Choose from the cutest, coolest, and weirdest boys in the anime world!</p>
        </div>
      </header>

      <main>
        <Featured />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

