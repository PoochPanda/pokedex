import React from "react";
import { NavLink, useParams } from "react-router-dom";
import TypeTag from "./TypeTag";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const PokemonRowItem = ({id, image, name, types}) => {
    return (
        <NavLink to={`/pokemon/${id}`} style={{display: "flex", flexDirection: "column", textDecoration: 'none', color: 'black'}}>
            <div style={{display: "flex", alignItems: 'center', boxShadow: '0px 5px 15px lightgray' , borderRadius: '20px', padding: '6px'}}>
                <img src={image} style={{width: '80px'}} />
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

export default PokemonRowItem;