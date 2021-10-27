import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import OldMovies from "./OldMovies";
import {Link} from 'react-router-dom'

const MoviesList = () => {
    const [movies,setMovies] = useContext(MovieContext)
    const [show, setShow] = useState(false)
    return (
        <div>
            <div>
                {movies.map((movie,index) => <Movie data={movie} key={index}/> )}
                <button onClick={()=> setTimeout(()=> setShow(true), 2000) }>Show movies</button>
                {show ? <OldMovies/> : <h2>Press Show movies again</h2>}

            </div>
        </div>
    )
}

export default MoviesList




