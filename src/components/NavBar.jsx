// src/components/NavBar.js
import React from 'react';
import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex bg="teal.500" p="4" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white" mr="4">
          Liste des Participants
        </Link>
        <Link as={RouterLink} to="/tournament" color="white">
          Bracket du Tournoi
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
