import React, {useState} from 'react';

const Buscar = ({busqueda, setBusqueda}) => {

    const onChange = (e) => {
        //console.log(e.target)
        if (e.target.name === 'busqueda'){
            setBusqueda(e.target.value)
        }
    }

    return(
        <div>
            <input 
                type="text" 
                name = "busqueda"
                id="busqueda"
                value={busqueda}
                onChange = {onChange}
                placeholder="Buscar" 
                aria-label="Buscar" 
                aria-describedby="basic-addon2"/>
        </div>  
    );
};
   
export default Buscar;