import React, { useState, useEffect } from "react";
import { ref, onValue, push } from "firebase/database";
import { database } from "../firebase";
import { Button, VStack, Text } from "@chakra-ui/react";

const TournamentPage = () => {
  const [participants, setParticipants] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const participantsRef = ref(database, "participants");
    onValue(participantsRef, (snapshot) => {
      const participantsData = snapshot.val();
      const loadedParticipants = [];
      for (const key in participantsData) {
        loadedParticipants.push(participantsData[key].name);
      }
      setParticipants(loadedParticipants);
    });
  }, []);

  const checkPasswordAndGenerateTeam = () => {
    const password = prompt("Entrez le mot de passe pour générer une équipe:");
    if (password === "baba") {
      generateTeam();
    } else {
      alert("Mot de passe incorrect !");
    }
  };
  
  const generateTeam = () => {
    if (participants.length > 0 && teams.length < 8) {
      let remainingParticipants = [...participants];
      let newTeam = [];
      let teamMembers = [];
  
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * remainingParticipants.length);
        newTeam.push(remainingParticipants[randomIndex]);
        teamMembers.push(remainingParticipants.splice(randomIndex, 1)[0]); // Ajoute les membres et met à jour la liste des participants
      }
  
      // Mise à jour de l'état local des équipes
      setTeams((prevTeams) => [...prevTeams, newTeam]);
      setParticipants(remainingParticipants);
  
      // Sauvegarde de la nouvelle équipe dans Firebase
      const teamsRef = ref(database, "teams");
      push(teamsRef, { members: teamMembers }); // Crée un objet d'équipe avec les membres
    }
  };
  

  // Supposons que vous ayez une fonction similaire pour ajouter un score
  const checkPasswordAndAddScore = () => {
    const password = prompt("Entrez le mot de passe pour ajouter un score:");
    if (password === "baba") {
      // Logique pour ajouter un score
    } else {
      alert("Mot de passe incorrect !");
    }
  };

  return (
    <VStack spacing={4}>
      <Button onClick={checkPasswordAndGenerateTeam}>Générer une Équipe</Button>
      {teams.map((team, index) => (
        <Text key={index}>Équipe {index + 1}: {team.join(" et ")}</Text>
      ))}
      {/* Ici, vous pourriez également ajouter un bouton pour ajouter des scores, utilisant checkPasswordAndAddScore */}
    </VStack>
  );
};

export default TournamentPage;
