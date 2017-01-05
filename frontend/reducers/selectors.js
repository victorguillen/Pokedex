import values from 'lodash/values';

const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export default selectAllPokemon;
