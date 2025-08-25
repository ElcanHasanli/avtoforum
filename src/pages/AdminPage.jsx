// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import { 
  Users, UserCheck, UserX, MessageSquare, Shield, 
  BarChart3, Settings, Eye, Edit, Trash2, 
  CheckCircle, XCircle, AlertTriangle, TrendingUp,
  Calendar, Clock, MapPin, Phone, Mail, Search,
  Filter, Download, Plus, MoreHorizontal
} from 'lucide-react';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const stats = [
    { label: 'Ümumi İstifadəçi', value: '15,240', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Aktiv İstifadəçi', value: '8,947', change: '+8%', icon: UserCheck, color: 'green' },
    { label: 'Forum Postları', value: '24,156', change: '+15%', icon: MessageSquare, color: 'purple' },
    { label: 'Təsdiqlənmiş Usta', value: '1,285', change: '+5%', icon: Shield, color: 'yellow' }
  ];

  const recentUsers = [
    { id: 1, name: 'Elvin Məmmədov', email: 'elvin@example.com', role: 'admin', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Aytac Quliyeva', email: 'aytac@example.com', role: 'moderator', status: 'active', joinDate: '2024-01-14' },
    { id: 3, name: 'Cavid Əliyev', email: 'cavid@example.com', role: 'user', status: 'pending', joinDate: '2024-01-13' },
    { id: 4, name: 'Nigar Əliyeva', email: 'nigar@example.com', role: 'user', status: 'suspended', joinDate: '2024-01-12' }
  ];

  const recentPosts = [
    { id: 1, title: 'BMW F30 mühərrik problemi', author: 'Elvin Abbasov', status: 'approved', date: '2024-01-15' },
    { id: 2, title: 'Mercedes C200 servis', author: 'Rəşad Məmmədov', status: 'pending', date: '2024-01-14' },
    { id: 3, title: 'Toyota Camry tuning', author: 'Cavid Əliyev', status: 'rejected', date: '2024-01-13' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      suspended: 'bg-red-100 text-red-800 border-red-200',
      approved: 'bg-green-100 text-green-800 border-green-200',
      rejected: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || colors.pending;
  };

  const getRoleColor = (role) => {
    const colors = {
      admin: 'bg-red-100 text-red-800 border-red-200',
      moderator: 'bg-blue-100 text-blue-800 border-blue-200',
      user: 'bg-slate-100 text-slate-800 border-slate-200'
    };
    return colors[role] || colors.user;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-red-600 mr-3" />
              <h1 className="text-2xl font-bold text-slate-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Axtar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Çıxış
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1 mb-8">
          <div className="flex space-x-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'users', label: 'İstifadəçilər', icon: Users },
              { id: 'content', label: 'Məzmun', icon: MessageSquare },
              { id: 'settings', label: 'Tənzimləmələr', icon: Settings }
            ].map((tab) => (
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

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      stat.color === 'green' ? 'bg-green-100 text-green-600' :
                      stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    <span className="text-sm text-slate-500 ml-1">bu ay</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* User Growth Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">İstifadəçi Artımı</h3>
                <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                    <p>Chart komponenti burada olacaq</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Son Fəaliyyətlər</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Yeni istifadəçi qeydiyyatdan keçdi', user: 'Elvin Məmmədov', time: '2 dəqiqə əvvəl' },
                    { action: 'Forum postu təsdiqləndi', user: 'Aytac Quliyeva', time: '15 dəqiqə əvvəl' },
                    { action: 'Usta hesabı təsdiqləndi', user: 'Cavid Əliyev', time: '1 saat əvvəl' },
                    { action: 'Spam post silindi', user: 'Sistem', time: '2 saat əvvəl' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-900">{activity.action}</p>
                        <p className="text-xs text-slate-500">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* Users Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">İstifadəçi İdarəetməsi</h2>
                <p className="text-slate-600">Bütün istifadəçiləri idarə edin və tənzimləyin</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Yeni İstifadəçi
              </button>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">İstifadəçi Siyahısı</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-slate-400" />
                      <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                        <option>Bütün rollar</option>
                        <option>Admin</option>
                        <option>Moderator</option>
                        <option>İstifadəçi</option>
                      </select>
                    </div>
                    <button className="text-slate-600 hover:text-slate-900">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">İstifadəçi</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Qoşulma</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Əməliyyatlar</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                              <UserCheck className="w-5 h-5 text-slate-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-slate-900">{user.name}</div>
                              <div className="text-sm text-slate-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(user.status)}`}>
                            {user.status === 'active' ? 'Aktiv' : 
                             user.status === 'pending' ? 'Gözləyir' : 'Dayandırılıb'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {user.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            {/* Content Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Məzmun İdarəetməsi</h2>
                <p className="text-slate-600">Forum postlarını və məzmunları idarə edin</p>
              </div>
            </div>

            {/* Content Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Forum Postları</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Post</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Müəllif</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tarix</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Əməliyyatlar</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {recentPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-slate-900">{post.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {post.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(post.status)}`}>
                            {post.status === 'approved' ? 'Təsdiqlənib' : 
                             post.status === 'pending' ? 'Gözləyir' : 'Rədd edilib'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {post.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-green-600 hover:text-green-900">
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <XCircle className="w-4 h-4" />
                            </button>
                            <button className="text-slate-600 hover:text-slate-900">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Tənzimləmələr</h2>
              <p className="text-slate-600 mb-6">Sistem parametrlərini tənzimləyin</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Forum Tənzimləmələri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Post təsdiqi tələb olunur
                      </label>
                      <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option>Bəli</option>
                        <option>Xeyr</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Maksimum post uzunluğu
                      </label>
                      <input type="number" className="w-full border border-slate-300 rounded-lg px-3 py-2" defaultValue="1000" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">İstifadəçi Tənzimləmələri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Avtomatik hesab təsdiqi
                      </label>
                      <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option>Bəli</option>
                        <option>Xeyr</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Maksimum giriş cəhdi
                      </label>
                      <input type="number" className="w-full border border-slate-300 rounded-lg px-3 py-2" defaultValue="5" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Tənzimləmələri Saxla
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;

