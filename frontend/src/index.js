import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './components/router';
import Admin from './pages/admin';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Router />} />
        <Route path='/admin2103' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

