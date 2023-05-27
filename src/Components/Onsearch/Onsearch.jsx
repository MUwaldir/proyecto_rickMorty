import React, { useState } from 'react';
import "./Onsearch.css"
function Onsearch(props) {
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

    return ( <div className='conatinerInputs'>
            <input type="text" style={{width:'15rem',height:'1.5rem',borderRadius:'1rem',marginRight:'0.5rem'}} placeholder='Id...' onChange={idHandle} value={id} />
        
            <input onClick={hancdelClick} type="button" value="Agregar"  style={{height:'2rem',width:'4rem',backgroundColor:'green',borderRadius:'0.5rem',color:'white',border:'0',cursor:'pointer'}}/>
    </div> );
}

export default Onsearch;