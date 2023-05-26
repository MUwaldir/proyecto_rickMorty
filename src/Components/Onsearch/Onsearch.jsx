import React, { useState } from 'react';

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

    return ( <div>
            <input type="text" style={{height:'1rem',margin:'1rem'}} onChange={idHandle} value={id} />
        
            <input onClick={hancdelClick} type="button" value="Agregar"  style={{height:'2rem',backgroundColor:'green',borderRadius:'0.5rem',color:'white',border:'0',cursor:'pointer'}}/>
    </div> );
}

export default Onsearch;