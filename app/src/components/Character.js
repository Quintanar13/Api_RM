import React from 'react';

const Character = ({ character }) => {
    return(
        <div class='card text-white bg-dark col-md-3 mb-3'>
            <div class="card-header"></div>
            <img class="card-img-top" src={character.image} alt={character.name} />
            <div class="card-body">
                <h4 class="card-title">{character.name}</h4>
                <p class="card-text">Status: {character.status}</p>
                <p class="card-text">Specie: {character.species}</p>
            </div>
        </div>
    );
};
   
export default Character;