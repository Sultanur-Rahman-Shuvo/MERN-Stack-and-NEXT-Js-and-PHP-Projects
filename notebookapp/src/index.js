import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS
import App from './App'; // Import the main App component

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode for development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
