import React, { useEffect } from "react";
import { getFavourites, getPokemons, savePokemons, getTeam } from "../utils/storage.utils";
import Main from "../components/Main";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Header from "../components/Header";
import { useState } from "react";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [text, setText] = useState('');
    
    useEffect(() => {
        async function fetchPokemons() {
            setIsLoading(true);
            if (!getPokemons()) {
                const response = await fetch("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon");
                if (!response.ok) {
                    setError('Fetching items failed.');
                } else {
                    const resData = await response.json();
                    savePokemons(resData);
                }
                
            }
            setIsLoading(false);
        }

        fetchPokemons();
    }, []);

    const onTyping = (event) => {
        const {value} = event.target;
        setText(value);
    }
    
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>


            {!isLoading &&

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <Header title="Pokédex">
                        <FilterAltIcon />
                    </Header>
                    <SearchBar onChange={onTyping} />
                    <nav style={{ display: 'flex', gap: 10, flexBasis: '100px' }}>
                        <Button destination="team" backgroundColor="purple" title="Mijn team" count={getTeam()?.length} />
                        <Button destination="favourites" backgroundColor="turquoise" title="Favorieten" count={getFavourites()?.length} />
                    </nav>

                    <Main searchString={text}></Main>
                </div>
            }
        </>
    );
}
  
export default Home;