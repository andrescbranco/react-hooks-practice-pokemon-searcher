import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import PokemonForm from "./PokemonForm";

function PokemonCollection({pokemons}) {

  const renderPokemons = pokemons.map((pokemon)=>{
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })


  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1> 
      {renderPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
