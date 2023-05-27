import React, { useState } from 'react';
import "./Form.css"
import { validarEmail, validarPassword } from './validation';

function Form(props) {
    const EMAIL = 'admin@gmail.com'
    const PASSWORD = 'admin123'
    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({

    })
    const handleChange = (e) =>{
        setUser({...user ,[e.target.name]:e.target.value})
       
        
    }
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validarEmail(user.email) && validarPassword(user.password)){
            if(user.email === EMAIL && user.password === PASSWORD){
                props.user(user)

            }else{
                setErrors({acceso:'El email o password son incorrectos'})
            }
            
        }else{
            if(!validarEmail(user.email) && !validarPassword(user.password) ){
               return setErrors({ email:'El email no es admisible',password:'El password no es admisible'})
            }
            if(validarEmail(user.email)===false){
               return setErrors({email:'El email no es admisible'})
            }
            if(validarPassword(user.password) ===false){
               return  setErrors({password:'El password no es admisible'})
            }
           
            
        }
        
        
      
        
  }

 
    return (
        <div className='containerForm'> 
            <form className='Form' onSubmit={handleSubmit} >
                <div className='containerImg'>
                    <img src="https://indiehoy.com/wp-content/uploads/2020/06/rick-and-morty-1.jpg" alt="" />
                </div>
                <div className='containerText'>
                    <div className='box'>
                <label htmlFor="">Email</label>
                <input type="text" name='email' onChange={handleChange} value={user.email} placeholder='ejemplo@gmail.com'/>
               {errors && <p className='err_email'>{errors.email}</p> } 
                    </div>
                    <div className='box'>
                <label htmlFor="">Password</label>
                <input type="password" name='password' onChange={handleChange} value={user.passowrd} placeholder='password'/>
                 {errors && <p className='err_password'>{errors.password}</p>}  
                    </div>
                    {errors && <p className='incorrecto'>{errors.acceso}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
                
            </form>
        </div> );

        
}

export default Form;