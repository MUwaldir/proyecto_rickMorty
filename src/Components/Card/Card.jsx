import React from 'react';
import "./Card.css"


function Card(props) {
    return ( <div className='ContainerCard'>
            <div className='buttonContainer'>
            <button onClick={() => props.onClose(props.id)}>X</button>
         </div>
         <div className='dataContainer'>
            <h2>{props.name}</h2>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.origin}</h4>
         </div>
         <img src={props.image} alt='Imagen' />
    </div> );
}

export default Card;