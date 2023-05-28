import React, { useEffect, useRef, useState } from 'react';
import "./Onsearch.css"
function Onsearch(props) {
    const buttonRef = useRef(null);
    const [id , setId]= useState('')
    const idHandle = (e) => {
        e.preventDefault()
        setId(e.target.value)
    }
    const hancdelClick = (e)=>{
        e.preventDefault()
        props.onSearch(id)
        setId('')

    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          buttonRef.current.click();
        }
      };
 
   

    return ( <div className='conatinerInputs'>
            <input type="text" style={{width:'15rem',height:'1.5rem',borderRadius:'1rem',marginRight:'0.5rem'}} placeholder='Id...' onChange={idHandle}onKeyPress={handleKeyPress} value={id} />
        
            <input onClick={hancdelClick}ref={buttonRef}  type="button" value="Agregar"  style={{height:'2rem',width:'4rem',backgroundColor:'green',borderRadius:'0.5rem',color:'white',border:'0',cursor:'pointer'}}/>
    </div> );
}

export default Onsearch;