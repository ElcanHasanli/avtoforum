// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail, Phone, Car } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    carBrand: '',
    carModel: '',
    carYear: '',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Ad tələb olunur';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Soyad tələb olunur';
    }
    
    if (!formData.email) {
      newErrors.email = 'E-mail ünvanı tələb olunur';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Düzgün e-mail ünvanı daxil edin';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Telefon nömrəsi tələb olunur';
    } else if (!/^(\+994|0)[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Düzgün telefon nömrəsi daxil edin';
    }
    
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'Şifrə tələb olunur';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifrə ən azı 6 simvol olmalıdır';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifrə təkrarı tələb olunur';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifrələr uyğun gəlmir';
    }
    
    if (!formData.carBrand) {
      newErrors.carBrand = 'Avtomobil markası tələb olunur';
    }
    
    if (!formData.carModel) {
      newErrors.carModel = 'Avtomobil modeli tələb olunur';
    }
    
    if (!formData.carYear) {
      newErrors.carYear = 'İl tələb olunur';
    } else if (formData.carYear < 1900 || formData.carYear > new Date().getFullYear() + 1) {
      newErrors.carYear = 'Düzgün il daxil edin';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Şərtləri qəbul etməlisiniz';
    }
    
    return newErrors;
  };

  const handleNextStep = () => {
    const newErrors = validateStep1();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateStep2();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful registration
      localStorage.setItem('authToken', 'mock-jwt-token');
      localStorage.setItem('userRole', 'user');
      localStorage.setItem('userData', JSON.stringify({
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        car: `${formData.carBrand} ${formData.carModel} (${formData.carYear})`,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }));
      
      navigate('/profile');
    } catch (error) {
      setErrors({ general: 'Qeydiyyat zamanı xəta baş verdi' });
    } finally {
      setIsLoading(false);
    }
  };

  const carBrands = ['Mercedes-Benz', 'BMW', 'Audi', 'Toyota', 'Honda', 'Nissan', 'Hyundai', 'Kia', 'Volkswagen', 'Ford', 'Lada', 'GAZ', 'Digər'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Qeydiyyatdan Keçin
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Avtomobil icmasına qoşulun və yeni dostlar tapın
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center space-x-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={currentStep === 1 ? (e) => { e.preventDefault(); handleNextStep(); } : handleSubmit}>
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errors.general}
            </div>
          )}

          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 border ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Adınız"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Soyad
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 border ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Soyadınız"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail ünvanı
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="sizin@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon nömrəsi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="+994 XX XXX XX XX"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Password & Car Info */}
          {currentStep === 2 && (
            <div className="space-y-5">
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Şifrə
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-3 border ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Şifrəniz"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Şifrə təkrarı
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-10 py-3 border ${
                      errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Şifrəni təkrarlayın"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Car Info Section */}
              <div className="border-t pt-5 mt-6">
                <div className="flex items-center mb-4">
                  <Car className="h-5 w-5 text-gray-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">Avtomobil məlumatları</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Car Brand */}
                  <div>
                    <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 mb-2">
                      Marka
                    </label>
                    <select
                      id="carBrand"
                      name="carBrand"
                      value={formData.carBrand}
                      onChange={handleChange}
                      className={`block w-full px-3 py-3 border ${
                        errors.carBrand ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    >
                      <option value="">Marka seçin</option>
                      {carBrands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    {errors.carBrand && (
                      <p className="mt-1 text-sm text-red-600">{errors.carBrand}</p>
                    )}
                  </div>

                  {/* Car Year */}
                  <div>
                    <label htmlFor="carYear" className="block text-sm font-medium text-gray-700 mb-2">
                      İl
                    </label>
                    <input
                      id="carYear"
                      name="carYear"
                      type="number"
                      value={formData.carYear}
                      onChange={handleChange}
                      className={`block w-full px-3 py-3 border ${
                        errors.carYear ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      placeholder="2020"
                      min="1900"
                      max={new Date().getFullYear() + 1}
                    />
                    {errors.carYear && (
                      <p className="mt-1 text-sm text-red-600">{errors.carYear}</p>
                    )}
                  </div>
                </div>

                {/* Car Model */}
                <div className="mt-4">
                  <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Model
                  </label>
                  <input
                    id="carModel"
                    name="carModel"
                    type="text"
                    value={formData.carModel}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 border ${
                      errors.carModel ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="E-Class, X5, A4 və s."
                  />
                  {errors.carModel && (
                    <p className="mt-1 text-sm text-red-600">{errors.carModel}</p>
                  )}
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="text-gray-700">
                    <a href="#" className="text-blue-600 hover:text-blue-500">İstifadə şərtləri</a> və{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-500">Məxfilik siyasəti</a> ilə razıyam
                  </label>
                  {errors.agreeTerms && (
                    <p className="mt-1 text-red-600">{errors.agreeTerms}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex space-x-4">
            {currentStep === 2 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                Geri
              </button>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Qeydiyyat...
                </>
              ) : currentStep === 1 ? (
                'Növbəti'
              ) : (
                'Qeydiyyatı Tamamla'
              )}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Artıq hesabınız var?{' '}
              <Link 
                to="/login" 
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                Daxil olun
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;