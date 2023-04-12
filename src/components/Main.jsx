import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { getPokemons } from "../utils/storage.utils";
import { yellow } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import TypeTag from "./TypeTag";
import PokemonRowItem from "./PokemonRowItem";

{/* TODO: Data van getPokemons in een array inladen en erdoor loopen om <NavLink /> of later <PokemonRowItem /> te genereren */}

const Main = () => {
    const {id, name, sprites:{front_default}, types} = getPokemons()[8];
    console.log(id);console.log(name);console.log(front_default);console.log(types); 
    return (
        // <InfiniteScroll>

        // </InfiniteScroll>
        // <PokemonRowItem />
        <NavLink to={`pokemon/${name}`} style={{display: "flex", flexDirection: "column", textDecoration: 'none', color: 'black'}}>
                <div style={{display: "flex", alignItems: 'center', boxShadow: '0px 5px 15px lightgray' , borderRadius: '20px', padding: '6px'}}>
                    <img src={front_default} style={{width: '80px'}} />
                    <div>
                        <div style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{name}</div>
                        <div>Nr. {id}</div>
                    </div>
                    <div style={{display: 'grid', gridTemplateRows: '1fr 2fr', gridTemplateColumns: '1fr', flex: 1, justifyContent: 'flex-end'}}>
                        <div className="type" style={{display: 'flex', gap: '5px', gridRowStart: '1', justifyContent: 'flex-end'}}>
                            {types.map(type => {
                                const {slot: slotId, type:{name}} = type;
                                    return <TypeTag type={name} key={slotId} />
                            })}
                        </div>
                        <KeyboardArrowRightIcon style={{gridRowStart: '1'}} />
                    </div>
                </div>
        </NavLink>
    );
}

export default Main;