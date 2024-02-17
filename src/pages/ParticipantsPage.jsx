import React, { useState, useEffect } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { app, database } from '../firebase';

const ParticipantsPage = () => {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const participantsRef = ref(db, 'participants');
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
    const db = getDatabase(app);
    const participantsRef = ref(db, 'participants');
    push(participantsRef, { name: participantName });
    setParticipantName('');
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Input
          placeholder="Nom du participant"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
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
