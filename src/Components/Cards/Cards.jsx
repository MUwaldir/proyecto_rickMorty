import React, { useEffect, useRef, useState } from 'react';
import "./Cards.css"
import Card from '../Card/Card';


function Cards({figures, onClose}) {
   const carouselRef = useRef(null);

   const [showCarousel, setShowCarousel] = useState(false);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    setShowCarousel(screenWidth < 768);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const scrollRight = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };
    return (
    showCarousel ?(
    <div className="carousel-container">
    <button className="carousel-button left" onClick={scrollLeft}>
    <i className="fas fa-chevron-left"></i> 
    </button>
    
    <div className="carousel" ref={carouselRef}>
      
      {/* Aquí van tus elementos de tarjetas */}
     
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
         

   
      {/* <div className="card">Card 1</div> */}
      
      {/* ... Agrega más tarjetas según sea necesario */}
    </div>
    <button className="carousel-button right" onClick={scrollRight}>
      <i className="fas fa-chevron-right"></i>
    </button>
  </div>) : 
    <div className='Container'>
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