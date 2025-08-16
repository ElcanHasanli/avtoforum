// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Bell, User, Car, MessageSquare, 
  Users, Settings, LogOut, Sun, Moon, ChevronDown,
  Home, Wrench, Shield, List, Zap, CircleDot, 
  Droplets, Square, Paintbrush, FileText
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
    
    // Listen for storage changes (login/logout in other tabs)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Load notifications
  useEffect(() => {
    if (isAuthenticated) {
      const mockNotifications = [
        {
          id: 1,
          title: 'Yeni cavab',
          message: 'BMW F30 postunuza cavab verildi',
          time: '5 dəqiqə əvvəl',
          read: false,
          type: 'reply'
        },
        {
          id: 2,
          title: 'Postunuz bəyənildi',
          message: 'Mercedes problemləri postunuz 10 bəyəni aldı',
          time: '1 saat əvvəl',
          read: false,
          type: 'like'
        },
        {
          id: 3,
          title: 'Yeni izləyici',
          message: 'Orxan Bayramov sizi izləməyə başladı',
          time: '3 saat əvvəl',
          read: true,
          type: 'follow'
        }
      ];
      setNotifications(mockNotifications);
    }
  }, [isAuthenticated]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUser(null);
    setIsProfileOpen(false);
    navigate('/');
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  // Categories for chat topics
  const categories = [
    { 
      id: 'general', 
      name: 'Ümumi', 
      icon: MessageSquare, 
      color: 'text-blue-600',
      description: 'Ümumi müzakirələr və suallar'
    },
    { 
      id: 'technical', 
      name: 'Texniki', 
      icon: Wrench, 
      color: 'text-red-600',
      description: 'Texniki problemlər və həllər'
    },
    { 
      id: 'electrical', 
      name: 'Elektrik', 
      icon: Zap, 
      color: 'text-yellow-600',
      description: 'Elektrik sistemi və elektronika'
    },
    { 
      id: 'wheels', 
      name: 'Təkərlər', 
      icon: CircleDot, 
      color: 'text-gray-600',
      description: 'Şin, disk və balans məsələləri'
    },
    { 
      id: 'lubrication', 
      name: 'Yağlama', 
      icon: Droplets, 
      color: 'text-green-600',
      description: 'Motor yağı və texniki mayelər'
    },
    { 
      id: 'body', 
      name: 'Kuzov', 
      icon: Square, 
      color: 'text-purple-600',
      description: 'Kuzov təmiri və boyaq işləri'
    },
    { 
      id: 'tuning', 
      name: 'Tuninq', 
      icon: Paintbrush, 
      color: 'text-pink-600',
      description: 'Modifikasiya və performans'
    },
    { 
      id: 'insurance', 
      name: 'Sığorta', 
      icon: FileText, 
      color: 'text-indigo-600',
      description: 'Sığorta və hüquqi məsələlər'
    }
  ];

  const navigationItems = [
    { name: 'Ana Səhifə', href: '/', icon: Home },
    { name: 'Forum', href: '/forum', icon: MessageSquare },
    { name: 'Klublar', href: '/clubs', icon: Users },
    { name: 'Ustalar', href: '/masters', icon: Wrench }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/forum?category=${categoryId}`);
    setIsCategoriesOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsProfileOpen(false);
        setShowNotifications(false);
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Avto</span>
              <span className="text-xl font-bold text-blue-600">Forum</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative dropdown-container">
           

              {/* Categories Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900">Müzakirə Kateqoriyaları</h3>
                    <p className="text-xs text-gray-500 mt-1">İstədiyiniz mövzunu seçin</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className="flex items-start p-3 hover:bg-gray-50 rounded-xl transition-colors group text-left"
                      >
                        <div className={`p-2 rounded-lg bg-gray-100 mr-3 group-hover:bg-white group-hover:shadow-sm transition-all ${category.color}`}>
                          <category.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {category.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="px-4 py-2 border-t border-gray-100 mt-2">
                    <Link
                      to="/forum"
                      onClick={() => setIsCategoriesOpen(false)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Bütün kategoriyaları gör →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
         

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105 relative"
                  >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900 flex items-center justify-between">
                          Bildirişlər
                          {unreadCount > 0 && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                              {unreadCount} yeni
                            </span>
                          )}
                        </h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              onClick={() => markNotificationAsRead(notification.id)}
                              className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 transition-all ${
                                notification.read ? 'border-transparent' : 'border-blue-500 bg-blue-50'
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-900">
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                                )}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-6 text-center text-gray-500">
                            <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                            <p className="text-sm">Bildiriş yoxdur</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 p-1.5 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                  >
                    <img
                      src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-200"
                    />
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      isProfileOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Profile Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user?.avatar}
                            alt={user?.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                            <p className="text-xs text-gray-500">{user?.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="py-1">
                        <Link
                          to="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <User className="w-4 h-4 mr-3 text-gray-400" />
                          Profil
                        </Link>
                        <Link
                          to="/profile?tab=settings"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Settings className="w-4 h-4 mr-3 text-gray-400" />
                          Tənzimləmələr
                        </Link>
                        {user?.role === 'admin' && (
                          <Link
                            to="/admin"
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Shield className="w-4 h-4 mr-3 text-gray-400" />
                            Admin Panel
                          </Link>
                        )}
                        <div className="border-t border-gray-100 my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Çıxış
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Auth Buttons */
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                >
                  Daxil ol
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Qeydiyyat
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}

              {/* Mobile Categories */}
              <div className="pt-4">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Kateqoriyalar
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(0, 6).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        handleCategoryClick(category.id);
                        setIsOpen(false);
                      }}
                      className="flex items-center p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors text-left"
                    >
                      <category.icon className={`w-4 h-4 mr-2 ${category.color}`} />
                      <span className="text-sm">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Auth Buttons */}
              {!isAuthenticated && (
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl"
                  >
                    Daxil ol
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mt-2"
                  >
                    Qeydiyyat
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;