import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import Blog from './routes/Blog';
import Inicio from './routes/Inicio';
import Contacto from './routes/Contacto';
import NoEncontrada from './routes/NoEncontrada';
import Post from './routes/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<Post />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='*' element={<NoEncontrada />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
