import React, { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { app, database } from "../firebase";

const ParticipantsPage = () => {
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState([]);

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
      alert("Bonne chance la Bismuth tu vas perdre !!");
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
    }
    else if (name.trim().toLowerCase() === "ben bis") {
        // Utiliser alert pour montrer le message
        alert("Jespere que tu vas pas etre avec ton pere");
      }
      else if (name.trim().toLowerCase() === "steve mar") {
        // Utiliser alert pour montrer le message
        alert("Steve tu passeras pas les quarts de sur");
      }
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Input
          placeholder="Nom du participant"
          value={participantName}
          onChange={handleChange}
        />
        <Button onClick={addParticipant}>Ajouter Participant</Button>
        {participants.map((participant) => (
          <Text key={participant.id}>{participant.name}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default ParticipantsPage;
