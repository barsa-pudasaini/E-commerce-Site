import React from 'react';

import grishma from '../assets/grishma.png';
import garima from '../assets/garima.png';
import aakrisha from '../assets/aakrisha.png';
import monsoon from '../assets/monsoon.png';

const About = () => {
  const teamMembers = [
    {
      name: 'Grishma',
      avatar: grishma,
      bio: 'Because why cry over a real man when you can code a better one?',
    },
    {
      name: 'Garima',
      avatar: garima,
      bio: 'Dating apps gave you the ick? We give you options.',
    },
    {
      name: 'Aakrisha',
      avatar: aakrisha,
      bio: 'User experience wizard, making sure your journey to find companionship is smooth and delightful.',
    },
    {
      name: 'Monsoon',
      avatar: monsoon,
      bio: 'Our tech maestro, building the reliable platform that connects you with your ideal anime partner.',
    },
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #ffe4f0, #f3d6ff)',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#6b2a45',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '3.5rem',
        marginBottom: '30px',
        color: '#d6336c',
        fontWeight: '900',
        textShadow: '2px 2px 5px #f9c5d5',
      }}>
        💖 Welcome to Rent A Boyfriend 💖
      </h1>

      <section style={{
        maxWidth: 700,
        margin: '0 auto 60px',
        backgroundColor: '#ffd6e8',
        padding: '30px 35px',
        borderRadius: '18px',
        boxShadow: '0 8px 18px rgba(214, 51, 108, 0.3)',
        fontSize: '1.3rem',
        lineHeight: '1.8',
        userSelect: 'none',
      }}>
        <p>
          Ever wished for a perfectly understanding companion from your favorite anime worlds? <strong>Rent A Boyfriend</strong> makes that dream a reality! Whether you’re craving a witty conversationalist to brighten your day, a stoic protector to feel safe and cared for, or simply a gentle listener to share your thoughts with, our collection of charming characters is here to bring warmth and joy to your everyday life.
        </p>
        <p style={{ marginTop: '20px' }}>
          Our platform is designed with love and attention to detail, ensuring a seamless and delightful experience as you explore, choose, and connect with your ideal anime partner. From heartfelt moments to playful banter, Rent A Boyfriend offers a unique escape that blends fantasy with companionship — all tailored to your preferences and mood.
        </p>
        <p style={{ marginTop: '20px' }}>
          Dive into your new favorite experience — the ultimate blend of charm, fun, and companionship, all just a click away. Let your imagination run free and make every day a little brighter with Rent A Boyfriend by your side.
        </p>
      </section>

      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '40px',
        color: '#b33462',
        fontWeight: '700',
        textShadow: '1px 1px 3px #f9c5d5',
        userSelect: 'none',
      }}>
        👥 Meet the Team Behind the Magic 👥
      </h2>

      <section style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
      }}>
        {teamMembers.map((member, i) => (
          <div key={i} style={{
            backgroundColor: '#ffd6e8',
            borderRadius: '20px',
            boxShadow: '0 10px 20px rgba(214, 51, 108, 0.25)',
            padding: '20px',
            width: '260px',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 25px rgba(214, 51, 108, 0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(214, 51, 108, 0.25)';
          }}>
            <img
              src={member.avatar}
              alt={member.name}
              style={{
                width: '160px',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '5px solid #ff8cc1',
                boxShadow: '0 6px 10px rgba(255, 140, 193, 0.6)',
                marginBottom: '15px',
              }}
            />
            <h3 style={{
              color: '#b33462',
              fontSize: '1.8rem',
              marginBottom: '10px',
              fontWeight: '700',
            }}>
              {member.name}
            </h3>
            <p style={{
              fontStyle: 'italic',
              color: '#6b2a45',
              fontSize: '1rem',
              lineHeight: '1.4',
              padding: '0 10px',
              userSelect: 'none',
            }}>
              "{member.bio}"
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
