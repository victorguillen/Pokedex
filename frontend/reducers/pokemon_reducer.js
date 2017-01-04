import {receiveAllPokemon, RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = {};
      Object.keys(action.pokemon).forEach((index) => (newState[index] = action.pokemon[index]));
      return newState;
    default:
      return state;
  }
};
