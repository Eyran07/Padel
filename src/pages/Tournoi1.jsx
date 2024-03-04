import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Divider,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
  } from "@chakra-ui/react";
  

const Tournoi1 = () => {
  // Données hardcodées pour les matchs de la Poule 1 basées sur l'image fournie
  const matchesPoule1 = [
    {
      match: "Match 1",
      equipe1: "Aaron Benhamou & David Boccara",
      equipe2: "Ethan Abitan & Jeremy Marciano",
      score: "2-6",
    },
    {
      match: "Match 1",
      equipe1: "Frank Belhassen & Steve Marciano",
      equipe2: "Philippe Abitan & Eyran Abbou",
      score: "4-6",
    },
    {
      match: "Match 2",
      equipe1: "Aaron Benhamou & David Boccara",
      equipe2: "Frank Belhassen & Steve Marciano",
      score: "6-2",
    },
    {
      match: "Match 2",
      equipe1: "Ethan Abitan & Jeremy Marciano",
      equipe2: "Philippe Abitan & Eyran Abbou",
      score: "7-5",
    },
    {
      match: "Match 3",
      equipe1: "Aaron Benhamou & David Boccara",
      equipe2: "Philippe Abitan & Eyran Abbou",
      score: "6-4",
    },
    {
      match: "Match 3",
      equipe1: "Ethan Abitan & Jeremy Marciano",
      equipe2: "Frank Belhassen & Steve Marciano",
      score: "6-4",
    },
  ];

  const matchesPoule2 = [
    {
      match: "Match 1",
      equipe1: "David Bismuth & Igal Cohen",
      equipe2: "Jeremie Benshoam & Rudy Marciano",
      score: "6-4",
    },
    {
      match: "Match 1",
      equipe1: "Idan Benhamou & Franck Apelbaum",
      equipe2: "Louisadat Philippe & Simon Abbou",
      score: "4-6",
    },
    {
      match: "Match 2",
      equipe1: "David Bismuth & Igal Cohen",
      equipe2: "Idan Benhamou & Franck Apelbaum",
      score: "6-2",
    },
    {
      match: "Match 2",
      equipe1: "Jeremie Benshoam & Rudy Marciano",
      equipe2: "Louisadat Philippe & Simon Abbou",
      score: "1-6",
    },
    {
      match: "Match 3",
      equipe1: "David Bismuth & Igal Cohen",
      equipe2: "Louisadat Philippe & Simon Abbou",
      score: "6-2",
    },
    {
      match: "Match 3",
      equipe1: "Jeremie Benshoam & Rudy Marciano",
      equipe2: "Idan Benhamou & Franck Apelbaum",
      score: "5-7",
    },
  ];

  const classementPoule1 = [
    { equipe: "Ethan Abitan & Jeremy Marciano", points: 3, position: 1 },
    { equipe: "Aaron Benhamou & David Boccara", points: 2, position: 2 },
    { equipe: "Philippe Abitan & Eyran Abbou", points: 1, position: 3 },
    { equipe: "Frank Belhassen & Steve Marciano", points: 0, position: 4 },
  ];

  const classementPoule2 = [
    { equipe: "David Bismuth & Igal Cohen", points: 3, position: 1 },
    { equipe: "Louisadat Philippe & Simon Abbou", points: 2, position: 2 },
    { equipe: "Idan Benhamou & Franck Apelbaum", points: 1, position: 3 },
    { equipe: "Jeremie Benshoam & Rudy Marciano", points: 0, position: 4 },
  ];

  const boxStyle = {
    bg: "gray.50",
    p: 4,
    shadow: "md",
    borderWidth: "1px",
    borderColor: "gray.200",
    borderRadius: "md",
    my: 2,
  };

  const demiFinales = [
    {
      match: "Demi Finale",
      equipe1: "Aaron Benhamou & David Boccara",
      equipe2: "David Bismuth & Igal Cohen",
      score: "6-0",
    },
    {
      match: "Demi Finale",
      equipe1: "Ethan Abitan & Jeremy Marciano",
      equipe2: "Louisadat Philippe & Simon Abbou",
      score: "1-6",
    },
  ];

  const demiFinalesPerdants = [
    {
      match: "Demi Finale des Perdants",
      equipe1: "Philippe Abitan & Eyran Abbou",
      equipe2: "Jeremie Benshoam & Rudy Marciano",
      score: "6-2",
    },
    {
      match: "Demi Finale des Perdants",
      equipe1: "Frank Belhassen & Steve Marciano",
      equipe2: "Idan Benhamou & Franck Apelbaum",
      score: "6-7",
    },
  ];

  const finales = [
    {
      match: "Finale",
      equipe1: "Aaron Benhamou & David Boccara",
      equipe2: "Louisadat Philippe & Simon Abbou",
      score: "6-0",
    },
    {
      match: "Petite Finale",
      equipe1: "David Bismuth & Igal Cohen",
      equipe2: "Ethan Abitan & Jeremy Marciano",
      score: "6-4",
    },
  ];

  const finalesPerdants = [
    {
      match: "Finale des Perdants",
      equipe1: "Philippe Abitan & Eyran Abbou",
      equipe2: "Idan Benhamou & Franck Apelbaum",
      score: "4-6",
    },
    {
      match: "Petite Finale des Perdants",
      equipe1: "Jeremie Benshoam & Rudy Marciano",
      equipe2: "Frank Belhassen & Steve Marciano",
      score: "6-4",
    },
  ];

  const classementFinal = [
    { position: "1er", equipe: "Aaron Benhamou & David Boccara" },
    { position: "2eme", equipe: "Louisadat Philippe & Simon Abbou" },
    { position: "3eme", equipe: "David Bismuth & Igal Cohen" },
    { position: "4eme", equipe: "Ethan Abitan & Jeremy Marciano" },
    { position: "5eme", equipe: "Idan Benhamou & Franck Apelbaum" },
    { position: "6eme", equipe: "Philippe Abitan & Eyran Abbou" },
    { position: "7eme", equipe: "Jeremie Benshoam & Rudy Marciano" },
    { position: "8eme", equipe: "Frank Belhassen & Steve Marciano" }
  ];

  const renderPhaseFinale = (matches, phaseTitle) => (
    <>
      <Box bg="orange.300" p={3} borderRadius="md" width="full">
        <Heading size="lg" textAlign="center">
          {phaseTitle}
        </Heading>
      </Box>
      <VStack {...boxStyle}>
        {matches.map((match, index) => (
          <Box key={index} {...boxStyle}>
            <Text fontWeight="bold">{match.match}:</Text>
            <Text>
              {match.equipe1} VS {match.equipe2}
            </Text>
            <Text fontWeight="semibold">Score: {match.score}</Text>
          </Box>
        ))}
      </VStack>
    </>
  );

  // Fonction pour générer l'affichage des matchs
  const renderMatches = (matches, pouleTitle) => (
    <>
      <Box bg="orange.200" p={3} borderRadius="md" width="full">
        <Heading size="lg" textAlign="center">
          {pouleTitle}
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {matches.map((match, index) => (
          <Box key={index} {...boxStyle}>
            <Text fontWeight="bold">{match.match}:</Text>
            <Text>
              {match.equipe1} VS {match.equipe2}
            </Text>
            <Text fontWeight="semibold">Score: {match.score}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );

  const renderClassement = (classement, pouleTitle) => (
    <>
      <Box bg="orange.200" p={3} borderRadius="md" width="full">
        <Heading size="lg" textAlign="center">
          {pouleTitle}
        </Heading>
      </Box>
      <VStack
        divider={<Divider borderColor="gray.200" />}
        {...boxStyle}
        width="full"
      >
        {classement.map((item, index) => (
          <Text
            key={index}
            p={2}
          >{`${item.position}ère place: ${item.equipe} - Points: ${item.points}`}</Text>
        ))}
      </VStack>
    </>
  );

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box p={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Heading mb={6}>Tournoi Padel du 25 Février 2024</Heading>
      <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Phase de Poule</Tab>
          <Tab>Phase Finale</Tab>
          <Tab>Classement Final</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack align="stretch" spacing={6} width="full">
              {renderMatches(matchesPoule1, "Poule 1")}
              <Divider my={4} />
              {renderClassement(classementPoule1, "Classement Poule 1")}
              <Box height="20px" />
              {renderMatches(matchesPoule2, "Poule 2")}
              <Divider my={4} />
              {renderClassement(classementPoule2, "Classement Poule 2")}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack align="stretch" spacing={6} width="full">
              {renderPhaseFinale(demiFinales, "Demi Finales")}
              <Divider my={4} />
              {renderPhaseFinale(demiFinalesPerdants, "Demi Finales des Perdants")}
              {renderPhaseFinale(finales, "Finales")}
              <Divider my={4} />
              {renderPhaseFinale(finalesPerdants, "Finales des Perdants")}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack {...boxStyle} width="full">
              {classementFinal.map((item, index) => (
                <Box key={index} {...boxStyle} display="flex" justifyContent="space-between">
                  <Text fontWeight="bold">{item.position}:</Text>
                  <Text>{item.equipe}</Text>
                </Box>
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Tournoi1;