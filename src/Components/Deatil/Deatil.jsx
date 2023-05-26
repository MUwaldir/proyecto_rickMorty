import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Detail.css";

function Deatil() {

    const {id} = useParams();
    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     console.log(character)
    return ( <div>
        {character.name &&
        <div className='containerDetail'>
            <div className='containerDetail_rigth'>
                <div>

            <h1>Name / {character.name}</h1>
            <h2>Status / {character.status}</h2>
            <h2>Species / {character.species}</h2>
            <h2>Gender / {character.gender}</h2>
                </div>

            </div>
            <div className='containerDetail_left'>
                <img src={character.image} alt="" />
            </div>

        </div>}
        
    </div> );
}

export default Deatil;