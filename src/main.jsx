// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { ErrorBoundary } from './App.jsx';

// Styles
import './index.css';

// Performance monitoring (commented out to avoid errors)
// const reportWebVitals = (onPerfEntry) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       if (getCLS) getCLS(onPerfEntry);
//       if (getFID) getFID(onPerfEntry);
//       if (getFCP) getFCP(onPerfEntry);
//       if (getLCP) getLCP(onPerfEntry);
//       if (getTTFB) getTTFB(onPerfEntry);
//     }).catch(error => {
//       console.log('Web Vitals import failed:', error);
//     });
//   }
// };

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Performance monitoring (commented out to avoid errors)
// reportWebVitals(console.log);

// Service Worker registration (commented out to avoid errors)
// if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }