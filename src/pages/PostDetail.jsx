// src/pages/PostDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { 
  ArrowLeft, MessageSquare, ThumbsUp, ThumbsDown, Eye, Clock, 
  Share2, Bookmark, Flag, User, Car, Star, Pin, Tag, Send,
  MoreVertical, Edit, Trash2, Reply
} from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    const loadPostData = async () => {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock post data
      const mockPost = {
        id: parseInt(id),
        title: 'BMW F30 üçün ən yaxşı motor yağı hansıdır?',
        content: `Salam dostlar! 

BMW F30 320i modelim üçün hansı motor yağını tövsiyə edərsiniz? Hazırda Castrol Edge 5W-30 istifadə edirəm, amma 10.000 km-dən sonra yağ qara olur və arada-sırada səs-küy eşidirəm.

**Hazırkı vəziyyət:**
- Model: BMW F30 320i (2014)
- Motor: N20B20 2.0T
- Yürüş: 85,000 km
- Hazırkı yağ: Castrol Edge 5W-30
- Dəyişmə intervalı: 7,500 km

**Suallarım:**
1. 0W-20 yağa keçmək məsləhətdirmi?
2. Mobil 1 və ya Liqui Moly hansı daha yaxşıdır?
3. Dəyişmə intervalını 10,000 km-ə çıxarmaq olarmı?

Təcrübəli dostlardan kömək gözləyirəm. Əvvəlcədən təşəkkürlər! 🚗`,
        author: {
          id: 1,
          name: 'Elvin Məmmədov',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          car: 'BMW F30 320i',
          reputation: 245,
          joinDate: '2023-01-15',
          postsCount: 67,
          isVerified: true
        },
        category: { id: 'maintenance', name: 'Texniki Baxım', color: 'yellow' },
        createdAt: '2024-08-05T10:30:00Z',
        updatedAt: '2024-08-05T10:35:00Z',
        views: 156,
        likes: 12,
        dislikes: 1,
        bookmarks: 8,
        isPinned: true,
        isPopular: true,
        tags: ['BMW', 'F30', 'motor yağı', 'texniki baxım', 'N20'],
        images: [
          'https://images.unsplash.com/photo-1563203369-26f2e4a5cf50?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
        ]
      };

      const mockReplies = [
        {
          id: 1,
          content: `Salam Elvin! N20 mühərrik üçün ən yaxşı seçim **Mobil 1 ESP 0W-30** olacaq. BMW-nin rəsmi tövsiyəsidir və uzunömürlülük LL-04 standartına cavab verir.

**Tövsiyələrim:**
- Mobil 1 ESP 0W-30 (BMW LL-04 sertifikatlı)
- 7,500 km intervalı saxla, 10k çox olacaq N20 üçün
- Yağ filtrini hər dəyişdə Original BMW götür

Məndə F30 328i var, 3 ildir Mobil 1 istifadə edirəm, heç problem olmayıb. Motor səssiz işləyir, yağ qara olmur.`,
          author: {
            id: 2,
            name: 'Rəşad Həsənov',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            car: 'BMW F30 328i',
            reputation: 189,
            isVerified: true
          },
          createdAt: '2024-08-05T11:15:00Z',
          likes: 8,
          dislikes: 0,
          replies: []
        },
        {
          id: 2,
          content: `Məncə **Liqui Moly Top Tec 4200 5W-30** daha yaxşı seçimdir. Alman istehsalıdır və BMW-lər üçün xüsusi formulyası var.

Səbəbləri:
✅ Daha uzun xidmət müddəti
✅ Yaxşı təmizləyici xassələri  
✅ Qiyməti münasibdir
✅ BMW Longlife-04 sertifikatlı

2 ildir bunu istifadə edirəm, çox razıyam. Motor daha sakit işləyir və yağ 10k km-ə qədər təmiz qalır.`,
          author: {
            id: 3,
            name: 'Cavid Əliyev',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            car: 'Audi A4 B9 2.0T',
            reputation: 156,
            isVerified: false
          },
          createdAt: '2024-08-05T12:30:00Z',
          likes: 5,
          dislikes: 1,
          replies: [
            {
              id: 3,
              content: 'Cavid, Liqui Moly-ni haradan alırsan? Rəsmi distribyutor varmı Bakıda?',
              author: {
                id: 4,
                name: 'Orxan Bayramov',
                avatar: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face',
                car: 'Hyundai Elantra',
                reputation: 89
              },
              createdAt: '2024-08-05T13:45:00Z',
              likes: 2,
              dislikes: 0
            }
          ]
        },
        {
          id: 4,
          content: `BMW-də işləyirəm, rəsmi tövsiyə:

**BMW F30 320i N20 üçün:**
- BMW TwinPower Turbo Oil 0W-30 (orijinal)
- Castrol Edge Professional 0W-30 LL04
- Mobil 1 ESP 0W-30

⚠️ **DİQQƏT:** 0W-20-yə keçmə! N20 mühərrik üçün çox nazik olacaq, xüsusilə isti havada.

Dəyişmə intervalı maksimum 10k km, amma tövsiyə 7.5k km-dir. Şəhər şəraitində daha tez dəyişmək lazımdır.`,
          author: {
            id: 5,
            name: 'Mürad Süleymanov',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            car: 'BMW X3 xDrive30i',
            reputation: 312,
            isVerified: true,
            badge: 'BMW Mütəxəssisi'
          },
          createdAt: '2024-08-05T14:20:00Z',
          likes: 15,
          dislikes: 0,
          replies: []
        }
      ];

      setPost(mockPost);
      setReplies(mockReplies);
      setLoading(false);
    };

    loadPostData();
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setPost(prev => ({
      ...prev,
      likes: isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setPost(prev => ({
      ...prev,
      bookmarks: isBookmarked ? prev.bookmarks - 1 : prev.bookmarks + 1
    }));
  };

  const handleReply = async (parentId = null) => {
    if (!newReply.trim()) return;

    const reply = {
      id: Date.now(),
      content: newReply,
      author: {
        id: 999,
        name: 'İstifadəçi',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        car: 'Test Car',
        reputation: 25
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      replies: []
    };

    if (parentId) {
      setReplies(prev => prev.map(r => 
        r.id === parentId 
          ? { ...r, replies: [...r.replies, reply] }
          : r
      ));
    } else {
      setReplies(prev => [...prev, reply]);
    }

    setNewReply('');
    setShowReplyForm(false);
    setReplyTo(null);
  };

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
      yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[color] || 'bg-blue-100 text-blue-800 border-blue-200';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post tapılmadı</h1>
          <p className="text-gray-600 mb-4">Axtardığınız post mövcud deyil və ya silinib</p>
          <Link
            to="/forum"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Foruma Qayıt
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/forum" className="hover:text-blue-600 transition-colors">Forum</Link>
          <span>/</span>
          <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(post.category.color)}`}>
            {post.category.name}
          </span>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{post.title}</span>
        </nav>

        {/* Main Post */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          {/* Post Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  {post.isPinned && (
                    <div className="flex items-center text-green-600">
                      <Pin className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Sabitlənmiş</span>
                    </div>
                  )}
                  {post.isPopular && (
                    <div className="flex items-center text-yellow-600">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Populyar</span>
                    </div>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(post.category.color)}`}>
                    {post.category.name}
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                      {post.author.isVerified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {post.author.badge && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {post.author.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Car className="h-3 w-3 mr-1" />
                        {post.author.car}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {post.author.reputation} reputasiya
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        {post.author.postsCount} post
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Flag className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Post Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {formatTimeAgo(post.createdAt)}
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {post.views} baxış
                </div>
              </div>
              {post.updatedAt !== post.createdAt && (
                <div className="text-xs text-gray-400">
                  Son dəyişiklik: {formatTimeAgo(post.updatedAt)}
                </div>
              )}
            </div>
          </div>

          {/* Post Content */}
          <div className="p-6">
            <div className="prose prose-gray max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return <br key={index} />;
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Post Images */}
            {post.images && post.images.length > 0 && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Post şəkli ${index + 1}`}
                    className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Post Footer */}
          <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isLiked 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                
                <button className="flex items-center space-x-2 px-3 py-2 bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
                  <ThumbsDown className="h-4 w-4" />
                  <span className="text-sm font-medium">{post.dislikes}</span>
                </button>

                <button
                  onClick={() => setShowReplyForm(!showReplyForm)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Reply className="h-4 w-4" />
                  <span className="text-sm font-medium">Cavabla</span>
                </button>
              </div>

              <div className="text-sm text-gray-500">
                {post.bookmarks} əlavə etdi • {replies.length} cavab
              </div>
            </div>
          </div>
        </div>

        {/* Reply Form */}
        {showReplyForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cavab yazın</h3>
            <div className="space-y-4">
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Cavabınızı yazın..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Markdown dəstəklənir
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowReplyForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Ləğv et
                  </button>
                  <button
                    onClick={() => handleReply()}
                    disabled={!newReply.trim()}
                    className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    <span>Göndər</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Replies */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">
            Cavablar ({replies.length})
          </h2>

          {replies.map(reply => (
            <div key={reply.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Reply Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={reply.author.avatar}
                    alt={reply.author.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{reply.author.name}</h4>
                      {reply.author.isVerified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {reply.author.badge && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {reply.author.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Car className="h-3 w-3 mr-1" />
                        {reply.author.car}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {reply.author.reputation}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatTimeAgo(reply.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              {/* Reply Content */}
              <div className="prose prose-gray max-w-none mb-4">
                {reply.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return <br key={index} />;
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h4 key={index} className="font-semibold text-gray-900 mt-4 mb-2">
                        {paragraph.slice(2, -2)}
                      </h4>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Reply Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 px-2 py-1 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">{reply.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 px-2 py-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="text-sm">{reply.dislikes}</span>
                  </button>
                  <button
                    onClick={() => {
                      setReplyTo(reply.id);
                      setShowReplyForm(true);
                    }}
                    className="flex items-center space-x-1 px-2 py-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    <Reply className="h-4 w-4" />
                    <span className="text-sm">Cavabla</span>
                  </button>
                </div>

                <button className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                  <Flag className="h-4 w-4" />
                </button>
              </div>

              {/* Nested Replies */}
              {reply.replies && reply.replies.length > 0 && (
                <div className="mt-4 ml-8 space-y-4">
                  {reply.replies.map(nestedReply => (
                    <div key={nestedReply.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <img
                            src={nestedReply.author.avatar}
                            alt={nestedReply.author.name}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h5 className="font-medium text-gray-900 text-sm">{nestedReply.author.name}</h5>
                              <span className="text-xs text-gray-500">★ {nestedReply.author.reputation}</span>
                            </div>
                            <div className="text-xs text-gray-500">{formatTimeAgo(nestedReply.createdAt)}</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-3">{nestedReply.content}</p>
                      
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{nestedReply.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600">
                          <Reply className="h-3 w-3" />
                          <span>Cavabla</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {replies.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hələ cavab yoxdur</h3>
              <p className="text-gray-600 mb-6">Bu posta ilk cavab verən siz olun!</p>
              <button
                onClick={() => setShowReplyForm(true)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Reply className="w-5 h-5 mr-2" />
                İlk Cavabı Ver
              </button>
            </div>
          )}
        </div>

        {/* Related Posts */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Oxşar Postlar</h3>
          <div className="space-y-3">
            {[
              { id: 2, title: 'Mercedes W212 E-Class elektrik problemləri', replies: 15 },
              { id: 3, title: 'Audi A4 B9 üçün tuninq təklifləri', replies: 11 },
              { id: 4, title: 'BMW F30 xDrive sistemində problem', replies: 8 }
            ].map(relatedPost => (
              <Link
                key={relatedPost.id}
                to={`/forum/post/${relatedPost.id}`}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="text-gray-700 hover:text-blue-600">{relatedPost.title}</span>
                <span className="text-sm text-gray-500">{relatedPost.replies} cavab</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Forum Button */}
        <div className="mt-8 text-center">
          <Link
            to="/forum"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Foruma Qayıt
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;