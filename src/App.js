import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './Components/About/About';
import Deatil from './Components/Deatil/Deatil';
import Form from './Components/Form/Form';
import Favorites from './Components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addFig, removeFav, removeFig } from './redux/actions';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [figures , setIdFigures] = useState([])
const figures = useSelector((state) => state.figures)
const dispatch = useDispatch() 
 const [loading, setLoading] = useState(false);
  const [acces, setAcces] = useState(false)
   const EMAIL = 'admin@gmail.com'
   const PASSWORD = 'admin123'
   const isAutenticated = (user) =>{
      console.log(user)
         if(user.email === EMAIL && user.password === PASSWORD){
            setAcces(true)
            navigate('/home')
         }else{
            setAcces(false)
            navigate('/')
         }
   }
  
  // const idRick =async (id)=>{
  //   const idPersonaje = +id
  //   const idExists = figures.some(item => item.id === idPersonaje);
  //   if(!idExists){

  //     if (id > 0 && typeof idPersonaje === 'number') {
  //     try {
  //       setLoading(true);
  //         await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  //           .then(({ data }) => {
  //             if (data.name) {
  //               setIdFigures((oldChars) => [...oldChars, data]);
  //               navigate('/home');
  //             } 
  //         })
  //         } catch (error) {
  //           console.error('Error:', error.message);
  //         } finally {
  //           setLoading(false);
  //         }
  
  //       }else{
  //         window.alert('ID! Invalido de personaje'); 
  //       }
  //   }else{
  //     window.alert('ID!  de personaje ya Existe'); 
  //   }
      
   

  // }

  const idRick =  async(id) =>{
        const idPersonaje = +id
    const idExists = figures.some(item => item.id === idPersonaje);
    if(!idExists){

      if (id > 0 && typeof idPersonaje === 'number') {
    try {
      setLoading(true);
      await dispatch(addFig(id));
      navigate('/home')
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }else{
            window.alert('ID! Invalido de personaje'); 
          }
  }else{
    window.alert('ID!  de personaje ya Existe'); 
  }
    

  }

  const Spinner = () => {
    return <div className="spinner">Loading...</div>;
  };

  const onClose = (id)=>{
    dispatch(removeFig(id))
    dispatch(removeFav(id))
  }
  useEffect(() => {
    !acces && navigate('/');
 }, [acces]);

  if(location.pathname === '/' && !acces){
    // console.log(acces)
 return (
    
    <Form user={isAutenticated}/>
 )
}else{
// console.log(acces)

 return (
    <div className='App'>
      <Navbar idRick={idRick}/> 
      {loading && <Spinner />} 
       <Routes>
          <Route path='/home' element={<Cards figures={figures} onClose={onClose} />} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Deatil/>} />
          <Route path='/favorites' element={<Favorites/>} />
       </Routes>

       
    </div>
 );
}
}

export default App;
