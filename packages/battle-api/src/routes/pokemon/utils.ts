import { PokemonMove } from 'pokenode-ts';

export function isMoveCategory(move: PokemonMove, category: string) {
  return (
    move.version_group_details.find(
      (vgd) => vgd.move_learn_method.name === category
    ) != null
  );
}
