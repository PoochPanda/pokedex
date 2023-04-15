import {useState} from "react";
import { getPokemons } from "../utils/storage.utils";
import PokemonRowItem from "./PokemonRowItem";

const Main = ({searchString}) => {
    const data = getPokemons();
    console.log(data);
    console.log(searchString);

    const isNumber = (input) => !isNaN(input);

    const getItem = () => {
        let index = parseInt(searchString)-1;
        const item = data[index];
        const element = item ? <PokemonRowItem key={item.id} name={item.name} id={item.id} image={item.sprites.front_default} types={item.types} />
                             : <div></div>;
        return element;
    }
    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px'}}>

            {searchString!=='' && isNumber(searchString)?
                getItem()
                :
                data?.filter(
                    (item) => item.name.includes(searchString)).map(pokemon => <PokemonRowItem key={pokemon.id} name={pokemon.name} 
                                id={pokemon.id} image={pokemon.sprites.front_default} types={pokemon.types} />)
            
            }
        </main>
    );
}

export default Main;