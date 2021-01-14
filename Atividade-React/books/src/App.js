import {useState} from 'react';
import Book from "./Componentes/Book/Book";
import './App.css';

function App() {
  const [books,setBooks] = useState(
    [
      {
        id:0,
        name:"A Descoberta do mundo",
        author:"Clarice Lispecto",
        pages:"480" 
      },
      {
        id:1,
        name:"Gênero e Desigualdades",
        author:"flávia Biroli",
        pages:"210" 
      }

    ]

  );
// mostrar livros
  const [showBooks, setShowBooks] = useState(true);
  const[style, setStyle]= useState({
    backgroundColor: 'green',
    color:'white'
  });

// função enviar livros
  const onBookSubmit =( event ) =>{
    event.preventDefault();
    //console.log(event.target.name.value)
    let newBooks = [...books,
      {
        id:books.length + 1,
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value
      }
    ];
    setBooks(newBooks)    
  }

// função mudar cor do botão quando mostrar e esconder os livros
  const onToogleBooks = ()=>{
    setShowBooks(!showBooks);
    let newStyle = {...style};
    if(style.backgroundColor === 'green'){
      newStyle.backgroundColor = 'red';
    }else{
      newStyle.backgroundColor = 'green';
    };
    setStyle(newStyle);
  }

  // função para deletar um livro
  const deleteBookHandler = (index)=>{
    let newBooks = books.slice(); // ou [...books]
    newBooks.splice(index, 1);
    setBooks(newBooks);
    console.log(books);
  }

//função para alterar nome
const componentWillMount = () =>{
  this.setState({
      updatable : true,
      name : this.props.name,
      pages : this.props.pages
  });
 this.onTodoChange = this.onTodoChange.bind(this)
}


const componentDidUpdate = ()=> {
  this.setState({
    name : this.props.name,
    pages : this.props.pages
});
  this.onTodoChange = this.onTodoChange.bind(this)
 
}

 const onChange = updatedValue =>{
  this.setState({
    fields:{
      ...this.state.fileds,
      ...updatedValue

    }
  });
};
  
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Livros</h1>
        <form id="insert-book" onSubmit={onBookSubmit}>   
          <div className='input-block'>                                 
            <input type="text" id="name" name="name" placeholder="Digite o nome do Livro" />
            <input type="text" id="author" name="author" placeholder="Digite o nome do Autor" />
            <input type="number" id="pages" name="pages" placeholder="Número de páginas" />           
          </div>
          <input type="submit" id="button" name="button" value="Cadastrar" />
          <button type="submit" id="botao" onClick={componentDidUpdate}>Editar</button>
        </form>
        
        <button id='btn' style={style} onClick={onToogleBooks}>Mostrar/Esconder Livros</button>

       
        {showBooks ?
          books.map((book, index)=>{
            return(
            <Book
                key={index}                
                image = {book.BookImage}
                name={book.name}
                author={book.author}
                pages={book.pages}
                click={ () => deleteBookHandler(index)}                             
                >Este é um bom Livro
                </Book>            
          )
        })
        : null
      }
        
      </header>
    </div>
  );
}

export default App;
