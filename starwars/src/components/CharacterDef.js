import React from 'react';
import StarWars from './StarWars.css';
import '../App.css';

const CharacterDef = (props) => {
    return (
        <div className="charBox">
            <h1>{props.name}</h1>
            <p>
                <strong>Born:</strong> {props.birth_year}
            </p>
            <p>
                <strong>Created:</strong> {props.created}
            </p>
            <p>
                <strong>Edited:</strong> {props.edited}
            </p>
            <p>
                <strong>Eye Color:</strong> {props.eyeColor}
            </p>
        </div>
    );
};

export default CharacterDef