// src/pages/TournamentPage.js
import React, { useState } from 'react';
import { Box, Heading, Button, Input, useToast } from '@chakra-ui/react';

const TournamentPage = () => {
  const [code, setCode] = useState('');
  const toast = useToast();

  const handleGenerateTeams = () => {
    if (code === "baba") {
      // Insérez ici la logique pour générer les équipes
      toast({
        title: "Équipes générées.",
        description: "Les équipes ont été générées avec succès.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Accès refusé.",
        description: "Le code administrateur est incorrect.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Bracket du Tournoi</Heading>
      <Input
        placeholder="Entrez le code administrateur"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        mb={3}
      />
      <Button colorScheme="blue" onClick={handleGenerateTeams}>
        Générer les Équipes
      </Button>
    </Box>
  );
};

export default TournamentPage;
