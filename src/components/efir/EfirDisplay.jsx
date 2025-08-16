// src/components/efir/EfirDisplay.jsx
import React, { useState, useEffect } from 'react';
import EfirCard from './EfirCard';
import { Radio, Filter, Grid, List, RefreshCw, TrendingUp } from 'lucide-react';

const EfirDisplay = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterBy, setFilterBy] = useState('all'); // 'all', 'brand', 'recent'
  const [loading, setLoading] = useState(false);

  // Mock data - bu real API-dan gələcək
  const [efirlData, setEfirlData] = useState([
    {
      id: 1,
      user: "Əli Məmmədov",
      carBrand: "BMW",
      carModel: "M3 F80",
      year: 2018,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      likes: 127,
      comments: 23,
      views: 1543,
      isOnline: true,
      timeAgo: "2 dəqiqə əvvəl",
      location: "Bakı",
      description: "Yeni modifikasiyalar edilib, M Performance hissələri əlavə edilib.",
      tags: ["tuning", "sport", "bmw"]
    },
    {
      id: 2,
      user: "Rəşad Əliyev",
      carBrand: "Mercedes",
      carModel: "C63 AMG",
      year: 2020,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
      likes: 89,
      comments: 15,
      views: 892,
      isOnline: true,
      timeAgo: "5 dəqiqə əvvəl",
      location: "Gəncə",
      description: "Fabriq vəziyyətdə, heç bir problem yoxdur.",
      tags: ["mercedes", "amg", "luxury"]
    },
    {
      id: 3,
      user: "Nigar Həsənova",
      carBrand: "Audi",
      carModel: "RS4 Avant",
      year: 2021,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
      likes: 156,
      comments: 31,
      views: 2104,
      isOnline: true,
      timeAgo: "8 dəqiqə əvvəl",
      location: "Sumqayıt",
      description: "Yeni alınıb, ilk sahibi. Tam komplekt.",
      tags: ["audi", "wagon", "quattro"]
    },
    {
      id: 4,
      user: "Cavid Quliyev",
      carBrand: "Toyota",
      carModel: "Supra MK5",
      year: 2022,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      likes: 203,
      comments: 45,
      views: 3421,
      isOnline: false,
      timeAgo: "15 dəqiqə əvvəl",
      location: "Bakı",
      description: "Klassik sport avtomobil, ideal vəziyyətdə.",
      tags: ["toyota", "supra", "jdm"]
    },
    {
      id: 5,
      user: "Leyla Həsənli",
      carBrand: "Porsche",
      carModel: "911 Carrera",
      year: 2019,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      likes: 312,
      comments: 67,
      views: 4876,
      isOnline: true,
      timeAgo: "22 dəqiqə əvvəl",
      location: "Bakı",
      description: "Klassik Porsche dizaynı, mükəmməl performans.",
      tags: ["porsche", "911", "classic"]
    },
    {
      id: 6,
      user: "Elvin Məmmədli",
      carBrand: "Lamborghini",
      carModel: "Huracán",
      year: 2020,
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      likes: 445,
      comments: 89,
      views: 6234,
      isOnline: true,
      timeAgo: "35 dəqiqə əvvəl",
      location: "Bakı",
      description: "İtaliyan super car, unikal rəng kombinasiyası.",
      tags: ["lamborghini", "supercar", "italian"]
    }
  ]);

  const handleRefresh = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const filteredData = efirlData.filter(car => {
    if (filterBy === 'all') return true;
    if (filterBy === 'online') return car.isOnline;
    if (filterBy === 'recent') {
      const timeInMinutes = parseInt(car.timeAgo.match(/\d+/)[0]);
      return timeInMinutes <= 10;
    }
    return car.carBrand.toLowerCase() === filterBy.toLowerCase();
  });

  const onlineCarsCount = efirlData.filter(car => car.isOnline).length;
  const totalViews = efirlData.reduce((sum, car) => sum + car.views, 0);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Canlı Efir</h1>
              <p className="text-blue-100">Aktiv istifadəçilərin avtomobilləri</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{onlineCarsCount}</div>
              <div className="text-xs text-blue-100">Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{efirlData.length}</div>
              <div className="text-xs text-blue-100">Cəmi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{Math.round(totalViews / 1000)}K</div>
              <div className="text-xs text-blue-100">Baxış</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Filter Dropdown */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Hamısı</option>
              <option value="online">Yalnız Online</option>
              <option value="recent">Son 10 dəqiqə</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>

          {/* Trending Tag */}
          <div className="flex items-center space-x-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Trending</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Yenilə</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-gray-600">Yüklənir...</span>
          </div>
        </div>
      )}

      {/* Cars Grid/List */}
      {!loading && (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {filteredData.map((car) => (
            <EfirCard 
              key={car.id} 
              carData={car}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Radio className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Heç bir avtomobil tapılmadı</h3>
          <p className="text-gray-600">Seçilmiş filterlərə uyğun avtomobil yoxdur.</p>
        </div>
      )}

      {/* Live Updates Indicator */}
      <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className="text-sm font-medium">Canlı yeniləmələr</span>
      </div>
    </div>
  );
};

export default EfirDisplay;