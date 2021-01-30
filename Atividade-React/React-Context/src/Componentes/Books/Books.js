import React,{useContext}from 'react';
import { Link } from 'react-router-dom';
import Book from "../Book/Book";

import {BooksContext} from '../../context/BooksProvider'
const Books =()=>{

  const {books,  deleteBookHandler} = useContext(BooksContext);

    return (
        <div>
        {books.map((book, index)=>{
              return(
              <Link to={"/livros"}  key={index} >
                <Book                               
                    image = {book.BookImage}
                    name={book.name}
                    author={book.author}
                    pages={book.pages}
                    click={ () => deleteBookHandler(index)}                             
                    />
               </Link>                            
            )
          })}
        </div>
    );
};

export default Books;