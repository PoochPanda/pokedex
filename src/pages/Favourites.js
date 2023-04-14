import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Main from "../components/Main";
import { getFavourites } from "../utils/storage.utils";
import FavouriteMain from "../components/FavouriteMain";

function Favourites() {


    return (<div style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: 'turquoise'}}>
        <Header title="Favourites"></Header>

        <FavouriteMain></FavouriteMain>
    </div>);
}

export default Favourites;