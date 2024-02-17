// src/components/ParticipantForm.js
import React, { useState } from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';

const ParticipantForm = ({ onAddParticipant }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddParticipant({ nom, prenom });
    setNom('');
    setPrenom('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <Input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        <Input placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        <Button type="submit" colorScheme="blue">Inscrire</Button>
      </VStack>
    </form>
  );
};

export default ParticipantForm;
