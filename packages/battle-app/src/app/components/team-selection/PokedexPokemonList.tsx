import React from 'react';
import useGetAllPokedexPokemon from '../../pokeapi-hooks/useGetAllPokedexPokemon';
import { Box, CircularProgress, Stack } from '@mui/material';
import { PokemonDetails } from '../../models';

type PokedexPokemonListProps = {
  selectedPokemon: PokemonDetails | null;
  setSelectedPokemon: React.Dispatch<
    React.SetStateAction<PokemonDetails | null>
  >;
  selectedGame: string;
};

const PokedexPokemonList: React.FC<PokedexPokemonListProps> = ({
  selectedPokemon,
  setSelectedPokemon,
  selectedGame,
}) => {
  const { data: pokemons, isLoading } = useGetAllPokedexPokemon({
    versionGroupId: parseInt(selectedGame),
  });
  console.log({ pokemons, isLoading });

  const selectedStyle = {
    border: '1px solid blue',
    borderRadius: '4px',
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      spacing={2}
      width="50%"
      overflow="scroll"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        (pokemons ?? []).map((pokemon) => (
          <Box
            key={pokemon.name}
            sx={
              selectedPokemon != null && pokemon.id === selectedPokemon.id
                ? selectedStyle
                : { '&hover:': selectedStyle }
            }
            onClick={() => setSelectedPokemon(pokemon)}
          >
            <img src={pokemon.sprites.front_default ?? ''} alt={pokemon.name} />
          </Box>
        ))
      )}
    </Stack>
  );
};
export default PokedexPokemonList;
