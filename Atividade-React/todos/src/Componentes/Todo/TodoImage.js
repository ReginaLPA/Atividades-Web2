import React from 'react';
 import todoImage from '../../image/livros.jpg';

const TodoImage =(props)=>{
    return(
        <div className="book-container">
            <img src={todoImage} alt="Books"/>        
            {props.children}                   
        </div>

    );
}

export default TodoImage;