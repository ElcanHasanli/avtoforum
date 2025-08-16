// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children, value }) => {
  // If value is passed as prop (from App.jsx), use it
  const [theme, setTheme] = useState(value?.theme || 'light');
  const [systemTheme, setSystemTheme] = useState('light');
  const [autoTheme, setAutoTheme] = useState(false);

  // Detect system theme preference
  useEffect(() => {
    const detectSystemTheme = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setSystemTheme(isDark ? 'dark' : 'light');
    };

    // Initial detection
    detectSystemTheme();

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(detectSystemTheme);

    return () => mediaQuery.removeListener(detectSystemTheme);
  }, []);

  // Load saved preferences
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const savedAutoTheme = localStorage.getItem('autoTheme') === 'true';
      
      if (savedAutoTheme) {
        setAutoTheme(true);
        setTheme(systemTheme);
      } else if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme preferences:', error);
    }
  }, [systemTheme]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove previous theme classes
    root.classList.remove('light', 'dark');
    body.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    body.classList.add(theme);
    
    // Set CSS custom properties for theme
    if (theme === 'dark') {
      root.style.setProperty('--bg-primary', '#1a1a1a');
      root.style.setProperty('--bg-secondary', '#2d2d2d');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#a0a0a0');
      root.style.setProperty('--border-color', '#404040');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8f9fa');
      root.style.setProperty('--text-primary', '#1a1a1a');
      root.style.setProperty('--text-secondary', '#6b7280');
      root.style.setProperty('--border-color', '#e5e7eb');
    }
    
    // Save to localStorage
    if (!autoTheme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, autoTheme]);

  // Auto theme effect
  useEffect(() => {
    if (autoTheme) {
      setTheme(systemTheme);
    }
  }, [autoTheme, systemTheme]);

  const toggleTheme = () => {
    if (autoTheme) {
      setAutoTheme(false);
      localStorage.setItem('autoTheme', 'false');
    }
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const setLightTheme = () => {
    setAutoTheme(false);
    setTheme('light');
    localStorage.setItem('theme', 'light');
    localStorage.setItem('autoTheme', 'false');
  };

  const setDarkTheme = () => {
    setAutoTheme(false);
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('autoTheme', 'false');
  };

  const setSystemThemePreference = () => {
    setAutoTheme(true);
    setTheme(systemTheme);
    localStorage.setItem('autoTheme', 'true');
    localStorage.removeItem('theme');
  };

  // Get theme-specific colors
  const getThemeColors = () => {
    const colors = {
      light: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        background: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#f1f3f4'
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          tertiary: '#9ca3af'
        },
        border: {
          primary: '#e5e7eb',
          secondary: '#d1d5db'
        }
      },
      dark: {
        primary: {
          50: '#1e3a8a',
          100: '#1e40af',
          200: '#1d4ed8',
          300: '#2563eb',
          400: '#3b82f6',
          500: '#60a5fa',
          600: '#93c5fd',
          700: '#bfdbfe',
          800: '#dbeafe',
          900: '#eff6ff'
        },
        gray: {
          50: '#111827',
          100: '#1f2937',
          200: '#374151',
          300: '#4b5563',
          400: '#6b7280',
          500: '#9ca3af',
          600: '#d1d5db',
          700: '#e5e7eb',
          800: '#f3f4f6',
          900: '#f9fafb'
        },
        background: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          tertiary: '#404040'
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
          tertiary: '#808080'
        },
        border: {
          primary: '#404040',
          secondary: '#505050'
        }
      }
    };

    return colors[theme];
  };

  // Check if current theme is dark
  const isDark = theme === 'dark';

  // Check if current theme is light
  const isLight = theme === 'light';

  // Get opposite theme
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';

  const contextValue = {
    // Current theme state
    theme,
    systemTheme,
    autoTheme,
    isDark,
    isLight,
    oppositeTheme,
    
    // Theme actions
    setTheme: value?.setTheme || setTheme, // Use prop if available
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemThemePreference,
    
    // Theme utilities
    getThemeColors,
    
    // Theme class helpers
    themeClass: (lightClass, darkClass) => theme === 'light' ? lightClass : darkClass,
    
    // Conditional theme styling
    themeStyle: (lightStyle, darkStyle) => theme === 'light' ? lightStyle : darkStyle,
    
    // Theme-aware component props
    getButtonProps: (variant = 'primary') => {
      const colors = getThemeColors();
      const variants = {
        primary: {
          className: `bg-blue-600 hover:bg-blue-700 text-white ${isDark ? 'bg-blue-500 hover:bg-blue-600' : ''}`,
          style: {
            backgroundColor: colors.primary[600],
            color: colors.background.primary
          }
        },
        secondary: {
          className: `bg-gray-200 hover:bg-gray-300 text-gray-900 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : ''}`,
          style: {
            backgroundColor: colors.gray[isDark ? 700 : 200],
            color: colors.text.primary
          }
        },
        outline: {
          className: `border border-gray-300 hover:bg-gray-50 text-gray-700 ${isDark ? 'border-gray-600 hover:bg-gray-800 text-gray-300' : ''}`,
          style: {
            borderColor: colors.border.primary,
            color: colors.text.primary
          }
        }
      };
      
      return variants[variant] || variants.primary;
    },
    
    // Theme-aware input props
    getInputProps: () => ({
      className: `border border-gray-300 bg-white text-gray-900 ${isDark ? 'border-gray-600 bg-gray-800 text-white' : ''}`,
      style: {
        borderColor: getThemeColors().border.primary,
        backgroundColor: getThemeColors().background.primary,
        color: getThemeColors().text.primary
      }
    })
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};