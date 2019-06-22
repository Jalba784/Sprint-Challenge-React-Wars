import React from 'react';
import CharacterDef from './CharacterDef.js';
import '../App.css';

const ListOfCharacters = props => {
    return (
        <div className='characterList'>
            {props.characters.map(item => (
                <CharacterDef
                    character={item}
                    key={item.created}
                />
                )
            )}
        </div>
    );
};

export default ListOfCharacters