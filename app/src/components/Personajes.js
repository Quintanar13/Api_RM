import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const  Personajes = ({pagina, busqueda}) => {
    const [personajes, setPersonajes] = useState([]);
    
    
    useEffect(() => {
        if(busqueda === ""){
            const url = "https://rickandmortyapi.com/api/character?page=" + pagina.toString();
            axios.get(url).then((response) => {
                // console.log(response.data.results);
                setPersonajes(response.data.results);
            });
        }
        else{
            const url = "https://rickandmortyapi.com/api/character?name=" + busqueda.toString();
            axios.get(url).then((response) => {
                // console.log(response.data.results);
                setPersonajes(response.data.results);
            });
        }
        

        
    },[pagina, busqueda]);

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