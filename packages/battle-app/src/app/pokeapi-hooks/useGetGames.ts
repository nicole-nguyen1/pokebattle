import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { NamedAPIResource, NamedAPIResourceList } from '../models';

const useGetGames = (): UseQueryResult<NamedAPIResource[], Error> => {
  return useQuery({
    queryKey: ['games'],
    queryFn: async (): Promise<NamedAPIResource[]> =>
      await fetch('http://localhost:3000/games')
        .then((res): Promise<NamedAPIResourceList> => res.json())
        .then((res) => res.results),
  });
};

export default useGetGames;
