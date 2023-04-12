/* 
HIER (OF IN POKEMON.JSX) MOET JE DE URL-PARAMETER LEZEN VAN USEPARAMS EN DAAROP GAAN ZOEKEN IN DE POKEMON DATA EN DIE POKEDATA INLADEN!
Home > Details?name=Bulbasaur
*/


import Pokemon from "../components/Pokemon";
import { useParams } from 'react-router-dom';
import { savePokemons } from "../utils/storage.utils";
import { VerifyPokemons } from "../utils/storage.utils";
import { useState, useEffect } from "react";

function Details() {
    const par = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


//     const dataFetch = async () => {
//         const data = await (
//             await fetch(
//                 "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
//             )
//         ).json();

//         // set state when the data received
//         setData(data);
//     };
//     console.log("pop");
//     dataFetch();
// }, []);


    // useEffect(async () => {
    //         setIsLoading(true);
    //         const response = await fetch('http://localhost:8080/events');

    //         if (!response.ok) {
    //             setError('Fetching data failed.');
    //         } else {
    //             const resData = await response.json();
    //             console.log(resData.events);
    //         }
    //         setIsLoading(false);
        
    // }, []);
    return (
        <>
            {/* Loading Signal */}
            {/* <div style={{ textAlign: 'center' }}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div> */}
            {!isLoading && <Pokemon />}
        </>
    );
}

export default Details;

/* Udemy-Mode
import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
const [isLoading, setIsLoading] = useState(false);
const [fetchedEvents, setFetchedEvents] = useState();
const [error, setError] = useState();

useEffect(() => {
  async function fetchEvents() {
    setIsLoading(true);
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      setError('Fetching events failed.');
    } else {
      const resData = await response.json();
      setFetchedEvents(resData.events);
    }
    setIsLoading(false);
  }

  fetchEvents();
}, []);
return (
  <>
    <div style={{ textAlign: 'center' }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
    {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
  </>
);
}

export default EventsPage;
*/