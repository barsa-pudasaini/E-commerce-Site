import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
const productsData = [
  {
    id: 1,
    name: "Charming Boyfriend",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    description: "Gentle, caring, and super charming boyfriend.",
  },
   {
    id: 2,
    name: "Adventurous Boyfriend",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    description: "Loves adventures and exploring new places with you.",
  },
   {
    id: 3,
    name: "Romantic Boyfriend",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description: "Always full of love and surprises.",
  },
  {
    id: 4,
    name: "Supportive Boyfriend",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    description: "Your rock in tough times, always supportive.",
  },
];