import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemons = this.props.pokemon.map(pokemon => (
      <li key={pokemon.id}> {pokemon.name} <img src={pokemon.image_url}></img></li>
      )
    );

    return(
      <div>
        <ul>
          { pokemons }
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
