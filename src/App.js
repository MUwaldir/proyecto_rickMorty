import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './Components/About/About';
import Deatil from './Components/Deatil/Deatil';


function App() {
  const navigate = useNavigate();
  const [figures , setIdFigures] = useState([])
  const [loading, setLoading] = useState(false);
  
  const idRick =async (id)=>{
    const idPersonaje = +id
    if (id > 0 && typeof idPersonaje === 'number') {
    try {
      setLoading(true);
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          .then(({ data }) => {
            if (data.name) {
              setIdFigures((oldChars) => [...oldChars, data]);
              navigate('/home');
            } 
        })
        } catch (error) {
          console.error('Error:', error.message);
        } finally {
          setLoading(false);
        }

      }else{
        window.alert('ID! Invalido de personaje'); 
      }
      
   

  }

  const Spinner = () => {
    return <div className="spinner">Loading...</div>;
  };

  const onClose = (id)=>{
    setIdFigures(figures.filter(caracter =>
      caracter.id !== +id))
  }
  return (

      <div className='App'>
      <Navbar idRick={idRick}/> 
      
      {loading && <Spinner />} 
      
    
       <Routes>
          <Route path='/home' element={<Cards figures={figures} onClose={onClose} />} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Deatil/>} />
       </Routes>

       
    </div>
  );
}

export default App;
