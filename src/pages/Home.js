import React, { useEffect } from "react";
import { getPokemons, savePokemons } from "../utils/storage.utils";
import Main from "../components/Main";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

function Home() {

    console.log(getPokemons());
    useEffect( () => {
        if (getPokemons() === null)
            fetch("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    savePokemons(data);
                    console.log(data); // delete this later
                })
        
    },[]);
    
    return (
        <div>
            <header style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <nav style={{display: 'flex', justifyContent:'end'}}>
                    <button><FilterAltIcon /></button>
                </nav>
                <h1 style={{margin: '0px'}}>Pokédex</h1>
                <SearchBar />
                <nav style={{display: 'flex', gap: 10, flexBasis: '100px'}}>
                    <Button destination="team" backgroundColor="purple" title="Mijn team" count='' />
                    <Button destination="favourites" backgroundColor="turquoise" title="Favorieten" count='' />
                </nav>
            </header>
            
            
            <Main>{}</Main>
        </div>
    );
}
  
export default Home;