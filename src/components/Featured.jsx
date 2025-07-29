import React, { useState } from 'react';
import idoroki from '../assets/idoroki.png';
import Gojo from '../assets/Gojo.png';
import Tomoe from '../assets/Tomoe.png';
import Howl from '../assets/Howl.png';
import Megumi from '../assets/Megumi.png';
import Sukuna from '../assets/Sukuna.png';

// New characters image imports
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

// 6 characters for Top Characters
const topCharacters = [
  { id: 1, name: 'Todoroki', image: idoroki, price: 2000, popularity: 90 },
  { id: 2, name: 'Gojo Satoru', image: Gojo, price: 1500, popularity: 80 },
  { id: 3, name: 'Tomoe', image: Tomoe, price: 2500, popularity: 99 },
  { id: 4, name: 'Howl loirissímo', image: Howl, price: 1800, popularity: 85 },
  { id: 5, name: 'Megumi Fushiguro', image: Megumi, price: 1700, popularity: 75 },
  { id: 6, name: 'Sukuna Ryomen', image: Sukuna, price: 1600, popularity: 70 },
];

// All characters (top + 14 more)
const allCharacters = [
  ...topCharacters,
  { id: 7, name: 'Suguru Geto', image: suguru, price: 1300, popularity: 60 },
  { id: 8, name: 'Osamu Dazai', image: osami, price: 1400, popularity: 65 },
  { id: 9, name: 'Toji Fushiguro', image: toji, price: 1250, popularity: 55 },
  { id: 10, name: 'Ken Kaneki', image: ken, price: 1100, popularity: 50 },
  { id: 11, name: 'Tengen Uzui', image: tengen, price: 1050, popularity: 45 },
  { id: 12, name: 'Toge Inumaki', image: toge, price: 1150, popularity: 40 },
  { id: 13, name: 'Inosuke Hashibira', image: inosuke, price: 1000, popularity: 35 },
  { id: 14, name: 'Akito Yamada', image: akito, price: 950, popularity: 30 },
  { id: 15, name: 'Gabimaru', image: gabimaru, price: 900, popularity: 25 },
  { id: 16, name: 'Yamato Endo', image: yamato, price: 850, popularity: 20 },
  { id: 17, name: 'Kazutora Hanemiya', image: kazutora, price: 800, popularity: 15 },
  { id: 18, name: 'Levi Ackerman', image: levi, price: 750, popularity: 10 },
  { id: 19, name: 'Izumi Miyamura', image: miyamura, price: 700, popularity: 5 },
  { id: 20, name: 'Rinne Amagi', image: rinne, price: 650, popularity: 3 },
];

const Featured = () => {
  const [sort, setSort] = useState('popularity');

  const sortedAll = [...allCharacters].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    return b.popularity - a.popularity;
  });

  return (
    <section style={{ padding: '30px' }}>
      {/* Top Characters */}
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>✨ Top Characters ✨</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {topCharacters.map((char) => (
          <div
            key={char.id}
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              borderRadius: '12px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{char.name}</h3>
            <p><strong>Price:</strong> Rs. {char.price}</p>
            <button
              style={{
                marginTop: '10px',
                padding: '8px 12px',
                backgroundColor: '#ff69b4',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
              }}
            >
              View Profile
            </button>
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {sortedAll.map((char) => (
          <div
            key={char.id}
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              borderRadius: '12px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{char.name}</h3>
            <p><strong>Price:</strong> Rs. {char.price}</p>
            <button
              style={{
                marginTop: '10px',
                padding: '8px 12px',
                backgroundColor: '#ff69b4',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
              }}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
