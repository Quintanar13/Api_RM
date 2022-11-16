import React from 'react';

const Character = ({ character }) => {
    return(
        <div className='col-md-3 mb-3'>
            <div className='card text-white bg-dark'>
            <div className="card-header"></div>
            <img className="card-img-top" src={character.image} alt={character.name} />
            <div className="card-body">
                <h4 className="card-title">{character.name}</h4>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Specie: {character.species}</p>
            </div>
        </div>
        </div>
        
    );
};
   
export default Character;