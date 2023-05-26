import React from 'react';
import "./Cards.css"
import Card from '../Card/Card';

function Cards({figures, onClose}) {
    return (<div className='Container'>
           {
            figures.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin?.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }

    </div>);
}

export default Cards;