import React from "react";

const Movie = (props) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h2 style={{marginRight: 20}}>{props.data.name}</h2>
            <p>{props.data.price}</p>
        </div>
    )
}
export default Movie


