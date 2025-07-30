// src/pages/About.jsx
import React from 'react';
import { Heart, Sparkles, UserCheck } from 'lucide-react';

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
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-primary-pink text-center mb-12 drop-shadow-lg flex items-center justify-center gap-4">
          <Heart size={48} className="text-red-400" />
          Welcome to Rent A Boyfriend
          <Heart size={48} className="text-red-400" />
        </h1>

        {/* Intro Section */}
        <section className="mb-16 bg-white p-10 rounded-2xl shadow-xl border border-pink-200 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-4xl font-bold text-accent-blue mb-6 text-center flex items-center justify-center gap-3">
            Your Ultimate Anime Companion Adventure!
          </h2>
          <p className="text-gray-800 text-xl leading-relaxed mt-4">
            Ever wished for a perfectly understanding companion from your favorite animated worlds? <strong>Rent A Boyfriend</strong> makes that dream a reality!
          </p>
          <p className="text-gray-800 text-xl leading-relaxed mt-6">
            Need a witty conversationalist, a stoic protector, or a gentle listener? Our companions fill your life with joy and imagination.
          </p>
          <p className="text-gray-800 text-xl leading-relaxed mt-6">
            Dive into a delightful escape, and truly connect with the characters you adore. <Sparkles className="inline-block ml-2 text-yellow-400 animate-pulse" />
          </p>
        </section>

        {/* Team Section */}
        <section className="bg-white p-10 rounded-2xl shadow-xl border border-blue-200 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-4xl font-bold text-accent-blue text-center mb-10 flex items-center justify-center gap-3">
            <UserCheck size={36} className="text-green-500" />
            Meet the Brilliant Minds Behind the Magic!
          </h2>

          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gradient-to-br from-blue-50 to-pink-50 p-5 rounded-xl border border-purple-100 shadow-md group hover:shadow-lg transition duration-300"
              >
                {/* Text */}
                <div className="flex flex-col text-left flex-grow pr-4">
                  <h3 className="text-xl font-semibold text-primary-pink group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 italic mt-1">
                    "{member.bio}"
                  </p>
                </div>

                {/* Image */}
                <img
  src={member.avatar}
  alt={member.name}
  style={{ width: '250px', height: '250px' }}
  className="rounded-full object-cover border-2 border-pink-300 shadow-md shrink-0"
/>

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;  