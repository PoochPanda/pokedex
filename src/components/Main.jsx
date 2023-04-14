import {useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { getPokemons } from "../utils/storage.utils";
import { yellow } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import TypeTag from "./TypeTag";
import PokemonRowItem from "./PokemonRowItem";

const Main = ({searchString}) => {
    const [data] = useState(getPokemons());
    
    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px'}}>
            {data?.filter((item) => item.name.includes(searchString)).map(pokemon => <PokemonRowItem key={pokemon.id} name={pokemon.name} 
                                    id={pokemon.id} image={pokemon.sprites.front_default} types={pokemon.types} />)}
        </main>
    );
}

export default Main;