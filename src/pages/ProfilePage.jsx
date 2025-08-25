// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { 
  User, Mail, Phone, MapPin, Calendar, Car, Building2, 
  MessageSquare, Eye, Heart, Star, Edit, Camera, 
  Settings, Shield, Bell, Globe, Palette, Moon, Sun,
  Plus, Trash2, MoreHorizontal, CheckCircle, Clock
} from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    id: 1,
    name: "Test istifadəçi",
    email: "demo@carclub.az",
    phone: "+994 50 123 45 67",
    location: "Bakı, Yasamal",
    joinDate: "2024-01-15",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Avtomobil həvəskarı və BMW F30 sahibi. Tuning və avtomobil texnologiyaları ilə maraqlanıram.",
    role: "user",
    status: "active",
    cars: [
      {
        id: 1,
        brand: "BMW",
        model: "F30 320i",
        year: "2018",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop",
        mileage: "45000 km",
        fuelType: "Benzin",
        transmission: "Avtomatik"
      }
    ],
    clubs: [
      {
        id: 1,
        name: "BMW Azərbaycan Klubu",
        role: "Üzv",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop",
        joinDate: "2024-01-20"
      }
    ],
    stats: {
      posts: 23,
      followers: 156,
      following: 89,
      likes: 342,
      views: 1247
    },
    recentActivity: [
      {
        id: 1,
        type: "post",
        title: "BMW F30 tuning prosesi",
        date: "2 saat əvvəl",
        views: 45,
        likes: 12
      },
      {
        id: 2,
        type: "comment",
        title: "Mercedes C200 servis məsləhəti",
        date: "1 gün əvvəl",
        views: 23,
        likes: 8
      },
      {
        id: 3,
        type: "like",
        title: "Toyota Camry tuning postu",
        date: "2 gün əvvəl",
        views: 67,
        likes: 15
      }
    ]
  });

  const [editForm, setEditForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    bio: user.bio
  });

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'cars', label: 'Avtomobillər', icon: Car },
    { id: 'clubs', label: 'Klublar', icon: Building2 },
    { id: 'activity', label: 'Fəaliyyət', icon: Clock }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      bio: user.bio
    });
  };

  const handleSave = () => {
    setUser({ ...user, ...editForm });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      bio: user.bio
    });
  };

  const getActivityIcon = (type) => {
    const icons = {
      post: MessageSquare,
      comment: MessageSquare,
      like: Heart,
      view: Eye
    };
    return icons[type] || Clock;
  };

  const getActivityColor = (type) => {
    const colors = {
      post: 'bg-blue-100 text-blue-800',
      comment: 'bg-green-100 text-green-800',
      like: 'bg-red-100 text-red-800',
      view: 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-slate-100 text-slate-800';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Profile Header */}
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{user.name}</h1>
                    <p className="text-slate-600 mb-3">{user.bio}</p>
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-slate-500">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {user.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(user.joinDate).toLocaleDateString('az-AZ')} tarixindən üzv
                      </span>
                      <span className="flex items-center">
                        <Car className="w-4 h-4 mr-1" />
                        {user.cars.length} avtomobil
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <button
                      onClick={handleEdit}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Profili Düzənlə
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Postlar', value: user.stats.posts, icon: MessageSquare, color: 'blue' },
              { label: 'İzləyicilər', value: user.stats.followers, icon: Eye, color: 'green' },
              { label: 'İzlədiyim', value: user.stats.following, icon: User, color: 'purple' },
              { label: 'Bəyənmələr', value: user.stats.likes, icon: Heart, color: 'red' },
              { label: 'Baxışlar', value: user.stats.views, icon: Eye, color: 'indigo' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 text-center">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1 mb-8">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {isEditing ? (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Profili Düzənlə</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Yer</label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Haqqımda</label>
                    <textarea
                      value={editForm.bio}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleSave}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Yadda Saxla
                    </button>
                    <button
                      onClick={handleCancel}
                      className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Ləğv Et
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Şəxsi Məlumatlar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{user.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{user.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{user.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{new Date(user.joinDate).toLocaleDateString('az-AZ')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">İstifadəçi</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="font-medium text-slate-900 mb-2">Haqqımda</h4>
                    <p className="text-slate-600">{user.bio}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Cars Tab */}
          {activeTab === 'cars' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Avtomobillərim</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Avtomobil Əlavə Et
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.cars.map((car) => (
                  <div key={car.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{car.brand} {car.model}</h4>
                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex justify-between">
                        <span>İl:</span>
                        <span className="font-medium">{car.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Yürüş:</span>
                        <span className="font-medium">{car.mileage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Yanacaq:</span>
                        <span className="font-medium">{car.fuelType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ötürücü:</span>
                        <span className="font-medium">{car.transmission}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Düzənlə
                      </button>
                      <button className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Detallar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clubs Tab */}
          {activeTab === 'clubs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Klublarım</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Kluba Qoşul
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.clubs.map((club) => (
                  <div key={club.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{club.name}</h4>
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {club.role}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(club.joinDate).toLocaleDateString('az-AZ')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Kluba Keç
                      </button>
                      <button className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Detallar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Son Fəaliyyətlər</h3>
              <div className="space-y-4">
                {user.recentActivity.map((activity) => (
                  <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                        {React.createElement(getActivityIcon(activity.type), { className: "w-5 h-5" })}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 mb-1">{activity.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {activity.date}
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {activity.views} baxış
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {activity.likes} bəyənmə
                          </span>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;