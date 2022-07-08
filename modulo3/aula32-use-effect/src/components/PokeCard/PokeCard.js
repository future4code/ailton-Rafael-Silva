import { useEffect, useState } from "react";
import axios from 'axios';

const PokeCard = ({pokeName})  => {
 
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res) => {
      
      setPokemon(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    pegaPokemon()
  }, [pokeName]);

  return (
    <figure>
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
}

export default PokeCard;