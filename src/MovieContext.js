import React, { useState, createContext } from "react";


export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter', price: '$2.99', id: 1
        },
        {
            name: 'Transformers', price: '$10.99', id: 2
        },
        // {
        //     name: 'Ice Age', price: '$6', id: 3
        // },
        // {
        //     name: 'Breakdown', price: '$25', id: 4
        // },
    ])
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

