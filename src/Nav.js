import React, {useContext} from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";


const Nav = () => {
    const [m1, setM1] = useContext(MovieContext)

    return (
        <div style={{display: "flex", justifyContent: "space-around", background: "grey", alignItems: "center"}}>
                {m1.map((movie,index) => <Movie data={movie} key={index}/> )}
        </div>
    )
}
export default Nav



