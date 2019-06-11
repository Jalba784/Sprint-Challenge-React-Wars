import React from 'react';
// import StarWars from './StarWars.css';
import '../App.css';

const CharacterDef = (props) => {
    return (
        <div className="charBox">
            <p>
                <strong>Name:</strong> {props.name}
                <strong>Born:</strong> {props.birth_year}
            </p>
        </div>
    );
};

export default CharacterDef