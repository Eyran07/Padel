// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tournoi1 from './pages/Tournoi1'
import ParticipantsPage from './pages/ParticipantsPage';
import TournamentPage from './pages/TournamentPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournoi-25-fevrier" element={<Tournoi1 />} />
          <Route path="/participants-page" element={<ParticipantsPage />} />
          <Route path="/tournament" element={<TournamentPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
