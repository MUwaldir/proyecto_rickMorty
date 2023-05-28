import React, { useEffect, useState } from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
function Card(props) {
const {id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}= props
   const [isFav , setIsFav] = useState(false)
   const handleFavorite = () =>{

      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
        addFav(props)
      }
   }
   useEffect(() => {
     
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      
   }, [myFavorites]);
   console.log(myFavorites)
    return ( <div className='ContainerCard card'>
            <div className='buttonContainer'>
              
            {
               isFav ? (
                  <button onClick={() => handleFavorite()}>❤️</button>
               ) : (
                  <button onClick={() => handleFavorite()}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className='dataContainer'>
            <Link to={`/detail/${id}`}><h3>{name}</h3></Link>
            
            <h4>Status: {status}</h4>
            <h4>Species: {species}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Origin: {origin}</h4>
         </div>
         <img src={image} alt='Imagen' />
    </div> );
}

//no es necesario exportar
export const mapStateToProps = (state)=> {
      return {
          myFavorites:state.myFavorites
      }
   }
   
export const mapDispatchToProps  =(dispatch) => {
   return{

      addFav:(ch) => dispatch(addFav(ch)),
      removeFav:(id) => dispatch(removeFav(id))
   }
   
}
export default connect(mapStateToProps ,mapDispatchToProps)(Card) ;