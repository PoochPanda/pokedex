import { useParams } from 'react-router-dom';
import { getFavourites, saveFavourite} from "../utils/storage.utils";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Details = () => {
  const selectedPokemonID = useParams().pokemon;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [isFavourite, setIsFavourite] = useState(false); // MSS DEZE GEBRUIKEN
  
  useEffect(() => {
    async function fetchPokemonDetails() {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonID}`);

      if (!response.ok) {
        setError('Fetching items failed.');
      } else {
        const resData = await response.json();
        setPokemonData(resData);
      }
      setIsLoading(false);
    }

    fetchPokemonDetails();
    if (pokemonData !== null) {
      setIsFavourite(determineIsFavourite());
    }
    else
      console.log('loaded')    
}
  , []);

  const determineIsFavourite = () => {
    const favourites = getFavourites();

    // load favourites
    if (favourites) { 
      const result = favourites.find(element => {
        return element.toString() === selectedPokemonID
      });
      if (result) {
        return true;
      }
      else {
        return false; // undefined - not found  
       } 
    // initialize empty localStore
    } else {
      saveFavourite(null);  // initialize
      return false;
    }
  }

  const OnFavourite = () => {
    const favourite = isFavourite;
    console.log('OnFavourite');
    console.log(favourite);
    
    saveFavourite(pokemonData.id);
    setIsFavourite(determineIsFavourite());
  }

  return (
    <>
      {/* Loading Signal */}
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>


      {!isLoading && 
      <div>
        <Header title={pokemonData?.name} onFavourite={OnFavourite}>
          {isFavourite ? <FavoriteIcon color='secondary' /> : <FavoriteBorderIcon  color='secondary' />}
        </Header>
        {/* <Lightbox images={pokemonData?.sprites} /> */}
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>Statistics</div>
          <div>
            {pokemonData?.stats.map(e => {
              return (
                <div style={{display: 'flex'}}>
                  <div style={{flex: 0.5}}>{e.stat.name}</div>
                  <div style={{flex: 1}}>{e.base_stat}</div>
                </div>
                );
              })}
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Details;