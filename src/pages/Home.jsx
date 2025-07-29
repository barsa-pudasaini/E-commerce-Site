import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'lightpink' }}>
      <Navbar />
      <Hero />
      <main>
        <Featured />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
