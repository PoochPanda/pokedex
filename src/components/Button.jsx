import React from 'react';
import {NavLink} from 'react-router-dom';

const Button = (props) => {
    return (
        <NavLink to={props.destination}
            style={{ backgroundColor: props.backgroundColor, textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'end', flex: 1, borderRadius: '20px', padding: '10px' }} > 
                <div style={{ fontWeight: 'bold' }}>{props.title}</div>
                <div>4 pokemons</div>
        </NavLink>
        
    );
}

export default Button;