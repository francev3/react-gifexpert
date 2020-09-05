import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One puch'])

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr/>

            {/* <button onClick={handleAddCategory} >Agregar</button> */}

            <AddCategory setCategories={setCategories} />

            <ol>
            { 
                categories.map( category => 
                    <GifGrid 
                        key ={category}   
                        category={category} 
                    />
                )
            }
            </ol>

        </>
    )
}

export default GifExpertApp;