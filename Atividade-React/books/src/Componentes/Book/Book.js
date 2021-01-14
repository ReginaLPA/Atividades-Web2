import React from 'react';
import Bookmage from './BookImage';
import './Book.css'

const Book =(props)=>{
    return(
        <div className='Book' onClick={props.click}>
            <Bookmage>                
            </Bookmage>
            <strong>{props.name}</strong>
            <span>{props.author}</span>
            <p>{props.pages}</p>
            <p>{props.children}</p>
        </div>

    );
}

export default Book;