import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
  return ( 
    
    <div style={{ backgroundColor: 'lightpink' }}>
      
      <Hero />
      <main>
        <Featured />
      </main>
      <Footer />
    </div>

  );
};

export default Home;
