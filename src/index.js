import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from "./pages/Home/home"
import Usuario from './pages/Usuario/usuario.jsx';
import Filmes from './pages/Filmes/filme.jsx'
import Genero from './pages/Genero/genero.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Usuario />} path='/usuario' />
                <Route element={<Filmes />} path='/filmes' />
                <Route element={<Genero />} path='/genero' />
            </Routes>
        </BrowserRouter>
    );
}

root.render(
    <React.StrictMode>
        <Rotas />
    </React.StrictMode>
);  