import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Book from '../Book/Book'
import '../Book/Book.css'

const FullBook = ({books})=>{
    const {id} = useParams();
    //const books = books
    console.log(Book);
    useEffect( ()=>{
        // Faria uma busca no banco de dados utilizando o id
            
                     
    }, [])

    

    return (
        <div>
            <p>Livro especifico  {id}</p>
           
                <Book                              
                   
                />                                            
             
            
            
        </div>

    );
}

export default FullBook;