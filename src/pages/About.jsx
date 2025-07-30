// src/pages/About.jsx
import React from 'react';
// Import only the essential icons
import { Heart, Sparkles, UserCheck, Star } from 'lucide-react'; // Reduced imports

const About = () => {
  // Team member data
  const teamMembers = [
    {
      name: 'Grishma',
      avatar: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Grishma-chan', // Cute pink/white avatar
      bio: 'Our creative visionary, bringing the magic of anime companionship to life!',
    },
    {
      name: 'Garima',
      avatar: 'https://via.placeholder.com/150/ADD8E6/FFFFFF?text=Garima-san', // Light blue/white avatar
      bio: 'The strategic mind behind our perfect matches, ensuring every rental is a dream.',
    },
    {
      name: 'Aakrisha',
      avatar: 'https://via.placeholder.com/150/98FB98/FFFFFF?text=Aakrisha-sama', // Pale green/white avatar
      bio: 'User experience wizard, making sure your journey to find companionship is smooth and delightful.',
    },
    {
      name: 'Monsoon',
      avatar: 'https://via.placeholder.com/150/DDA0DD/FFFFFF?text=Monsoon-kun', // Plum/white avatar
      bio: 'Our tech maestro, building the reliable platform that connects you with your ideal anime partner.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-primary-pink text-center mb-10 drop-shadow-lg animate-fade-in-down flex items-center justify-center gap-4">
          <Heart size={48} className="text-red-400" /> {/* Single, prominent heart */}
          Welcome to Rent A Boyfriend
          <Heart size={48} className="text-red-400" />
        </h1>

        {/* Brief Intro */}
        <section className="mb-14 bg-white p-10 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out border border-pink-200 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-4xl font-bold text-accent-blue mb-6 text-center flex items-center justify-center gap-3">
            Your Ultimate Anime Companion Adventure!
          </h2>
          <p className="text-gray-800 text-xl leading-relaxed mt-4 animate-fade-in">
            Ever wished for a perfectly understanding companion from your favorite animated worlds? **Rent A Boyfriend** makes that dream a reality! We connect you with a curated selection of virtual anime boyfriends, each ready to brighten your day.
          </p>
          <p className="text-gray-800 text-xl leading-relaxed mt-6 animate-fade-in delay-100">
            It's more than just a character; it's an **experience**. Need a witty conversationalist, a stoic protector, or a gentle listener? Our companions fill your life with joy and imagination.
          </p>
          <p className="text-gray-800 text-xl leading-relaxed mt-6 animate-fade-in delay-200">
            Dive into a delightful escape, a whimsical diversion, and truly connect with the characters you adore. Your ideal partner is just a click away! <Sparkles className="inline-block ml-2 text-yellow-400 animate-pulse" /> {/* One subtle sparkle at the end */}
          </p>
        </section>

        {/* Meet the Team */}
        <section className="bg-white p-10 rounded-2xl shadow-xl border border-blue-200 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-4xl font-bold text-accent-blue text-center mb-10 flex items-center justify-center gap-3">
            <UserCheck size={36} className="text-green-500" /> {/* A professional touch */}
            Meet the Brilliant Minds Behind the Magic!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-purple-100 group relative overflow-hidden"> {/* Added overflow-hidden */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover border-5 border-secondary-pink shadow-lg mb-5 animate-bounce-slow group-hover:scale-110 transition-transform duration-300"
                />
                {/* Subtle star on hover, inside the card */}
                <Star size={24} className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-180" />
                <h3 className="text-2xl font-semibold text-primary-pink mb-3 group-hover:text-purple-600 transition-colors duration-300">{member.name}</h3>
                <p className="text-gray-700 text-base italic leading-relaxed">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 