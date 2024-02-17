// src/components/ParticipantTable.js
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const ParticipantTable = ({ participants }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Prénom</Th>
          </Tr>
        </Thead>
        <Tbody>
          {participants.map((participant, index) => (
            <Tr key={index}>
              <Td>{participant.nom}</Td>
              <Td>{participant.prenom}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ParticipantTable;
