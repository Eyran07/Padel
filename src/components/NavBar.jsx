// src/components/NavBar.js
import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => (
  <Flex bg="teal.500" p={4} justifyContent="space-between">
    <Link as={RouterLink} to="/" color="white" mr={4}>
      Liste des Participants
    </Link>
    <Link as={RouterLink} to="/tournament" color="white">
      Bracket du Tournoi
    </Link>
  </Flex>
);

export default NavBar;
