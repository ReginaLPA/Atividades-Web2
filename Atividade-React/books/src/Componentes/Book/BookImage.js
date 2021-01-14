import React from 'react';
 import bookImage from '../../image/livros.jpg';

const BookImage =(props)=>{
    return(
        <div className="book-container">
            <img src={bookImage} alt="Books"/>        
            {props.children}                   
        </div>

    );
}

export default BookImage;