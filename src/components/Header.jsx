import { capitalize } from "@mui/material";
import React from "react";
import IconButton from '@mui/material/IconButton';

const Header = ({children, title, onFavourite}) => {
    
    return (
        <>
            <header style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <nav style={{display: 'flex', justifyContent:'end'}}>
                    {
                        [children].map(
                            (item) =>

                                <IconButton onClick={onFavourite} aria-label="upload picture" component="label">
                                    {item}
                                </IconButton>
                        )
                    } 
                </nav>
                <h1 style={{margin: '0px', textTransform: 'capitalize'}}>{title}</h1>
            </header>
        </>
    )
}

export default Header;