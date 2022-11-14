import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const  Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const url = "https://rickandmortyapi.com/api/character"
    
    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response.data.results);
            setPersonajes(response.data.results);
        });
    },[]);

    return (  
        <>
            <div className='container'>
                <div className='row'>
                    {personajes.map((personaje) => <Character key={personaje.id} character = {personaje}/>)}
                </div>
            </div>
        </>
    );
}
 
export default Personajes;