import React, { useState } from 'react';
import { Stack } from '@mui/material';
import SelectedTeam from './SelectedTeam';
import PokedexPokemonList from './PokedexPokemonList';
import { PokemonDetails as PokemonDetailsType } from '../../models';
import PokemonDetails from './PokemonDetails';

type PokemonSelectionProps = {
  selectedTeam: Array<PokemonDetailsType | null>;
  setSelectedTeam: React.Dispatch<React.SetStateAction<PokemonDetailsType[]>>;
  selectedGame: string;
};

const PokemonSelection: React.FC<PokemonSelectionProps> = ({
  selectedTeam,
  selectedGame,
}) => {
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonDetailsType | null>(null);

  return (
    <>
      <SelectedTeam selectedTeam={selectedTeam} />
      <Stack direction="row" overflow="scroll">
        <PokedexPokemonList
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedGame={selectedGame}
        />
        {selectedPokemon != null && (
          <PokemonDetails selectedPokemon={selectedPokemon} />
        )}
      </Stack>
    </>
  );
};
export default PokemonSelection;
