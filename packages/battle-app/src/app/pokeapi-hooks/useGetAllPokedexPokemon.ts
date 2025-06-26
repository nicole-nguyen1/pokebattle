import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { PokemonDetails } from '../models';

const useGetAllPokedexPokemon = ({
  versionGroupId,
}: {
  versionGroupId: number;
}): UseQueryResult<PokemonDetails[], Error> => {
  return useQuery({
    queryKey: ['pokemon', versionGroupId],
    queryFn: async (): Promise<PokemonDetails[]> =>
      await fetch(
        `http://localhost:3000/pokemon?versionGroupId=${versionGroupId}`
      ).then((res): Promise<PokemonDetails[]> => res.json()),
    enabled: !!versionGroupId,
  });
};

export default useGetAllPokedexPokemon;
