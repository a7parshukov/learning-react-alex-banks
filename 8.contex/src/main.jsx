import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorProvider } from './color-hooks.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
)
