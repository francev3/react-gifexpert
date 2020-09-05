import React from 'react'
import GifItem from './GifItem';
import { useFetchGif } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const { gifs , loading} = useFetchGif(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>

            { loading && <p className="animate__animated animate__fadeIn" >'Caragando...'</p> }

            <div className="card-grid">
            
                {
                    gifs.map( img =>(
                        <GifItem
                            key={img.id}
                            {...img} 
                        />
                    ))
                }
                
            </div>
        </>
    )
}

export default GifGrid
