import React from 'react'; 
import {Link} from 'react-router-dom'
import './Header.css';

const Header =() =>{
    return(
        <header className='Header'>
            <nav>
                <ul>
                    <li><Link to="/livros" exact>Home</Link></li>
                    <li><Link to="/livros/novoLivro">Novo Livro</Link></li>
                               
                </ul>
            </nav>
        
        </header>
    )
}
export default Header;