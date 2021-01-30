import React from 'react';
//import Todomage from './TodoImage';
import './Todo.css'

const Todo =(props)=>{
    return(
        <div className='Todo' onClick={props.click}>
           
            <strong>{props.title}</strong>
            
        </div>

    );
}

export default Todo;