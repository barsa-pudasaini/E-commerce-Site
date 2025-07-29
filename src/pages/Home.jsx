import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <header style={{backgroundImage: 'url(/assets/banner.png)', height:'300px', backgroundSize:'cover', backgroundPosition:'center', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{color:'white', fontSize:'48px', backgroundColor:'rgba(0,0,0,0.5)', padding:'10px 20px', borderRadius:'10px'}}>
          Welcome to Anime Boyfriend Rental
        </h1>
      </header>
      <main style={{padding:'20px'}}>
        <Featured />
      </main>
      <Footer />
    </>
  );
}

export default Home;
