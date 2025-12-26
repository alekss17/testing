import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SamurajJSApp from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <SamurajJSApp />
  </React.StrictMode>
);