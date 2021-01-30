import React from 'react';

const NewBooks = ({onBookSubmit})=>{
    return (
        <div>
        <form id="insert-book" onSubmit={onBookSubmit}>   
            <div className='input-block'>                                 
                <input type="text" id="name" name="name" placeholder="Digite o nome do Livro" />
                <input type="text" id="author" name="author" placeholder="Digite o nome do Autor" />
                <input type="number" id="pages" name="pages" placeholder="Número de páginas" />           
            </div>
            <input type="submit" id="button" name="button" value="Cadastrar" />
             
      </form>
        </div>
    );
};
export default NewBooks;