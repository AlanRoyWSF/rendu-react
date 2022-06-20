
import Login from './pages/login.js';
import Accueil from './pages/accueil.js';
import Register from './pages/register.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  return (

    <BrowserRouter>

 <div className="App">

    <header className="App-header"> 
    
    
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/accueil" element={<Accueil />} />
          </Routes>

    </header>

 </div>

 </BrowserRouter>

  );
}

export default App;
