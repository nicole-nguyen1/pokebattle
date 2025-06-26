import React from 'react';
import { Box, Stack } from '@mui/material';
import { PokemonDetails } from '../../models';

type SelectedTeamProps = {
  selectedTeam: Array<PokemonDetails | null>;
};

const SelectedTeam: React.FC<SelectedTeamProps> = ({ selectedTeam }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      spacing={2}
      justifyContent="center"
    >
      {new Array(6).fill(null).map((_, i) => (
        <Box
          height={16}
          width={16}
          bgcolor="gray"
          p={8}
          display="flex"
          justifyContent="center"
          key={`selected-pokemon-${selectedTeam[i] ?? i}`}
        >
          {selectedTeam.at(i) != null && selectedTeam[i]?.name}
        </Box>
      ))}
    </Stack>
  );
};
export default SelectedTeam;
