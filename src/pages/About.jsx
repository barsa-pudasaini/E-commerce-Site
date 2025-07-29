// src/pages/About.jsx
import React from 'react';

const About = () => {
  // Team member data
  const teamMembers = [
    {
      name: 'Grishma',
      avatar: '/images/avatars/grishma.jpg', // Ensure this path is correct and file exists in public/images/avatars/
      bio: 'Our creative visionary, bringing the magic of anime companionship to life!',
    },
    {
      name: 'Garima',
      avatar: '/images/avatars/garima.jpg', // Ensure this path is correct and file exists in public/images/avatars/
      bio: 'The strategic mind behind our perfect matches, ensuring every rental is a dream.',
    },
    {
      name: 'Aakrisha',
      avatar: '/images/avatars/aakrisha.jpg', // Ensure this path is correct and file exists in public/images/avatars/
      bio: 'User experience wizard, making sure your journey to find companionship is smooth and delightful.',
    },
    {
      name: 'Monsoon',
      avatar: '/images/avatars/monsoon.jpg', // Ensure this path is correct and file exists in public/images/avatars/
      bio: 'Our tech maestro, building the reliable platform that connects you with your ideal anime partner.',
    },
  ];

  return (
    <div className="bg-cream-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary-pink text-center mb-8">
          About Us: Rent A Boyfriend
        </h1>

        {/* Brief Intro - NEW VERY LIGHT BACKGROUND, DARK TEXT FOR READABILITY */}
        <section className="mb-12 p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFF5EE' /* Very light Seashell/Blush pink */ }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Perfect Anime Companion Awaits!</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to **Rent A Boyfriend**! We bring your anime dreams to life, connecting you with charming, supportive virtual companions tailored to your desires. It's a whimsical escape and a joyful connection to the characters you adore. Dive in!
          </p>
        </section>

        {/* Meet the Team */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-accent-blue text-center mb-8">Meet the Team Behind the Magic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-secondary-pink mb-4"
                />
                <h3 className="text-xl font-semibold text-primary-pink mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm italic">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;