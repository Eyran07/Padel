import React, { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text, Heading } from "@chakra-ui/react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { app, database } from "../firebase";

const ParticipantsPage = () => {
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const participantsRef = ref(db, "participants");
    onValue(participantsRef, (snapshot) => {
      const participantsData = snapshot.val();
      const loadedParticipants = [];
      for (const key in participantsData) {
        loadedParticipants.push({
          id: key,
          name: participantsData[key].name,
        });
      }
      setParticipants(loadedParticipants);
    });
  }, []);

  useEffect(() => {
    const teamsRef = ref(database, "teams");
    onValue(teamsRef, (snapshot) => {
      const loadedTeams = [];
      snapshot.forEach((childSnapshot) => {
        const teamData = childSnapshot.val();
        loadedTeams.push({
          id: childSnapshot.key,
          members: Object.values(teamData.members)
            .map((member) => member.name)
            .join(" et "),
        });
      });
      setTeams(loadedTeams);
    });
  }, []);

  const addParticipant = () => {
    if (participantName.length >= 3) {
      const db = getDatabase(app);
      const participantsRef = ref(db, "participants");
      push(participantsRef, { name: participantName });
      setParticipantName("");
    } else {
      alert("Le nom du participant doit comporter au moins 3 caractères.");
    }
  };

  const handleChange = (e) => {
    const name = e.target.value;
    setParticipantName(name);

    // Vérifier si le nom est "David Bismuth"
    if (name.trim().toLowerCase() === "david bis") {
      // Utiliser alert pour montrer le message
      alert("Tu vas tomber sur boccara tu vas moins faire le  malin !!");
    } else if (name.trim().toLowerCase() === "idan") {
      // Utiliser alert pour montrer le message
      alert("Marseille on t'enculle");
    } else if (name.trim().toLowerCase() === "jeremie ben") {
      // Utiliser alert pour montrer le message
      alert("Bonne chance le Bencho tu vas perdre !!");
    } else if (name.trim().toLowerCase() === "franck apel") {
      // Utiliser alert pour montrer le message
      alert("Le franck il va pas passer les quarts !!");
    } else if (name.trim().toLowerCase() === "sacha mel") {
      // Utiliser alert pour montrer le message
      alert("Bonne chance le tentateur");
    } else if (name.trim().toLowerCase() === "ben bis") {
      // Utiliser alert pour montrer le message
      alert("Jespere que tu vas pas etre avec ton pere");
    } else if (name.trim().toLowerCase() === "steve mar") {
      // Utiliser alert pour montrer le message
      alert("Steve tu passeras pas les quarts de sur");
    } else if (name.trim().toLowerCase() === "rudy mar") {
      // Utiliser alert pour montrer le message
      alert("Rudy tu vas pas passer les quarts");
    } else if (name.trim().toLowerCase() === "jeremy mar") {
      // Utiliser alert pour montrer le message
      alert("J'espere que tu seras pas avec ton pere");
    } else if (name.trim().toLowerCase() === "david bocc") {
      // Utiliser alert pour montrer le message
      alert("Tu vas etre avec le bismuth cest sur");
    }
  };

  const generateTeam = () => {
    // Demander le mot de passe à l'utilisateur
    const password = prompt(
      "Veuillez entrer le mot de passe pour générer une équipe :"
    );

    // Vérifier si le mot de passe est correct
    if (password === "baba") {
      if (participants.length >= 2) {
        let remainingParticipants = [...participants];
        let newTeam = [];

        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(
            Math.random() * remainingParticipants.length
          );
          const participant = remainingParticipants[randomIndex];
          if (participant && participant.name) {
            newTeam.push(participant);
            remainingParticipants.splice(randomIndex, 1);
          } else {
            console.error("Participant sans nom trouvé:", participant);
          }
        }

        if (newTeam.length === 2) {
          const teamsRef = ref(database, "teams");
          push(teamsRef, {
            members: newTeam.map((participant) => ({
              id: participant.id,
              name: participant.name,
            })),
          });

          setParticipants(remainingParticipants);
        } else {
          alert(
            "Erreur lors de la formation de l'équipe. Participants manquants ou invalides."
          );
        }
      } else {
        alert("Pas assez de participants pour former une nouvelle équipe.");
      }
    } else {
      // Si le mot de passe est incorrect
      alert("Mot de passe incorrect.");
    }
  };

  return (
    <Box p={5}>
      <Box
        mb={"20px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading>Tournoi Padel Dimanche 25 Fevrier</Heading>
      </Box>
      <VStack display={"flex"} spacing={4}>
        <Input
          placeholder="Nom du participant"
          value={participantName}
          onChange={handleChange}
        />
        <Button onClick={addParticipant}>Ajouter Participant</Button>
        {participants.map((participant) => (
          <Text key={participant.id}>{participant.name}</Text>
        ))}
        <Button onClick={generateTeam}>Générer une Équipe</Button>
        {teams.length > 0 ? (
          teams.map((team, index) => (
            <Text key={team.id}>
              Équipe {index + 1}: {team.members}
            </Text>
          ))
        ) : (
          <Text>Aucune équipe formée</Text>
        )}
      </VStack>
    </Box>
  );
};

export default ParticipantsPage;
