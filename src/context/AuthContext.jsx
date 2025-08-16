// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setError('Authentication check failed');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication logic
      if (email === 'demo@carclub.az' && password === '123456') {
        const mockUser = {
          id: 1,
          name: 'Demo İstifadəçi',
          email: email,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          car: 'BMW F30 320i',
          role: 'user',
          reputation: 245
        };
        
        const mockToken = 'mock-jwt-token-' + Date.now();
        
        // Store in localStorage
        localStorage.setItem('authToken', mockToken);
        localStorage.setItem('userData', JSON.stringify(mockUser));
        localStorage.setItem('userRole', mockUser.role);
        
        setUser(mockUser);
        setIsAuthenticated(true);
        
        return { success: true, user: mockUser };
      } else {
        throw new Error('Yanlış e-mail və ya şifrə');
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser = {
        id: Date.now(),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        phone: userData.phone,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        car: `${userData.carBrand} ${userData.carModel} (${userData.carYear})`,
        role: 'user',
        reputation: 0,
        joinDate: new Date().toISOString()
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      // Store in localStorage
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userData', JSON.stringify(newUser));
      localStorage.setItem('userRole', newUser.role);
      
      setUser(newUser);
      setIsAuthenticated(true);
      
      return { success: true, user: newUser };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userRole');
    
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  const updateUser = async (updatedData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const updatedUser = { ...user, ...updatedData };
      
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return { success: true, user: updatedUser };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock password reset
      if (email === 'demo@carclub.az') {
        return { success: true, message: 'Şifrə sıfırlama linki e-mailinizə göndərildi' };
      } else {
        throw new Error('Bu e-mail ünvanı ilə istifadəçi tapılmadı');
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock password change
      if (currentPassword === '123456') {
        return { success: true, message: 'Şifrə uğurla dəyişdirildi' };
      } else {
        throw new Error('Hazırkı şifrə yanlışdır');
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (password) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock account deletion
      if (password === '123456') {
        logout();
        return { success: true, message: 'Hesab uğurla silindi' };
      } else {
        throw new Error('Şifrə yanlışdır');
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Get user permissions
  const hasPermission = (permission) => {
    if (!isAuthenticated || !user) return false;
    
    const permissions = {
      'create_post': true,
      'edit_own_post': true,
      'delete_own_post': true,
      'moderate_posts': user.role === 'admin' || user.role === 'moderator',
      'delete_any_post': user.role === 'admin',
      'ban_users': user.role === 'admin',
      'access_admin': user.role === 'admin'
    };
    
    return permissions[permission] || false;
  };

  // Check if user is admin
  const isAdmin = () => {
    return isAuthenticated && user && user.role === 'admin';
  };

  // Check if user is moderator or admin
  const isModerator = () => {
    return isAuthenticated && user && (user.role === 'moderator' || user.role === 'admin');
  };

  const value = {
    // State
    user,
    isAuthenticated,
    loading,
    error,
    
    // Actions
    login,
    register,
    logout,
    updateUser,
    resetPassword,
    changePassword,
    deleteAccount,
    checkAuthStatus,
    
    // Utilities
    hasPermission,
    isAdmin,
    isModerator,
    
    // Clear error
    clearError: () => setError(null)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};