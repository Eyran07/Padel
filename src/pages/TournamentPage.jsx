import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, push } from 'firebase/database';
import { Button, VStack, Text } from '@chakra-ui/react';

const TournamentPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const teamsRef = ref(database, 'teams');
    onValue(teamsRef, (snapshot) => {
      const teamsData = snapshot.val();
      const loadedTeams = [];
      for (const key in teamsData) {
        loadedTeams.push({
          id: key,
          ...teamsData[key],
        });
      }
      setTeams(loadedTeams);
    });

    // N'oubliez pas de détacher l'écouteur d'événements pour éviter les fuites de mémoire
    return () => onValue(teamsRef, () => {});
  }, []);

  const generateTeam = () => {
    // Exemple de fonction pour générer une équipe
    // Assurez-vous de mettre à jour cette logique selon votre cas d'usage
    const newTeam = { members: ["Membre 1", "Membre 2"] }; // Exemple statique
    push(ref(database, 'teams'), newTeam);
  };

  return (
    <VStack spacing={4}>
      <Button onClick={generateTeam}>Générer une Équipe</Button>
      {teams.map((team) => (
        <Text key={team.id}>Équipe: {team.members.join(' et ')}</Text>
      ))}
    </VStack>
  );
};

export default TournamentPage;
