// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';
// Pages
import Home from './pages/Home';
import ForumPage from './pages/ForumPage';
import PostDetail from './pages/PostDetail';
import AddPostForm from './pages/AddPostForm';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import EfirPage from './pages/EfirPage';
import MasterRegistrationPage from './pages/MasterRegistrationPage';
import SettingsPage from './pages/SettingsPage';

// Professional placeholder components with Layout
const ClubsPage = () => (
  <Layout>
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Avtomobil Klubları</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Azərbaycandakı ən populyar avtomobil klubları ilə tanış olun. 
            Eyni maraqları olan insanlarla tanış olun və təcrübələrinizi paylaşın.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Klub adı və ya marka ilə axtarın..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Bütün markalar</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="audi">Audi</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="nissan">Nissan</option>
                <option value="hyundai">Hyundai</option>
                <option value="kia">Kia</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="ford">Ford</option>
              </select>
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Bütün rayonlar</option>
                <option value="baku">Bakı</option>
                <option value="ganja">Gəncə</option>
                <option value="sumgayit">Sumqayıt</option>
                <option value="shirvan">Şirvan</option>
                <option value="lankaran">Lənkəran</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Clubs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Populyar Klublar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* BMW Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=200&fit=crop"
                  alt="BMW Club"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">BMW Azərbaycan Klubu</h3>
                <p className="text-slate-600 text-sm mb-3">
                  BMW markası həvəskarları üçün ən böyük icma. Təcrübə paylaşımı, texniki dəstək və yarışlar.
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Bakı
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    1,247 üzv
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                    alt="Admin"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-slate-600">Elvin Məmmədov</span>
                </div>
                <Link
                  to="/clubs/bmw"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center group-hover:shadow-lg"
                >
                  Qoşul
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mercedes Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=200&fit=crop"
                  alt="Mercedes Club"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    VIP
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mercedes-Benz Azərbaycan</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Mercedes-Benz markası üçün eksklüziv klublar. Premium xidmət və yüksək keyfiyyətli təcrübə.
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Bakı
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    856 üzv
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=32&h=32&fit=crop&crop=face"
                    alt="Admin"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-slate-600">Aytac Quliyeva</span>
                </div>
                <Link
                  to="/clubs/mercedes"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center group-hover:shadow-lg"
                >
                  Qoşul
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Toyota Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=200&fit=crop"
                  alt="Toyota Club"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Aktiv
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Toyota Azərbaycan Klubu</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Toyota markası həvəskarları üçün ən böyük icma. Etibarlılıq və keyfiyyət bir arada.
                </p>
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Gəncə
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    2,134 üzv
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                    alt="Admin"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-slate-600">Cavid Əliyev</span>
                </div>
                <Link
                  to="/clubs/toyota"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center group-hover:shadow-lg"
                >
                  Qoşul
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All Clubs Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Bütün Klublar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Audi Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=150&fit=crop"
                  alt="Audi Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Audi Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Audi markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Bakı</span>
                  <span>647 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/audi"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Honda Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=150&fit=crop"
                  alt="Honda Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Honda Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Honda markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Sumqayıt</span>
                  <span>892 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/honda"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Nissan Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=300&h=150&fit=crop"
                  alt="Nissan Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Nissan Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Nissan markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Bakı</span>
                  <span>1,156 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/nissan"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Hyundai Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=150&fit=crop"
                  alt="Hyundai Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Hyundai Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Hyundai markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Lənkəran</span>
                  <span>734 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/hyundai"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Kia Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=150&fit=crop"
                  alt="Kia Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Kia Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Kia markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Şirvan</span>
                  <span>456 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/kia"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Volkswagen Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=300&h=150&fit=crop"
                  alt="Volkswagen Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Volkswagen Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Volkswagen markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Bakı</span>
                  <span>678 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/volkswagen"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Ford Club */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=150&fit=crop"
                  alt="Ford Club"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    ✓ Təsdiqlənmiş
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-slate-900 mb-1">Ford Azərbaycan</h3>
                <p className="text-slate-600 text-xs mb-2">
                  Ford markası həvəskarları üçün icma
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Gəncə</span>
                  <span>523 üzv</span>
                </div>
              </div>
              
              <Link
                to="/clubs/ford"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Qoşul
              </Link>
            </div>

            {/* Create New Club */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-200 p-4 hover:border-blue-300 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Yeni Klub Yarat</h3>
                <p className="text-slate-600 text-xs mb-3">
                  Öz avtomobil klubunuzu yaradın və icma qurun
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Klub Yarat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Daha Çox Klub Gör
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

const ClubDetailPage = () => (
  <Layout>
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Ana Səhifə</Link>
          <span>•</span>
          <Link to="/clubs" className="hover:text-blue-600 transition-colors">Klublar</Link>
          <span>•</span>
          <span className="text-slate-900">BMW Azərbaycan Klubu</span>
        </div>

        {/* Club Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Club Logo and Basic Info */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=150&h=150&fit=crop"
                  alt="BMW Club"
                  className="w-24 h-24 rounded-xl object-cover border-4 border-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">BMW Azərbaycan Klubu</h1>
                <p className="text-blue-600 font-semibold text-lg mb-1">Premium Klub</p>
                <p className="text-slate-600 mb-3">BMW markası həvəskarları üçün ən böyük icma</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Bakı, Azərbaycan
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2018-ci ildən
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Rating */}
            <div className="flex-1">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">1,247</div>
                  <div className="text-sm text-slate-600">Üzv</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">156</div>
                  <div className="text-sm text-slate-600">Tədbir</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">4.9</div>
                  <div className="text-sm text-slate-600">Reytinq</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">Aktiv</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.9 (847 rəy)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3 w-full lg:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Kluba Qoşul
              </button>
              <button className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Mesaj Göndər
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Klub Haqqında</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                BMW Azərbaycan Klubu 2018-ci ildə yaradılmış və hal-hazırda ölkədəki ən böyük BMW həvəskarları 
                icmasıdır. Klubumuz BMW markası həvəskarlarını bir araya gətirərək təcrübə paylaşımı, texniki 
                dəstək və əyləncəli tədbirlər təşkil edir.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Hər ay müxtəlif tədbirlər, yarışlar və texniki seminarlar keçiririk. Klub üzvlərimizə 
                xüsusi endirimlər və BMW avtomobilləri üçün texniki dəstək təqdim edirik.
              </p>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Yaxınlaşan Tədbirlər</h2>
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">BMW Məclisi 2024</h3>
                      <p className="text-slate-600 text-sm mb-3">
                        İlin ən böyük BMW məclisi. Bütün modellər üçün yarışlar və mükafatlar.
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          15 Yanvar 2024
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          14:00 - 18:00
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Bakı, Heydər Aliyev Mərkəzi
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Qatıl
                    </button>
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">Texniki Seminar</h3>
                      <p className="text-slate-600 text-sm mb-3">
                        BMW M3 və M4 modelləri üçün texniki xidmət və təmirləşdirmə seminarı.
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          22 Yanvar 2024
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          10:00 - 16:00
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          BMW Servis Mərkəzi
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Qatıl
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Son Fəaliyyətlər</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    alt="Üzv"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-slate-900">Elvin Məmmədov</span>
                      <span className="text-xs text-slate-500">kluba qoşuldu</span>
                    </div>
                    <span className="text-xs text-slate-500">2 saat əvvəl</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=40&h=40&fit=crop&crop=face"
                    alt="Üzv"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-slate-900">Aytac Quliyeva</span>
                      <span className="text-xs text-slate-500">yeni foto yüklədi</span>
                    </div>
                    <span className="text-xs text-slate-500">5 saat əvvəl</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
                    alt="Üzv"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-slate-900">Cavid Əliyev</span>
                      <span className="text-xs text-slate-500">tədbir yaratdı</span>
                    </div>
                    <span className="text-xs text-slate-500">1 gün əvvəl</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Club Admin */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Klub Admini</h3>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                  alt="Admin"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">Elvin Məmmədov</h4>
                  <p className="text-sm text-slate-600">Klub Prezidenti</p>
                  <div className="flex items-center mt-2">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600">5+ il təcrübə</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Club Rules */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Klub Qaydaları</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-600">BMW markası avtomobilləri üçün nəzərdə tutulub</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-600">Həftədə ən azı 1 post paylaşmaq tövsiyə olunur</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-600">Tədbirlərdə iştirak etmək məcburidir</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-600">Bir-birinə hörmətli davranmaq</span>
                </div>
              </div>
            </div>

            {/* Club Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Klub Statistikası</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Ümumi üzv sayı</span>
                  <span className="text-sm font-semibold text-slate-900">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Bu ay qoşulan</span>
                  <span className="text-sm font-semibold text-slate-900">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Aktiv üzvlər</span>
                  <span className="text-sm font-semibold text-slate-900">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Bu ay tədbirlər</span>
                  <span className="text-sm font-semibold text-slate-900">4</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Sürətli Əməliyyatlar</h3>
              <div className="space-y-3">
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Tədbir Təşkil Et
                </button>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Foto Yüklə
                </button>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Mesaj Göndər
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

const MastersPage = () => (
  <Layout>
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Ustalar</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Sertifikatlaşdırılmış avtomobil mütəxəssisləri ilə tanış olun. 
            Təcrübəli ustalarımızdan yüksək keyfiyyətli xidmət alın.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Usta adı və ya ixtisası ilə axtarın..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Bütün ixtisaslar</option>
                <option value="engine">Mühərrik və Transmissiya</option>
                <option value="electrical">Elektrik Sistemi</option>
                <option value="body">Kuzov və Boyaq</option>
                <option value="suspension">Suspension və Frenlər</option>
                <option value="diagnostic">Diaqnostika</option>
              </select>
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Bütün rayonlar</option>
                <option value="yasamal">Yasamal</option>
                <option value="nasimi">Nəsimi</option>
                <option value="nerimanov">Nərimanov</option>
                <option value="sabail">Sabail</option>
                <option value="binagadi">Binəqədi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Master Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Elvin Məmmədov"
                  className="w-20 h-20 rounded-full object-cover border-4 border-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Elvin Məmmədov</h3>
              <p className="text-blue-600 font-semibold mb-2">Baş Mühəndis</p>
              <p className="text-slate-600 mb-4 text-sm">Mühərrik və Transmissiya</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">15+ il</div>
                  <div className="text-slate-600 text-xs">Təcrübə</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">2847</div>
                  <div className="text-slate-600 text-xs">Tamamlanmış</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.9</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-sm text-slate-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bakı, Yasamal
              </div>
              
              <Link
                to="/masters/1"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:shadow-lg"
              >
                Profili Görüntülə
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Master Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Mürad Həsənov"
                  className="w-20 h-20 rounded-full object-cover border-4 border-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Mürad Həsənov</h3>
              <p className="text-blue-600 font-semibold mb-2">Kuzov Mütəxəssisi</p>
              <p className="text-slate-600 mb-4 text-sm">Kuzov Təmiri və Boyaq</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">12+ il</div>
                  <div className="text-slate-600 text-xs">Təcrübə</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">1956</div>
                  <div className="text-slate-600 text-xs">Tamamlanmış</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.8</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-sm text-slate-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bakı, Nəsimi
              </div>
              
              <Link
                to="/masters/2"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:shadow-lg"
              >
                Profili Görüntülə
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Master Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=150&h=150&fit=crop&crop=face"
                  alt="Aytac Quliyeva"
                  className="w-20 h-20 rounded-full object-cover border-4 border-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Aytac Quliyeva</h3>
              <p className="text-blue-600 font-semibold mb-2">Elektrik Mütəxəssisi</p>
              <p className="text-slate-600 mb-4 text-sm">Avtomobil Elektronikası</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">10+ il</div>
                  <div className="text-slate-600 text-xs">Təcrübə</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">1634</div>
                  <div className="text-slate-600 text-xs">Tamamlanmış</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.9</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-sm text-slate-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bakı, Nərimanov
              </div>
              
              <Link
                to="/masters/3"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:shadow-lg"
              >
                Profili Görüntülə
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Master Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                  alt="Cavid Əliyev"
                  className="w-20 h-20 rounded-full object-cover border-4 border-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Cavid Əliyev</h3>
              <p className="text-blue-600 font-semibold mb-2">Diaqnostika Mütəxəssisi</p>
              <p className="text-slate-600 mb-4 text-sm">Kompyuter Diaqnostikası</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">8+ il</div>
                  <div className="text-slate-600 text-xs">Təcrübə</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <div className="font-semibold text-slate-900">1247</div>
                  <div className="text-slate-600 text-xs">Tamamlanmış</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.7</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-sm text-slate-500 mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bakı, Sabail
              </div>
              
              <Link
                to="/masters/4"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:shadow-lg"
              >
                Profili Görüntülə
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Daha Çox Usta Gör
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

const MasterProfilePage = () => (
  <Layout>
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Ana Səhifə</Link>
          <span>•</span>
          <Link to="/masters" className="hover:text-blue-600 transition-colors">Ustalar</Link>
          <span>•</span>
          <span className="text-slate-900">Elvin Məmmədov</span>
        </div>

        {/* Master Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Avatar and Basic Info */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Elvin Məmmədov"
                  className="w-24 h-24 rounded-full object-cover border-4 border-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Elvin Məmmədov</h1>
                <p className="text-blue-600 font-semibold text-lg mb-1">Baş Mühəndis</p>
                <p className="text-slate-600 mb-3">Mühərrik və Transmissiya Mütəxəssisi</p>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Bakı, Yasamal
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    15+ il təcrübə
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Rating */}
            <div className="flex-1">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">4.9</div>
                  <div className="text-sm text-slate-600">Reytinq</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">2847</div>
                  <div className="text-sm text-slate-600">Tamamlanmış</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Məmnuniyyət</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">Dəstək</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.9 (847 rəy)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3 w-full lg:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Əlaqə Saxla
              </button>
              <button className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Mesaj Göndər
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Haqqında</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                15 ildən artıq təcrübəyə malik avtomobil mühəndisi. BMW, Mercedes, Audi və digər premium markaların 
                mühərrik və transmissionsiya sistemləri üzrə ixtisaslaşmış mütəxəssis. Almaniyada təhsil almış və 
                müxtəlif sertifikatlar əldə etmişdir.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Müştərilərinə keyfiyyətli xidmət göstərmək üçün ən son texnologiya və avadanlıqlardan istifadə edir. 
                Hər bir işi diqqətlə analiz edir və optimal həll yolları təklif edir.
              </p>
            </div>

            {/* Services Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Xidmətlər</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Mühərrik Təmiri</h3>
                    <p className="text-sm text-slate-600">Bütün növ mühərrik problemlərinin diaqnostikası və təmiri</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Transmissiya</h3>
                    <p className="text-sm text-slate-600">Avtomatik və manual transmissionsiya təmiri</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Diaqnostika</h3>
                    <p className="text-sm text-slate-600">Kompyuter diaqnostikası və problem aşkarlanması</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Tənzimləmə</h3>
                    <p className="text-sm text-slate-600">Mühərrik və sistemlərin tənzimlənməsi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Son Rəylər</h2>
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                      alt="Rəyçi"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">Rəşad Həsənov</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">
                        BMW F30 mühərrik problemimi çox professional şəkildə həll etdi. Çox təşəkkürlər!
                      </p>
                      <span className="text-xs text-slate-500">2 gün əvvəl</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=40&h=40&fit=crop&crop=face"
                      alt="Rəyçi"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">Nigar Quliyeva</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">
                        Mercedes C200 transmissionsiya problemimi çox sürətli və keyfiyyətli həll etdi. Məsləhət görürəm.
                      </p>
                      <span className="text-xs text-slate-500">1 həftə əvvəl</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Əlaqə Məlumatları</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">+994 50 XXX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">elvin@carclub.az</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">Bakı, Yasamal</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">İş Saatları</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Bazar ertəsi - Cümə</span>
                  <span className="text-sm font-medium text-slate-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Şənbə</span>
                  <span className="text-sm font-medium text-slate-900">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Bazar</span>
                  <span className="text-sm font-medium text-red-600">Bağlı</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Sertifikatlar</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">BMW Sertifikatı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">Mercedes Sertifikatı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">Audi Sertifikatı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);



const NotFoundPage = () => (
  <Layout>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="text-center max-w-md mx-auto">
        <div className="text-9xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Səhifə Tapılmadı</h1>
        <p className="text-xl text-slate-600 mb-8">
          Axtardığınız səhifə mövcud deyil və ya silinib.
        </p>
        <Navigate to="/" replace />
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            Ana Səhifəyə Qayıt
          </a>
          <div>
            <a href="/forum" className="text-blue-600 hover:text-blue-700 font-medium">
              Foruma keç
            </a>
            <span className="mx-2 text-slate-400">•</span>
            <a href="/masters" className="text-blue-600 hover:text-blue-700 font-medium">
              Ustalar
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Protected Route Component
const ProtectedRoute = ({ children, requiredAuth = true }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('ProtectedRoute - authToken:', token); // Debug üçün
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p className="text-slate-600">Yoxlanılır...</p>
        </div>
      </div>
    );
  }

  if (requiredAuth && !isAuthenticated) {
    console.log('ProtectedRoute - Login tələb olunur, /login-ə yönləndirilir'); // Debug üçün
    return <Navigate to="/login" replace />;
  }

  if (!requiredAuth && isAuthenticated) {
    console.log('ProtectedRoute - Artıq login olmusunuz, /profile-ə yönləndirilir'); // Debug üçün
    return <Navigate to="/profile" replace />;
  }

  console.log('ProtectedRoute - Uğurlu keçid'); // Debug üçün
  return children;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    console.log('Current userRole:', userRole); // Debug üçün
    setIsAdmin(userRole === 'admin');
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p className="text-slate-600">Admin yoxlanılır...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Admin Panel</h1>
          <p className="text-slate-600 mb-8">Bu bölməyə yalnız admin istifadəçiləri daxil ola bilər.</p>
          <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
            </svg>
            Giriş məhdudlaşdırılıb
          </div>
          <div className="mt-6">
            <button 
              onClick={() => {
                localStorage.setItem('userRole', 'admin');
                window.location.reload();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-black px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Admin Ol
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');

        setLoading(false);
      } catch (error) {
        console.error('App initialization error:', error);
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Professional Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse shadow-xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 8a2 2 0 11-4 0 2 2 0 014 0zM5 8a2 2 0 11-4 0 2 2 0 014 0zM12 4a2 2 0 100-4 2 2 0 000 4zM3 16a6 6 0 1118 0v6H3v-6z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">AvtoForum Platform</h2>
          <p className="text-slate-600 mb-6">Professional avtomobil platforması yüklənir...</p>
          <div className="w-64 h-1 bg-slate-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes loading-bar {
            0% { width: 0%; transform: translateX(-100%); }
            100% { width: 100%; transform: translateX(0%); }
          }
          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <AuthProvider>
        <Router>
          <div className={`App ${theme === 'dark' ? 'dark' : ''} min-h-screen bg-gray-50`}>
            <Routes>
              {/* Auth Routes - No Layout for clean design */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/forum/post/:id" element={<PostDetail />} />
              <Route path="/efir" element={<EfirPage />} />
              <Route path="/clubs" element={<ClubsPage />} />
              <Route path="/clubs/:id" element={<ClubDetailPage />} />
              <Route path="/masters" element={<MastersPage />} />
              <Route path="/masters/:id" element={<MasterProfilePage />} />
              <Route path="/master-register" element={<MasterRegistrationPage />} />

              {/* Protected Routes */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/forum/add-post" 
                element={
                  <ProtectedRoute>
                    <AddPostForm />
                  </ProtectedRoute>
                } 
              />

              {/* Protected Routes */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/forum/add-post" 
                element={
                  <ProtectedRoute>
                    <AddPostForm />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/settings" 
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                } 
              />

              {/* Admin Routes */}
              <Route 
                path="/admin" 
                element={
                  <AdminRoute>
                    <AdminPage />
                  </AdminRoute>
                } 
              />

              {/* Redirects */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/dashboard" element={<Navigate to="/profile" replace />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

// Professional Error Boundary
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    console.error('Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-lg mx-auto p-8">
            <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sistemdə Xəta Baş Verdi</h2>
            <p className="text-slate-600 mb-8">
              Təəssüf ki, gözlənilməz bir xəta ilə qarşılaşdıq. Texniki komanda məlumatlandırıldı.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Səhifəni Yenilə
              </button>
              <div>
                <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                  Ana səhifəyə qayıt
                </a>
              </div>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left bg-slate-100 rounded-lg p-4">
                <summary className="cursor-pointer text-sm text-slate-700 font-medium">
                  Developer Info
                </summary>
                <pre className="mt-4 text-xs text-slate-600 overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}