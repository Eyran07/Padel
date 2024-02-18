import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  onValue,
} from "firebase/database";
import { database } from "../firebase"; // Assurez-vous que ce chemin est correct
import {
  Button,
  VStack,
  Grid,
  GridItem,
  HStack,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";

const TournamentPage = () => {
  const [participants, setParticipants] = useState([]);
  const [teams, setTeams] = useState([]);

  const [quarterFinals, setQuarterFinals] = useState([]);

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

  useEffect(() => {
    const participantsRef = ref(database, "participants");
    onValue(participantsRef, (snapshot) => {
      const loadedParticipants = [];
      snapshot.forEach((childSnapshot) => {
        loadedParticipants.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      setParticipants(loadedParticipants);
      console.log("Participants chargés :", loadedParticipants); // Vérification
    });
  }, []);

  useEffect(() => {
    const quarterFinalsRef = ref(database, "quarterFinals");
    onValue(quarterFinalsRef, (snapshot) => {
      const loadedQuarterFinals = [];
      snapshot.forEach((childSnapshot) => {
        const match = childSnapshot.val();
        loadedQuarterFinals.push({
          id: childSnapshot.key,
          team1: match.team1,
          team2: match.team2,
          score: match.score,
        });
      });
      setQuarterFinals(loadedQuarterFinals);
    });
  }, []);

  const generateQuarterFinals = () => {
    let shuffledTeams = [...teams].sort(() => 0.5 - Math.random());
    let selectedTeams = shuffledTeams.slice(0, 8);

    let matches = [];
    for (let i = 0; i < selectedTeams.length; i += 2) {
      matches.push({
        team1: selectedTeams[i].members,
        team2: selectedTeams[i + 1].members,
        score: "", // Initialisation du score commun
      });
    }

    // Sauvegardez les quarts de finale dans Firebase
    const quarterFinalsRef = ref(database, "quarterFinals");
    set(quarterFinalsRef, matches);

    setQuarterFinals(matches);
  };

  const updateMatchScore = (matchIndex, score) => {
    const updatedMatches = [...quarterFinals];
    updatedMatches[matchIndex].score = score;

    setQuarterFinals(updatedMatches);

    // Mettre à jour le score dans Firebase pour le match spécifique
    const matchRef = ref(database, `quarterFinals/${matchIndex}`);
    update(matchRef, { score: score });
  };

  return (
    <VStack spacing={4}>
       <Button onClick={generateQuarterFinals}>Générer les Quarts</Button>
      {quarterFinals.length > 0 && (
        <VStack>
          {quarterFinals.map((match, index) => (
            <Box key={index}>
              <Text>
                Match {index + 1}: {match.team1} vs {match.team2}
              </Text>
              <Input
                placeholder="Score"
                size="sm"
                type="text"
                value={match.score || ""}
                onChange={(e) => updateMatchScore(index, e.target.value)}
              />
            </Box>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default TournamentPage;
