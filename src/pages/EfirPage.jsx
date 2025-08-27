// src/pages/EfirPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { 
  Users, Eye, User, Car, Building2, Clock, 
  Search, Filter, MapPin, MessageSquare, Heart,
  TrendingUp, Star, Crown, CheckCircle
} from 'lucide-react';

const EfirPage = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [featuredToday, setFeaturedToday] = useState(null);

  // Mock data - aktiv istifadəçilər və onların məşğuliyyətləri
  const activeUsers = [
    {
      id: 1,
      name: "Elvin Məmmədov",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "online",
      role: "admin",
      location: "Bakı, Yasamal",
      lastActivity: "2 dəqiqə əvvəl",
      currentActivity: "BMW F30 haqqında post yazır",
      car: {
        brand: "BMW",
        model: "F30 320i",
        year: "2018",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop"
      },
      club: {
        name: "BMW Azərbaycan Klubu",
        role: "Prezidenti",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop"
      },
      stats: {
        posts: 156,
        followers: 1247,
        rating: 4.9
      }
    },
    {
      id: 2,
      name: "Aytac Quliyeva",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=150&h=150&fit=crop&crop=face",
      status: "online",
      role: "moderator",
      location: "Bakı, Nərimanov",
      lastActivity: "5 dəqiqə əvvəl",
      currentActivity: "Mercedes C200 servis postu paylaşır",
      car: {
        brand: "Mercedes-Benz",
        model: "C200 CDI",
        year: "2019",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&h=150&fit=crop"
      },
      club: {
        name: "Mercedes-Benz Azərbaycan",
        role: "Üzv",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&h=150&fit=crop"
      },
      stats: {
        posts: 89,
        followers: 634,
        rating: 4.7
      }
    },
    {
      id: 3,
      name: "Cavid Əliyev",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      status: "online",
      role: "user",
      location: "Gəncə",
      lastActivity: "8 dəqiqə əvvəl",
      currentActivity: "Toyota Camry tuning postu yazır",
      car: {
        brand: "Toyota",
        model: "Camry 3.5",
        year: "2020",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=150&fit=crop"
      },
      club: {
        name: "Toyota Azərbaycan Klubu",
        role: "Üzv",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=150&fit=crop"
      },
      stats: {
        posts: 45,
        followers: 289,
        rating: 4.5
      }
    },
    {
      id: 4,
      name: "Nigar Əliyeva",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=150&h=150&fit=crop&crop=face",
      status: "away",
      role: "user",
      location: "Bakı, Sabail",
      lastActivity: "15 dəqiqə əvvəl",
      currentActivity: "Audi A4 elektrik problemi araşdırır",
      car: {
        brand: "Audi",
        model: "A4 2.0 TDI",
        year: "2017",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&h=150&fit=crop"
      },
      club: {
        name: "Audi Azərbaycan",
        role: "Üzv",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&h=150&fit=crop"
      },
      stats: {
        posts: 67,
        followers: 456,
        rating: 4.6
      }
    }
  ];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('featuredUserOfDay') || 'null');
      const today = new Date().toISOString().slice(0, 10);
      if (saved && saved.date === today) {
        setFeaturedToday(saved.featured);
      }
    } catch {}
  }, []);

  const activeClubs = [
    {
      id: 1,
      name: "BMW Azərbaycan Klubu",
      logo: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop",
      members: 1247,
      onlineMembers: 89,
      lastActivity: "1 dəqiqə əvvəl",
      currentActivity: "Elvin Məmmədov yeni post paylaşdı",
      location: "Bakı",
      category: "Premium"
    },
    {
      id: 2,
      name: "Mercedes-Benz Azərbaycan",
      logo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&h=150&fit=crop",
      members: 856,
      onlineMembers: 67,
      lastActivity: "3 dəqiqə əvvəl",
      currentActivity: "Aytac Quliyeva servis postu paylaşdı",
      location: "Bakı",
      category: "VIP"
    },
    {
      id: 3,
      name: "Toyota Azərbaycan Klubu",
      logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=150&fit=crop",
      members: 2134,
      onlineMembers: 145,
      lastActivity: "5 dəqiqə əvvəl",
      currentActivity: "Cavid Əliyev tuning postu paylaşdı",
      location: "Gəncə",
      category: "Aktiv"
    }
  ];

  const filters = [
    { id: 'all', name: 'Hamısı', count: activeUsers.length },
    { id: 'bmw', name: 'BMW', count: activeUsers.filter(u => u.car.brand === 'BMW').length },
    { id: 'mercedes', name: 'Mercedes', count: activeUsers.filter(u => u.car.brand === 'Mercedes-Benz').length },
    { id: 'toyota', name: 'Toyota', count: activeUsers.filter(u => u.car.brand === 'Toyota').length }
  ];

  const getStatusColor = (status) => {
    const colors = {
      online: 'bg-green-500',
      away: 'bg-yellow-500',
      offline: 'bg-slate-400'
    };
    return colors[status] || colors.offline;
  };

  const getRoleIcon = (role) => {
    if (role === 'admin') return <Crown className="w-4 h-4 text-red-600" />;
    if (role === 'moderator') return <Star className="w-4 h-4 text-blue-600" />;
    return null;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Premium': 'bg-blue-100 text-blue-800 border-blue-200',
      'VIP': 'bg-purple-100 text-purple-800 border-purple-200',
      'Aktiv': 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[category] || colors['Aktiv'];
  };

  const filteredUsers = activeUsers.filter(user => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'bmw') return user.car.brand === 'BMW';
    if (selectedFilter === 'mercedes') return user.car.brand === 'Mercedes-Benz';
    if (selectedFilter === 'toyota') return user.car.brand === 'Toyota';
    return true;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Bu Gün Aktivlik Göstərənlər</h1>
            
            </div>

            {/* Search and Filter */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="İstifadəçi və ya avtomobil axtarın..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className=" rounded-xl shadow-sm border border-slate-200 p-1 mb-8">
            <div className="flex space-x-1">
              {[
                { id: 'users', label: 'Bu Gün Aktiv', count: activeUsers.length },
                { id: 'clubs', label: 'Aktiv Klublar', count: activeClubs.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center text-black px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                     
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  {filter.name}
                  <span className="ml-2 text-xs opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              {/* Featured user of the day */}
              {featuredToday && (
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <img src={featuredToday.avatar} alt={featuredToday.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Crown className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-semibold text-amber-700">Günün istifadəçisi</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{featuredToday.name}</h3>
                      {featuredToday.description && <p className="text-slate-600 mt-1">{featuredToday.description}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Car className="w-4 h-4 text-slate-600" />
                        <span className="text-sm font-medium text-slate-700">Avtomobil</span>
                      </div>
                      {featuredToday.car?.image && (
                        <img src={featuredToday.car.image} alt="car" className="w-full h-24 object-cover rounded mb-2" />
                      )}
                      <div className="text-sm text-slate-700">{featuredToday.car?.brand} {featuredToday.car?.model} {featuredToday.car?.year && `(${featuredToday.car.year})`}</div>
                    </div>
                    {(featuredToday.club?.name || featuredToday.club?.image) && (
                      <div className="bg-white rounded-lg p-3 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-medium text-slate-700">Klub</span>
                        </div>
                        {featuredToday.club?.image && (
                          <img src={featuredToday.club.image} alt="club" className="w-full h-24 object-cover rounded mb-2" />
                        )}
                        <div className="text-sm text-slate-700">{featuredToday.club?.name} {featuredToday.club?.role && `• ${featuredToday.club.role}`}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(featuredToday ? [] : filteredUsers).map((user) => (
                  <div key={user.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                    {/* User Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-bold text-slate-900">{user.name}</h3>
                            {getRoleIcon(user.role)}
                          </div>
                          <p className="text-sm text-slate-500">{user.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Bugünkü aktivlik: {user.lastActivity}</div>
                      </div>
                    </div>

                    {/* Current Activity */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Bu gün məşğul olduğu fəaliyyət:</span>
                      </div>
                      <p className="text-sm text-blue-700">{user.currentActivity}</p>
                    </div>

                    {/* Car and Club Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {/* Car */}
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Car className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-medium text-slate-700">Avtomobil</span>
                        </div>
                        <img
                          src={user.car.image}
                          alt={`${user.car.brand} ${user.car.model}`}
                          className="w-full h-20 object-cover rounded-lg mb-2"
                        />
                        <div className="text-center">
                          <p className="text-sm font-semibold text-slate-900">{user.car.brand}</p>
                          <p className="text-xs text-slate-600">{user.car.model} ({user.car.year})</p>
                        </div>
                      </div>

                      {/* Club */}
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Building2 className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-medium text-slate-700">Klub</span>
                        </div>
                        <img
                          src={user.club.image}
                          alt={user.club.name}
                          className="w-full h-20 object-cover rounded-lg mb-2"
                        />
                        <div className="text-center">
                          <p className="text-sm font-semibold text-slate-900">{user.club.name}</p>
                          <p className="text-xs text-slate-600">{user.club.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {user.stats.posts} post
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {user.stats.followers} izləyici
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {user.stats.rating}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Profili Görüntülə
                      </button>
                      <button className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Mesaj Göndər
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Clubs Tab */}
          {activeTab === 'clubs' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeClubs.map((club) => (
                  <div key={club.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                    {/* Club Header */}
                    <div className="text-center mb-4">
                      <img
                        src={club.logo}
                        alt={club.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{club.name}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(club.category)}`}>
                        {club.category}
                      </span>
                    </div>

                    {/* Club Info */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Üzvlər:</span>
                        <span className="font-semibold text-slate-900">{club.members}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Online:</span>
                        <span className="font-semibold text-green-600">{club.onlineMembers}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Yer:</span>
                        <span className="font-semibold text-slate-900">{club.location}</span>
                      </div>
                    </div>

                    {/* Current Activity */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-3 h-3 text-blue-600" />
                        <span className="text-xs text-blue-600">{club.lastActivity}</span>
                      </div>
                      <p className="text-sm text-blue-700">{club.currentActivity}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        Kluba Qoşul
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

         
        </div>
      </div>
    </Layout>
  );
};

export default EfirPage;
