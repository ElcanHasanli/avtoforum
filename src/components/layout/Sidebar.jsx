// src/components/layout/Sidebar.jsx
import React from 'react';
import { Home, MessageSquare, Users, Wrench, Radio, User, Settings, X, Car, Star, Calendar } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Ana Səhifə', href: '/' },
    { id: 'forum', icon: MessageSquare, label: 'Forum', href: '/forum' },
    { id: 'clubs', icon: Users, label: 'Klublar', href: '/clubs' },
    { id: 'masters', icon: Wrench, label: 'Ustalar', href: '/masters' },
    { id: 'efir', icon: Radio, label: 'Efir', href: '/efir' },
    { id: 'profile', icon: User, label: 'Profil', href: '/profile' },
  ];

  const carBrands = [
    'BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Nissan', 'Hyundai', 'Kia', 'Volkswagen', 'Ford'
  ];

  return (
    <>
     
    </>
  );
};

export default Sidebar;