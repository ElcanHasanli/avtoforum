import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  // context dəyərini burada təyin et
  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

 return React.createElement(
    AuthContext.Provider,
    { value: value },
    children
  );
};
