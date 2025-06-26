import React from 'react';
import {
  capitalize,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import useGetGames from '../../pokeapi-hooks/useGetGames';

type GamesSelectionProps = {
  selectedGame: string;
  setSelectedGame: (region: string) => void;
};

const GamesSelection: React.FC<GamesSelectionProps> = ({
  selectedGame,
  setSelectedGame,
}) => {
  const { data: games, isLoading } = useGetGames();
  console.log(games);

  return (
    <FormControl fullWidth>
      <InputLabel id="pokemon-game-label">Pokemon Games</InputLabel>
      <Select
        labelId="pokemon-game-label"
        value={selectedGame}
        label="Pokemon Games"
        onChange={(e) => setSelectedGame(e.target.value)}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          (games ?? []).map((game) => {
            const url = game.url.trim().split('/');
            const humanReadableName = game.name
              .split('-')
              .map((w) => capitalize(w))
              .join(' ');
            return (
              <MenuItem key={game.name} value={url[url.length - 2]}>
                {humanReadableName}
              </MenuItem>
            );
          })
        )}
      </Select>
    </FormControl>
  );
};
export default GamesSelection;
