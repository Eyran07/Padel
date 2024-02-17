import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remplacer Switch par Routes
import ParticipantsPage from './pages/ParticipantsPage';
import TournamentPage from './pages/TournamentPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar /> {/* Ajouter la NavBar ici */}
        <Routes>
          <Route path="/" element={<ParticipantsPage />} />
          <Route path="/tournament" element={<TournamentPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
