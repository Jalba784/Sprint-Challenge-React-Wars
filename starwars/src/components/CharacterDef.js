import React from 'react';
import '../App.css';

/* Props for Characters */
const CharacterDef = props => {
    return (
        <div className='character'>
            <h1>{props.character.name}</h1>
            <div className='characterDetails'>
                <div>Birthday: {props.character.birth_year}</div>
                <div>Gender: {props.character.gender}</div>
                <div>Hair Color: {props.character.hair_color}</div>
                <div>Skin Color: {props.character.skin_color}</div>
            </div>
        </div>
    );
};

export default CharacterDef