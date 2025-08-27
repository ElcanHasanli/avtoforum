import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout'
import { 
  MessageSquare, Users, TrendingUp, Clock, Eye, ThumbsUp,
  ChevronRight, Car, Wrench, Zap, CircleDot, Droplets,
  Square, Paintbrush, FileText, Calendar, Star, 
  ArrowRight, User, Badge, Trophy, Send, Search,
  ChevronLeft, Play, Building2, Phone, Mail,
  MapPin, Award, CheckCircle, BarChart3
} from 'lucide-react';

const Home = () => {
  const categories = [
    { id: 'general', name: 'Ümumi', icon: MessageSquare, color: 'slate', count: 245 },
    { id: 'technical', name: 'Texniki', icon: Wrench, color: 'blue', count: 189 },
    { id: 'electrical', name: 'Elektrik', icon: Zap, color: 'yellow', count: 156 },
    { id: 'wheels', name: 'Təkərlər', icon: CircleDot, color: 'gray', count: 134 },
    { id: 'lubrication', name: 'Yağlama', icon: Droplets, color: 'green', count: 98 },
    { id: 'body', name: 'Kuzov', icon: Square, color: 'purple', count: 87 },
    { id: 'tuning', name: 'Tuninq', icon: Paintbrush, color: 'pink', count: 76 },
    { id: 'insurance', name: 'Sığorta', icon: FileText, color: 'indigo', count: 65 }
  ];
  const premiumMasters = [
    { 
      id: 1, 
      name: "Elvin Məmmədov", 
      title: "Baş Mühəndis",
      specialty: "Mühərrik və Transmissiya", 
      rating: 4.9, 
      experience: "15+ il",
      completed: 2847,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      location: "Bakı, Yasamal"
    },
    { 
      id: 2, 
      name: "Mürad Həsənov", 
      title: "Kuzov Mütəxəssisi",
      specialty: "Kuzov Təmiri və Boyaq", 
      rating: 4.8, 
      experience: "12+ il",
      completed: 1956,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      location: "Bakı, Nəsimi"
    },
    { 
      id: 3, 
      name: "Aytac Quliyeva", 
      title: "Elektrik Mütəxəssisi",
      specialty: "Avtomobil Elektronikası", 
      rating: 4.9, 
      experience: "10+ il",
      completed: 1634,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=150&h=150&fit=crop&crop=face",
      verified: true,
      location: "Bakı, Nərimanov"
    }
  ];
  const topics = [
    {
      id: 1,
      title: "BMW F30 320i mühərrik yağı seçimi və dəyişmə intervalları",
      description: "Professional mütəxəssislərdən BMW F30 320i modeli üçün optimal motor yağı seçimi haqqında məsləhət istəyirəm...",
      author: "Elvin Abbasov",
      authorRole: "Mütəxəssis",
      date: "Bu gün, 14:30",
      replies: 23,
      likes: 45,
      views: 1247,
      category: "Texniki",
      priority: "high",
      solved: false
    },
    {
      id: 2,
      title: "Mercedes-Benz C200 CDI elektrik sistemi diaqnostikası",
      description: "Mercedes C200 CDI modelində elektrik sistemi ilə bağlı problemlər və həll yolları haqqında...",
      author: "Rəşad Məmmədov",
      authorRole: "İstifadəçi",
      date: "Bu gün, 12:15",
      replies: 18,
      likes: 32,
      views: 892,
      category: "Elektrik",
      priority: "medium",
      solved: true
    },
    {
      id: 3,
      title: "Avtomobil sığortası: KASKO və OSAGO müqayisəsi 2024",
      description: "Azərbaycanda mövcud sığorta şirkətlərinin KASKO və OSAGO siyasətlərinin müqayisəli təhlili...",
      author: "Nigar Əliyeva", 
      authorRole: "Ekspert",
      date: "Dünən, 16:45",
      replies: 31,
      likes: 67,
      views: 1834,
      category: "Sığorta",
      priority: "high",
      solved: false
    }
  ];
  const companyStats = [
    { label: "Aktiv İstifadəçi", value: "15,240", icon: Users, color: "blue" },
    { label: "Həll Edilən Problem", value: "8,947", icon: CheckCircle, color: "green" },
    { label: "Peşəkar Usta", value: "1,285", icon: Award, color: "yellow" },
    { label: "Forum Postları", value: "24,156", icon: MessageSquare, color: "purple" }
  ];
  const [masterIndex, setMasterIndex] = useState(0);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      user: { 
        name: "Sistem Admin", 
        role: "admin", 
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
      }, 
      text: "AvtoForum platformasına xoş gəlmisiniz. Professional kömək üçün buradayıq.", 
      time: "14:30" 
    },
    { 
      id: 2, 
      user: { 
        name: "Elvin M.", 
        role: "expert", 
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
      }, 
      text: "BMW F30 üçün texniki dəstəyə ehtiyacı olan varsa, yaza bilər.", 
      time: "14:35" 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    const interval = setInterval(() => {
      setMasterIndex(prev => (prev + 1) % premiumMasters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: Date.now(),
      user: { 
        name: "Siz", 
        role: "user", 
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
      },
      text: newMessage,
      time: new Date().toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const getCategoryColor = (color) => {
    const colors = {
      slate: 'text-slate-700 bg-slate-50 border-slate-200 hover:bg-slate-100',
      blue: 'text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100',
      yellow: 'text-yellow-700 bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      gray: 'text-gray-700 bg-gray-50 border-gray-200 hover:bg-gray-100',
      green: 'text-green-700 bg-green-50 border-green-200 hover:bg-green-100',
      purple: 'text-purple-700 bg-purple-50 border-purple-200 hover:bg-purple-100',
      pink: 'text-pink-700 bg-pink-50 border-pink-200 hover:bg-pink-100',
      indigo: 'text-indigo-700 bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
    };
    return colors[color] || colors.slate;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[priority] || colors.medium;
  };

  return (
    <Layout>
      <div className="bg-white">

        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
                  <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Professional Avtomobil Platforması</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900">
                  Azərbaycanın Ən Böyük
                  <span className="block text-blue-600">Avtomobil Ekspert Şəbəkəsi</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                  Professional ustalar, ekspert məsləhətləri və etibarlı həll yolları ilə avtomobil problemlərinizi həll edin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/forum"
                    className=" from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Ekspert Məsləhəti Al
                  </Link>
                  <Link
                    to="/masters"
                    className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center"
                  >
                    <Wrench className="w-5 h-5 mr-2" />
                    Professional Ustalar
                  </Link>
                </div>
              </div>
              <div className="lg:text-right">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${
                        stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        stat.color === 'green' ? 'bg-green-100 text-green-600' :
                        stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold mb-1 text-slate-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              

              <div className="lg:col-span-3 space-y-12">
                

                <div>
                  <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Sertifikatlaşdırılmış Ustalar</h2>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                      Təcrübəli və peşəkar ustalarımızdan yüksək keyfiyyətli xidmət alın
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {premiumMasters.map((master) => (
                      <div key={master.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group">
                        <div className="text-center">
                          <div className="relative inline-block mb-4">
                            <img
                              src={master.avatar}
                              alt={master.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-slate-100"
                            />
                            {master.verified && (
                              <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                            )}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{master.name}</h3>
                          <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">{master.title}</p>
                          <p className="text-slate-600 mb-4 text-sm">{master.specialty}</p>
                          
                          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 text-sm">
                            <div className="bg-slate-50 rounded-lg p-3">
                              <div className="font-semibold text-slate-900">{master.experience}</div>
                              <div className="text-slate-600 text-xs">Təcrübə</div>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3">
                              <div className="font-semibold text-slate-900">{master.completed}</div>
                              <div className="text-slate-600 text-xs">Tamamlanmış</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center mb-6">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(master.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                                />
                              ))}
                              <span className="ml-2 text-sm font-semibold text-slate-700">{master.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center text-sm text-slate-500 mb-6">
                            <MapPin className="w-4 h-4 mr-1" />
                            {master.location}
                          </div>
                          
                          <Link
                            to={`/masters/${master.id}`}
                            className="w-full  from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:shadow-lg"
                          >
                            Profili Görüntülə
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="mb-4 sm:mb-0">
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Aktiv İstifadəçilər</h2>
                      <p className="text-slate-600">Hal-hazırda saytda məşğul olan istifadəçilər və onların fəaliyyətləri</p>
                    </div>
                    <Link
                      to="/efir"
                      className="  text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Hamısını Gör
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-3004980ad54e?w=60&h=60&fit=crop&crop=face"
                            alt="Elvin Məmmədov"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">Elvin Məmmədov</h3>
                          <p className="text-sm text-slate-500">BMW Club Prezidenti</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-blue-700">BMW F30 haqqında post yazır</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>2 dəqiqə əvvəl</span>
                        <span className="flex items-center">
                          <Car className="w-4 h-4 mr-1" />
                          BMW F30
                        </span>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b1b0?w=60&h=60&fit=crop&crop=face"
                            alt="Aytac Quliyeva"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">Aytac Quliyeva</h3>
                          <p className="text-sm text-slate-500">Mercedes Club Üzvü</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                        <p className="text-sm text-green-700">Mercedes C200 servis postu paylaşır</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>5 dəqiqə əvvəl</span>
                        <span className="flex items-center">
                          <Car className="w-4 h-4 mr-1" />
                          Mercedes C200
                        </span>
                      </div>
                    </div>


                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-200 p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Platforma Aktivliyi</h3>
                        <p className="text-slate-600 text-sm mb-4">
                          Hal-hazırda 247 istifadəçi online
                        </p>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <img
                              key={i}
                              src={`https://images.unsplash.com/photo-${1500648767791 + i}?w=40&h=40&fit=crop&crop=face`}
                              alt="Active User"
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                          ))}
                        </div>
                        <Link
                          to="/efir"
                          className="inline-block  text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                        >
                          Hamısını Gör
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="mb-4 sm:mb-0">
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Ekspert Forumu</h2>
                      <p className="text-slate-600">Professional məsləhətlər və həll yolları</p>
                    </div>
                    <Link
                      to="/forum/add-post"
                      className="  to-emerald-600  text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Sual Ver
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    {topics.map((topic) => (
                      <div key={topic.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(topic.priority)}`}>
                                {topic.priority === 'high' ? 'Yüksək Prioritet' : 
                                 topic.priority === 'medium' ? 'Orta Prioritet' : 'Aşağı Prioritet'}
                              </span>
                              <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                {topic.category}
                              </span>
                              {topic.solved && (
                                <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 flex items-center">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Həll Edildi
                                </span>
                              )}
                            </div>
                            <Link
                              to={`/forum/post/${topic.id}`}
                              className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors mb-3 block"
                            >
                              {topic.title}
                            </Link>
                            <p className="text-slate-600 mb-4 line-clamp-2 text-sm sm:text-base">{topic.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-slate-600" />
                              </div>
                              <div>
                                <div className="font-medium text-slate-900 text-sm">{topic.author}</div>
                                <div className="text-xs text-slate-500">{topic.authorRole}</div>
                              </div>
                            </div>
                            <div className="text-sm text-slate-500">{topic.date}</div>
                          </div>
                          
                          <div className="flex items-center space-x-4 sm:space-x-6 text-sm text-slate-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {topic.views}
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {topic.replies}
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {topic.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <Link
                      to="/forum"
                      className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                      Bütün Forum Mövzularını Gör
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>


              <div className="space-y-6 sm:space-y-8">

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


               


                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Bizimlə Əlaqə</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-700">+994 12 XXX XX XX</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-700">info@avtoforum.az</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-700">Bakı, Azərbaycan</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 text-center">
                      24/7 Professional Dəstək
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;