import React from "react";
import { getFavourites, getPokemons } from "../utils/storage.utils";
import PokemonRowItem from "./PokemonRowItem";

const FavouriteMain = () => {
    const ids = getFavourites();
    const pokemon = getPokemons();
    let data = [];

    if (ids) {        
        for (let i = 0; i < ids.length; i++) {
            for (let j = 0; j < pokemon.length; j++) {
                if (ids[i] === pokemon[j].id) {
                    data.push(pokemon[j]);
                }
            } 
        }
    }
    
    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px'}}>
            {
                ids ?
            data?.map(pokemon => <PokemonRowItem key={pokemon.id} name={pokemon.name} 
                                    id={pokemon.id} image={pokemon.sprites.front_default} types={pokemon.types} />) :
                                    <div>You have no favourites?!</div>}
        </main>
    );
}

export default FavouriteMain;