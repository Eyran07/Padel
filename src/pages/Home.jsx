import React from 'react';
import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Mise à jour pour utiliser useNavigate

const Home = () => {
  const navigate = useNavigate(); // Utilisez useNavigate au lieu de useHistory

  // Fonction pour gérer le clic sur la carte du nouveau tournoi
  const handleNewTournamentClick = () => {
    navigate('/inscription'); // Utilisez navigate au lieu de history.push
  };

  // Fonction pour gérer le clic sur la carte du tournoi du 25 février
  const handlePastTournamentClick = () => {
    navigate('/tournoi-25-fevrier'); // Utilisez navigate au lieu de history.push
  };

  return (
    <Box p="5">
      <VStack spacing="5">
        {/* Carte pour l'inscription au nouveau tournoi */}
        <Box w="sm" p="5" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Text fontSize="xl" mb="4">Inscrivez-vous au nouveau tournoi</Text>
          <Button colorScheme="teal" onClick={handleNewTournamentClick}>S'inscrire</Button>
        </Box>

        {/* Carte pour les détails du tournoi du 25 février */}
        <Box w="sm" p="5" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Text fontSize="xl" mb="4">Tournoi du dimanche 25 février</Text>
          <Button colorScheme="teal" onClick={handlePastTournamentClick}>Voir les détails</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
