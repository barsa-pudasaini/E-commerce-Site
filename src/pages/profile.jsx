import React, { useState } from 'react';
const characters = [
  {
    id: 1,
    name: 'Todoroki',
    images: [
      '/assets/idoroki1.png',
      '/assets/idoroki2.png',
      '/assets/idoroki3.png',
      '/assets/idoroki4.png',
      '/assets/idoroki5.png',
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
      '/assets/gojo1.png',
      '/assets/gojo2.png',
      '/assets/gojo3.png',
      '/assets/gojo4.png',
      '/assets/gojo5.png',
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
      '/assets/tomoe1.png',
      '/assets/tomoe2.png',
      '/assets/tomoe3.png',
      '/assets/tomoe4.png',
      '/assets/tomoe5.png',
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
      '/assets/howl1.png',
      '/assets/howl2.png',
      '/assets/howl3.png',
      '/assets/howl4.png',
      '/assets/howl5.png',
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
      '/assets/megumi1.png',
      '/assets/megumi2.png',
      '/assets/megumi3.png',
      '/assets/megumi4.png',
      '/assets/megumi5.png',
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
      '/assets/sukuna1.png',
      '/assets/sukuna2.png',
      '/assets/sukuna3.png',
      '/assets/sukuna4.png',
      '/assets/sukuna5.png',
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
      '/assets/suguru1.png',
      '/assets/suguru2.png',
      '/assets/suguru3.png',
      '/assets/suguru4.png',
      '/assets/suguru5.png',
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
      '/assets/osamu1.png',
      '/assets/osamu2.png',
      '/assets/osamu3.png',
      '/assets/osamu4.png',
      '/assets/osamu5.png',
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
      '/assets/toji1.png',
      '/assets/toji2.png',
      '/assets/toji3.png',
      '/assets/toji4.png',
      '/assets/toji5.png',
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
      '/assets/ken1.png',
      '/assets/ken2.png',
      '/assets/ken3.png',
      '/assets/ken4.png',
      '/assets/ken5.png',
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
      '/assets/tengen1.png',
      '/assets/tengen2.png',
      '/assets/tengen3.png',
      '/assets/tengen4.png',
      '/assets/tengen5.png',
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
      '/assets/toge1.png',
      '/assets/toge2.png',
      '/assets/toge3.png',
      '/assets/toge4.png',
      '/assets/toge5.png',
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
      '/assets/inosuke1.png',
      '/assets/inosuke2.png',
      '/assets/inosuke3.png',
      '/assets/inosuke4.png',
      '/assets/inosuke5.png',
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
      '/assets/akito1.png',
      '/assets/akito2.png',
      '/assets/akito3.png',
      '/assets/akito4.png',
      '/assets/akito5.png',
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
      '/assets/gabimaru1.png',
      '/assets/gabimaru2.png',
      '/assets/gabimaru3.png',
      '/assets/gabimaru4.png',
      '/assets/gabimaru5.png',
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
      '/assets/yamato1.png',
      '/assets/yamato2.png',
      '/assets/yamato3.png',
      '/assets/yamato4.png',
      '/assets/yamato5.png',
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
      '/assets/kazutora1.png',
      '/assets/kazutora2.png',
      '/assets/kazutora3.png',
      '/assets/kazutora4.png',
      '/assets/kazutora5.png',
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
      '/assets/levi1.png',
      '/assets/levi2.png',
      '/assets/levi3.png',
      '/assets/levi4.png',
      '/assets/levi5.png',
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
      '/assets/miyamura1.png',
      '/assets/miyamura2.png',
      '/assets/miyamura3.png',
      '/assets/miyamura4.png',
      '/assets/miyamura5.png',
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
      '/assets/rinne1.png',
      '/assets/rinne2.png',
      '/assets/rinne3.png',
      '/assets/rinne4.png',
      '/assets/rinne5.png',
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
 const ProfilePage = ({ characterId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showLogin, setShowLogin] = useState(false);

  // NEW states for cute popup alert
  const [cuteMsg, setCuteMsg] = useState('');
  const [showCuteMsg, setShowCuteMsg] = useState(false);

  const character = characters.find((c) => c.id === characterId) || characters[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % character.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + character.images.length) % character.images.length);
  };

  // NEW: reusable function to show cute popup
  const showCuteAlert = (message) => {
    setCuteMsg(message);
    setShowCuteMsg(true);
    setTimeout(() => setShowCuteMsg(false), 2500);
  };

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      setShowRegister(true);
    } else {
      showCuteAlert('Added successfully! 🎀');
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
    setIsLoggedIn(true);
    setShowRegister(false);
    alert('Registration successful! You can now add to cart or wishlist.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>{character.name}</h1>

      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '20px' }}>
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

      <button
        onClick={() => showCuteAlert('Yay! Rented successfully..I\'m on my way (❁´◡`❁)')}
        style={rentBtnStyle}
      >
        Rent
      </button>
      <button onClick={handleButtonClick} style={cartBtnStyle}>Add to Cart</button>
      <button onClick={handleButtonClick} style={wishBtnStyle}>Add to Wishlist</button>

      {showRegister && (
        <div style={popupStyle}>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3>{showLogin ? 'Login' : 'Register'} First</h3>
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
            <button type="submit" style={registerBtnStyle}>
              {showLogin ? 'Login' : 'Register'}
            </button>
            <p style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </p>
            <button type="button" onClick={() => setShowRegister(false)} style={cancelBtnStyle}>Cancel</button>
          </form>
        </div>
      )}

      {/* Cute popup alert */}
      {showCuteMsg && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#ff69b4',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          fontWeight: 'bold',
          fontSize: '16px',
          zIndex: 1000,
          animation: 'popin 0.3s ease',
        }}>
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

export default ProfilePage;