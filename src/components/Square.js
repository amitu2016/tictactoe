import React from "react";


export default function Square(props) {
    //console.log(props)
    return(
        <button className="square" onClick={props.handleClick}>
            {props.value}
        </button>
    )
}