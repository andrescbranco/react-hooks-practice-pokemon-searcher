import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3001/pokemon')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setPokemons(data)
    })
  },[])

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(e){
    setSearchTerm(e.target.value)
  }

  const searchedPokemon = pokemons.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  })

  function onAddPokemon(newPokemon) {
    setPokemons([...pokemons,newPokemon])
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon} />
      <br />
      <Search handleSearch={handleSearch} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemons={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
