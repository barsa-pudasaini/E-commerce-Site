// src/components/Featured.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import idoroki from '../assets/idoroki.png';
import Gojo from '../assets/Gojo.png';
import Tomoe from '../assets/Tomoe.png';
import Howl from '../assets/Howl.png';
import Megumi from '../assets/Megumi.png';
import Sukuna from '../assets/Sukuna.png';
import suguru from '../assets/suguru.png';
import osami from '../assets/osami.png';
import toji from '../assets/toji.png';
import ken from '../assets/ken.png';
import tengen from '../assets/tengen.png';
import toge from '../assets/toge.png';
import inosuke from '../assets/inosuke.png';
import akito from '../assets/akito.png';
import gabimaru from '../assets/gabimaru.png';
import yamato from '../assets/yamato.png';
import kazutora from '../assets/kazutora.png';
import levi from '../assets/levi.png';
import miyamura from '../assets/miyamura.png';
import rinne from '../assets/rinne.png';

const topCharacters = [
  { id: 1, name: 'Todoroki', image: idoroki, price: 200000, popularity: 90 },
  { id: 2, name: 'Gojo Satoru', image: Gojo, price: 15000, popularity: 80 },
  { id: 3, name: 'Tomoe', image: Tomoe, price: 25030, popularity: 99 },
  { id: 4, name: 'Howl loirissímo', image: Howl, price: 18050, popularity: 85 },
  { id: 5, name: 'Megumi Fushiguro', image: Megumi, price: 17700, popularity: 75 },
  { id: 6, name: 'Sukuna Ryomen', image: Sukuna, price: 16800, popularity: 70 },
];

const allCharacters = [
  ...topCharacters,
  { id: 7, name: 'Suguru Geto', image: suguru, price: 13500, popularity: 60 },
  { id: 8, name: 'Osamu Dazai', image: osami, price: 149900, popularity: 65 },
  { id: 9, name: 'Toji Fushiguro', image: toji, price: 12950, popularity: 55 },
  { id: 10, name: 'Ken Kaneki', image: ken, price: 11900, popularity: 50 },
  { id: 11, name: 'Tengen Uzui', image: tengen, price: 100050, popularity: 45 },
  { id: 12, name: 'Toge Inumaki', image: toge, price: 19150, popularity: 40 },
  { id: 13, name: 'Inosuke Hashibira', image: inosuke, price: 12000, popularity: 76 },
  { id: 14, name: 'Akito Yamada', image: akito, price: 95560, popularity: 30 },
  { id: 15, name: 'Gabimaru', image: gabimaru, price: 90990, popularity: 60 },
  { id: 16, name: 'Yamato Endo', image: yamato, price: 87650, popularity: 57 },
  { id: 17, name: 'Kazutora Hanemiya', image: kazutora, price: 89900, popularity: 65 },
  { id: 18, name: 'Levi Ackerman', image: levi, price: 79850, popularity: 10 },
  { id: 19, name: 'Izumi Miyamura', image: miyamura, price: 30700, popularity: 59 },
  { id: 20, name: 'Rinne Amagi', image: rinne, price: 69950, popularity: 3 },
];

const Featured = ({ onAddToCart, onAddToWishlist }) => {
  const [sort, setSort] = useState('popularity');

  const sortedAll = [...allCharacters].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    return b.popularity - a.popularity;
  });

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const btnStyle = {
    marginTop: '8px',
    padding: '6px 10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <section style={{ padding: '30px' }}>
      {/* Top Characters */}
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>✨ Top Characters ✨</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {topCharacters.map((char) => (
          <div key={char.id} style={cardStyle}>
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{char.name}</h3>
            <p><strong>Price:</strong> Rs. {char.price}</p>
            <Link to={`/profile/${char.id}`}>
              <button style={{ ...btnStyle, backgroundColor: '#ff69b4', color: 'white' }}>
                View Profile
              </button>
            </Link>
           
          </div>
        ))}
      </div>

      {/* All Characters header + filter */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ fontSize: '28px' }}>All Characters</h2>
        <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: '8px' }}>
          <option value="popularity">Sort by Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* All Characters Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px',
        }}
      >
        {sortedAll.map((char) => (
          <div key={char.id} style={cardStyle}>
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{char.name}</h3>
            <p><strong>Price:</strong> Rs. {char.price}</p>
            <Link to={`/profile/${char.id}`}>
              <button style={{ ...btnStyle, backgroundColor: '#ff69b4', color: 'white' }}>
                View Profile
              </button>
            </Link>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
