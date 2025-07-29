import React from 'react';

const featuredCharacters = [
  {id: 1, name: 'Boy 1', image: '/assets/boy1.png'},
  {id: 2, name: 'Boy 2', image: '/assets/ig.png'},
];

const Featured = () => {
  return (
    <section>
      <h2>Featured Characters</h2>
      <div style={{display:'flex', gap:'20px'}}>
        {featuredCharacters.map((char) => (
          <div key={char.id} style={{border:'1px solid #ddd', padding:'10px', width:'150px'}}>
            <img src={char.image} alt={char.name} style={{width:'100%'}} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
