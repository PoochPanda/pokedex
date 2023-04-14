import React from 'react';
import {NavLink} from 'react-router-dom';

const Button = (props) => {
    return (
        <NavLink to={props.destination}
            style={{ backgroundColor: props.backgroundColor, textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'end', flex: 1, borderRadius: '20px', padding: '10px' }} > 
                <div style={{ fontWeight: 'bold' }}>{props.title}</div>
                <div>{props.count || 0} {props.count == 1 ? 'pokemon' : 'pokemons'}</div>
        </NavLink>
        
    );
}

export default Button;