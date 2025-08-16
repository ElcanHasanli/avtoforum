// src/pages/AddPostForm.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { 
  ArrowLeft, Upload, X, Tag, Eye, Save, Send, 
  Image, FileText, Bold, Italic, Link2, List,
  AlertCircle, Check, Plus
} from 'lucide-react';

const AddPostForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: [],
    images: [],
    isDraft: false
  });
  const [newTag, setNewTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const categories = [
    { id: 'general', name: 'Ümumi Müzakirə', description: 'Avtomobillə bağlı ümumi mövzular' },
    { id: 'technical', name: 'Texniki Məsələlər', description: 'Avtomobil problemləri və həlləri' },
    { id: 'maintenance', name: 'Texniki Baxım', description: 'Baxım, təmir və xidmət' },
    { id: 'tuning', name: 'Tuninq', description: 'Modifikasiya və performans artırımı' },
    { id: 'insurance', name: 'Sığorta', description: 'Sığorta və hüquqi məsələlər' },
    { id: 'buying', name: 'Alış-Satış', description: 'Avtomobil alqı-satqısı və məsləhətlər' }
  ];

  const suggestedTags = [
    'BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Nissan', 'Hyundai',
    'motor', 'transmissiya', 'frenlər', 'suspenziya', 'elektrik',
    'yağ', 'filtr', 'şin', 'akb', 'tuninq', 'problem', 'təmir'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAddTag = (tag = newTag) => {
    if (tag && !formData.tags.includes(tag) && formData.tags.length < 10) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.images.length > 5) {
      setErrors({ images: 'Maksimum 5 şəkil yükləyə bilərsiniz' });
      return;
    }

    files.forEach(file => {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors({ images: 'Şəkil ölçüsü 5MB-dan böyük ola bilməz' });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, {
            id: Date.now() + Math.random(),
            file: file,
            url: e.target.result,
            name: file.name
          }]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (imageId) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Başlıq tələb olunur';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Başlıq ən azı 10 simvol olmalıdır';
    } else if (formData.title.length > 200) {
      newErrors.title = 'Başlıq 200 simvoldan uzun ola bilməz';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Məzmun tələb olunur';
    } else if (formData.content.length < 50) {
      newErrors.content = 'Məzmun ən azı 50 simvol olmalıdır';
    }

    if (!formData.category) {
      newErrors.category = 'Kateqoriya seçin';
    }

    if (formData.tags.length === 0) {
      newErrors.tags = 'Ən azı bir teq əlavə edin';
    }

    return newErrors;
  };

  const handleSubmit = async (isDraft = false) => {
    if (!isDraft) {
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create post object
      const postData = {
        ...formData,
        isDraft,
        id: Date.now(),
        author: {
          id: 999,
          name: 'İstifadəçi',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          car: 'Test Car',
          reputation: 25
        },
        createdAt: new Date().toISOString(),
        views: 0,
        likes: 0,
        replies: 0
      };

      if (isDraft) {
        // Save to drafts
        const drafts = JSON.parse(localStorage.getItem('postDrafts') || '[]');
        localStorage.setItem('postDrafts', JSON.stringify([...drafts, postData]));
        alert('Post qaralama olaraq saxlanıldı');
      } else {
        // Publish post
        alert('Post uğurla dərc edildi!');
        navigate(`/forum/post/${postData.id}`);
      }
    } catch (error) {
      setErrors({ general: 'Post göndərilməsində xəta baş verdi' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const insertMarkdown = (type) => {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    
    let newText = '';
    switch (type) {
      case 'bold':
        newText = `**${selectedText || 'qalın mətn'}**`;
        break;
      case 'italic':
        newText = `*${selectedText || 'kursiv mətn'}*`;
        break;
      case 'link':
        newText = `[${selectedText || 'keçid mətni'}](URL)`;
        break;
      case 'list':
        newText = `\n- ${selectedText || 'siyahı elementi'}\n- \n- `;
        break;
      default:
        return;
    }

    const newContent = formData.content.substring(0, start) + newText + formData.content.substring(end);
    setFormData(prev => ({ ...prev, content: newContent }));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/forum"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Foruma qayıt
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900">Yeni Post Yarat</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Redaktə' : 'Önizləmə'}
            </button>
            
            <button
              onClick={() => handleSubmit(true)}
              disabled={isSubmitting}
              className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              Qaralama
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {!showPreview ? (
            <div className="p-6 space-y-6">
              {/* General Error */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {errors.general}
                </div>
              )}

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Başlıq <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${
                    errors.title ? 'border-red-300' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  placeholder="Postunuzun başlığını yazın..."
                  maxLength={200}
                />
                <div className="flex justify-between mt-1">
                  <div>
                    {errors.title && (
                      <p className="text-sm text-red-600">{errors.title}</p>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formData.title.length}/200
                  </div>
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Kateqoriya <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categories.map(category => (
                    <label
                      key={category.id}
                      className={`relative flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.category === category.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={formData.category === category.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 border-2 rounded-full mr-3 ${
                            formData.category === category.id
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {formData.category === category.id && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                          <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-7">{category.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-sm text-red-600 mt-1">{errors.category}</p>
                )}
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Məzmun <span className="text-red-500">*</span>
                </label>
                
                {/* Toolbar */}
                <div className="flex items-center space-x-2 p-3 bg-gray-50 border border-gray-300 rounded-t-lg border-b-0">
                  <button
                    type="button"
                    onClick={() => insertMarkdown('bold')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Qalın (Ctrl+B)"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('italic')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Kursiv (Ctrl+I)"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('link')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Keçid"
                  >
                    <Link2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('list')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
                    title="Siyahı"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <div className="flex-1"></div>
                  <span className="text-xs text-gray-500">Markdown dəstəklənir</span>
                </div>

                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={12}
                  className={`w-full px-4 py-3 border ${
                    errors.content ? 'border-red-300' : 'border-gray-300'
                  } rounded-b-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200`}
                  placeholder="Postunuzun məzmununu yazın...

Məsələn:
- Problemin təsviri
- Avtomobilin məlumatları
- Əvvəlki cəhdlər
- Suallar"
                />
                <div className="flex justify-between mt-1">
                  <div>
                    {errors.content && (
                      <p className="text-sm text-red-600">{errors.content}</p>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formData.content.length} simvol
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teqlər <span className="text-red-500">*</span>
                </label>
                
                {/* Current Tags */}
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Add Tag Input */}
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Teq əlavə edin..."
                    maxLength={20}
                  />
                  <button
                    type="button"
                    onClick={() => handleAddTag()}
                    disabled={!newTag || formData.tags.length >= 10}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Suggested Tags */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Təklif olunan teqlər:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedTags
                      .filter(tag => !formData.tags.includes(tag))
                      .slice(0, 12)
                      .map(tag => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleAddTag(tag)}
                          disabled={formData.tags.length >= 10}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          + {tag}
                        </button>
                      ))}
                  </div>
                </div>

                <div className="flex justify-between mt-1">
                  <div>
                    {errors.tags && (
                      <p className="text-sm text-red-600">{errors.tags}</p>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formData.tags.length}/10 teq
                  </div>
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şəkillər <span className="text-gray-500">(İxtiyari)</span>
                </label>
                
                {/* Current Images */}
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    {formData.images.map(image => (
                      <div key={image.id} className="relative group">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-32 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(image.id)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload Area */}
                {formData.images.length < 5 && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      id="images"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="images" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Şəkil yükləmək üçün klikləyin və ya sürükləyin
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Maksimum 5 şəkil, hər biri 5MB-dan az
                      </p>
                    </label>
                  </div>
                )}

                {errors.images && (
                  <p className="text-sm text-red-600 mt-1">{errors.images}</p>
                )}
              </div>
            </div>
          ) : (
            /* Preview Mode */
            <div className="p-6">
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  {formData.category && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {categories.find(c => c.id === formData.category)?.name}
                    </span>
                  )}
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {formData.title || 'Başlıq yazın...'}
                </h1>

                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formData.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="prose prose-gray max-w-none mb-6">
                {formData.content ? (
                  formData.content.split('\n').map((paragraph, index) => {
                    if (paragraph.trim() === '') return <br key={index} />;
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                          {paragraph.slice(2, -2)}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <li key={index} className="text-gray-700 mb-2">
                          {paragraph.slice(2)}
                        </li>
                      );
                    }
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })
                ) : (
                  <p className="text-gray-500 italic">Məzmun yazın...</p>
                )}
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {formData.images.map(image => (
                    <img
                      key={image.id}
                      src={image.url}
                      alt={image.name}
                      className="rounded-lg object-cover w-full h-64"
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-1" />
                  Post
                </div>
                {formData.category && (
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {categories.find(c => c.id === formData.category)?.name}
                  </div>
                )}
                <div className="flex items-center">
                  <Image className="w-4 h-4 mr-1" />
                  {formData.images.length} şəkil
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => navigate('/forum')}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Ləğv et
                </button>
                
                <button
                  onClick={() => handleSubmit(false)}
                  disabled={isSubmitting}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Göndərilir...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Postu Dərc Et
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Yaxşı post yazmaq üçün tövsiyələr
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Başlıq:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Aydın və dəqiq olun</li>
                <li>• Avtomobil markası və modelini qeyd edin</li>
                <li>• Problemin əsas məzmununu göstərin</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Məzmun:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Problemi ətraflı təsvir edin</li>
                <li>• Avtomobilin tam məlumatlarını verin</li>
                <li>• Əvvəlki cəhdləri qeyd edin</li>
                <li>• Şəkillər əlavə edin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Markdown Guide */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Markdown formatlaşdırma</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-gray-700">Mətn formatlaşdırması:</h4>
              <ul className="space-y-1 text-gray-600 font-mono">
                <li>**qalın mətn** → <strong>qalın mətn</strong></li>
                <li>*kursiv mətn* → <em>kursiv mətn</em></li>
                <li>[keçid](URL) → <span className="text-blue-600 underline">keçid</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-700">Siyahılar:</h4>
              <ul className="space-y-1 text-gray-600 font-mono">
                <li>- Element 1</li>
                <li>- Element 2</li>
                <li>- Element 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddPostForm;