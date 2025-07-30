import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import gojo1 from '../assets/gojo1.png';
import gojo2 from '../assets/gojo2.png';    
import gojo3 from '../assets/gojo3.png';
import gojo4 from '../assets/gojo4.png';
import tomoe1 from '../assets/tomoe1.png';
import tomoe2 from '../assets/tomoe2.png';
import tomoe3 from '../assets/tomoe3.png';
import tomoe4 from '../assets/tomoe4.png';
import howl1 from '../assets/howl1.png';
import howl2 from '../assets/howl2.png';        
import howl3 from '../assets/howl3.png';
import howl4 from '../assets/howl4.png';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png'; 
import m3 from '../assets/m3.png';
import m4 from '../assets/m4.png';
import sukuna1 from '../assets/sukuna1.png';
import sukuna2 from '../assets/sukuna2.png';
import sukuna3 from '../assets/sukuna3.png';
import sukuna4 from '../assets/sukuna4.png';
import suguru1 from '../assets/suguru1.png';
import suguru2 from '../assets/suguru2.png';
import suguru3 from '../assets/suguru3.png';
import suguru4 from '../assets/suguru4.png';
import osamu1 from '../assets/osamu1.png';
import osamu2 from '../assets/osamu2.png';
import osamu3 from '../assets/osamu3.png';
import osamu4 from '../assets/osamu4.png';
import toji1 from '../assets/toji1.png';
import toji2 from '../assets/toji2.png';
import toji3 from '../assets/toji3.png';
import toji4 from '../assets/toji4.png';
import ken1 from '../assets/ken1.png';
import ken2 from '../assets/ken2.png';
import ken3 from '../assets/ken3.png';
import ken4 from '../assets/ken4.png';
import tengen1 from '../assets/tengen1.png';
import tengen2 from '../assets/tengen2.png';
import tengen3 from '../assets/tengen3.png';
import tengen4 from '../assets/tengen4.png';
import toge1 from '../assets/toge1.png';
import toge2 from '../assets/toge2.png';
import toge3 from '../assets/toge3.png';
import toge4 from '../assets/toge4.png';
import inosuke1 from '../assets/inosuke1.png';
import inosuke2 from '../assets/inosuke2.png';
import inosuke3 from '../assets/inosuke3.png';
import inosuke4 from '../assets/inosuke4.png';
import akito1 from '../assets/akito1.png';
import akito2 from '../assets/akito2.png';
import akito3 from '../assets/akito3.png';
import akito4 from '../assets/akito4.png';
import gabimaru1 from '../assets/gabimaru1.png';
import gabimaru2 from '../assets/gabimaru2.png';
import gabimaru3 from '../assets/gabimaru3.png';
import gabimaru4 from '../assets/gabimaru4.png';
import yamato1 from '../assets/yamato1.png';
import yamato2 from '../assets/yamato2.png';
import yamato3 from '../assets/yamato3.png';
import yamato4 from '../assets/yamato4.png';
import kazutora1 from '../assets/kazutora1.png';
import kazutora2 from '../assets/kazutora2.png';
import kazutora3 from '../assets/kazutora3.png';
import kazutora4 from '../assets/kazutora4.png';
import levi1 from '../assets/levi1.png';
import levi2 from '../assets/levi2.png';
import levi3 from '../assets/levi3.png';
import levi4 from '../assets/levi4.png';
import izumi1 from '../assets/izumi1.png';
import izumi2 from '../assets/izumi2.png';
import izumi3 from '../assets/izumi3.png';
import izumi4 from '../assets/izumi4.png';
import rinne1 from '../assets/rinne1.png';
import rinne2 from '../assets/rinne2.png';
import rinne3 from '../assets/rinne3.png';
import rinne4 from '../assets/rinne4.png';

 const characters = [
  {
    id: 1,
    name: 'Todoroki',
    images: [
      t1,
      t2,
      t3,
      t4
    ],
    price: 200000,
    rating: 4.5,
    description: 'Calm and powerful with fire and ice abilities.',
    personality: 'Quiet, serious, caring.',
    likes: ['Fire', 'Ice', 'Peace'],
    dislikes: ['Noise', 'Disrespect'],
    dialogue: "Let's make the world better.",
  },
  {
    id: 2,
    name: 'Gojo Satoru',
    images: [
      gojo1,
      gojo2,
      gojo3,
      gojo4
    ],
    price: 15000,
    rating: 5,
    description: 'Strongest and playful.',
    personality: 'Confident, cheeky, protective.',
    likes: ['Pranks', 'Winning', 'Teaching'],
    dislikes: ['Weakness', 'Boredom'],
    dialogue: "You can't beat me!",
  },
  {
    id: 3,
    name: 'Tomoe',
    images: [
        tomoe1,
        tomoe2,
        tomoe3,
        tomoe4
    ],
    price: 25030,
    rating: 4.8,
    description: 'Mysterious and charming spirit.',
    personality: 'Loyal, witty, mysterious.',
    likes: ['Quiet', 'Tea', 'Helping others'],
    dislikes: ['Dishonesty', 'Crowds'],
    dialogue: 'My devotion is eternal.',
  },
  {
    id: 4,
    name: 'Howl loirissímo',
    images: [
        howl1,
        howl2,
        howl3,
        howl4
    ],
    price: 18050,
    rating: 4.7,
    description: 'Whimsical wizard.',
    personality: 'Flamboyant, caring, adventurous.',
    likes: ['Magic', 'Freedom', 'Travel'],
    dislikes: ['Boredom', 'Rules'],
    dialogue: 'Magic is in the heart.',
  },
  {
    id: 5,
    name: 'Megumi Fushiguro',
    images: [
        m1,
        m2,
        m3,
        m4
    ],
    price: 17700,
    rating: 4.3,
    description: 'Serious and skilled sorcerer.',
    personality: 'Reserved, smart, loyal.',
    likes: ['Training', 'Animals', 'Justice'],
    dislikes: ['Injustice', 'Lies'],
    dialogue: 'I fight to protect.',
  },
  {
    id: 6,
    name: 'Sukuna Ryomen',
    images: [
        sukuna1,
        sukuna2,
        sukuna3,
        sukuna4
    ],
    price: 16800,
    rating: 4.0,
    description: 'Powerful cursed spirit.',
    personality: 'Confident, fierce, unpredictable.',
    likes: ['Power', 'Chaos'],
    dislikes: ['Weakness', 'Betrayal'],
    dialogue: 'Bow before the King of Curses.',
  },
  {
    id: 7,
    name: 'Suguru Geto',
    images: [
        suguru1,
        suguru2,
        suguru3,
        suguru4
    ],
    price: 13500,
    rating: 4.1,
    description: 'Charismatic antagonist.',
    personality: 'Calm, persuasive, determined.',
    likes: ['Beliefs', 'Order'],
    dislikes: ['Opposition'],
    dialogue: 'Only the strong survive.',
  },
  {
    id: 8,
    name: 'Osamu Dazai',
    images: [
        osamu1,
        osamu2,
        osamu3,
        osamu4
    ],
    price: 149900,
    rating: 4.2,
    description: 'Mysterious and clever.',
    personality: 'Witty, mysterious, playful.',
    likes: ['Books', 'Pranks'],
    dislikes: ['Boredom'],
    dialogue: 'Life is a game.',
  },
  {
    id: 9,
    name: 'Toji Fushiguro',
    images: [
        toji1,
        toji2,
        toji3,
        toji4
    ],
    price: 12950,
    rating: 4.4,
    description: 'Strong and silent.',
    personality: 'Stoic, reliable, fierce.',
    likes: ['Training', 'Strength'],
    dislikes: ['Weakness'],
    dialogue: 'Strength is everything.',
  },
  {
    id: 10,
    name: 'Ken Kaneki',
    images: [
        ken1,
        ken2,
        ken3,
        ken4
    ],
    price: 11900,
    rating: 4.3,
    description: 'Complex and kind.',
    personality: 'Shy, brave, thoughtful.',
    likes: ['Books', 'Friends'],
    dislikes: ['Pain'],
    dialogue: 'I will protect you.',
  },
  {
    id: 11,
    name: 'Tengen Uzui',
    images: [
        tengen1,
        tengen2,
        tengen3,
        tengen4
    ],
    price: 100050,
    rating: 4.6,
    description: 'Flashy and strong.',
    personality: 'Energetic, bold, loyal.',
    likes: ['Music', 'Glitz'],
    dislikes: ['Boring things'],
    dialogue: 'Shine bright like a gem.',
  },
  {
    id: 12,
    name: 'Toge Inumaki',
    images: [
      toge1,
      toge2,
      toge3,
      toge4
    ],
    price: 19150,
    rating: 4.4,
    description: 'Silent and mysterious.',
    personality: 'Quiet, focused, loyal.',
    likes: ['Rice Balls', 'Peace'],
    dislikes: ['Noise'],
    dialogue: '... (quietly)',
  },
  {
    id: 13,
    name: 'Inosuke Hashibira',
    images: [
        inosuke1,
        inosuke2,
        inosuke3,
        inosuke4
    ],
    price: 12000,
    rating: 4.2,
    description: 'Wild and energetic.',
    personality: 'Loud, brave, loyal.',
    likes: ['Fighting', 'Freedom'],
    dislikes: ['Rules'],
    dialogue: 'Let\'s fight!',
  },
  {
    id: 14,
    name: 'Akito Yamada',
    images: [
        akito1,
        akito2,
        akito3,
        akito4
    ],
    price: 95560,
    rating: 4.3,
    description: 'Strong and smart.',
    personality: 'Quiet, clever, kind.',
    likes: ['Reading', 'Nature'],
    dislikes: ['Chaos'],
    dialogue: 'Knowledge is power.',
  },
  {
    id: 15,
    name: 'Gabimaru',
    images: [
      gabimaru1,
      gabimaru2,
      gabimaru3,
      gabimaru4
    ],
    price: 90990,
    rating: 4.0,
    description: 'Silent but deadly.',
    personality: 'Focused, calm, fierce.',
    likes: ['Peace', 'Family'],
    dislikes: ['Betrayal'],
    dialogue: 'I am unstoppable.',
  },
  {
    id: 16,
    name: 'Yamato Endo',
    images: [
        yamato1,
        yamato2,
        yamato3,
        yamato4
    ],
    price: 87650,
    rating: 4.1,
    description: 'Loyal and brave.',
    personality: 'Strong, caring, honest.',
    likes: ['Friends', 'Justice'],
    dislikes: ['Lies'],
    dialogue: 'Justice will prevail.',
  },
  {
    id: 17,
    name: 'Kazutora Hanemiya',
    images: [
        kazutora1,
        kazutora2,
        kazutora3,
        kazutora4
    ],
    price: 89900,
    rating: 4.2,
    description: 'Complex and passionate.',
    personality: 'Emotional, loyal, brave.',
    likes: ['Music', 'Friends'],
    dislikes: ['Betrayal'],
    dialogue: 'Music is my life.',
  },
  {
    id: 18,
    name: 'Levi Ackerman',
    images: [
        levi1,
        levi2,
        levi3,
        levi4
    ],
    price: 79850,
    rating: 5,
    description: 'Calm and deadly soldier.',
    personality: 'Serious, disciplined, protective.',
    likes: ['Cleanliness', 'Fighting'],
    dislikes: ['Mess'],
    dialogue: 'Discipline is key.',
  },
  {
    id: 19,
    name: 'Izumi Miyamura',
    images: [
        izumi1,
        izumi2,
        izumi3,
        izumi4
    ],
    price: 30700,
    rating: 4.1,
    description: 'Shy but kind.',
    personality: 'Quiet, caring, honest.',
    likes: ['Reading', 'Helping others'],
    dislikes: ['Lies'],
    dialogue: 'Kindness matters.',
  },
  {
    id: 20,
    name: 'Rinne Amagi',
    images: [
      rinne1,
      rinne2,
      rinne3,
      rinne4
    ],
    price: 69950,
    rating: 4.0,
    description: 'Mysterious and strong.',
    personality: 'Calm, serious, loyal.',
    likes: ['Mystery', 'Peace'],
    dislikes: ['Conflict'],
    dialogue: 'I walk my own path.',
  },
];

 const ProfilePage = ({ isLoggedIn, setIsLoggedIn }) => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showCuteMsg, setShowCuteMsg] = useState(false);
  const [cuteMsg, setCuteMsg] = useState('');

  const character = characters.find((c) => c.id === Number(id)) || characters[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % character.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + character.images.length) % character.images.length);
  };

  const showCuteAlert = (message) => {
    setCuteMsg(message);
    setShowCuteMsg(true);
    setTimeout(() => setShowCuteMsg(false), 2500);
  };

  const handleActionClick = (actionName) => {
    if (!isLoggedIn) {
      setShowRegister(true);
    } else {
      let message = '';
      switch (actionName) {
        case 'Rent':
          message = "Yay! Rented successfully..I'm on my way (❁´◡`❁)";
          break;
        case 'Add to Cart':
          message = "Added to cart! Can't wait for you to check out 💖";
          break;
        case 'Add to Wishlist':
          message = "Added to your wishlist! Saving the cuteness for later 🌸";
          break;
        default:
          message = `${actionName} successful!`;
      }
      showCuteAlert(message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email.includes('@') || !email.includes('.')) {
      alert('Email format is invalid');
      return;
    }
    if (password.length < 4) {
      alert('Password must be at least 4 characters');
      return;
    }

    alert('YayyXD!! Registration successful! You can now add to cart, wishlist, or rent.');
    setShowRegister(false);
    setIsLoggedIn(true);
    setFormData({ email: '', password: '' });
  };

  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>                🎀 Character Profile 🎀 </h1>
      <h1>{character.name}</h1>


      <div style={{ position: 'relative', width: '100%', height: '600px', marginBottom: '20px' }}>
        <img
          src={character.images[currentImageIndex]}
          alt={`${character.name} image ${currentImageIndex + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
        />
        <button onClick={prevImage} style={navBtnStyle}>‹</button>
        <button onClick={nextImage} style={{ ...navBtnStyle, right: '10px', left: 'auto' }}>›</button>
      </div>

      <p><strong>Description:</strong> {character.description}</p>
      <p><strong>Personality:</strong> {character.personality}</p>
      <p><strong>Likes:</strong> {character.likes.join(', ')}</p>
      <p><strong>Dislikes:</strong> {character.dislikes.join(', ')}</p>
      <p><strong>Fun dialogue:</strong> "{character.dialogue}"</p>
      <p><strong>Rating:</strong> {'⭐'.repeat(Math.floor(character.rating))}{character.rating % 1 ? '⭐️' : ''}</p>
      <p><strong>Price:</strong> Rs. {character.price}</p>

      <button onClick={() => handleActionClick('Rent')} style={rentBtnStyle}>Rent Me UwU</button>
      <button onClick={() => handleActionClick('Add to Cart')} style={cartBtnStyle}>🛒</button>
      <button onClick={() => handleActionClick('Add to Wishlist')} style={wishBtnStyle}>💗</button>

      {showRegister && (
        <div style={popupStyle}>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3>Register First</h3>
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={inputStyle}
            />
            <button type="submit" style={registerBtnStyle}>Register</button>
            <button type="button" onClick={() => setShowRegister(false)} style={cancelBtnStyle}>Cancel</button>
          </form>
        </div>
      )}

      {showCuteMsg && (
        <div style={cuteMsgStyle}>
          {cuteMsg}
        </div>
      )}
    </div>
  );
};

const navBtnStyle = {
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)',
  fontSize: '24px',
  background: 'rgba(243, 136, 218, 0.7)',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  padding: '5px 12px',
};

const rentBtnStyle = {
  padding: '10px 20px',
  marginRight: '10px',
  backgroundColor: '#ff69b4',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const cartBtnStyle = {
  padding: '10px 20px',
  backgroundColor: '#ff1493',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const wishBtnStyle = {
  padding: '10px 20px',
  marginLeft: '10px',
  backgroundColor: '#ff69b4',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '30px',
  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  zIndex: 999,
  borderRadius: '10px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
};

const registerBtnStyle = {
  backgroundColor: '#d97ff4ff',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const cancelBtnStyle = {
  marginTop: '10px',
  backgroundColor: 'gray',
  color: 'white',
  padding: '8px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const cuteMsgStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#ff69b4',
  color: 'white',
  padding: '15px 25px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  fontWeight: 'bold',
  fontSize: '16px',
  zIndex: 1000,
  animation: 'popin 0.6s ease',
};

export default ProfilePage;