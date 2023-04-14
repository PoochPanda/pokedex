import React from "react";

const TypeTag = (props) => {
    return (
        <span
            className={props.type}
            style={{ borderRadius: '15px', paddingInline: '7px' }}>
            {props.type}
        </span>
    );
}

export default TypeTag;