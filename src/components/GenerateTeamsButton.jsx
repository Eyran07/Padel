// src/components/GenerateTeamsButton.js
import React from 'react';
import { Button } from '@chakra-ui/react';

const GenerateTeamsButton = ({ participants, onGenerateTeams }) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // échange éléments
    }
  };

  const handleGenerateTeams = () => {
    // Dupliquer et mélanger les participants
    const shuffledParticipants = [...participants];
    shuffleArray(shuffledParticipants);
    
    // Générer les équipes
    const teams = [];
    for (let i = 0; i < shuffledParticipants.length; i += 2) {
      teams.push([shuffledParticipants[i], shuffledParticipants[i + 1]]);
    }
    
    onGenerateTeams(teams);
  };

  return (
    <Button colorScheme="teal" onClick={handleGenerateTeams}>Générer les Équipes</Button>
  );
};

export default GenerateTeamsButton;
