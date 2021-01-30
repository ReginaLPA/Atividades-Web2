import React from 'react';
import bookImage from '../../image/livros.jpg';

const BookImage =()=>{
    return(
        <div className="book-container">
            <img src={bookImage} alt="Books"/>        
                             
        </div>

    );
}

export default BookImage;