import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {requestAllPokemon} from './actions/pokemon_actions';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';


window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
