import React from 'react';
import { capitalize, Stack, Typography } from '@mui/material';
import { PokemonDetails as PokemonDetailsType } from '../../models';

type PokemonDetailsProps = {
  selectedPokemon: PokemonDetailsType;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ selectedPokemon }) => {
  return (
    <Stack direction="column" spacing={2} width="50%" overflow="scroll">
      <Stack direction="row" gap={4}>
        <Typography variant="body2" fontWeight={700}>
          Name
        </Typography>
        <Typography variant="body2">
          {capitalize(selectedPokemon.name)}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default PokemonDetails;
