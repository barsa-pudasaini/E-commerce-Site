// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    alert("Message sent! We'll get back to you after this episode."); // Cute message
    console.log('Form Submitted:', formData); // Log data for demonstration
    // Optionally reset the form:
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-cream-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-primary-pink text-center mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
              placeholder="E.g., Anime Fanatic"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
              placeholder="E.g., bestfanever@anime.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message / Feedback
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue sm:text-sm resize-y"
              placeholder="Tell us what's on your mind... or suggest a new boyfriend type!"
            ></textarea>
          </div>

          <button
            type="submit"
            // Changed text-white to text-black
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-pink-600 hover:bg-pink-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-gray-600 text-md mt-6 italic">
          "We'll get back to you after this episode."
        </p>
      </div>
    </div>
  );
};

export default Contact;