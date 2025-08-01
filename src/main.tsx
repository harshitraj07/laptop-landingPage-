// ...existing code...
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom/client';
import React from 'react';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// ...existing code...