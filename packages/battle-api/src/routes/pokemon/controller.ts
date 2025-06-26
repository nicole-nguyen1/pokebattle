import {
  GameClient,
  Pokedex,
  PokemonAbility,
  PokemonClient,
  PokemonEntry,
  PokemonMove,
  PokemonMoveVersion,
  PokemonStat,
  PokemonType,
} from 'pokenode-ts';

import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { parseIdFromUrl } from '../../utils';
import { isMoveCategory } from './utils';

type PokemonMovesByCategory = {
  egg: PokemonMove[];
  levelUp: PokemonMove[];
  machine: PokemonMove[];
  tutor: PokemonMove[];
};

type PokemonDetails = {
  id: number;
  abilities: PokemonAbility[];
  name: string;
  stats: PokemonStat[];
  types: PokemonType[];
  moves: PokemonMovesByCategory;
  sprites: {
    front_default: string | null;
    back_default: string | null;
  };
};

const gameClient = new GameClient();
const pokemonClient = new PokemonClient();

@Route('pokemon')
@Tags('Pokemon')
export class PokemonController extends Controller {
  @Get('/')
  public async getPokemon(
    @Query() versionGroupId: number
  ): Promise<PokemonDetails[]> {
    if (isNaN(versionGroupId)) {
      this.setStatus(400);
      throw new Error('Invalid versionGroupId');
    }

    try {
      const versionGroup = await gameClient.getVersionGroupById(versionGroupId);
      const pokedexUrl = versionGroup.pokedexes?.[0]?.url;

      const pokedexId = parseInt(
        pokedexUrl?.split('/').filter(Boolean).pop() ?? '',
        10
      );
      if (!pokedexId) throw new Error('No valid pokedex ID found');

      const pokedex: Pokedex = await gameClient.getPokedexById(pokedexId);
      const entries: PokemonEntry[] = pokedex.pokemon_entries;
      const detailPromises = entries.map(
        async (entry): Promise<PokemonDetails | null> => {
          const speciesId = parseIdFromUrl(entry.pokemon_species.url);
          if (isNaN(speciesId)) return null;

          try {
            const { id, abilities, moves, name, sprites, stats, types } =
              await pokemonClient.getPokemonById(speciesId);

            const filteredMovesByCategory: PokemonMovesByCategory = {
              egg: [],
              levelUp: [],
              machine: [],
              tutor: [],
            };

            const filteredMoves = moves
              .map((move) => ({
                ...move,
                version_group_details: move.version_group_details
                  .filter(
                    (vgd: PokemonMoveVersion) =>
                      vgd.version_group.name === versionGroup.name
                  )
                  .sort((a, b) => {
                    if (a.move_learn_method.name === 'level-up') {
                      return a.level_learned_at - b.level_learned_at;
                    }
                    return b.level_learned_at - a.level_learned_at;
                  }),
              }))
              .sort((a, b) => {
                if (
                  a.version_group_details.length > 0 &&
                  b.version_group_details.length > 0
                ) {
                  return (
                    a.version_group_details[0].level_learned_at -
                    b.version_group_details[0].level_learned_at
                  );
                }
                return a.move.name.localeCompare(b.move.name);
              });

            filteredMoves.forEach((move) => {
              if (isMoveCategory(move, 'egg')) {
                filteredMovesByCategory.egg.push(move);
              } else if (isMoveCategory(move, 'level-up')) {
                filteredMovesByCategory.levelUp.push(move);
              } else if (isMoveCategory(move, 'machine')) {
                filteredMovesByCategory.machine.push(move);
              } else if (isMoveCategory(move, 'tutor')) {
                filteredMovesByCategory.tutor.push(move);
              }
            });

            const { front_default, back_default } = sprites;
            return {
              id,
              abilities,
              name,
              stats,
              types,
              moves: filteredMovesByCategory,
              sprites: {
                front_default,
                back_default,
              },
            };
          } catch {
            return null;
          }
        }
      );

      const details = await Promise.all(detailPromises);
      return details.filter(
        (detail): detail is PokemonDetails => detail !== null
      );
    } catch (err) {
      this.setStatus(500);
      throw new Error('Failed to fetch Pokémon');
    }
  }
}
