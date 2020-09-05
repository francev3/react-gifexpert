import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = ( category ) => {
    const [state, setState] = useState({
        gifs: [],
        loading: true
    })

    useEffect( () => {
        getGifs(category).then( (imgs) => (
            setState({
                gifs: imgs,
                loading: false
            }
        ))) ;
    }, [category])

    return state;

}