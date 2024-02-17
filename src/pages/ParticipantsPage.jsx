// src/pages/ParticipantsPage.js
import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ParticipantForm from '../components/ParticipantForm';
import ParticipantTable from '../components/ParticipantTable';

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);

  const addParticipant = participant => {
    setParticipants([...participants, participant]);
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Inscription des Participants</Heading>
      <ParticipantForm onAddParticipant={addParticipant} />
      <ParticipantTable participants={participants} />
    </Box>
  );
};

export default ParticipantsPage;
