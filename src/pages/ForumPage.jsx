// src/pages/ForumPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { 
  Search, Plus, MessageSquare, Eye, ThumbsUp, Clock, 
  Filter, TrendingUp, Pin, Star, User, Car, Calendar,
  ChevronDown, ChevronUp, Tag, Wrench, Paintbrush, 
  FileText, ShoppingCart
} from 'lucide-react';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // Mock data
  useEffect(() => {
    const loadForumData = async () => {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockCategories = [
        { id: 'all', name: 'Hamısı', count: 156, color: 'blue', icon: MessageSquare },
        { id: 'general', name: 'Ümumi Müzakirə', count: 45, color: 'green', icon: MessageSquare },
        { id: 'technical', name: 'Texniki Məsələlər', count: 32, color: 'red', icon: Wrench },
        { id: 'maintenance', name: 'Texniki Baxım', count: 28, color: 'yellow', icon: Wrench },
        { id: 'tuning', name: 'Tuninq', count: 21, color: 'purple', icon: Paintbrush },
        { id: 'insurance', name: 'Sığorta', count: 15, color: 'indigo', icon: FileText },
        { id: 'buying', name: 'Alış-Satış', count: 15, color: 'pink', icon: ShoppingCart }
      ];

      const mockPosts = [
        {
          id: 1,
          title: 'BMW F30 üçün ən yaxşı motor yağı hansıdır?',
          content: 'Salam dostlar! BMW F30 320i modelim üçün hansı motor yağını tövsiyə edərsiniz? Hazırda Castrol istifadə edirəm...',
          author: {
            id: 1,
            name: 'Elvin Məmmədov',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            car: 'BMW F30 320i',
            reputation: 245
          },
          category: { id: 'maintenance', name: 'Texniki Baxım', color: 'yellow' },
          createdAt: '2024-08-05T10:30:00Z',
          views: 156,
          replies: 23,
          likes: 12,
          isPinned: true,
          isPopular: true,
          tags: ['BMW', 'F30', 'motor yağı', 'baxım']
        },
        {
          id: 2,
          title: 'Mercedes W212 E-Class elektrik problemləri',
          content: 'Maşında elektrik sistemində problem var. Ön işıqlar arada-sırada sönür. Kimsə bu problemlə üzləşibmi?',
          author: {
            id: 2,
            name: 'Rəşad Həsənov',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            car: 'Mercedes W212 E350',
            reputation: 189
          },
          category: { id: 'technical', name: 'Texniki Məsələlər', color: 'red' },
          createdAt: '2024-08-05T09:15:00Z',
          views: 89,
          replies: 15,
          likes: 8,
          isPinned: false,
          isPopular: false,
          tags: ['Mercedes', 'W212', 'elektrik', 'problem']
        },
        {
          id: 3,
          title: 'Audi A4 B9 üçün tuninq təklifləri',
          content: 'Yeni aldığım A4 B9-u tuninq etmək istəyirəm. Hansı şirkətləri tövsiyə edərsiniz? Xüsusilə performans tuninqində...',
          author: {
            id: 3,
            name: 'Cavid Əliyev',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            car: 'Audi A4 B9 2.0T',
            reputation: 156
          },
          category: { id: 'tuning', name: 'Tuninq', color: 'purple' },
          createdAt: '2024-08-05T08:45:00Z',
          views: 67,
          replies: 11,
          likes: 15,
          isPinned: false,
          isPopular: true,
          tags: ['Audi', 'A4', 'B9', 'tuninq', 'performans']
        },
        {
          id: 4,
          title: 'Toyota Camry ilə Mercedes E-Class arasında seçim',
          content: 'Uzun müddətdir bu iki avtomobil arasında qərar verə bilmirəm. Hər ikisinin öz üstünlükləri var...',
          author: {
            id: 4,
            name: 'Nigar Quliyeva',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=150&h=150&fit=crop&crop=face',
            car: 'Honda Accord',
            reputation: 98
          },
          category: { id: 'buying', name: 'Alış-Satış', color: 'pink' },
          createdAt: '2024-08-04T16:20:00Z',
          views: 234,
          replies: 31,
          likes: 19,
          isPinned: false,
          isPopular: true,
          tags: ['Toyota', 'Camry', 'Mercedes', 'E-Class', 'seçim']
        },
        {
          id: 5,
          title: 'Sığorta şirkətləri barədə təcrübələriniz',
          content: 'Hangi sığorta şirkəti daha etibarlıdır? PAŞA Sığorta, AXA, yoxsa başqa şirkət?',
          author: {
            id: 5,
            name: 'Orxan Bayramov',
            avatar: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face',
            car: 'Hyundai Elantra',
            reputation: 134
          },
          category: { id: 'insurance', name: 'Sığorta', color: 'indigo' },
          createdAt: '2024-08-04T14:10:00Z',
          views: 145,
          replies: 27,
          likes: 9,
          isPinned: false,
          isPopular: false,
          tags: ['sığorta', 'PAŞA', 'AXA', 'təcrübə']
        }
      ];

      setCategories(mockCategories);
      setPosts(mockPosts);
      setLoading(false);
    };

    loadForumData();
  }, []);

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category.id === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'popular':
          return b.views - a.views;
        case 'mostReplied':
          return b.replies - a.replies;
        case 'mostLiked':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} dəqiqə əvvəl`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} saat əvvəl`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)} gün əvvəl`;
    }
  };

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      purple: 'bg-purple-100 text-purple-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      pink: 'bg-pink-100 text-pink-800'
    };
    return colors[color] || colors.blue;
  };

  if (loading) {
    return (
      <Layout>
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="h-96 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="lg:col-span-3">
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Forum</h1>
              <p className="text-gray-600">Avtomobil icmasının ürəyi - suallar, cavablar və təcrübələr</p>
            </div>
            <Link
              to="/forum/add-post"
              className="inline-flex items-center px-4 sm:px-6 py-3  from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Yeni Post
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 sticky top-24">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Forum içində axtar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Kateqoriyalar</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/forum?category=${category.id}`}
                        className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all ${getCategoryColor(category.color)}`}
                      >
                        <div className="flex items-center">
                          <category.icon className="w-5 h-5 mr-3" />
                          <span className="font-medium text-sm sm:text-base">{category.name}</span>
                        </div>
                        <span className="text-sm font-semibold">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
               
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-4 sm:space-y-6">
                {filteredPosts.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
                    <MessageSquare className="h-12 sm:h-16 w-12 sm:w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Heç bir post tapılmadı</h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">Axtarış meyarlarınıza uyğun post mövcud deyil</p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Filtri Təmizlə
                    </button>
                  </div>
                ) : (
                  filteredPosts.map(post => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
                      {/* Post Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {post.isPinned && (
                              <Pin className="h-4 w-4 text-green-600" />
                            )}
                            {post.isPopular && (
                              <Star className="h-4 w-4 text-yellow-500" />
                            )}
                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(post.category.color)}`}>
                              {post.category.name}
                            </span>
                          </div>
                          
                          <Link
                            to={`/forum/post/${post.id}`}
                            className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          
                          <p className="text-gray-600 mt-2 line-clamp-2 text-sm sm:text-base">{post.content}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.slice(0, 4).map(tag => (
                              <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 4 && (
                              <span className="text-xs text-gray-500">+{post.tags.length - 4} daha</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Post Footer */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 gap-4">
                        {/* Author Info */}
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="text-sm font-medium text-gray-900">{post.author.name}</h4>
                              <span className="text-xs text-gray-500">★ {post.author.reputation}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Car className="h-3 w-3 mr-1" />
                              {post.author.car}
                            </div>
                          </div>
                        </div>

                        {/* Post Stats */}
                        <div className="flex items-center space-x-4 sm:space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {post.replies}
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {post.likes}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {formatTimeAgo(post.createdAt)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      Əvvəlki
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md">
                      1
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      Növbəti
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForumPage;