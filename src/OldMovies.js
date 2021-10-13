import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const OldMovies = () => {
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <div>
            {movies.map((movie,index) => <Movie data={movie} key={index}/> )}
        </div>
    )
}
export default OldMovies



