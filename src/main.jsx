import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProfilePage from './pages/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route with parameter to load character profile by id */}
        <Route path="/profile/:characterId" element={<ProfileWrapper />} />
        {/* Add more routes here for Login, Signup, Wishlist etc. */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Wrapper component to extract param and pass to ProfilePage
import { useParams } from 'react-router-dom';
function ProfileWrapper() {
  const { characterId } = useParams();
  return <ProfilePage characterId={parseInt(characterId, 10)} />;
}



