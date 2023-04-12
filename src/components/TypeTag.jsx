import React from "react";

const TypeTag = (props) => {
    //  switch(props.type){
    //     case 'grass': 'green';
    //     case 'poison': 'purple';
    //     case 'fire': 'orange';
    //     case 'flying': 'violet';
    //     case 'water': 'blue';
    //     case 'bug': 'lightgreen';
    //     case 'normal': 'lightbrown';
    //     case 'electric': 'lightorange';
    //     case 'ground': 'brown';
    //     case 'fairy': 'pink';
    //     case 'fight': 'lightbrown';
    //     case 'poison': 'purple';
    //  }; 
    return (
        <span
            style={{ backgroundColor: 'green', borderRadius: '15px', paddingInline: '7px' }}>
            {props.type}
        </span>
    );
}

export default TypeTag;