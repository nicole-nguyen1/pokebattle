import { Stack } from '@mui/material';
import { useState } from 'react';
import GameSelection from './GameSelection';
import PokemonSelection from './PokemonSelection';
import { PokemonDetails } from '../../models';

const TeamSelection = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<PokemonDetails[]>([]);

  return (
    <Stack spacing={4} maxHeight="90vh">
      <GameSelection
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />
      <PokemonSelection
        selectedTeam={selectedTeam}
        selectedGame={selectedGame}
        setSelectedTeam={setSelectedTeam}
      />
    </Stack>
  );
};
export default TeamSelection;
