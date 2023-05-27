import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import "./Favorites.css"
function Favorites() {
    const favorites = useSelector((state) => state.myFavorites)
    console.log(favorites)
    return ( <div className='containerFavorites'>
        {favorites && favorites.map((el,index) => {
            return (

                <Card
                key={index}
                id={el.id}
                name={el.name}
                status={el.status}
                species={el.species}
                gender={el.gender}
                origin={el.origin.name}
                image={el.image}
                onClose={el.onClose}
    
                />
            )
        })}
    </div> );
}

export default Favorites;