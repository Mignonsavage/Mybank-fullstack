import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SignUp from "./components/SignUp.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route principale */}
                <Route path="/" element={
                    <div>
                        <div>
                            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                                <img src="/vite.svg" className="logo" alt="Vite logo" />
                            </a>
                            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                        </div>
                        <h1>Bienvenue sur la page d'accueil</h1>
                        <p>Explorez le projet construit avec Vite + React !</p>
                    </div>
                } />

                {/* Route pour le formulaire d'inscription */}
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;