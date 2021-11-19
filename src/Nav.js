import React, { useContext, useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";


const Nav = () => {
    const [ m1, setM1 ] = useContext( MovieContext )
    const [ count, setCount ] = useState( 0 )
    const renderedCount = useRef( 0 )
    const testref = useRef()
    const [ data, setData ] = useState()


    useEffect( () => {
        // renderedCount.current = renderedCount.current + 1
    } )
    const submitFunction = ( e ) => {
        e.preventDefault()
        // console.dir(  testref.current)
        testref.current.submit()
    }
    const test = ( e ) => {
        console.log( 'test' )
    }

    const counter = () => {
        setCount( count + 1 )
    }
    return (

        <form ref={ testref } action="saidbeksamigjonov" method="get">
            <label>
                Name:
                <input type="test" value={ data?.name }
                       onChange={ ( e ) => setData( {...data, name: e.target.value} ) }/>
                Age:
                <input type="text" value={ data?.age } onChange={ ( e ) => setData( {...data, age: e.target.value} ) }/>
            </label>
            <button type={ "button" } onClick={ submitFunction }>Press it</button>
        </form>



// <div style={{display: "flex", justifyContent: "space-around", background: "grey", alignItems: "center"}}>
        //         {m1.map((movie,index) => <Movie data={movie} key={index}/> )}
        // </div>
        // <div>
        //     <h1>Count is {count} </h1>
        //     <p>Rendered COunt {renderedCount.current}</p>
        //     <button onClick={counter}>Press it </button>
        // </div>


    )
}
export default Nav



