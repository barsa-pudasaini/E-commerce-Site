import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("💌 Message sent! We'll reply after this episode.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#fff5f7', // Very light pink
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(255, 105, 140, 0.15)'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#ff6b81', // Brand pink
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <Mail size={24} />
          Contact Us
        </h1>
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Name Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>
              <User size={18} />
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ffb8c6',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'all 0.2s',
                outline: 'none'
              }}
              placeholder="E.g., Anime Fanatic"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>
              <Mail size={18} />
              Your Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ffb8c6',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'all 0.2s',
                outline: 'none'
              }}
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>
              <MessageSquare size={18} />
              Your Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ffb8c6',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'all 0.2s',
                outline: 'none',
                resize: 'vertical'
              }}
              placeholder="Tell us what's on your mind..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#ff6b81',
              color: 'white',
              padding: '14px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s',
              marginTop: '10px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff5171'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6b81'}
          >
            <Send size={18} />
            Send Message
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: '30px',
          color: '#888',
          fontStyle: 'italic'
        }}>
          "We'll get back to you after this episode — promise! 💕"
        </p>
      </div>
    </div>
  );
};

export default Contact;