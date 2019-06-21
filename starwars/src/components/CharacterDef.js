import React from 'react';
// import StarWars from './StarWars.css';
import '../App.css';

const CharacterDef = (props) => {
    return (
        <div className="charBox">
            <p>
                <div>Name: {props.characters.name}</div>
                <div>Born: {props.characters.birth_year}</div>
            </p>
        </div>
    );
};

export default CharacterDef