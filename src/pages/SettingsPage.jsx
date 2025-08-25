// src/pages/SettingsPage.jsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { 
  User, Mail, Phone, MapPin, Shield, Bell, Globe, 
  Palette, Moon, Sun, Lock, Eye, EyeOff, Trash2,
  Save, X, Check, AlertTriangle, Smartphone, Monitor,
  Volume2, VolumeX, MessageSquare, Heart, Users
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [theme, setTheme] = useState('light');

  const [settings, setSettings] = useState({
    account: {
      name: "Test istifadəçi",
      email: "demo@carclub.az",
      phone: "+994 50 123 45 67",
      location: "Bakı, Yasamal",
      bio: "Avtomobil həvəskarı və BMW F30 sahibi. Tuning və avtomobil texnologiyaları ilə maraqlanıram."
    },
    privacy: {
      profileVisibility: "public",
      showEmail: true,
      showPhone: false,
      showLocation: true,
      allowMessages: true,
      allowFollows: true
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      newPosts: true,
      replies: true,
      likes: true,
      follows: false,
      clubUpdates: true
    },
    appearance: {
      theme: "light",
      language: "az",
      fontSize: "medium",
      compactMode: false
    },
    security: {
      twoFactorAuth: false,
      loginNotifications: true,
      sessionTimeout: 30
    }
  });

  const [editForm, setEditForm] = useState({
    name: settings.account.name,
    email: settings.account.email,
    phone: settings.account.phone,
    location: settings.account.location,
    bio: settings.account.bio
  });

  const tabs = [
    { id: 'account', label: 'Hesab', icon: User },
    { id: 'privacy', label: 'Məxfilik', icon: Shield },
    { id: 'notifications', label: 'Bildirişlər', icon: Bell },
    { id: 'appearance', label: 'Görünüş', icon: Palette },
    { id: 'security', label: 'Təhlükəsizlik', icon: Lock }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({
      name: settings.account.name,
      email: settings.account.email,
      phone: settings.account.phone,
      location: settings.account.location,
      bio: settings.account.bio
    });
  };

  const handleSave = () => {
    setSettings({
      ...settings,
      account: { ...settings.account, ...editForm }
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({
      name: settings.account.name,
      email: settings.account.email,
      phone: settings.account.phone,
      location: settings.account.location,
      bio: settings.account.bio
    });
  };

  const handlePrivacyChange = (key, value) => {
    setSettings({
      ...settings,
      privacy: { ...settings.privacy, [key]: value }
    });
  };

  const handleNotificationChange = (key, value) => {
    setSettings({
      ...settings,
      notifications: { ...settings.notifications, [key]: value }
    });
  };

  const handleAppearanceChange = (key, value) => {
    setSettings({
      ...settings,
      appearance: { ...settings.appearance, [key]: value }
    });
  };

  const handleSecurityChange = (key, value) => {
    setSettings({
      ...settings,
      security: { ...settings.security, [key]: value }
    });
  };

  const getVisibilityLabel = (value) => {
    const labels = {
      public: 'Hamıya açıq',
      members: 'Yalnız üzvlərə',
      private: 'Gizli'
    };
    return labels[value] || value;
  };

  const getLanguageLabel = (value) => {
    const labels = {
      az: 'Azərbaycan dili',
      en: 'English',
      ru: 'Русский'
    };
    return labels[value] || value;
  };

  const getFontSizeLabel = (value) => {
    const labels = {
      small: 'Kiçik',
      medium: 'Orta',
      large: 'Böyük'
    };
    return labels[value] || value;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Tənzimləmələr</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Hesab parametrlərinizi, məxfilik tələblərinizi və bildiriş seçimlərinizi idarə edin
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1 mb-8">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
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

          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Hesab Məlumatları</h3>
                  {!isEditing && (
                    <button
                      onClick={handleEdit}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Düzənlə
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div>
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
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Yadda Saxla
                      </button>
                      <button
                        onClick={handleCancel}
                        className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Ləğv Et
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{settings.account.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{settings.account.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{settings.account.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">{settings.account.location}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <User className="w-5 h-5 text-slate-400 mt-1" />
                        <span className="text-slate-600">{settings.account.bio}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Password Change */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Şifrə Dəyişdir</h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Cari Şifrə</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                        placeholder="Cari şifrənizi daxil edin"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 text-slate-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Yeni Şifrə</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                        placeholder="Yeni şifrənizi daxil edin"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4 text-slate-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
                      </button>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Şifrəni Dəyişdir
                  </button>
                </div>
              </div>

              {/* Account Deletion */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-900 mb-2">Hesabı Sil</h3>
                    <p className="text-red-700 mb-4">
                      Bu əməliyyat geri alına bilməz. Bütün məlumatlarınız və fəaliyyətləriniz məhv olacaq.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Hesabı Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Məxfilik Parametrləri</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Profil Görünürlüyü</label>
                    <select
                      value={settings.privacy.profileVisibility}
                      onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="public">Hamıya açıq</option>
                      <option value="members">Yalnız üzvlərə</option>
                      <option value="private">Gizli</option>
                    </select>
                    <p className="text-sm text-slate-500 mt-1">
                      Profilinizi kimə göstərmək istəyirsiniz
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900">Şəxsi Məlumatlar</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'showEmail', label: 'Email ünvanı göstər', description: 'Digər istifadəçilər email ünvanınızı görə bilər' },
                        { key: 'showPhone', label: 'Telefon nömrəsi göstər', description: 'Digər istifadəçilər telefon nömrənizi görə bilər' },
                        { key: 'showLocation', label: 'Yer məlumatı göstər', description: 'Digər istifadəçilər yer məlumatınızı görə bilər' }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-slate-900">{item.label}</p>
                            <p className="text-sm text-slate-500">{item.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.privacy[item.key]}
                              onChange={(e) => handlePrivacyChange(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900">Qarşılıqlı Əlaqə</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'allowMessages', label: 'Mesaj almağa icazə ver', description: 'Digər istifadəçilər sizə mesaj göndərə bilər' },
                        { key: 'allowFollows', label: 'İzləməyə icazə ver', description: 'Digər istifadəçilər sizi izləyə bilər' }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-slate-900">{item.label}</p>
                            <p className="text-sm text-slate-500">{item.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.privacy[item.key]}
                              onChange={(e) => handlePrivacyChange(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Bildiriş Parametrləri</h3>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900">Bildiriş Növləri</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'emailNotifications', label: 'E-mail bildirişləri', description: 'Vacib bildirişlər üçün e-mail alın', icon: Mail },
                        { key: 'pushNotifications', label: 'Push bildirişləri', description: 'Brauzer vasitəsilə bildirişlər alın', icon: Bell },
                        { key: 'smsNotifications', label: 'SMS bildirişləri', description: 'Vacib bildirişlər üçün SMS alın', icon: Smartphone }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5 text-slate-400" />
                            <div>
                              <p className="font-medium text-slate-900">{item.label}</p>
                              <p className="text-sm text-slate-500">{item.description}</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.notifications[item.key]}
                              onChange={(e) => handleNotificationChange(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900">Fəaliyyət Bildirişləri</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'newPosts', label: 'Yeni postlar', description: 'İzlədiyiniz istifadəçilərin yeni postları', icon: MessageSquare },
                        { key: 'replies', label: 'Cavablar', description: 'Postlarınıza verilən cavablar', icon: MessageSquare },
                        { key: 'likes', label: 'Bəyənmələr', description: 'Postlarınıza verilən bəyənmələr', icon: Heart },
                        { key: 'follows', label: 'Yeni izləyicilər', description: 'Sizi izləməyə başlayan istifadəçilər', icon: Users },
                        { key: 'clubUpdates', label: 'Klub yeniləmələri', description: 'Üzv olduğunuz klubların yeniləmələri', icon: Users }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5 text-slate-400" />
                            <div>
                              <p className="font-medium text-slate-900">{item.label}</p>
                              <p className="text-sm text-slate-500">{item.description}</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.notifications[item.key]}
                              onChange={(e) => handleNotificationChange(item.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Görünüş Parametrləri</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Tema</label>
                    <div className="flex space-x-4">
                      {[
                        { value: 'light', label: 'Açıq', icon: Sun, color: 'bg-yellow-100 text-yellow-800' },
                        { value: 'dark', label: 'Qaranlıq', icon: Moon, color: 'bg-slate-100 text-slate-800' },
                        { value: 'auto', label: 'Avtomatik', icon: Monitor, color: 'bg-blue-100 text-blue-800' }
                      ].map((themeOption) => (
                        <button
                          key={themeOption.value}
                          onClick={() => handleAppearanceChange('theme', themeOption.value)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                            settings.appearance.theme === themeOption.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <themeOption.icon className="w-4 h-4" />
                          <span>{themeOption.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Dil</label>
                    <select
                      value={settings.appearance.language}
                      onChange={(e) => handleAppearanceChange('language', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="az">Azərbaycan dili</option>
                      <option value="en">English</option>
                      <option value="ru">Русский</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Yazı Ölçüsü</label>
                    <select
                      value={settings.appearance.fontSize}
                      onChange={(e) => handleAppearanceChange('fontSize', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="small">Kiçik</option>
                      <option value="medium">Orta</option>
                      <option value="large">Böyük</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Kompakt Rejim</p>
                      <p className="text-sm text-slate-500">Daha az boşluq ilə kompakt görünüş</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.appearance.compactMode}
                        onChange={(e) => handleAppearanceChange('compactMode', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Təhlükəsizlik Parametrləri</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">İki Faktorlu Təsdiq</p>
                      <p className="text-sm text-slate-500">Hesabınızı daha təhlükəsiz edin</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactorAuth}
                        onChange={(e) => handleSecurityChange('twoFactorAuth', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Giriş Bildirişləri</p>
                      <p className="text-sm text-slate-500">Yeni cihazdan giriş zamanı bildiriş alın</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.security.loginNotifications}
                        onChange={(e) => handleSecurityChange('loginNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Sessiya Vaxtı</label>
                    <select
                      value={settings.security.sessionTimeout}
                      onChange={(e) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={15}>15 dəqiqə</option>
                      <option value={30}>30 dəqiqə</option>
                      <option value={60}>1 saat</option>
                      <option value={1440}>24 saat</option>
                    </select>
                    <p className="text-sm text-slate-500 mt-1">
                      Avtomatik çıxış zamanı
                    </p>
                  </div>
                </div>
              </div>

              {/* Active Sessions */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Aktiv Sessiyalar</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Monitor className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900">Chrome - Windows</p>
                        <p className="text-sm text-slate-500">Bakı, Azərbaycan • Bu gün 14:30</p>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Cari</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900">Safari - iPhone</p>
                        <p className="text-sm text-slate-500">Bakı, Azərbaycan • Dünən 18:45</p>
                      </div>
                    </div>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Sonlandır
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;

