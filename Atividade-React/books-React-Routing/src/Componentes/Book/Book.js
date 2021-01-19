import React from 'react';
import Bookmage from './BookImage';
import './Book.css'

const Book =(props)=>{
    return(
        <div className='Book' >
            <Bookmage>                
            </Bookmage>
            <strong>{props.name}</strong>
            <span>{props.author}</span>
            <p>{props.pages}</p>
            <p>{props.children}</p>
            <button id="button" onClick={props.click}>Apagar Livro</button> 
        </div>

    );
}

export default Book;