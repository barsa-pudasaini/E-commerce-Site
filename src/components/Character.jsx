import React from 'react';

const Character = ({ name, image }) => {
  return (
    <div style={{border:'1px solid #ddd', padding:'10px', width:'150px'}}>
      <img src={image} alt={name} style={{width:'100%'}} />
      <h3>{name}</h3>
    </div>
  );
}

export default Character;
