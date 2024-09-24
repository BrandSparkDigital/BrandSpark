import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Suppress ResizeObserver error
if (window.ResizeObserver) {
  const ro = new ResizeObserver(() => {});
  ro.observe(document.body);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals(console.log);
