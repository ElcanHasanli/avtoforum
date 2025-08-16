// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { 
  User, Settings, Bell, Shield, LogOut, Edit, Camera, 
  Car, Calendar, MapPin, Phone, Mail, Globe, Star,
  MessageSquare, ThumbsUp, Eye, Bookmark, FileText,
  ChevronRight, Plus, Check, X, AlertCircle
} from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const loadProfileData = async () => {
      setLoading(true);
      
      // Get user data from localStorage
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      
      const mockUser = {
        id: userData.id || 1,
        name: userData.name || 'İstifadəçi',
        email: userData.email || 'user@example.com',
        phone: userData.phone || '+994 XX XXX XX XX',
        avatar: userData.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        car: userData.car || 'BMW F30 320i',
        location: 'Bakı, Azərbaycan',
        joinDate: '2023-01-15',
        bio: 'Avtomobil həvəskarı və BMW sahibi. Texniki məsələlərdə kömək etməyi sevirəm.',
        reputation: 245,
        badges: ['Yeni üzv', 'Kömək edən', 'Forum aktivisti'],
        stats: {
          posts: 67,
          replies: 234,
          likes: 456,
          views: 12567,
          followers: 34,
          following: 28
        },
        achievements: [
          { id: 1, name: 'İlk Post', description: 'İlk postunuzu yazdınız', icon: '🎯', earned: true },
          { id: 2, name: 'Kömék edən', description: '10 faydalı cavab verdiniz', icon: '🤝', earned: true },
          { id: 3, name: 'Populyar', description: 'Postunuz 100+ bəyəni aldı', icon: '⭐', earned: false },
          { id: 4, name: 'Ekspert', description: '50+ cavab verdiniz', icon: '🏆', earned: true }
        ]
      };

      const mockPosts = [
        {
          id: 1,
          title: 'BMW F30 üçün ən yaxşı motor yağı hansıdır?',
          content: 'Salam dostlar! BMW F30 320i modelim üçün hansı motor yağını tövsiyə edərsiniz?',
          createdAt: '2024-08-05T10:30:00Z',
          views: 156,
          replies: 23,
          likes: 12,
          category: 'Texniki Baxım'
        },
        {
          id: 2,
          title: 'N20 mühərrikində qarışıq sızıntısı problemi',
          content: 'Maşında motor blokundan qarışıq sızıntısı var. Kimə müraciət etmək lazımdır?',
          createdAt: '2024-08-03T14:20:00Z',
          views: 89,
          replies: 15,
          likes: 8,
          category: 'Texniki Məsələlər'
        }
      ];

      setUser(mockUser);
      setPosts(mockPosts);
      setEditData(mockUser);
      setLoading(false);
    };

    loadProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const handleSaveProfile = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUser(editData);
      localStorage.setItem('userData', JSON.stringify(editData));
      setEditMode(false);
      alert('Profil məlumatları yeniləndi!');
    } catch (error) {
      alert('Profil yenilənməsində xəta baş verdi');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('az-AZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Bu gün';
    if (diffInDays === 1) return 'Dünən';
    return `${diffInDays} gün əvvəl`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profil tapılmadı</h1>
          <p className="text-gray-600">Profil məlumatları yüklənmədi</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
            <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-12">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={editMode && editData.avatar ? editData.avatar : user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover bg-white"
                />
                {editMode && (
                  <button className="absolute bottom-0 right-0 p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 mt-4 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {editMode ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                        className="text-2xl font-bold text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                      />
                    ) : (
                      <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    )}
                    
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Car className="w-4 h-4 mr-1" />
                        {editMode ? (
                          <input
                            type="text"
                            value={editData.car}
                            onChange={(e) => setEditData(prev => ({ ...prev, car: e.target.value }))}
                            className="bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
                          />
                        ) : (
                          user.car
                        )}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {user.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Qoşuldu: {formatDate(user.joinDate)}
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-3">
                      {editMode ? (
                        <textarea
                          value={editData.bio}
                          onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                          rows={2}
                          className="w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="Özünüz haqqında yazın..."
                        />
                      ) : (
                        <p className="text-gray-700">{user.bio}</p>
                      )}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {user.badges.map(badge => (
                        <span key={badge} className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          <Badge className="w-3 h-3 mr-1" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                    {editMode ? (
                      <>
                        <button
                          onClick={() => setEditMode(false)}
                          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Ləğv et
                        </button>
                        <button
                          onClick={handleSaveProfile}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Saxla
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditMode(true)}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Redaktə et
                        </button>
                        <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Settings className="w-4 h-4 mr-2" />
                          Tənzimləmələr
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.stats.posts}</div>
                <div className="text-sm text-gray-600">Postlar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.stats.replies}</div>
                <div className="text-sm text-gray-600">Cavablar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.stats.likes}</div>
                <div className="text-sm text-gray-600">Bəyənmələr</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.reputation}</div>
                <div className="text-sm text-gray-600">Reputasiya</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.stats.followers}</div>
                <div className="text-sm text-gray-600">İzləyici</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.stats.following}</div>
                <div className="text-sm text-gray-600">İzlədiyi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Ümumi', icon: Activity },
                { id: 'posts', name: 'Postlarım', icon: FileText },
                { id: 'achievements', name: 'Nailiyyətlər', icon: Trophy },
                { id: 'settings', name: 'Parametrlər', icon: Settings }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Fəaliyyət</h3>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <Link
                            to={`/forum/post/${post.id}`}
                            className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{formatTimeAgo(post.createdAt)}</span>
                            <span>•</span>
                            <span>{post.views} baxış</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bu Ay</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-800">Yeni Postlar</p>
                          <p className="text-2xl font-bold text-green-900">5</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-800">Cavablar</p>
                          <p className="text-2xl font-bold text-blue-900">23</p>
                        </div>
                        <MessageSquare className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-yellow-800">Bəyənmələr</p>
                          <p className="text-2xl font-bold text-yellow-900">67</p>
                        </div>
                        <ThumbsUp className="w-8 h-8 text-yellow-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Posts Tab */}
            {activeTab === 'posts' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Mənim Postlarım</h3>
                  <Link
                    to="/forum/add-post"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Yeni Post
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {posts.map(post => (
                    <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Link
                            to={`/forum/post/${post.id}`}
                            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                          <p className="text-gray-600 mt-2">{post.content}</p>
                          
                          <div className="flex items-center space-x-6 mt-4 text-sm text-gray-500">
                            <span className="px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views}
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {post.replies}
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {post.likes}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {formatTimeAgo(post.createdAt)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Nailiyyətlər</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {user.achievements.map(achievement => (
                    <div
                      key={achievement.id}
                      className={`border-2 rounded-xl p-6 text-center transition-all duration-200 ${
                        achievement.earned
                          ? 'border-green-200 bg-green-50 shadow-sm'
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h4 className={`font-semibold mb-2 ${
                        achievement.earned ? 'text-green-900' : 'text-gray-700'
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-green-700' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && (
                        <div className="mt-3 inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          <Award className="w-3 h-3 mr-1" />
                          Qazanıldı
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress Section */}
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Tərəqqi</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Forum aktivliyi</span>
                        <span>67/100 post</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Kömək edən statusu</span>
                        <span>234/500 cavab</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '47%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Hesab Parametrləri</h3>
                
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Şəxsi Məlumatlar
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ad və Soyad
                        </label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Avtomobil
                        </label>
                        <input
                          type="text"
                          defaultValue={user.car}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail
                        </label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          defaultValue={user.phone}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Privacy Settings */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Məxfilik Parametrləri
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Profil görünürlüyü</p>
                          <p className="text-sm text-gray-600">Profilinizi kimə göstərmək istəyirsiniz</p>
                        </div>
                        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Hamıya</option>
                          <option>Yalnız üzvlərə</option>
                          <option>Heç kimə</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Mənim postlarım</p>
                          <p className="text-sm text-gray-600">Postlarınızı kimə göstərmək istəyirsiniz</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Bell className="w-5 h-5 mr-2" />
                      Bildirişlər
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">E-mail bildirişləri</p>
                          <p className="text-sm text-gray-600">Yeni cavablar üçün e-mail alın</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">SMS bildirişləri</p>
                          <p className="text-sm text-gray-600">Vacib bildirişlər üçün SMS alın</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Lock className="w-5 h-5 mr-2" />
                      Təhlükəsizlik
                    </h4>
                    <div className="space-y-4">
                      <button className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Şifrəni dəyiş</p>
                            <p className="text-sm text-gray-600">Hesabınızın təhlükəsizliyini artırın</p>
                          </div>
                          <span className="text-blue-600">Dəyiş</span>
                        </div>
                      </button>
                      
                      <button className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">İki faktorlu təsdiq</p>
                            <p className="text-sm text-gray-600">Əlavə təhlükəsizlik qatı əlavə edin</p>
                          </div>
                          <span className="text-gray-400">Qeyri-aktiv</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-200">
                    <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Dəyişiklikləri Saxla
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Hesabdan Çıx
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;