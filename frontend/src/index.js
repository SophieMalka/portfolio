import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/admin';
import Landing from './pages/landing';
import './index.css';
import AddProjects from './pages/addProjects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/admin2103' element={<Admin />} />
        <Route path='/admin2103/projects' element={<AddProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

